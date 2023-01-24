import React, { useState, useRef } from 'react';
import './Grid.css';
import { PlusCircle, MinusCircle } from 'react-feather';
import Pagination from '../Pagination/Pagination';

interface Column {
    title: string;
    dataIndex: string;
    key: string;
}

interface GridProps {
    columns: Column[];
    dataSource: any[];
    fixedHeader?: boolean;
    scrollX?: number;
    scrollY?: number;
    rowSelection?: {
        selectedRowKeys?: string[];
        onRowSelect?: (item: any) => void;
        rowSelectable?: (item: any) => boolean;
        onBulkSelect?: () => void;
    };
    expandable?: {
        expandedRowRender: (item: any) => React.ReactNode;
        rowExpandable?: (item: any) => boolean;
    };
    pagination?: boolean;
}

const Grid = ({ columns, dataSource, fixedHeader, scrollX, scrollY, rowSelection, expandable, pagination }: GridProps) => {
    const [data, setData] = useState(dataSource);
    const [headerCheckboxChecked, setHeaderCheckboxChecked] = useState<boolean>(false);
    const [selectedCheckbox, setSelectedCheckbox] = useState<string[]>([]);
    const [expandedRows, setExpandedRows] = useState<string[]>([]);
    const [sortOrder, setSortOrder] = useState('aesc');
    const GridWrapperRef = useRef<HTMLDivElement>(null);

    const handleGridScroll = () => {
        if (GridWrapperRef.current) {
            const { scrollLeft, offsetWidth, scrollWidth } = GridWrapperRef.current;
            let scrollBarWidth = scrollLeft + offsetWidth;

            const ele = document.getElementsByClassName('inte-Grid__Cell--Fixedleft-last') as HTMLCollectionOf<HTMLElement>;
            for (let i = 0; i < ele.length; i++) {
                if (scrollLeft > 0) {
                    if (!ele[i].classList.contains('shadowedLeft')) {
                        ele[i].classList.add('shadowedLeft');
                    }
                } else {
                    ele[i].classList.remove('shadowedLeft');
                }
            }

            const eleRight = document.getElementsByClassName('inte-Grid__Cell--Fixedright-last') as HTMLCollectionOf<HTMLElement>;
            for (let i = 0; i < eleRight.length; i++) {
                if (scrollBarWidth < scrollWidth) {
                    eleRight[i].classList.add('shadowedRight');
                } else {
                    eleRight[i].classList.remove('shadowedRight');
                }
            }
        }
    };

    const handleHeaderCheckboxClick = () => {
        setHeaderCheckboxChecked(prev => !prev);
    };

    const handleRowCheckboxClick = (item: any) => {
        if (selectedCheckbox.includes(item.key)) {
            setSelectedCheckbox(prev => prev.filter(i => i !== item.key));
        } else {
            setSelectedCheckbox(prev => [...prev, item.key]);
        }
        if (rowSelection && rowSelection.onRowSelect) {
            rowSelection.onRowSelect(item);
        }
    };

    const handleExpandRow = (item: any) => {
        if (expandedRows.includes(item.key)) {
            setExpandedRows(prev => prev.filter(i => i !== item.key));
        } else {
            setExpandedRows(prev => [...prev, item.key]);
        }
    };

    // const GridWrapperStyle = {
    //     width: scrollX ? ${ scrollX }px: 'auto',
    //     height: scrollY ? ${ scrollY }px: 'auto',
    // }


return (
    <div className="inte-Grid"  ref={GridWrapperRef} onScroll={handleGridScroll}>
        <table className="inte-Grid__Table">
            <thead>
                <tr>
                    {rowSelection && (
                        <th className="inte-Grid__Cell inte-Grid__Cell--HeaderCheckbox">
                            <input
                                type="checkbox"
                                checked={headerCheckboxChecked}
                                onChange={handleHeaderCheckboxClick}
                            />
                        </th>
                    )}
                    {columns.map(column => (
                        <th key={column.key} className="inte-Grid__Cell">
                            {column.title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.key}>
                        {rowSelection && (
                            <td className="inte-Grid__Cell inte-Grid__Cell--Checkbox">
                                <input
                                    type="checkbox"
                                    checked={selectedCheckbox.includes(item.key)}
                                    onChange={() => handleRowCheckboxClick(item)}
                                    disabled={rowSelection.rowSelectable && !rowSelection.rowSelectable(item)}
                                />
                            </td>
                        )}
                        {columns.map(column => (
                            <td key={column.key} className="inte-Grid__Cell">
                                {item[column.dataIndex]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        {expandable &&
            expandedRows.map(key => {
                const expandedItem = data.find(item => item.key === key);
                if (expandedItem) {
                    return (
                        <div key={key} className="inte-Grid__ExpandedRow">
                            {expandable.expandedRowRender(expandedItem)}
                        </div>
                    );
                }
                return null;
            })}
        {pagination && <Pagination />}
    </div>
);
          };

export default Grid;


