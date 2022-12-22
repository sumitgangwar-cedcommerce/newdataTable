import React from "react";
import Breadcrumb from "./Breadcrumb";
import { Card } from "..";
interface ObjI {
  label: string | React.ReactNode;
  value: number;
}
export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    items: {
      description: "set items in array format",
      control: {
        disable: true,
      },
    },
    onClick: {
      description: "Onclick function",
      type: "function",
    },
  },
};

const Template = ({ ...rest }) => {
  function onClick(value: number, obj: ObjI = { label: "", value: 0 }) {
    alert(value);
  }
  return (
    <Card>
      <Breadcrumb items={rest.items} onClick={onClick} />
    </Card>
  );
};

export const Primary = Template.bind({});
