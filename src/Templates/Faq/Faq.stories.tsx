import React, { useState } from 'react'
import Faq from './Faq'
export default {
  title: 'Templates/Faq',
  component: Faq,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    textColor: {
      control: {
        type: 'radio',
        options: ['dark', 'light'],
      },
    },
    icon: {
      control: {
        type: 'boolean',
      },
    },
    iconAlign: {
      control: {
        type: 'radio',
        options: ['left', 'right'],
      },
    },
    count: {
      control: {
        type: 'number',
      },
    },
  },
}

const data = {
  'Common Queries': [
    {
      title:
        'How to make your Shopify Products available to the?',
      content:
        '<ol><li><p>Shipping products to other countries, especially those overseas, can often be... show more</p></li></ol>',
    },
    {
      title: 'Is it necessary to select any plan to use the app?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title:
        'Will my plan get downgraded if I will not reach the limit as per the plan I selected?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title: 'Can we connect the Amazon pay account with the app?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title: 'Can we connect the Amazon pay account with the app?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title: 'Can we connect the Amazon pay account with the app?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
  ],

  'Product Section': [
    {
      title:
        'How to make your Shopify Products ?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title: 'Is it necessary to select any plan to use the app?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title:
        'Will my plan get downgraded if I will not reach the limit as per the plan I selected?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title: 'Can we connect the Amazon pay account with the app?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title: 'Is it necessary to select any plan to use the app?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title:
        'Will my plan get downgraded if I will not reach the limit as per the plan I selected?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title: 'Can we connect the Amazon pay account with the app?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
  ],
  'Order Section': [
    {
      title:
        'How to make your Shopify Products to the Amazon Sales Channel?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title: 'Is it necessary to select any plan to use the app?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title:
        'Will my plan get downgraded if I will not reach the limit as per the plan I selected?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title: 'Can we connect the Amazon pay account with the app?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title: 'Can we connect the Amazon pay account with the app?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title: 'Can we connect the Amazon pay account with the app?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title:
        'How to make your Shopify Products available ?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title: 'Is it necessary to select any plan to use the app?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title:
        'Will my plan get downgraded if I will not reach the limit as per the plan I selected?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title: 'Can we connect the Amazon pay account with the app?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title: 'Is it necessary to select any plan to use the app?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title:
        'Will my plan get downgraded if I will not reach the limit as per the plan I selected?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
    {
      title: 'Can we connect the Amazon pay account with the app?',
      content:
        'Shipping products to other countries, especially those overseas, can often be... show more',
    },
  ],
}
const Template = ({ ...rest }) => {
  const [value, setValue] = useState('')
  function onEnter(e: string) {
    setValue(e)
  }
  function onChange(e: string) {
    setValue(e)
  }
  return (
    <Faq
      reverseNavigation={true}
      onEnter={onEnter}
      Searchvalue={value}
      onSearch={onChange}
      title="FAQ"
      options={data}
      description={'Find Solution To All Your queries'}
      data={data}
      textColor={rest.textColor}
      icon={rest.icon}
      iconAlign={"right"}
      count={rest.count}
      clearFunction={()=> setValue("")}
    />
  )
}
export const Primary: any = Template.bind({})