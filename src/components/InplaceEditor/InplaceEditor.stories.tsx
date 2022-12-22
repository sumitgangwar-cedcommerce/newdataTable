import React, { useState } from "react";
import InplaceEditor from "./InplaceEditor";
import { Card } from "..";
import { FlexLayout } from "../FlexLayout";

export default {
  title: "Components/InplaceEditor",
  component: InplaceEditor,
  argTypes: {
    type: {
      description: "This is type as number,text,password etc",
      control: {
        type: "radio",
        options: ["text","password","number","tel","email","url"]
      },
      defaultValue: "text",
    },
    minSize: {
      description: "set minSize value",
      control: {
        type: "number",
      },
      defaultValue: 0,
    },
    maxSize: {
      description: "set maxSize value",
      control: {
        type: "number",
      },
      defaultValue: 10,
    },
  },
};

const Template = ({ ...rest }) => {
  const [value, setvalue] = useState("Some Text");
  const onChange = (e: string) => {
    setvalue(e);
  };
  return (
    <Card>
      <FlexLayout halign="center">
        <InplaceEditor
          value={value}
          type={rest.type}
          onChange={onChange}
          maxSize={rest.maxSize}
          minSize={rest.minSize}
        />
      </FlexLayout>
    </Card>
  );
};

export const Primary = Template.bind({});
