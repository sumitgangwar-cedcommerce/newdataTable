import React from 'react'
import { Card, CopyClipboard } from '../../components';
import { Icons } from './IconsList';

export default {
  title: "Foundation/Icons",
  component: Icons,
  parameters: {
    docs: {},
  },
};

const Template = ({ }) => {
  return (
    <Card>
      {
        Object.keys(Icons).map((item: any, index) => {
          return (
            <div>
              {Icons[item]}
              <CopyClipboard
                label={item}
                value={`<${item} />`}
                align={"fill"}
              />
            </div>
          )
        })
      }
    </Card>
  )
}

export const Primary: any = Template.bind({});

