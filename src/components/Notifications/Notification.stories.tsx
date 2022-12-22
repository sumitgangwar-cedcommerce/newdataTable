import React from 'react'
import { Notification, Card } from '..'

export default {
  title:'Components/Notification',
  component: Notification,
  argTypes: {
    type: {
      description: 'set status of notification',
      control: {
        type: 'radio',
        options: ['warning', 'success', 'danger', 'info'],
      },
      defaultValue: 'success',
    },
    children: {
      control: {
        type: 'text',
      },
      defaultValue: 'Notification Text',
    },
    onClose: {
      control: {
        type: 'function',
      },
    },
    destroy: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    icon: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    desciption: {
      control: {
        type: 'text',
      },
      defaultValue:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim",
    },
    subdesciption: {
      control: {
        type: 'text',
      },
      defaultValue: 'Yesterday',
    },
  },
}

const destroyf = () => {
  alert('hh')
}

const Template = ({ icon, ...rest }: any) => {
  return (
    <Card title="Notification">
      <Notification
        {...rest}
        onClose={destroyf}
        destroy={rest.destroy}
        type={rest.type}
        icon={rest.icon}
        desciption={rest.desciption}
        subdesciption={rest.subdesciption}
      />
    </Card>
  )
}

export const Primary = Template.bind({})

const type = ['warning', 'success', 'danger', 'info']
export const Types: any = Template.bind({})
Types.decorators = [
  () => (
    <Card>
        {type.map((item: any) => {
          return (
            <Notification onClose={destroyf} destroy type={item}>
              {item} Notification Text
            </Notification>
          )
        })}
    </Card>
  ),
]
//
export const NotificationWithout_destroy: any = Template.bind({})
NotificationWithout_destroy.decorators = [
  () => (
    <Card>
      <Notification destroy={false} type={'success'}>
        {' '}
        Notification Without Destroy
      </Notification>
    </Card>
  ),
]
//withdescription
export const NotificationWithDescription: any = Template.bind({})
NotificationWithDescription.decorators = [
  () => (
    <Card>
      <Notification
        destroy={false}
        desciption={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim"
        }
        type={'success'}
      >
        {' '}
        Notification With Description
      </Notification>
    </Card>
  ),
]
//withSubdescription
export const NotificationWithSubDescription: any = Template.bind({})
NotificationWithSubDescription.decorators = [
  () => (
    <Card>
      <Notification
        onClose={destroyf}
        destroy={false}
        desciption={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim"
        }
        subdesciption={'Yesterday (18/10/2021)'}
        type={'success'}
      >
        {' '}
        Notification With SubDescription
      </Notification>
    </Card>
  ),
]

//withSubdescription
export const NotificationWithoutIcon: any = Template.bind({})
NotificationWithoutIcon.decorators = [
  () => (
    <Card>
      <Notification
        onClose={destroyf}
        destroy={false}
        icon={false}
        desciption={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim"
        }
        subdesciption={'Yesterday (18/10/2021)'}
        type={'success'}
      >
        {' '}
        Notification With SubDescription
      </Notification>
    </Card>
  ),
]

