import { Button } from "antd";
import React from "react";
import { ChevronDown } from "react-feather";
import ActionList from "../ActionList/ActionList";
import Grid from "./Grid";


export default {
  title: 'Components/Grid-2',
  component: Grid,
  argTypes : {
    fixedHeader : {
      control: {
        type:'boolean'
      },
      defaultValue: true,
    },
    columns : {
      control: {
        type:'text',
        disable:true,
      }
    },
    dataSource : {
      control: {
        type:'text',
        disable:true,
      }
    },
    scrollX : {
      control:{
        type:'number'
      }
    },
    scrollY : {
      control:{
        type:'number'
      },
      defaultValue:400,
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
    // fixed:'Left',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'age',
    width: 100,
    align: 'center',
  },
  {
    title: 'Palcement',
    dataIndex: 'placement',
    key: 'address',
    width: 100,
    align: 'center',
  },
  {
    title: 'Start Date',
    dataIndex: 'start-date',
    key: 'name',
    width: 100,
    align: 'center',
  },
  {
    title: 'End Date',
    dataIndex: 'end-date',
    key: 'name',
    width: 100,
    align: 'center',
  },
  {
    title: 'Daily Budget',
    dataIndex: 'daily-budget',
    key: 'name',
    width: 100,
    align: 'center',
  },
  {
    title: 'Spend',
    dataIndex: 'spend',
    key: 'name',
    width: 100,
    align: 'center',
  },
  {
    title: 'Sales',
    dataIndex: 'sales',
    key: 'name',
    width: 100,
    align: 'center',
  },
  {
    title: 'Actions',
    dataIndex: 'action',
    key: 'name',
    width: 100,
    align: 'center',
    fixed: 'right'
  }
];

const dataSource = [
  {
    key: '1',
    campaign: 'Thanksgiving Promo',
    status: 'Pending',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$999',
    'sales': '$0',
    action:'...'
  },
  {
    key: '2',
    campaign: 'Thanksgiving Promo',
    status: 'Pending',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$999',
    'sales': '$0',
    action: '...'
  },
  {
    key: '3',
    campaign: 'Thanksgiving Promo',
    status: 'Pending',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$999',
    'sales': '$0',
    action: '...'
  },
  {
    key: '4',
    campaign: 'Thanksgiving Promo',
    status: 'Pending',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$999',
    'sales': '$0',
    action: '...'
  },
  {
    key: '5',
    campaign: 'Thanksgiving Promo',
    status: 'Pending',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$999',
    'sales': '$0',
    action: '...'
  },
  {
    key: '6',
    campaign: 'Thanksgiving Promo',
    status: 'Pending',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$999',
    'sales': '$0',
    action: '...'
  },
  {
    key: '7',
    campaign: 'Thanksgiving Promo',
    status: 'Pending',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$999',
    'sales': '$0',
    action: '...'
  },
  {
    key: '8',
    campaign: 'Thanksgiving Promo',
    status: 'Pending',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$999',
    'sales': '$0',
    action: '...'
  },
  {
    key: '9',
    campaign: 'Thanksgiving Promo',
    status: 'Pending',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$999',
    'sales': '$0',
    action: '...'
  },
  {
    key: '10',
    campaign: 'Thanksgiving Promo',
    status: 'Pending',
    placement: 'Facebook',
    'start-date': 'MM/DD/YYYY',
    'end-date': 'MM/DD/YYYY',
    'daily-budget': '$150',
    'spend': '$999',
    'sales': '$0',
    action: '...'
  },
];

const Template = ({ ...rest }) => {
  return (
    <Grid
      dataSource={dataSource}
      columns={columns}
      fixedHeader={rest.fixedHeader}
      scrollX = {rest.scrollX}
      scrollY = {rest.scrollY}
    />
  )
}

export const Primary: any = Template.bind({})