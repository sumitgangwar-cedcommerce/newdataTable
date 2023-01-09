import React from "react";
import { ZapOff, ZoomIn, ZoomOut } from "./Icons";
import { Card } from "../../..";
import { CopyClipboard, FlexLayout} from "../../../components";

export default {
  title: "Foundation/Icons",
  component: ZoomIn,

  argTypes: {
    size: {
      description: "Enter children",
      control: {
        type: "radio",
        options: ["24", "20", "16"],
      },
      defaultValue: "24",
    },
    color: {
      description: "destroy cross btn",
      control: {
        type: "text",
      },
      defaultValue: "#1c2433",
    },
  },
};

const Template = ({ ...rest }) => {
  const Icons = [
    {
      icon: <ZoomIn {...rest} />,
      name: "ZoomIn",
    },
    {
      icon: <ZoomOut {...rest} />,
      name: "ZoomOut",
    },
    {
      icon: <ZapOff {...rest} />,
      name: "ZapOff",
    },
  ];

  return (
    <Card title={"Icons"}>
      <FlexLayout spacing="loose">
        {Icons.map((icon: any, index: any) => {
          return (
            <div className="icon-inner" key={index}>
              <span>{icon.icon}</span>
              <CopyClipboard
                align="fill"
                value={`<${icon.name} size="${rest.size}" color="${rest.color}" />`}
                label={icon.name}
              ></CopyClipboard>
            </div>
          );
        })}
      </FlexLayout>
    </Card>
  );
};
export const Primary: any = Template.bind({});
