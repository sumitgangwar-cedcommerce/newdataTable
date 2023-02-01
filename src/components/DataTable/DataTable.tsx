import React, { useEffect, useRef, useState } from 'react'
import './DataTable.css'
import CheckBox2 from "../FormElement/CheckBox-2"

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
    comparator?: any
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
    onSelectChange?: Function,
    selectedRowKeys?: string[],
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

const removeClassName = (arr: any, elements: any) => {
    arr.map((item: any) => {
        elements.map((i: any) => {
            item?.classList.remove(i)
        })
    })
}

const DataTable = ({ columns = [], dataSource = [], fixedHeader = false, scrollX, scrollY, rowSelection, expandable, pagination, showHeader = true }: gridI) => {
    const [data, setData] = useState(dataSource)
    const [selectedCheckbox, setSelectedCheckbox] = useState<string[]>(rowSelection?.selectedRowKeys ? rowSelection.selectedRowKeys : [])
    const [expandedRows, setExpandedRows] = useState<string[]>([])

    const GridWrapperRef = useRef<HTMLDivElement>(null)
    const tableCellRefs = useRef<Array<Array<HTMLTableCellElement | null>>>([[]])

    const handelGridScroll = () => {
        if (!GridWrapperRef.current) return
        let scrollBarWidth = GridWrapperRef.current.scrollLeft + GridWrapperRef.current.offsetWidth +1
        let ele = getCellByClassName(tableCellRefs.current, 'inte-DataTable__Cell--Fixedleft-last')
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
        ele = getCellByClassName(tableCellRefs.current, 'inte-DataTable__Cell--Fixedright-last')
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
    const headerCheckboxChangeHandler = (state: any) => {
        if (state) {
            let t: any = []
            data.map((item: any) => {
                t = [...t, item.key]
            })
            if (rowSelection?.onSelectChange) rowSelection.onSelectChange(t)
            else setSelectedCheckbox(t)
        }
        else {
            if (rowSelection?.onSelectChange) rowSelection.onSelectChange([])
            else setSelectedCheckbox([])
        }
    }
    const rowCheckboxChangeHandler = (item: any, state: any) => {
        let newSelectedCheckbox = state === false ? [...selectedCheckbox.filter(i => i !== item.key)] : [...selectedCheckbox, item.key]
        if (rowSelection?.onSelectChange) rowSelection.onSelectChange(newSelectedCheckbox)

        else {
            setSelectedCheckbox(newSelectedCheckbox)
        }
    }
    const sortTheData = (key: string, coordinate: number[], comparatorFun: any) => {
        let classList = tableCellRefs.current[coordinate[0]][coordinate[1]]?.classList
        if (classList?.contains('inte-DataTable__Cell--asec')) {
            removeClassName(tableCellRefs.current[0], ['inte-DataTable__Cell--asec', 'inte-DataTable__Cell--desc'])
            classList.add('inte-DataTable__Cell--desc')
            data.sort((a: any, b: any) => comparatorFun((key ? a[key] : a), (key ? b[key] : b), 'asec'))
        }
        else {
            removeClassName(tableCellRefs.current[0], ['inte-DataTable__Cell--asec', 'inte-DataTable__Cell--desc'])
            classList?.add('inte-DataTable__Cell--asec')
            data.sort((a: any, b: any) => comparatorFun((key ? a[key] : a), (key ? b[key] : b), 'desc'))
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
    const givePositionToFixedCells = () =>{
        for (let i = 0; i < tableCellRefs.current.length; i++) {
            let t = tableCellRefs.current[i].filter((item) => item?.classList.contains('inte-DataTable__Cell--Fixedleft'))
            let tR = tableCellRefs.current[i].filter((item) => item?.classList.contains('inte-DataTable__Cell--Fixedright'))
            for (let j = 0; j < t.length; j++) {
                createFixedCells(t, 'left')
            }
            for (let j = 0; j < tR.length; j++) {
                createFixedCells(tR, 'right')
            }
        }
    }
    const createFixedCells = (cells: (HTMLTableCellElement | null)[], pos: 'left' | 'right') => {
        if (!GridWrapperRef.current) return
        let prev = 0
        let i = pos === 'left' ? 0 : cells.length - 1
        let comp = pos === 'left' ? cells.length : -1
        for (i; i !== comp; i = pos === 'left' ? i + 1 : i - 1) {
            const ele = cells[i]
            if (!ele) continue
            ele.style[pos] = prev + 'px'
            prev = ele.clientWidth + prev

        }

        if(comp === -1) cells[0]?.classList.add('inte-DataTable__Cell--Fixedright-last')
        else    cells[cells.length-1]?.classList.add('inte-DataTable__Cell--Fixedleft-last')
    }
    const handelResize = () =>{
        givePositionToFixedCells()
        handelGridScroll()
    }

    useEffect(() => {
        setData(dataSource)
    }, [dataSource])

    useEffect(() => {
        handelResize()
    }, [data,columns,expandedRows])

    useEffect(() => {
        if (!rowSelection?.selectedRowKeys) return
        setSelectedCheckbox(rowSelection.selectedRowKeys)
    }, [rowSelection?.selectedRowKeys])

    useEffect(()=>{
        window.addEventListener('resize' ,handelResize)
        return ()=>{
            window?.removeEventListener('resize' , handelResize)
        }
    },[])

    const makeDataTableHeaderRows = (columns: columnI[]) => {
        let columnNum = 0, rowNum = 0
        return <tr className='inte-DataTable__Row inte-DataTable__HeaderRow'>
            {
                expandable && <th
                    ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
                    className={`${fixedHeader ? 'inte-DataTable__Cell--Fixedtop' : ''} inte-DataTable__HeaderCell inte-DataTable__Cell inte-DataTable__Cell--Expand inte-DataTable__Cell--Expand-spaced ${columns[0].fixed ? 'inte-DataTable__Cell--Fixedleft' : ''}`}></th>
            }
            {
                rowSelection && <th
                    ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
                    className={`${fixedHeader ? 'inte-DataTable__Cell--Fixedtop' : ''} inte-DataTable__HeaderCell inte-DataTable__Cell__Checkbox inte-DataTable__Cell ${columns[0].fixed ? 'inte-DataTable__Cell--Fixedleft' : ''}`}
                >
                    <CheckBox2
                        onChange={headerCheckboxChangeHandler}
                        checked={!selectedCheckbox.length ? false : selectedCheckbox.length === data.length ? true : 'indeterminate'}
                    />
                </th>
            }
            {
                columns.map((item, ind) => {
                    return (
                        <th
                            ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
                            key={ind}
                            style={{ minWidth: item.width ? (item.width / 10) + 'rem' : 'auto' }}
                            className={`${fixedHeader ? 'inte-DataTable__Cell--Fixedtop' : ''} inte-DataTable__Cell inte-DataTable__HeaderCell ${item.fixed ? `inte-DataTable__Cell--Fixed` + item.fixed.toLowerCase() : ''} ${item.sortable ? 'inte-DataTable__Cell--sortable' : ''}`}
                            onClick={item.sortable ? () => sortTheData(item.dataIndex, [rowNum, ind + (expandable ? 1 : 0) + (rowSelection ? 1 : 0)], item.sortable?.comparator) : void (0)}
                        >
                            {
                                item.sortable ?
                                    <div className='sortedIcon__th'>
                                        <span>{item.title}</span>
                                        <div className='sortable--icon'>
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.0007 6.66675L6.00048 1.66651L1.00024 6.66675" strokeWidth="1.66674" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.00024 1.33375L6.00048 6.33398L11.0007 1.33375" strokeWidth="1.66674" strokeLinecap="round" strokeLinejoin="round" />
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

    const makeDataTableBodyRows = (item: any, index: number) => {
        let rowNum = index + (showHeader ? 1 : 0), columnNum = 0;
        const isRowSelected = selectedCheckbox.includes(item.key)
        const isRowExpandable = expandable?.rowExpandable ? expandable.rowExpandable(item) : true;
        const row = 
            <React.Fragment key={index}>
                <tr
                className={`inte-DataTable__Row ${isRowSelected ? 'inte-DataTable__Row--Selected' : ''}`}
            >
                {
                    expandable ? <td
                        ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
                        className={`inte-DataTable__Cell inte-DataTable__Cell--Expand ${isRowExpandable ? '' : 'inte-DataTable__Cell--Expand-spaced'} ${columns[0].fixed ? 'inte-DataTable__Cell--Fixedleft' : ''} ${expandedRows.includes(item.key) ? 'inte-DataTable__Cell-ExpandActive' : ''}`}
                        onClick={isRowExpandable ? () => { expandIconClickHandler(item.key) } : void 0}
                    >
                        {
                            isRowExpandable ? <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00031 7.50073L10.0005 12.501L15.0008 7.50073" stroke="#1C2433" strokeWidth="1.66674" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                                : ''
                        }
                    </td> : ''
                }
                {
                    rowSelection && <td
                        ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
                        className={`inte-DataTable__Cell__Checkbox inte-DataTable__Cell ${columns[0].fixed ? 'inte-DataTable__Cell--Fixedleft' : ''}`}
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
                        if (span === -1)  return null 
                        let ele = i.dataIndex ? item[i.dataIndex] : item
                        ele = i.render ? i.render(ele) : ele
                        return (
                            <td
                                {...span}
                                key={ind}
                                style={{ minWidth: i.width ? (i.width / 10) + 'rem' : 'auto' }}
                                ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
                                className={`inte-DataTable__Cell ${i.fixed ? `inte-DataTable__Cell--Fixed` + i.fixed.toLowerCase() : ''}`}
                            >
                                {ele}
                            </td>
                        )
                    })
                }
                </tr>
            {
                expandedRows.includes(item.key.toString()) &&
                <tr className='inte-DataTable__Row--appendWithExpand'>
                    <td 
                        colSpan={columns.length + (expandable ? 1 : 0) + (rowSelection ? 1 : 0)} 
                    >
                        <div 
                            className='inte-DataTable__Row--Fixed' 
                            style={{ 
                                position: 'sticky', 
                                left: '0', 
                                // overflow: 'hidden', 
                                width: GridWrapperRef.current ? GridWrapperRef.current.offsetWidth/10 + 'rem' : '0' 
                            }}
                        >
                            {
                                expandable?.expandedRowRender ? expandable.expandedRowRender(item) : ''
                            }
                        </div>
                    </td>
                </tr>
            }
            </React.Fragment>
        return row
    }

    return (
        <div className='inte-DataTable--container' style={{ width: scrollX ? (scrollX) / 10 + 'rem' : 'auto', }}>
            <div
                className='inte-DataTable--wrapper'
                style={{
                    height: scrollY ? (scrollY) / 10 + 'rem' : 'auto',
                }}
                ref={GridWrapperRef}
                onScroll={handelGridScroll}
            >
                <table className='inte-DataTable'>
                    <thead id='inte-DataTable__Header'>
                        {
                            showHeader && makeDataTableHeaderRows(columns)
                        }
                    </thead>
                    <tbody id='inte-DataTable__Body'>
                        {
                            data.map((item: any, index: number) => {
                                return makeDataTableBodyRows(item, index)
                            })
                        }
                    </tbody>
                </table>
            </div>
            {
                pagination && <div className='inte-DataTable__Pagination'>
                    {
                        pagination
                    }
                </div>
            }
        </div>
    )
}
export default DataTable