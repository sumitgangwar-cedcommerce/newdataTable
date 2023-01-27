import React from "react";
import Pagination from "../Pagination/Pagination";
import { dataSouce } from "./demo/DataSource";
import Grid from "./Grid";;
import './Grid.css'


export default {
  title: 'Components/Grid-2',
  component: Grid,
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
    render: (item: any) => <a href={`http://${item}`}>{item}</a>,
    // onCell:(rowNum:number) => {
    //   if(rowNum===9)  return ({rowSpan:2 , colSpan:2})
    //   if(rowNum===10)  return -1
    // }
  },
];


// const dataSource = [
//   {
//     key: '1',
//     campaign: 'Thanksgiving Promo',
//     status: 'a',
//     placement: 'Facebook',
//     'start-date': 'MM/DD/YYYY',
//     'end-date': 'MM/DD/YYYY',
//     'daily-budget': '$150',
//     'spend': '$4',
//     'sales': '$0',
//     action: '...'
//   },
//   {
//     key: '2',
//     campaign: 'Thanksgiving Promo',
//     status: 'b',
//     placement: 'Facebook',
//     'start-date': 'MM/DD/YYYY',
//     'end-date': 'MM/DD/YYYY',
//     'daily-budget': '$150',
//     'spend': '$9',
//     'sales': '$1',
//     action: '...'
//   },
//   {
//     key: '3',
//     campaign: 'Thanksgiving Promo',
//     status: 'C',
//     placement: 'Facebook',
//     'start-date': 'MM/DD/YYYY',
//     'end-date': 'MM/DD/YYYY',
//     'daily-budget': '$150',
//     'spend': '$7',
//     'sales': '$2',
//     action: '...'
//   },
//   {
//     key: '4',
//     campaign: 'Thanksgiving Promo',
//     status: 'd',
//     placement: 'Facebook',
//     'start-date': 'MM/DD/YYYY',
//     'end-date': 'MM/DD/YYYY',
//     'daily-budget': '$150',
//     'spend': '$6',
//     'sales': '$3',
//     action: '...'
//   },
//   {
//     key: '5',
//     campaign: 'Thanksgiving Promo',
//     status: 'e',
//     placement: 'Facebook',
//     'start-date': 'MM/DD/YYYY',
//     'end-date': 'MM/DD/YYYY',
//     'daily-budget': '$150',
//     'spend': '$5',
//     'sales': '$4',
//     action: '...'
//   },
//   {
//     key: '6',
//     campaign: 'Thanksgiving Promo',
//     status: 'F',
//     placement: 'Facebook',
//     'start-date': 'MM/DD/YYYY',
//     'end-date': 'MM/DD/YYYY',
//     'daily-budget': '$150',
//     'spend': '$8',
//     'sales': '$5',
//     action: '...'
//   },
//   {
//     key: '7',
//     campaign: 'Thanksgiving Promo',
//     status: 'g',
//     placement: 'Facebook',
//     'start-date': 'MM/DD/YYYY',
//     'end-date': 'MM/DD/YYYY',
//     'daily-budget': '$150',
//     'spend': '$3',
//     'sales': '$6',
//     action: '...'
//   },
//   {
//     key: '8',
//     campaign: 'Thanksgiving Promo',
//     status: 'H',
//     placement: 'Facebook',
//     'start-date': 'MM/DD/YYYY',
//     'end-date': 'MM/DD/YYYY',
//     'daily-budget': '$150',
//     'spend': '$2',
//     'sales': '$7',
//     action: '...'
//   },
//   {
//     key: '9',
//     campaign: 'Thanksgiving Promo',
//     status: 'i',
//     placement: 'Facebook',
//     'start-date': 'MM/DD/YYYY',
//     'end-date': 'MM/DD/YYYY',
//     'daily-budget': '$150',
//     'spend': '$1',
//     'sales': '$8',
//     action: '...'
//   },
//   {
//     key: '10',
//     campaign: 'Thanksgiving Promo',
//     status: 'J  ',
//     placement: 'Facebook',
//     'start-date': 'MM/DD/YYYY',
//     'end-date': 'MM/DD/YYYY',
//     'daily-budget': '$150',
//     'spend': '$0',
//     'sales': '$9',
//     action: '...'
//   },
// ];

const Template = ({ ...rest }) => {
  return (
    <Grid
      dataSource={dataSouce}
      columns={primaryColumns}
      scrollX={rest.scrollX}
      scrollY={rest.scrollY}
      showHeader={rest.showHeader}
      fixedHeader={rest.fixedHeader}
      rowSelection={{
        onRowSelect: (item: any) => console.log(item),
        rowSelectable: (item: any) => ![3].includes(item.key),
        onBulkSelect: (item: any) => console.log(item)
      }}
      expandable={{
        rowExpandable: (item) => !['5', '8'].includes(item.key),
        expandedRowRender: (item) => (<Grid
          dataSource={dataSouce}
          columns={primaryColumns}
        />)
      }}
      pagination={<Pagination
        currentPage={1}
        totalitem={200}
        totalPages={20}
        onNext={() => { }}
        onEnter={() => { alert("onenter") }}
        countPerPage={10}
        simpleView={true}
      />}
    />
  )
}

export const primary: any = Template.bind({})

export const gridWithFixedHeader: any = Template.bind({})
gridWithFixedHeader.decorators = [
  () => {
    return (
      <Grid
        dataSource={dataSouce}
        columns={primaryColumns}
        fixedHeader={true}
        scrollY={200}
      />
    )
  }
]

export const gridWithFixedColumns: any = Template.bind({})
gridWithFixedColumns.decorators = [
  () => {
    return (
      <Grid
        dataSource={dataSouce}
        columns={primaryColumns}
        fixedHeader={true}
        scrollX={300}
      />
    )
  }
]

export const gridWithRowSelection: any = Template.bind({})
gridWithRowSelection.decorators = [
  () => {
    return (
      <Grid
        dataSource={dataSouce}
        columns={primaryColumns}
        rowSelection={{
          onRowSelect: (item: any) => console.log(item),
          rowSelectable: (item: any) => !['3'].includes(item.key),
          selectedRowKeys: [],
          onBulkSelect: (item: any) => console.log(item)
        }}
      />
    )
  }
]

export const gridWithRowExpandable: any = Template.bind({})
gridWithRowExpandable.decorators = [
  () => {
    return (
      <Grid
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

export const gridWithPagination: any = Template.bind({})
gridWithPagination.decorators = [
  () => {
    return (
      <Grid
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
          simpleView={true}
        />}
      />
    )
  }
]

