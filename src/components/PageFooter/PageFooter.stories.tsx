import React from "react";
import { Card } from "../..";
import PageFooter from "./PageFooter";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Layout/PageFooter",
  component: PageFooter,
  argTypes: {
    children: {
      description: "Footer children",
      control: {
        type: "text",
      },
      defaultValue: "Page Footer children",
    },
  },
} as Meta;

const Template = ({ ...rest }) => {
  return (
      <PageFooter>{rest.children}</PageFooter>
  );
};

export const Primary = Template.bind({});
