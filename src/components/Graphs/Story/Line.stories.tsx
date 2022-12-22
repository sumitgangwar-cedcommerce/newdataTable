import React from 'react'
import { Card } from '../../Card'
import LineCharts from '../Line'
export default {
  title: 'Components/Graph/LineCharts',
  component: LineCharts,
  argTypes: {
    height: {
      control: {
        type: 'number',
      },
    },
  },
}
const Template = ({ ...rest }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  }
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: ['1', '.5', '.4', '.2', '.8', '5'],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: ['1', '.5', '4', '.2', '.8', '.2'],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }
  return (
    <Card>
      <LineCharts data={data} options={options} />
    </Card>
  )
}
export const Primary: any = Template.bind({})
