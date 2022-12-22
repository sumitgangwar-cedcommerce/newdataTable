import React from "react";
import Card from "../../../components/Card/Card";
import "../../storybook.css";
import { Logo } from "../Logo/Logo";

export default {
  title: "Foundation/Logo/Logo",
  component: Logo,
  parameters: {
    docs: {},
  },
};

const Template = ({}) => {
  return (
    <Card>

    </Card>
  );
};
export const Primary: any = Template.bind({});
