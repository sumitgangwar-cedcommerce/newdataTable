/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";
import React from "react";
import "antd/dist/antd.css";
import "./Grid.css";
function Grid({
  dataSource,
  columns,
  size = "middle",
  bordered = false,
  loading = false,
  showHeader = true,
  tableLayout = "auto",
  scrollX,
  scrollY,
  rowSelection,
  expandable,
  rowKey,
  onChange,
}: GridI): JSX.Element {
  return (
    <div className="inte-Grid">
      <Table
        className="inte-Grid-Table"
        dataSource={dataSource}
        columns={columns}
        size={size}
        bordered={bordered}
        loading={loading}
        pagination={false}
        showHeader={showHeader}
        tableLayout={tableLayout}
        scroll={{ x: scrollX, y: scrollY }}
        rowSelection={rowSelection}
        expandable={expandable}
        rowKey={rowKey}
        onChange={onChange}
      />
    </div>
  );
}
export interface GridI {
  columns?: any;
  dataSource?: ObjI[] | any;
  size?: "middle" | "small" | "large";
  bordered?: boolean;
  loading?: boolean;
  showHeader?: boolean;
  tableLayout?: "auto" | "fixed";
  scrollX?: any;
  scrollY?: any;
  rowSelection?: any;
  expandable?: any;
  rowKey?: any;
  onChange?: any;
}

interface ObjI {
  [name: string]: React.ReactNode | string | number | boolean;
}
export default Grid;
