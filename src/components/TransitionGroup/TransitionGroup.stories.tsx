import React from "react";
import { Card } from "..";
import TransitionGroup from "./TransitionGroup";

export default {
  title: "Components/Form/TransitionGroup",
  component: TransitionGroup,
};

const Template = () => {
  return (
    <Card>
      <TransitionGroup />
    </Card>
  );
};

export const Primary = Template.bind({});
