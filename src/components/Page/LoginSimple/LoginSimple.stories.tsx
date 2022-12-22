import React from "react";
import LoginSimple from "./LoginSimple";

export default {
  title: "Components/Page/LoginSimple",
  component: LoginSimple,
  argTypes: {},
};

const Template = () => {
  return (
    <>
      <LoginSimple
        heading="Welcome to Twitter Connect App"
        subheading="By CedCommerce"
        footertitle="A CedCommerce Inc Product @ 2022"
      />
    </>
  );
};

export const Primary = Template.bind({});
