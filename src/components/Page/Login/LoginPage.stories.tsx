import React from "react";
import LoginPage from "./LoginPage";

export default {
  title: "Templates/Authentication/Login",
  component: LoginPage,
  argTypes: {},
};

const Template = () => {
  return (
    <>
      <LoginPage
        heading="Facebook &amp; Instagram Ads"
        subheading="Promote your products across Facebook and Instagram with Dynamic Product Ads."
        footertitle="A CedCommerce Inc Product @ 2022"
      />
    </>
  );
};

export const Primary = Template.bind({});
