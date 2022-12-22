import React from 'react'
import { Card } from '../../Card'
import BarChart from '../Bar'
export default {
  title: 'Components/Graph/BarChart',
  component: BarChart,
  argTypes: {
  height:{
    control:{
      type:"number"
    }
  },
  width:{
    control:{
      type:"number",
    }
  }
  },
};

const Template = ({ ...rest }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: ['300', '550', '400', '200', '800', '500'],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: ['200', '500', '400', '330', '750', '200'],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }
  return (
   <Card>
 <BarChart data={data} options={options} height={rest.height} width={rest.width}/>
   </Card>
    
  
  )
}
export const Primary: any = Template.bind({})
