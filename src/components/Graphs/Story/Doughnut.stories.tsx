import React from 'react'
import { Card } from '../../Card'
import DoughnutCharts from '../Doughnut'
export default {
  title: 'Components/Graph/DoughnutCharts',
  component: DoughnutCharts,
  argTypes: {
    height: {
      control: {
        type: 'number',
      },
    },
    width:{
      control:{
        type:"number",
      }
    }
  },
}
const Template = ({ ...rest }) => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <Card>
      <DoughnutCharts data={data} width={rest.width} height={rest.height}/>
    </Card>
  )
}
export const Primary: any = Template.bind({})
