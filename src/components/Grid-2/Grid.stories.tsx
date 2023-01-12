import React from "react";
import Grid from "./Grid";


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
      // defaultValue: 500,
    },
    scrollY: {
      control: {
        type: 'number'
      },
      // defaultValue:200,
    },
    rowSelection: {
      control: {
        type: 'boolean'
      },
      defaultValue: true
    },
    expandable: {
      control: {
        type: {
          expandedRowRender: Function,
          rowExpandable: Function
        }
      },
    }
  }
};

const columns = [
  {
    title: 'Campaign',
    dataIndex: 'campaign',
    key: 'name',
    width: 100,
    align: 'center',
    fixed: 'left',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'age',
    width: 100,
    align: 'center',
    fixed: 'left',
    sortable: true
  },
  {
    title: 'Palcement',
    dataIndex: 'placement',
    key: 'address',
    width: 100,
    align: 'center',
    // fixed:'left'
  },
  {
    title: 'Start Date',
    dataIndex: 'start-date',
    key: 'sd',
    width: 100,
    align: 'center',
  },
  {
    title: 'End Date',
    dataIndex: 'end-date',
    key: 'ed',
    width: 100,
    align: 'center',
  },
  {
    title: 'Daily Budget',
    dataIndex: 'daily-budget',
    key: 'db',
    width: 100,
    align: 'center',
  },
  {
    title: 'Spend',
    dataIndex: 'spend',
    key: 'spnd',
    width: 100,
    align: 'center',
    fixed: 'right',
    sortable: true
  },
  {
    title: 'Sales',
    dataIndex: 'sales',
    key: 'slaes',
    width: 100,
    align: 'center',
    fixed: 'right',
    sortable: true
  },
  {
    title: 'Actions',
    dataIndex: 'action',
    key: 'act',
    width: 100,
    align: 'center',
    fixed: 'right'
  }
];

const dataSource = [
  {
    key: '1',
    campaign: 'Thanksgiving Promo',
    status: 'a',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$4',
    'sales': '$0',
    action: '...'
  },
  {
    key: '2',
    campaign: 'Thanksgiving Promo',
    status: 'b',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$9',
    'sales': '$1',
    action: '...'
  },
  {
    key: '3',
    campaign: 'Thanksgiving Promo',
    status: 'C',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$7',
    'sales': '$2',
    action: '...'
  },
  {
    key: '4',
    campaign: 'Thanksgiving Promo',
    status: 'd',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$6',
    'sales': '$3',
    action: '...'
  },
  {
    key: '5',
    campaign: 'Thanksgiving Promo',
    status: 'e',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$5',
    'sales': '$4',
    action: '...'
  },
  {
    key: '6',
    campaign: 'Thanksgiving Promo',
    status: 'F',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$8',
    'sales': '$5',
    action: '...'
  },
  {
    key: '7',
    campaign: 'Thanksgiving Promo',
    status: 'g',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$3',
    'sales': '$6',
    action: '...'
  },
  {
    key: '8',
    campaign: 'Thanksgiving Promo',
    status: 'H',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$2',
    'sales': '$7',
    action: '...'
  },
  {
    key: '9',
    campaign: 'Thanksgiving Promo',
    status: 'i',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$1',
    'sales': '$8',
    action: '...'
  },
  {
    key: '10',
    campaign: 'Thanksgiving Promo',
    status: 'J  ',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$0',
    'sales': '$9',
    action: '...'
  },
];

const Template = ({ ...rest }) => {
  return (
    <Grid
      dataSource={dataSource}
      columns={columns}
      fixedHeader={rest.fixedHeader}
      scrollX={rest.scrollX}
      scrollY={rest.scrollY}
      rowSelection={rest.rowSelection}
      expandable={{
        expandedRowRender: (record: any) => (
          <Grid
          dataSource={dataSource}
          columns={columns}
          fixedHeader={rest.fixedHeader}
          scrollX={rest.scrollX}
          scrollY={rest.scrollY}
          rowSelection={rest.rowSelection}
          />
          // <p>{JSON.stringify(record)}</p>
        ),
        rowExpandable: (record: any) => !['2', '3', '6'].includes(record.key)
      }}
    />
  )
}

export const Primary: any = Template.bind({})