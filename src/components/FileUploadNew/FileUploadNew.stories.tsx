import React from 'react'
import { Card } from '../Card'
import FileUploadNew from './FileUploadNew'
export default {
  title: 'Components/Form/FileUploadNew',
  component: FileUploadNew,
  argTypes: {
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
  },
}
const Template = ({ ...rest }) => {
  return (
    <Card cardType="Shadowed">
      <FileUploadNew {...rest}/>
    </Card>
  )
}
export const Primary: any = Template.bind({})


