import React, { useState } from "react";
import { Card, FlexLayout } from "../..";
import CheckBox2 from "../CheckBox-2";

export default {
  title: "Components/Form/CheckBox2",
  component: CheckBox2,
  argTypes: {
    checked: {
      description: "Check or uncheck the checkbox2",
      control: {
        type: "radio",
        options:[true , false , 'indeterminate']
      },
    //   defaultValue: false,
    },
    name: {
      description: "Label of Checkbox2",
      control: {
        type: "text",
      },
      defaultValue: "Name",
    },
    label: {
      description: "Chekbox value",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    description: {
      description: "Description of checkbox2",
      control: {
        type: "text",
      },
      defaultValue: "Checkbox2 Descripion",
    },
    onChange: {
      description: "Define Checkbox2 onChange Function",
      control: {
        type: "function",
        disable: true,
      },
    },
    error: {
      description: "Define Checkbox2 Error ",
      control: {
        type: "boolean",
        defaultValue: false,
      },
    },
    disabled: {
      description: "Check box disabled description",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    required: {
      description: "Required option of checkbox2",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card title={"Checkbox2"}>
      <CheckBox2
        {...rest}
        // id='123'
        // label={rest.label}
        required={rest.required}
        disabled={rest.disabled}
        checked={rest.checked}
        onChange={(state) => {
            alert(state);
        }}
      />
    </Card>
  );
};

export const Primary = Template.bind({});
    