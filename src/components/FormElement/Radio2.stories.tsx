import React, { useState } from 'react'
import { Card } from '../..'
import {FormElement} from '../..'
import Radio2 from './Radio2'

export default {
  title: 'Components/Form/Radio2',
  component: Radio2,
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
      defaultValue: 'Radio2 Descripion',
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
      description: "Value of Radio2 Buttons",
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

const Template = ({ ...rest }) => {
  const [value, setvalue] = useState<any>(0)
  return (
    <Card title={'Radio2 Button'}>
      <FormElement>
        {['1', '2','3'].map((items: any,index:any) => {
          return (
            <Radio2
              key={index}
              id={index}
              checked={value==index}
              name={"2"}
              required={rest.required}
              labelVal={rest.labelVal}
              disabled={rest.disabled}
              description={rest.description}
              value={value}
              onClick={() => {
                setvalue(index)
              }
              }
            />
          )
        })}
      </FormElement>
    </Card>
  )
}

export const Primary = Template.bind({})
export const Radio2Required: any = Template.bind({})
Radio2Required.decorators = [
  () => {
    const [value, setvalue] = useState(false)
    return (
      <Card title={'Required Radio2'}>
        <Radio2
          id="Ffg"
          checked={value}
          labelVal={'Radio2'}
          onClick={() => setvalue(!value)}
          name={''}
          required
        />
      </Card>
    )
  },
]
//disable
export const DisableRadio2: any = Template.bind({})
DisableRadio2.decorators = [
  () => {
    const [value, setvalue] = useState(false)
    return (
      <Card title={'Disable Radio2'}>
        <Radio2
          id="Ddddd"
          checked={value}
          labelVal={'Radio2'}
          onClick={() => setvalue(!value)}
          name={''}
          disabled
        />
      </Card>
    )
  },
]
// with Description
export const Radio2WithDescription: any = Template.bind({})
Radio2WithDescription.decorators = [
  () => {
    const [value, setvalue] = useState(false)
    return (
      <Card title={'Radio2 with Description'}>
        <Radio2
          id="dddddssd"
          checked={value}
          labelVal={'Radio2'}
          onClick={() => setvalue(!value)}
          name={'f'}
          description={'Radio2 Description'}
        />
      </Card>
    )
  },
]
