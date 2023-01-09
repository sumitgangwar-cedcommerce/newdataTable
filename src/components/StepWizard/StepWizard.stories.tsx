import React from "react";
import "antd/dist/antd.css";
import { Card } from "../Card";
import StepWizard from "./StepWizard";
export default {
  title: "Components/Navigation/StepWizard",
  component: StepWizard,
  argTypes: {
    direction: {
      control: {
        type: "radio",
        options: ["horizontal", "vertical"],
      },
    },
    initial: {
      control: {
        type: "number",
      },
    },
    status: {
      control: {
        type: "radio",
        options: ["wait", "process", "finish", "error"],
      },
    },
    current: {
      control: {
        type: "number",
      },
      defaultValue: 3,
    },
  },
};
const Template = ({ ...rest }) => {
  const data = [
    {
      title: "Choose Framework",
    },
    {
      title: "Account connection",
    },
    {
      title: "Twitter Connection",
    },
    {
      title: "General Settings",
    },
    {
      title: "General Settings",
    },
  ];
  return (
    <Card>
      <StepWizard
        data={data}
        current={rest.current}
        direction={rest.direction}
        initial={rest.initial}
        status={rest.status}
      />
    </Card>
  );
};
export const Primary: any = Template.bind({});
