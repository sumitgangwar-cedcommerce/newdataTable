import React from 'react'
import { Upload } from 'react-feather'
import Button from '../Button/Button'
import FileUpload from './FileUpload'
import 'antd/dist/antd.css'
export default {
  title: 'Components/Form/FileUpload',
  component: FileUpload,
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
      <FileUpload
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
      </FileUpload>
    </>
  )
}
export const Primary: any = Template.bind({})
export const Avtar: any = Template.bind({})
Avtar.decorators = [
  () => (
    <FileUpload
      name="Avtar"
      uploadbutton={true}
      listType="picture-card"
      className="avatar-uploader"
    ></FileUpload>
  ),
]
export const UploadDirectory: any = Template.bind({})
UploadDirectory.decorators = [
  () => (
    <FileUpload directory>
      <Button content="Click to Directory" type="Primary"  icon={<Upload color='white' />} />
    </FileUpload>
  ),
]
export const Drag: any = Template.bind({})
Drag.decorators = [() => <FileUpload drag></FileUpload>]
