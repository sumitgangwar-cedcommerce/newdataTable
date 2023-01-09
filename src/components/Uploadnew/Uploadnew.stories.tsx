import React, { useState } from 'react'
import { Loader, Plus, PlusCircle, Upload } from 'react-feather'
import Button from '../Button/Button'
import Uploadnew from './Uploadnew'
import 'antd/dist/antd.css'
export default {
  title: 'Components/Form/Uploadnew',
  component: Uploadnew,
  argTypes: {
    onChange: {
      description:"On Change Call back function",
      control: {
        disable: true,
      },
    },
    name: {
      description:"Name attribute of component",
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    listType: {
      control: {
        type: 'radio',
        options: ['text', 'picture', 'picture-card'],
      },
    },
    showUploadList: {
      control: {
        type: 'boolean',
      },
    },
    uploadbutton: {
      control: {
        type: 'boolean',
      },
    },
    directory: {
      control: {
        type: 'boolean',
      },
    },
    multiple: {
      control: {
        type: 'boolean',
      },
    },
    drag: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    maxCount: {
      control: {
        type: 'number',
      },
    },
  },
}
const Template = ({ ...rest }) => {
  return (
    <>
      <Uploadnew
        {...rest}
        name="file"
        directory={rest.directory}
        disabled={rest.disabled}
        listType={rest.listType}
        maxCount={rest.maxCount}
        multiple={rest.multiple}
        drag={rest.drag}
        uploadbutton={rest.uploadbutton}
        

      >
        <Button content="Click to upload" type="Primary"  icon={<Upload color='#ffff'/>} />
      </Uploadnew>
    </>
  )
}
export const Primary: any = Template.bind({})
export const Avtar: any = Template.bind({})
Avtar.decorators = [
  () => (
    <Uploadnew
      name="Avtar"
      uploadbutton={true}
      listType="picture-card"
      className="avatar-uploader"
    ></Uploadnew>
  ),
]
export const UploadDirectory: any = Template.bind({})
UploadDirectory.decorators = [
  () => (
    <Uploadnew directory>
      <Button content="Click to Directory" type="Primary"  icon={<Upload color='white' />} />
    </Uploadnew>
  ),
]
export const Drag: any = Template.bind({})
Drag.decorators = [() => <Uploadnew drag></Uploadnew>]
