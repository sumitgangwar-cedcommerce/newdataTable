import React, { useState } from 'react'
import { Card } from '../..'
import FormElement from '../FormElement'
import RadioGrp from '../RadioGrp'

export default {
  title: 'Components/Form/RadioGrp',
  component: RadioGrp,
  argTypes: {
    name: {
      description: "Name of component (Attribute)",
      control: {
        type: 'text',
      },
      defaultValue: 'Label',
    },
    labelVal: {
      description: "Label of component",
      control: {
        type: 'text',
      },
      defaultValue: 'Label',
    },
    onClick: {
      description: "On click Function ",
      control: {
        type: 'function',
        disable: true,
      },
    },
    disabled: {
      description: "Set disabled True or false",
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    description: {
      description: "Set description of component ",
      control: {
        type: 'text',
      },
      defaultValue: 'Radio Descripion',
    },
    checked: {
      description: "Enable True or false",
      control: {
        type: 'boolean',
        disable: true,
      },
      defaultValue: false,
    },
    value: {
      description: "Value of Radio Buttons",
      control: {
        type: 'boolean',
        disable: true,
      },
      defaultValue: false,
    },
    required: {
      description: "Set required true or false",
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    id: {
      description: "Set Id of component",
      control: {
        type: 'text',
      },
      defaultValue: 'id',
    },
  },
}

const data = {
    label : 'Main heading',
    name : 'myRadio',
    data : [
        {label : 'Radio1' , value : 'Radio1' , description : 'This is Radio 1'},
        {label : 'Radio2' , value : 'Radio2' , description : 'This is Radio 2'},
        {label : 'Radio3' , value : 'Radio3' , description : 'This is Radio 3'},
        {label : 'Radio4' , value : 'Radio4' , description : 'This is Radio 4'},
        {label : 'Radio5' , value : 'Radio5' , description : 'This is Radio 5'}
    ],
    value:'Radio2'
}

const Template = ({ ...rest }) => {
  return (
    <Card title={'Radio Button'}>
      <RadioGrp {...data} />
    </Card>
  )
}

export const Primary = Template.bind({})

