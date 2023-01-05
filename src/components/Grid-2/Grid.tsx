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
}

export interface gridI {
  columns: columnI[],
  dataSource: any,
  fixedHeader?: boolean,
  scrollX?:number,
  scrollY?:number,
}

const Grid = ({ columns, dataSource , fixedHeader , scrollX , scrollY }: gridI) => {

  const [selectedCheckbox , setSelectedCheckbox] = useState<string[]>([])
  const [headerCheckboxChecked , setHeaderCheckboxChecked] = useState<boolean>(false)


  const rowCheckboxClickHandler = (key:string) => {
    if(selectedCheckbox.includes(key))  setSelectedCheckbox(prev => prev.filter(item => item!==key))
    else setSelectedCheckbox(prev => [...prev , key])
  }

  const headerCheckboxClickHandler = () => {
    if(!headerCheckboxChecked){
      let t:any = []
      dataSource.map((item:any) => {
        t = [...t , item.key]
      })
      setSelectedCheckbox(t)
    }
    else setSelectedCheckbox([])
    setHeaderCheckboxChecked(prev => !prev)
  }

  useEffect(()=>{
    if(selectedCheckbox.length===0) setHeaderCheckboxChecked(false)
    if(selectedCheckbox.length===dataSource.length){
      setHeaderCheckboxChecked(true)
    }
  },[selectedCheckbox])

  return (
    <div style={{width:scrollX ? `${scrollX}px` : 'auto' , height: scrollY ? `${scrollY}px` : 'auto'}} className='inte-Grid--wrapper'>
      <table className='inte-Grid'>
        <thead className={`'inte-Grid__Header ${fixedHeader ? 'inte-Grid--HeaderFixed': ''}`}>
          <tr>
            <th className='inte-Grid__Cell'>
              <CheckBox
                id={'headerCheckbox'} 
                onClick={headerCheckboxClickHandler} 
                checked={headerCheckboxChecked}
                indeterminate={selectedCheckbox.length > 0 && selectedCheckbox.length < dataSource.length && selectedCheckbox.length !== dataSource.length}
              />
            </th>
            {
              columns.map((item, index) => {
                return <th style={{zIndex: (item.fixed && fixedHeader) ? '4' : '3'}} key={index} className={`inte-Grid__Cell ${item.fixed ? 'inte-Grid__Cell--Fixed'+item.fixed : ''}`}>
                  {item.title}
                </th>
              })
            }
          </tr>
        </thead>
        <tbody className='inte-Grid__Body'>
          {
            dataSource.map((item: any, index: number) => {
              return <tr key={index} className='inte-Grid__BodyItem'>
                <td className='inte-Grid__Cell'>
                  <CheckBox 
                    checked={selectedCheckbox.includes(item.key)} 
                    onClick={()=>rowCheckboxClickHandler(item.key)}
                  />
                </td>
                {
                  columns.map((source, i) => {
                    return <td key={i} className={`inte-Grid__Cell ${source.fixed ? 'inte-Grid__Cell--Fixed'+source.fixed : ''}`}>
                      {item[source.dataIndex]}
                    </td>
                  })
                }
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}



export default Grid