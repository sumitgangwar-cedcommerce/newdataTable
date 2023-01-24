import React from "react";
import { Card } from "../../Card";
import Contact from "./Contact";

export default {
  title: "Templates/Contact",
  component: Contact,
  argTypes: {},
};

const Template = () => {
  return (
    <Card>
      <Contact />
    </Card>
  );
};

export const Primary = Template.bind({});
