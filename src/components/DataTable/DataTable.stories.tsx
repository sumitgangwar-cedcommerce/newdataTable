import React, { useCallback, useState } from "react";
import { Card } from "../Card";
import Pagination from "../Pagination/Pagination";
import { dataSouce } from "./demo/DataSource";
import DataTable from "./DataTable";;
import './DataTable.css'


export default {
  title: 'Components/DataTable',
  component: DataTable,
  argTypes: {
    fixedHeader: {
      control: {
        type: 'boolean'
      },
      defaultValue: true,
    },
    columns: {
      control: {
        type: 'text',
        disable: true,
      }
    },
    dataSource: {
      control: {
        type: 'text',
        disable: true,
      }
    },
    scrollX: {
      control: {
        type: 'number'
      },
    },

    scrollY: {
      control: {
        type: 'number'
      },
    },
    showHeader: {
      control: {
        type: 'boolean'
      },
      defaultValue: true
    }
  }
};

const primaryColumns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    fixed: "left",
    width:100,
    sortable: {
      comparator: (a: any, b: any, order: any) => {
        return order === 'asec' ? a - b : b - a
      }
    }

  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    fixed: 'left',
    sortable: {
      comparator: (a: any, b: any, order: any) => {
        // console.log(a  ,b);
        a = a.toLowerCase();
        b = b.toLowerCase();
        return order === 'asec' ? a.localeCompare(b) : b.localeCompare(a)
      }
  }
    // onCell:(rowNum:number) =>{
    //   if(rowNum===1)  return ({colSpan:2})
    // }
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    // onCell:(rowNum:number)  => {
    //   if(rowNum===5)  return ({rowSpan:3})
    //   if(rowNum===6)  return -1
    //   if(rowNum===7)  return -1
    //   if(rowNum===1)  return -1
    // }
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    // onCell:(rowNum:number) => {
    //   if(rowNum===9)  return -1
    //   if(rowNum===10) return -1
    // }
  },
  {
    title: "Website",
    dataIndex: "website",
    key: "website",
    fixed: "right",
    render: (item: any) => {
      return <a href={`http://${item}`}>{item}</a>
    },
    // onCell:(rowNum:number) => {
    //   if(rowNum===9)  return ({rowSpan:2 , colSpan:2})
    //   if(rowNum===10)  return -1
    // }
  },
];

const Template = ({ ...rest }) => {
  const [selectedRowKeys , setSelectedRowKeys] = useState([])

  const [internalSelectedRowKeys , setInternalSelectedRowKeys] = useState([])

  return (
   <Card>
     <DataTable
      dataSource={dataSouce}
      columns={primaryColumns}
      scrollX={rest.scrollX}
      scrollY={rest.scrollY}
      showHeader={rest.showHeader}
      fixedHeader={rest.fixedHeader}
      rowSelection={{
        selectedRowKeys: selectedRowKeys,
        onSelectChange: (item: any) => {
          console.log(item);
          setSelectedRowKeys(item)
        },
      }}
      expandable={{
        rowExpandable: (item) => !['5', '8'].includes(item.key),
        expandedRowRender: (item) => (
        <DataTable
          scrollY={200}
          dataSource={dataSouce}
          columns={primaryColumns}
          rowSelection={{
            selectedRowKeys: internalSelectedRowKeys,
            onSelectChange: (item: any) => {
              console.log(item);
              setInternalSelectedRowKeys(item)
            },
          }}
        />)
      }}
      pagination={<Pagination
        currentPage={5}
        totalitem={200}
        totalPages={20}
        onNext={() => { }}
        onEnter={() => { alert("onenter") }}
        countPerPage={10}
      />}
    />
   </Card>
  )
}

export const primary: any = Template.bind({})

export const DataTableWithFixedHeader: any = Template.bind({})
DataTableWithFixedHeader.decorators = [
  () => {
    return (
      <DataTable
        dataSource={dataSouce}
        columns={primaryColumns}
        fixedHeader={true}
        scrollY={200}
        pagination={<Pagination
          currentPage={3}
          totalitem={200}
          totalPages={20}
          onNext={() => { }}
          onEnter={() => { alert("onenter") }}
          countPerPage={10}
        />}
      />
    )
  }
]

export const DataTableWithFixedColumns: any = Template.bind({})
DataTableWithFixedColumns.decorators = [
  () => {
    return (
      <DataTable
        dataSource={dataSouce}
        columns={primaryColumns}
        fixedHeader={true}
        scrollX={500}
      />
    )
  }
]

export const DataTableWithRowSelection: any = Template.bind({})
DataTableWithRowSelection.decorators = [
  () => {
    return (
      <DataTable
        dataSource={dataSouce}
        columns={primaryColumns}
        rowSelection={{
          selectedRowKeys: [],
        }}
      />
    )
  }
]

export const DataTableWithRowExpandable: any = Template.bind({})
DataTableWithRowExpandable.decorators = [
  () => {
    return (
      <DataTable
        dataSource={dataSouce}
        columns={primaryColumns}
        expandable={{
          rowExpandable: (item) => ![5, 8].includes(item.key),
          expandedRowRender: (item) => <p>{'Hello'}</p>
        }}
      />
    )
  }
]

export const DataTableWithPagination: any = Template.bind({})
DataTableWithPagination.decorators = [
  () => {
    return (
      <DataTable
        dataSource={dataSouce}
        columns={primaryColumns}
        expandable={{
          rowExpandable: (item) => ![5, 8].includes(item.key),
          expandedRowRender: (item) => <p>{'Hello'}</p>
        }}
        pagination={<Pagination
          currentPage={3}
          totalitem={200}
          totalPages={20}
          onNext={() => { }}
          onEnter={() => { alert("onenter") }}
          countPerPage={10}
        />}
      />
    )
  }
]

