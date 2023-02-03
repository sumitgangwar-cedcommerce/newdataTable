import React, { useCallback, useEffect, useState } from "react";
import { Card } from "../Card";
import Pagination from "../Pagination/Pagination";
import { dataSource } from "./demo/DataSource";
import DataTable from "./DataTable";;
import './DataTable.css'
import TextStyles from "../TextStyles/TextStyles";


export default {
  title: 'Components/DataTable and List/DataTable',
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
    render: (item: any) => {
      return <TextStyles>{item}</TextStyles>
    },
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
    width: 300,
    render: (item: any) => {
      return <TextStyles>{item}</TextStyles>
    },
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
    render: (item: any) => {
      return <TextStyles>{item}</TextStyles>
    },
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
    render: (item: any) => {
      return <TextStyles>{item}</TextStyles>
    },
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

interface InternalDataTableI {
  dataKey?:any
  onChange?:Function
  parentState?:any
}

const InternalDataTable = ({dataKey , onChange , parentState}:InternalDataTableI) =>{  
  const [dataSource , setDataSource] = useState<any>([])
  const [selectedRowKeys , setSelectedRowKeys] = useState<any>({})

  const columns = [
    {
      title:'User Id',
      dataIndex:'userId',
      key:'UserId'
    },
    {
      title:'Post Id',
      dataIndex:'id',
      key:'id'
    },
    {
      title:'Title',
      dataIndex:'title',
      key:'title'
    },
    {
      title:'Body',
      dataIndex:'body',
      key:'body'
    }
  ]

  console.log(parentState)

  useEffect(()=>{
    let seleRowKey:any = {}
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${dataKey}`)
      .then(response => response.json())
      .then(json => {
        json.map((item:any) => {
          seleRowKey[item.id] = parentState===true ? true : parentState===false ? false : selectedRowKeys[item.id] 
          item.key = item.id
        })
        setDataSource([...json])
        setSelectedRowKeys(seleRowKey)
      })
  },[])

  useEffect(()=>{
    let seleRowKey:any = {}
    dataSource.map((item:any) => {
      seleRowKey[item.id] = parentState===true ? true : parentState===false ? false : selectedRowKeys[item.id] 
    })
    setSelectedRowKeys(seleRowKey)
  },[parentState])

  const checkChange = (item:any) => {
    let res = 'indeterminate'
    if(Object.values(item).every(i => i===true))  res = true
    else if(Object.values(item).every(i => i===false)) res = false

    if(onChange)  onChange(dataKey , res)

  }

  return (
    <DataTable
    scrollY={200}
    dataSource={dataSource}
    columns={columns}
    rowSelection={{
      selectedRowKeys : selectedRowKeys,
      onSelectChange: (item: any) => {
        checkChange(item);
        setSelectedRowKeys({...item})
      },
    }}
  />
  )
}

const Template = ({ ...rest }) => {
  const [dataSourceT , setDataSourceT] = useState<any[]>([])
  const [selectedRowKeys , setSelectedRowKeys] = useState({})

  const changeSelectedRowKeyState = (key:any , state:any) =>{
    setSelectedRowKeys(prev => ({...prev , [key]:state}))
  }
  const expandedRowRender = useCallback((item:any , selectedRowKeys:any)=>{
    // console.log(selectedRowKeys , item);
    return <InternalDataTable  dataKey={item.dataKey} onChange={changeSelectedRowKeyState} parentState={item.selectedRowKeys[item.dataKey]}/>
  },[])

  useEffect(()=>{
    let seleRowKey:any = {}
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        json.map((item:any) => {
          seleRowKey[item.id] = false
          item.key = item.id
        })
        setSelectedRowKeys(seleRowKey)
        setDataSourceT([...json])
      })
  },[])


  return (
    
   <Card>
     <DataTable
      dataSource={dataSourceT}
      columns={primaryColumns}
      scrollX={rest.scrollX}
      scrollY={rest.scrollY}
      showHeader={rest.showHeader}
      fixedHeader={rest.fixedHeader}
      rowSelection={{
        selectedRowKeys: selectedRowKeys,
        onSelectChange: (item: any) => {
          setSelectedRowKeys({...item})
        },
      }}
      expandable={{
        rowExpandable: (item) => !['5', '8'].includes(item.key),
        expandedRowRender: expandedRowRender
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
        dataSource={dataSource}
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
        dataSource={dataSource}
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
        dataSource={dataSource}
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
        dataSource={dataSource}
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
        dataSource={dataSource}
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

