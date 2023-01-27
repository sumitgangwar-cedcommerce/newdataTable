import React, { useEffect, useRef, useState } from 'react'
import './Grid.css'
import { PlusCircle, MinusCircle } from 'react-feather'
import CheckBox2 from '../FormElement/CheckBox-2'

export interface columnI {
    title: string,
    dataIndex: string,
    key: string,
    width?: number,
    align?: string,
    fixed?: string,
    sortable?: {
        comparator: (a: any, b: any, order: any) => number;
    }
    render?: (item: any) => React.ReactNode
    onCell?: (rowNum: number) => any
    comparator?:any
}

export interface gridI {
    columns: columnI[],
    dataSource: any,
    fixedHeader?: boolean,
    scrollX?: number,
    scrollY?: number,
    rowSelection?: rowSelectionI
    expandable?: expandableI
    pagination?: React.ReactNode,
    showHeader?: boolean,
}

export interface expandableI {
    expandedRowRender: (item: any) => React.ReactNode,
    rowExpandable?: (item: any) => boolean
}

export interface rowSelectionI {
    onRowSelect?: Function,
    rowSelectable?: (item: any) => boolean,
    selectedRowKeys?: string[],
    onBulkSelect?: Function
}

const getCellByClassName = (arr: any, className: string) => {
    let t: any = []
    arr.map((item: any) => {
        item.map((i: any) => {
            if (i.classList.contains(className)) t.push(i)
        })
    })
    return t
}

const removeClassName = (arr: any , elements:any) => {
    arr.map((item:any)=>{
        elements.map((i:any) => {
            item?.classList.remove(i)
        })
    })
}




