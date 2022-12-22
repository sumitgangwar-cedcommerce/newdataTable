import React, { useState } from "react";
import Switcher from "./Switcher";
import { Card } from "..";

export default {
  title: "Components/Switcher",
  component: Switcher,
  argTypes: {
    checked: {
      description: "You can check uncked your switcher",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    name: {
      description: "You can set text from here",
      control: {
        type: "text",
      },
      defaultValue: "Swicher",
    },
    textAligh: {
      description: "You can Align text from here",
      control: {
        type: "radio",
        options: ["left", "right"],
      },
      defaultValue: "left",
    },
    disabled: {
      description: "You can disabled switcher from here",
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
      <Switcher
        onChange={() => setCheck(!check)}
        disabled={rest.disabled}
        name={rest.name}
        textAligh={rest.textAligh}
        checked={check}
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
        <Switcher
          onChange={() => setCheck(!check)}
          disabled={true}
          name={"Switcher"}
          textAligh="left"
          checked={check}
        />
      </Card>
    );
  },
];
//Text_Aligh_Left
export const Text_Aligh_Left: any = Template.bind({});
Text_Aligh_Left.decorators = [
  () => {
    const [check, setCheck] = useState<any>(true);
    return (
      <Card>
        <Switcher
          onChange={() => setCheck(!check)}
          name="Switcher"
          textAligh="left"
          checked={check}
        />
      </Card>
    );
  },
];
//Text_Aligh_Right
export const Text_Aligh_Right: any = Template.bind({});
Text_Aligh_Right.decorators = [
  () => {
    const [check, setCheck] = useState<any>(true);
    return (
      <Card>
        <Switcher
          onChange={() => setCheck(!check)}
          name="Switcher"
          textAligh="right"
          checked={check}
        />
      </Card>
    );
  },
];
// Without name
export const Without_Name: any = Template.bind({});
Without_Name.decorators = [
  () => {
    const [check, setCheck] = useState<any>(true);
    return (
      <Card>
        <Switcher onChange={() => setCheck(!check)} checked={check} />
      </Card>
    );
  },
];
