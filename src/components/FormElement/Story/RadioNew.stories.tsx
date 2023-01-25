import React, { useState } from "react";
import { Card } from "../..";
import RadioNew from "../RadioNew";

export default {
  title: "Components/Form/RadioNew",
  component: RadioNew,
  argTypes: {
    label: {
      description: "Name of component (Attribute)",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
  },
};

const Template = ({ ...rest }) => {
  const radioOptions = [
    { value: "option1", label: "Option 1", description:"Description", disabled:false,  },
    { value: "option2", label: "Option 2", disabled:false },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <Card title={"Radio Button"}>
      <RadioNew required labelHeading="Select an option" options={radioOptions} />
    </Card>
  );
};

export const Primary = Template.bind({});