const Grid = ({ columns = [], dataSource = [], fixedHeader = false, scrollX, scrollY, rowSelection, expandable, pagination, showHeader = true }: gridI) => {
    const [data, setData] = useState(dataSource)
    const [headerCheckboxChecked, setHeaderCheckboxChecked] = useState<boolean | 'indeterminate'>(false)
    const [selectedCheckbox, setSelectedCheckbox] = useState<string[]>(rowSelection?.selectedRowKeys ? rowSelection.selectedRowKeys : [])
    const [expandedRows, setExpandedRows] = useState<string[]>([])

    const PaginationRef = useRef<HTMLDivElement>(null)
    const GridWrapperRef = useRef<HTMLDivElement>(null)
    const tableCellRefs = useRef<Array<Array<HTMLTableCellElement | null>>>([[]])

    const handelGridScroll = () => {
        if (GridWrapperRef.current) {
            let scrollBarWidth = GridWrapperRef.current.scrollLeft + GridWrapperRef.current.offsetWidth
            let ele = getCellByClassName(tableCellRefs.current, 'inte-Grid__Cell--Fixedleft-last')
            if (GridWrapperRef.current.scrollLeft) {
                for (let i = 0; i < ele.length; i++) {
                    if (!ele[i].classList.contains('shadowedLeft')) {
                        ele[i].classList.add('shadowedLeft')
                    }
                }
            }
            else if (GridWrapperRef.current.scrollLeft === 0) {
                for (let i = 0; i < ele.length; i++) {
                    ele[i].classList.remove('shadowedLeft')
                }
            }
            ele = getCellByClassName(tableCellRefs.current, 'inte-Grid__Cell--Fixedright-last')
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

    const headerCheckboxChangeHandler = (state: any) => {
        setHeaderCheckboxChecked(state)
        if (state) {
            let t: any = []
            data.map((item: any) => {
                t = [...t, item.key]
            })
            if (rowSelection?.onBulkSelect) rowSelection.onBulkSelect(t)
            setSelectedCheckbox(t)
        }
        else {
            if (rowSelection?.onBulkSelect) rowSelection.onBulkSelect([])
            setSelectedCheckbox([])
        }
    }
    const rowCheckboxChangeHandler = (item: any, state: any) => {
        if (rowSelection?.onRowSelect) rowSelection.onRowSelect(item)
        const newSelectedCheckbox = state ? [...selectedCheckbox, item.key] : selectedCheckbox.filter(i => i != item.key);
        !newSelectedCheckbox.length ? setHeaderCheckboxChecked(false) : newSelectedCheckbox.length === data.length ? setHeaderCheckboxChecked(true) : setHeaderCheckboxChecked('indeterminate')
        setSelectedCheckbox(newSelectedCheckbox)
    }

    const sortTheData = (key: string  , coordinate:number[] , comparatorFun:any) => {
        let classList = tableCellRefs.current[coordinate[0]][coordinate[1]]?.classList
        if(classList?.contains('inte--Grid__Cell--asec')) {
            removeClassName(tableCellRefs.current[0] , ['inte--Grid__Cell--asec' , 'inte--Grid__Cell--desc'])
            classList.add('inte--Grid__Cell--desc')
            data.sort((a: any, b: any) => comparatorFun((key ? a[key] : a) , (key ? b[key] : b) ,  'asec'))
        }
        else {
            removeClassName(tableCellRefs.current[0] , ['inte--Grid__Cell--asec' , 'inte--Grid__Cell--desc'])
            classList?.add('inte--Grid__Cell--asec')
            data.sort((a: any, b: any) => comparatorFun((key ? a[key] : a) , (key ? b[key] : b) , 'desc'))
        }
        setData([...data])
    }

    const expandIconClickHandler = (key: string) => {
        if (expandedRows.includes(key)) setExpandedRows(prev => prev.filter(item => item !== key))
        else setExpandedRows(prev => [...prev, key])

    }
    const makeCellRefsArray = (row: number, column: number, item: HTMLTableCellElement | null) => {
        if (item === null || !tableCellRefs) return
        if (!tableCellRefs.current[row]) tableCellRefs.current[row] = []
        if (!tableCellRefs.current[row][column]) tableCellRefs.current[row][column] = null
        tableCellRefs.current[row][column] = item
    }
    const createFixedCells = (cells: (HTMLTableCellElement | null)[], pos: 'left' | 'right') => {
        if (!GridWrapperRef.current) return
        let prev: HTMLElement | null = null
        let i = pos === 'left' ? 0 : cells.length - 1
        let comp = pos === 'left' ? cells.length : -1
        for (i; i !== comp; i = pos === 'left' ? i + 1 : i - 1) {
            const ele = cells[i]
            if (!ele) continue
            ele.style.position = 'sticky';
            ele.style[pos] = prev ? pos === 'left' ? prev.getBoundingClientRect().right - GridWrapperRef.current.getBoundingClientRect().left - 1.247 + 'px' : GridWrapperRef.current.getBoundingClientRect().right - prev.getBoundingClientRect().left - 6.2447 + 'px' : '0'

            prev = ele
        }
        prev?.classList.add(`inte-Grid__Cell--Fixed${pos}-last`)
    }
    const SetPaginationPosition = () => {
        if (!GridWrapperRef.current || !PaginationRef.current) return
        const ss = {
            position: 'sticky',
            left: (GridWrapperRef.current.clientWidth - PaginationRef.current.clientWidth) / 2 + 'px'
        }
        PaginationRef.current.style.position = ss.position
        PaginationRef.current.style.left = ss.left
    }

    useEffect(() => {
        setData(dataSource)
    }, [dataSource])

    useEffect(() => {
        for (let i = 0; i < tableCellRefs.current.length; i++) {
            let t = tableCellRefs.current[i].filter((item) => item?.classList.contains('inte-Grid__Cell--Fixedleft'))
            let tR = tableCellRefs.current[i].filter((item) => item?.classList.contains('inte-Grid__Cell--Fixedright'))
            for (let j = 0; j < t.length; j++) {
                createFixedCells(t, 'left')
            }
            for (let j = 0; j < tR.length; j++) {
                createFixedCells(tR, 'right')
            }
        }
        handelGridScroll();
        SetPaginationPosition()
    }, [data])

    useEffect(() => {
        if (fixedHeader) {
            const ele = tableCellRefs.current[0].filter((item) => item?.classList.contains('inte-Grid__Cell'))
            for (let i = 0; i < ele.length; i++) {
                const item = ele[i]
                if (!item) return
                item.style.position = 'sticky'
                item.style.top = '0'
                item.style.zIndex = item.style.left ? '4' : '3'
            }
        }
        else {
            const ele = tableCellRefs.current[0].filter((item) => item?.classList.contains('inte-Grid__Cell'))
            for (let i = 0; i < ele.length; i++) {
                const item = ele[i]
                if (!item) return
                item.style.top = ''
                item.style.zIndex = item.style.zIndex === '3' ? '2' : '3'

            }
        }
    }, [fixedHeader])

    const makeGridHeaderRows = (columns: columnI[]) => {
        let columnNum = 0, rowNum = 0
        return <tr className='inte-Grid__Row inte-Grid__HeaderRow'>
            {
                expandable && <th
                    ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
                    className={`inte-Grid__HeaderCell inte-Grid__Cell inte-Grid__Cell--Expand inte-Grid__Cell--Expand-spaced ${columns[0].fixed ? 'inte-Grid__Cell--Fixedleft' : ''}`}></th>
            }
            {
                rowSelection && <th
                    ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
                    className={`inte-Grid__HeaderCell inte-Grid__Cell__Checkbox inte-Grid__Cell ${columns[0].fixed ? 'inte-Grid__Cell--Fixedleft' : ''}`}
                >
                    <CheckBox2
                        onChange={headerCheckboxChangeHandler}
                        checked={headerCheckboxChecked}
                    />
                </th>
            }
            {
                columns.map((item , ind) => {
                    return (
                        <th
                            ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
                            key={item.key ? item.key : Math.random() * 5000}
                            className={`inte-Grid__Cell inte-Grid__HeaderCell ${item.fixed ? `inte-Grid__Cell--Fixed` + item.fixed.toLowerCase() : ''} ${item.sortable ? 'inte-Grid__Cell--sortable' : ''}` }
                            onClick={item.sortable ? () => sortTheData(item.dataIndex , [rowNum ,ind+(expandable ? 1 : 0) + (rowSelection ? 1 : 0)]  , item.sortable?.comparator) : void (0)}
                        >
                            {
                                item.sortable ?
                                    <div className='sortedIcon__th'>
                                        <p>{item.title}</p>
                                        <div className='sortable--icon'>
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.0007 6.66675L6.00048 1.66651L1.00024 6.66675"  strokeWidth="1.66674" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.00024 1.33375L6.00048 6.33398L11.0007 1.33375"  strokeWidth="1.66674" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div> :
                                    item.title
                            }
                        </th>
                    )
                })
            }
        </tr>
    }

    const makeGridBodyRows = (item: any, index: number) => {
        let rowNum = index + (showHeader ? 1 : 0), columnNum = 0;
        const isRowSelected = selectedCheckbox.includes(item.key)
        const isRowExpandable = expandable?.rowExpandable ? expandable.rowExpandable(item) : true;
        const row = <>
            <tr
                className={`inte-Grid__Row ${isRowSelected ? 'inte-Grid__Row--Selected' : ''}`}
            >
                {
                    expandable ? <td
                        ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
                        className={`inte-Grid__Cell inte-Grid__Cell--Expand ${isRowExpandable ? '' : 'inte-Grid__Cell--Expand-spaced'} ${columns[0].fixed ? 'inte-Grid__Cell--Fixedleft' : ''}`}
                        onClick={isRowExpandable ? () => { expandIconClickHandler(item.key) } : void 0}
                    >
                        {
                            isRowExpandable ? expandedRows.includes(item.key) ? <MinusCircle /> : <PlusCircle /> : ''
                        }
                    </td> : ''
                }
                {
                    rowSelection && <td
                        ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
                        className={`inte-Grid__Cell__Checkbox inte-Grid__Cell ${columns[0].fixed ? 'inte-Grid__Cell--Fixedleft' : ''}`}
                    >
                        <CheckBox2
                            checked={isRowSelected}
                            onChange={(state: any) => rowCheckboxChangeHandler(item, state)}
                        />
                    </td>
                }
                {
                    columns.map((i: any, ind: number) => {
                        let span = i.onCell ? i.onCell(rowNum) : ''
                        if (span === -1) { console.log(i); return null }
                        const displayI = i.render ? i.render(item[i.dataIndex]) : item[i.dataIndex]
                        return (
                            <td
                                {...span}
                                ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
                                className={`inte-Grid__Cell ${i.fixed ? `inte-Grid__Cell--Fixed` + i.fixed.toLowerCase() : ''}`}
                            >

                                {displayI}
                            </td>
                        )
                    })
                }
            </tr>
            {
                expandedRows.includes(item.key.toString()) &&
                <tr className='inte-Grid__Row--appendWithExpand'>
                    <td colSpan={columns.length + (expandable ? 1 : 0) + (rowSelection ? 1 : 0)} >
                        <div className='inte-Grid__Row--Fixed' style={{ position: 'sticky', left: '0', overflow: 'hidden', width: GridWrapperRef.current ? GridWrapperRef.current.offsetWidth + 'px' : '0px' }}>
                            {
                                expandable?.expandedRowRender ? expandable.expandedRowRender(item) : ''
                            }
                        </div>
                    </td>
                </tr>
            }
        </>
        return row
    }


    return (
        <div
            className='inte-Grid--wrapper'
            style={{
                width: scrollX ? (scrollX) / 10 + 'rem' : 'auto',
                height: scrollY ? (scrollY) / 10 + 'rem' : 'auto',
            }}
            ref={GridWrapperRef}
            onScroll={handelGridScroll}
        >
            <table className='inte-Grid'>
                <thead id='inte-Grid__Header'>
                    {
                        showHeader && makeGridHeaderRows(columns)
                    }
                </thead>
                <tbody id='inte-Grid__Body'>
                    {
                        data.map((item: any, index: number) => {
                            return makeGridBodyRows(item, index)
                        })
                    }
                </tbody>
            </table>
            {
                pagination && <div
                    className='extra'
                    ref={PaginationRef}
                    style={{
                        width: 'fit-content'
                    }}
                >
                    {pagination}
                </div>
            }

        </div>
    )
}
export default Grid