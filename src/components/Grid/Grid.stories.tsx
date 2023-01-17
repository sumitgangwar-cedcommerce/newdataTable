import qs from 'qs';
import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination/Pagination';
import Grid from './Grid'
export default {
  title: 'Components/DataTable and List/Grid',
  component: Grid,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['middle', 'small', 'large'],
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
     expandable: {
      description:`<table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>childrenColumnName</td><td>The column contains children to display</td><td>string</td><td>children</td><td></td></tr><tr><td>columnTitle</td><td>Set the title of the expand column</td><td>ReactNode</td><td>-</td><td>4.23.0</td></tr><tr><td>columnWidth</td><td>Set the width of the expand column</td><td>string | number</td><td>-</td><td></td></tr><tr><td>defaultExpandAllRows</td><td>Expand all rows initially</td><td>boolean</td><td>false</td><td></td></tr><tr><td>defaultExpandedRowKeys</td><td>Initial expanded row keys</td><td>string[]</td><td>-</td><td></td></tr><tr><td>expandedRowClassName</td><td>Expanded row's className</td><td>function(record, index, indent): string</td><td>-</td><td></td></tr><tr><td>expandedRowKeys</td><td>Current expanded row keys</td><td>string[]</td><td>-</td><td></td></tr><tr><td>expandedRowRender</td><td>Expanded container render for each row</td><td>function(record, index, indent, expanded): ReactNode</td><td>-</td><td></td></tr><tr><td>expandIcon</td><td>Customize row expand Icon. Ref <a href="https://codesandbox.io/s/fervent-bird-nuzpr">example</a></td><td>function(props): ReactNode</td><td>-</td><td></td></tr><tr><td>expandRowByClick</td><td>Whether to expand row by clicking anywhere in the whole row</td><td>boolean</td><td>false</td><td></td></tr><tr><td>fixed</td><td>Whether the expansion icon is fixed. Optional true <code>left</code> <code>right</code></td><td>boolean | string</td><td>false</td><td>4.16.0</td></tr><tr><td>indentSize</td><td>Indent size in pixels of tree data</td><td>number</td><td>15</td><td></td></tr><tr><td>rowExpandable</td><td>Enable row can be expandable</td><td>(record) =&gt; boolean</td><td>-</td><td></td></tr><tr><td>showExpandColumn</td><td>Show expand column</td><td>boolean</td><td>true</td><td>4.18.0</td></tr><tr><td>onExpand</td><td>Callback executed when the row expand icon is clicked</td><td>function(expanded, record)</td><td>-</td><td></td></tr><tr><td>onExpandedRowsChange</td><td>Callback executed when the expanded rows change</td><td>function(expandedRows)</td><td>-</td><td></td></tr></tbody></table>`,
      control: {
        disable:true
      },
    },
    bordered: {
      control: {
        type: 'boolean',
      },
    },
    pagination: {
      control: {
        type: 'boolean',
      },
    },
    showHeader: {
      control: {
        type: 'boolean',
      },
    },
    tableLayout: {
      control: {
        type: 'radio',
        options: ['auto','fix'],
      },
    },
  },
};
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '3',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '4',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '5',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '6',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '7',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '8',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '9',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '10',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '11',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '12',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '13',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    align: 'center',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 100,
    align: 'center',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 100,
    align: 'center',
  },
];
const columnss = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
  },
  {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];
const datas = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
];
const expandeddata = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows:any) => {
 
  },
 
};
const GridWithPaginationDemoColumns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (name: any) => `${name.first} ${name.last}`,
    width: "20%",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];
 
const Template = ({ ...rest }) => {
  return (
    <Grid
      dataSource={dataSource}
      columns={columns}
      bordered={rest.bordered}
      loading={rest.loading}
      size={rest.size}
      showHeader={rest.showHeader}
      tableLayout={rest.tableLayout}
    />
  )
}
export const Primary: any = Template.bind({})
export const FixedColoumn: any = Template.bind({})
FixedColoumn.decorators = [
  () => (
    <Grid
      dataSource={datas}
      columns={columnss}
      scrollX={1500}
    />
  ),
]
export const Fixedheader: any = Template.bind({})
Fixedheader.decorators = [
  () => (
    <Grid
      dataSource={dataSource}
      columns={columns}
      scrollY={300}
    />
  ),
]
export const ExpandableRow: any = Template.bind({})
ExpandableRow.decorators = [
  () => <Grid dataSource={expandeddata} columns={columns} />,
]
export const Selection: any = Template.bind({})
Selection.decorators = [
  () => <Grid dataSource={dataSource} columns={columns}  rowSelection={{
    ...rowSelection
  }}  />,
]
export const GridWithPaginationDemo: any = Template.bind({})
GridWithPaginationDemo.decorators = [
  () => {
    const getRandomuserParams = (params: any) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
     const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(
        getRandomuserParams(tableParams)
      )}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination: any, filters: any) => {
    setTableParams({
      pagination,
      ...filters,
    });
  };

  return (
    <>
      <Grid
        columns={GridWithPaginationDemoColumns}
        rowKey={(record: any) => record.login.uuid}
        dataSource={data}
        loading={loading}
        onChange={handleTableChange}
      />
      <Pagination
        optionPerPage={[
          { label: "10", value: "10" },
          { label: "15", value: "15" },
          { label: "20", value: "20" },
          { label: "25", value: "25" },
          { label: "50", value: "50" },
        ]}
        currentPage={tableParams.pagination.current}
        totalitem={200}
        onNext={() => {
          const temp = { ...tableParams };
          temp.pagination.current = temp.pagination?.current + 1;
          setTableParams(temp);
        }}
        onPrevious={() => {
          const temp = { ...tableParams };
          temp.pagination.current = temp.pagination?.current - 1;
          setTableParams(temp);
        }}
        countPerPage={tableParams.pagination.pageSize}
        onCountChange={(e: any) => {
          const temp = { ...tableParams };
          temp.pagination.pageSize = e;
          temp.pagination.current = e;
          setTableParams(temp);
        }}
        onEnter={(e: any) => {
          const temp = { ...tableParams };
          temp.pagination.current = e;
          setTableParams(temp);
        }}
      />
    </>
  );
  }
]