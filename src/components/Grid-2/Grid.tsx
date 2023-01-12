import React, { useEffect, useRef, useState } from 'react'
import { CheckBox } from '../FormElement'
import './Grid.css'

export interface columnI {
  title: string,
  dataIndex: string,
  key: string,
  width?: number,
  align?: string,
  fixed?: string,
  sortable?: boolean,
}

export interface gridI {
  columns: columnI[],
  dataSource: any,
  fixedHeader?: boolean,
  scrollX?: number,
  scrollY?: number,
  rowSelection?: boolean
  expandable?: expandableI
}

export interface expandableI {
  expandedRowRender: (item:any) => React.ReactNode,
  rowExpandable?: (item: any) => boolean
}

const Grid = ({ columns, dataSource, fixedHeader, scrollX, scrollY, rowSelection, expandable }: gridI) => {

  const [data, setData] = useState(dataSource)
  const [headerCheckboxChecked, setHeaderCheckboxChecked] = useState<boolean>(false)
  const [selectedCheckbox, setSelectedCheckbox] = useState<string[]>([])
  const [expandedRows , setExpandedRows] = useState<string[]>([])

  const [sortOrder, setSortOrder] = useState('aesc')

  const GridWrapperRef = useRef<HTMLDivElement>(null)


  const GridWrapperStyle = {
    width: scrollX ? scrollX + 'px' : 'auto',
    height: scrollY ? scrollY + 'px' : 'auto',
  }
  const handelGridScroll = () => {
    if (GridWrapperRef.current) {
      let scrollBarWidth = GridWrapperRef.current.scrollLeft + GridWrapperRef.current.offsetWidth
      if (GridWrapperRef.current.scrollLeft) {
        const ele = document.getElementsByClassName('inte-Grid__Cell--Fixedleft-last') as HTMLCollectionOf<HTMLElement>
        for (let i = 0; i < ele.length; i++) {
          if (!ele[i].classList.contains('shadowedLeft')) {
            ele[i].classList.add('shadowedLeft')
          }
        }
      }
      else if (GridWrapperRef.current.scrollLeft === 0) {
        const ele = document.getElementsByClassName('inte-Grid__Cell--Fixedleft-last') as HTMLCollectionOf<HTMLElement>
        for (let i = 0; i < ele.length; i++) {
          ele[i].classList.remove('shadowedLeft')
        }
      }


      const ele = document.getElementsByClassName('inte-Grid__Cell--Fixedright-last') as HTMLCollectionOf<HTMLElement>

      console.log()

      if ((scrollBarWidth >= GridWrapperRef.current.scrollWidth)) {
        for (let i = 0; i < ele.length; i++) {
          ele[i].classList.remove('shadowedRight')
        }
      }
      else {
        for (let i = 0; i < ele.length; i++) {
          ele[i].classList.add('shadowedRight')
        }
      }
    }


  }

  const headerCheckboxClickHandler = () => {
    console.log(headerCheckboxChecked);
    setHeaderCheckboxChecked(prev => !prev)
  }
  const rowCheckboxClickHandler = (key: string) => {
    if (selectedCheckbox.includes(key)) setSelectedCheckbox(prev => prev.filter(item => item !== key))
    else setSelectedCheckbox(prev => [...prev, key])
  }


  const createFixedCells = (cells: HTMLCollectionOf<HTMLElement>, pos: 'left' | 'right') => {
    if (GridWrapperRef.current) {
      let prev: HTMLElement | null = null
      let i = pos === 'left' ? 0 : cells.length - 1
      let comp = pos === 'left' ? cells.length : -1
      for (i; i !== comp; i = pos === 'left' ? i + 1 : i - 1) {
        const ele = cells[i]
        ele.style.position = 'sticky';
        ele.style[pos] = prev ? pos === 'left' ? prev.getBoundingClientRect().right - GridWrapperRef.current.getBoundingClientRect().left - 1.247 + 'px' : GridWrapperRef.current.getBoundingClientRect().right - prev.getBoundingClientRect().left - 6.2447 + 'px' : '0'
        prev = ele
      }
      prev?.classList.add(`inte-Grid__Cell--Fixed${pos}-last`)
    }
  }

  const sortTheData = (key: string) => {
    if (sortOrder === 'aesc') {
      data.sort((a: any, b: any) => a[key].toLowerCase().localeCompare(b[key].toLowerCase()))

      setSortOrder('desc')
    }
    else {
      data.sort((a: any, b: any) => b[key].toLowerCase().localeCompare(a[key].toLowerCase()))

      setSortOrder('aesc')
    }

    setData(data)
  }
  
  const expandIconClickHandler = (key:string) => {
    if(expandedRows.includes(key))  setExpandedRows(prev => prev.filter(item => item!==key))
    else setExpandedRows(prev => [...prev , key])
  }

  useEffect(()=>{
    console.log('calling');
    handelGridScroll()
  })

  useEffect(() => {
    if (headerCheckboxChecked) {
      let t: any = []
      data.map((item: any) => {
        t = [...t, item.key]
      })
      setSelectedCheckbox(t)
    }
    else setSelectedCheckbox([])
  }, [headerCheckboxChecked])

  useEffect(() => {
    const ele = document.getElementsByClassName('inte-Grid__Cell--Fixedleft')
    if (ele.length) {
      let ele2 = document.getElementsByClassName('inte-Grid__Cell__Checkbox') as HTMLCollectionOf<HTMLElement>
      for (let i = 0; i < ele2.length; i++) {
        ele2[i].classList.add('inte-Grid__Cell--Fixedleft')
      }
      ele2 = document.getElementsByClassName('inte-Grid__Cell--Expand') as HTMLCollectionOf<HTMLElement>
      for (let i = 0; i < ele2.length; i++) {
        ele2[i].classList.add('inte-Grid__Cell--Fixedleft')
      }
    }
  }, [rowSelection, expandable])

  useEffect(() => {
    const fixedCellLeftH = document.getElementById('inte-Grid__Header')?.getElementsByClassName('inte-Grid__Cell--Fixedleft') as HTMLCollectionOf<HTMLElement>
    const fixedCellRightH = document.getElementById('inte-Grid__Header')?.getElementsByClassName('inte-Grid__Cell--Fixedright') as HTMLCollectionOf<HTMLElement>
    const gridRowsB = document.getElementById('inte-Grid__Body')?.getElementsByClassName('inte-Grid__Row') as HTMLCollectionOf<HTMLElement>
    createFixedCells(fixedCellLeftH, 'left')
    createFixedCells(fixedCellRightH, 'right')

    for (let i = 0; i < gridRowsB.length; i++) {
      let t = gridRowsB[i].getElementsByClassName('inte-Grid__Cell--Fixedleft') as HTMLCollectionOf<HTMLElement>
      for (let j = 0; j < t.length; j++) {
        createFixedCells(t, 'left')
      }
    }
    for (let i = 0; i < gridRowsB.length; i++) {
      let t = gridRowsB[i].getElementsByClassName('inte-Grid__Cell--Fixedright') as HTMLCollectionOf<HTMLElement>
      for (let j = 0; j < t.length; j++) {
        createFixedCells(t, 'right')
      }
    }

    handelGridScroll();
  }, [rowSelection, expandable])

  useEffect(() => {
    if (fixedHeader) {
      const ele = document.getElementById('inte-Grid__Header')?.getElementsByClassName('inte-Grid__Cell') as HTMLCollectionOf<HTMLElement>
      for (let i = 0; i < ele.length; i++) {
        const item = ele[i]
        item.style.position = 'sticky'
        item.style.top = '0'
        item.style.zIndex = item.style.left ? '4' : '3'
      }
    }
    else {
      const ele = document.getElementById('inte-Grid__Header')?.getElementsByClassName('inte-Grid__Cell') as HTMLCollectionOf<HTMLElement>
      for (let i = 0; i < ele.length; i++) {
        const item = ele[i]
        item.style.top = ''
        item.style.zIndex = item.style.zIndex === '3' ? '2' : '3'
      }
    }
  }, [fixedHeader])

  const makeGridHeaderRows = (columns: columnI[]) => {
    return <tr className='inte-Grid__Row'>
      {
        expandable && <th className='inte-Grid__Cell inte-Grid__Cell--Expand inte-Grid__Cell--Expand-spaced'></th>
      }
      {
        rowSelection && <th className='inte-Grid__Cell__Checkbox inte-Grid__Cell'>
          <CheckBox
            onClick={headerCheckboxClickHandler}
            checked={headerCheckboxChecked}
            indeterminate={selectedCheckbox.length > 0 && selectedCheckbox.length < data.length && selectedCheckbox.length !== data.length}
          />
        </th>
      }
      {
        columns.map((item) => {
          return (
            <th
              key={item.key ? item.key : Math.random() * 5000}
              className={`inte-Grid__Cell ${item.fixed ? `inte-Grid__Cell--Fixed` + item.fixed.toLowerCase() : ''} ${item.sortable ? 'inte-Grid__Cell--sortable' : ''}`}
              onClick={item.sortable ? () => sortTheData(item.dataIndex) : void (0)}
            >
              {item.title}
            </th>
          )
        })
      }
    </tr>
  }

  const makeGridBodyRows = (item: any) => {
    const isRowSelected = selectedCheckbox.includes(item.key)
    const isRowExpandable = expandable?.rowExpandable ? expandable.rowExpandable(item) : true;

    const row = <>
      <tr className={`inte-Grid__Row ${isRowSelected ? 'inte-Grid__Row--Selected' : ''}`}>
        {
          expandable ? <td
            className={`inte-Grid__Cell inte-Grid__Cell--Expand ${isRowExpandable ? '' : 'inte-Grid__Cell--Expand-spaced'}`}
            onClick={isRowExpandable ? ()=>expandIconClickHandler(item.key) : void(0)}
          >
            {
              isRowExpandable ? expandedRows.includes(item.key) ? '-' : '+' : ''
            }
          </td> : ''
        }
        {
          rowSelection && <td className={`inte-Grid__Cell__Checkbox inte-Grid__Cell`}>
            <CheckBox
              checked={isRowSelected}
              onClick={() => rowCheckboxClickHandler(item.key)}
            />
          </td>
        }
        {
          columns.map((i: any) => {
            const displayI = item[i.dataIndex]
            return (
              <td
                className={`inte-Grid__Cell ${i.fixed ? `inte-Grid__Cell--Fixed` + i.fixed.toLowerCase() : ''}`}
              >
                {displayI}
              </td>)
          })
        }
      </tr>
      {
        expandedRows.includes(item.key) && <tr>
          <td
          className='inte-Grid__Cell' 
          colSpan={columns.length + (rowSelection ? 1: 0) + (expandable ? 1 : 0)} 
          >
            {
              expandable?.expandedRowRender(item)
            }
          </td>
        </tr>
      }
    </>
    return row
  }

  return (
    <div 
      className='inte-Grid--wrapper' 
      style={GridWrapperStyle} 
      ref={GridWrapperRef} 
      onScroll={handelGridScroll}
     
    >
      <table className='inte-Grid'>
        <thead id='inte-Grid__Header'>
          {
            makeGridHeaderRows(columns)
          }
        </thead>
        <tbody id='inte-Grid__Body'>
          {
            data.map((item: any) => {
              return makeGridBodyRows(item)
            })
          }
        </tbody>
      </table>
    </div>
  )
}
export default Grid