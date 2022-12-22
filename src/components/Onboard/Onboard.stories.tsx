import React from "react";
import Onboard from "./Onboard";

export default {
  title: "Components/Onboard",
  component: Onboard,
  argTypes: {
    title: {
      control: {
        type: "text",
      },
      defaultValue: "Welcome Onboard",
    },
  },
};

const Template = ({ ...rest }) => {
  return <Onboard title={rest.title} />;
};

export const Primary = Template.bind({});
