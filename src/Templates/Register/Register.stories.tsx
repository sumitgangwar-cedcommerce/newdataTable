import React from "react";

import Register from "./Register";

export default {
  title: "Templates/Authentication/Register",
  component: Register,
};

const Template = ({ ...rest }) => {
  return <Register />;
};

export const Primary = Template.bind({});
