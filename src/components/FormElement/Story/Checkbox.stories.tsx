import React, { useState } from "react";
import { CheckBox, Card, FlexLayout } from "../..";

export default {
  title: "Components/Form/CheckBox",
  component: CheckBox,
  argTypes: {
    checked: {
      description: "Check or uncheck the checkbox",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    name: {
      description: "Label of Checkbox",
      control: {
        type: "text",
      },
      defaultValue: "Name",
    },
    labelVal: {
      description: "Chekbox value",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    description: {
      description: "Description of checkbox",
      control: {
        type: "text",
      },
      defaultValue: "Checkbox Descripion",
    },
    onChange: {
      description: "Define Checkbox onClick Function",
      control: {
        type: "function",
        disable: true,
      },
    },
    error: {
      description: "Define Checkbox Error ",
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
      description: "Required option of checkbox",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card title={"Checkbox"}>
      <CheckBox
        {...rest}
        labelVal={rest.labelVal}
        required={rest.required}
        disabled={rest.disabled}
      />
    </Card>
  );
};

export const Primary = Template.bind({});
export const CheckboxRequired: any = Template.bind({});
CheckboxRequired.decorators = [
  () => {
    return (
      <Card title={"Required Checkbox"}>
        <CheckBox
          labelVal={"CheckBox"}
          onClick={() => {
            // alert("checked");
          }}
          required
          checked={true}
          
        />
      </Card>
    );
  },
];
//disable
export const DisableCheckbox: any = Template.bind({});
DisableCheckbox.decorators = [
  () => {
    const [check, toggleChecked] = useState(false);
    return (
      <Card title={"Disable Checkbox"}>
        <CheckBox
          labelVal={"CheckBox"}
          disabled
        />
      </Card>
    );
  },
];
// with Description
export const CheckboxWithDescription: any = Template.bind({});
CheckboxWithDescription.decorators = [
  () => {
    return (
      <Card title={"Checkbox With Description"}>
        <FlexLayout spacing="loose" direction="vertical">
        <CheckBox
          labelVal={"CheckBox"}
          description={"Checkbox Descripion"}
          checked={true}
        />
         <CheckBox
          labelVal={"CheckBox"}
          description={"Checkbox Descripion"}
        />
        </FlexLayout>
      </Card>
    );
  },
];
