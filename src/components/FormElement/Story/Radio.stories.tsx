import React, { useState } from 'react'
import { Card } from '../..'
import FormElement from '../FormElement'
import Radio from '../Radio'

export default {
  title: 'Components/Form/Radio',
  component: Radio,
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

const Template = ({ ...rest }) => {
  const [value, setvalue] = useState<any>(0)
  return (
    <Card title={'Radio Button'}>
      <FormElement>
        {['1', '2','3'].map((items: any,index:any) => {
          return (
            <Radio
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
export const RadioRequired: any = Template.bind({})
RadioRequired.decorators = [
  () => {
    const [value, setvalue] = useState(false)
    return (
      <Card title={'Required Radio'}>
        <Radio
          id="Ffg"
          checked={value}
          labelVal={'Radio'}
          onClick={() => setvalue(!value)}
          name={''}
          required
        />
      </Card>
    )
  },
]
//disable
export const DisableRadio: any = Template.bind({})
DisableRadio.decorators = [
  () => {
    const [value, setvalue] = useState(false)
    return (
      <Card title={'Disable Radio'}>
        <Radio
          id="Ddddd"
          checked={value}
          labelVal={'Radio'}
          onClick={() => setvalue(!value)}
          name={''}
          disabled
        />
      </Card>
    )
  },
]
// with Description
export const RadioWithDescription: any = Template.bind({})
RadioWithDescription.decorators = [
  () => {
    const [value, setvalue] = useState(false)
    return (
      <Card title={'Radio with Description'}>
        <Radio
          id="dddddssd"
          checked={value}
          labelVal={'Radio'}
          onClick={() => setvalue(!value)}
          name={'f'}
          description={'Radio Description'}
        />
      </Card>
    )
  },
]
