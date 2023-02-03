import React, { useState } from "react";
import Toggle from "./Toggle";
import { Card, FormElement } from "..";

export default {
  title: "Components/Form/Toggle",
  component: Toggle,
  argTypes: {
    checked: {
      description: "You can check uncked your toggle",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    label: {
      description: "You can set Lebel from here",
      control: {
        type: "text",
      },
      defaultValue: "Toggle",
    },
    description: {
      description: "You can set Description from here",
      control: {
        type: "text",
      },
      defaultValue: "Toggle Description",
    },
    className: {
      description: "You can set Custom Class Name",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    disabled: {
      description: "You can disabled toggle from here",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    required: {
      description: "You can Make Toggle Required",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template = ({ ...rest }) => {
  const [check, setCheck] = useState<any>(rest.checked);
  return (
    <Card>
      <Toggle
        onChange={() => setCheck(!check)}
        disabled={rest.disabled}
        label={rest.label}
        description={rest.description}
        checked={check}
        className={rest.className}
        required={rest.required}
      />
    </Card>
  );
};

export const Primary = Template.bind({});

// Disabled
export const Disabled: any = Template.bind({});
Disabled.decorators = [
  () => {
    const [check, setCheck] = useState<any>(true);
    return (
      <Card>
        <Toggle
          onChange={() => setCheck(!check)}
          disabled={true}
          label={"Toggle"}
          checked={check}
        />
      </Card>
    );
  },
];

// With Label and Description
export const With_label_and_description: any = Template.bind({});
With_label_and_description.decorators = [
  () => {
    const [check, setCheck] = useState<any>(true);
    return (
      <Card>
        <Toggle
          onChange={() => setCheck(!check)}
          checked={check}
          label="Toggle"
          description="Toggle Description"
        />
      </Card>
    );
  },
];
// Without Label
export const Without_Label: any = Template.bind({});
Without_Label.decorators = [
  () => {
    const [check, setCheck] = useState<any>(true);
    return (
      <Card>
        <Toggle onChange={() => setCheck(!check)} checked={check} />
      </Card>
    );
  },
];

// With Label and Description
export const With_label_and_description_a: any = Template.bind({});
With_label_and_description_a.decorators = [
  () => {
    const [check, setCheck] = useState<any>(true);
    return (
      <Card>
        <FormElement>
          <Toggle
            onChange={() => setCheck(!check)}
            checked={check}
            label="Toggle"
            description="Toggle Description"
          />
          <Toggle
            onChange={() => setCheck(!check)}
            checked={check}
            label="Toggle"
            description="Toggle Description"
          />
          <Toggle
            onChange={() => setCheck(!check)}
            checked={check}
            label="Toggle"
            description="Toggle Description"
          />
        </FormElement>
      </Card>
    );
  },
];
