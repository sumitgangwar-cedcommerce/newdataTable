import React from "react";


import Login from "./Login";

export default {
  title: "Templates/Authentication/Login",
  component: Login,
  argTypes: {
    children: {
      description: "This is announcement bar children",
      control: {
        type: "text",
      },
      defaultValue: "Hello Announcment Bar",
    },
    type: {
      description: "This is type of Announcement Bar which changes Backgroud color",
      control: {
        type: "radio",
        options: ["warning", "success", "danger", "info"],
      },
      defaultValue: "warning",
    },
    align: {
      description: "Manages text Alignment",
      control: {
        type: "radio",
        options: ["left", "right", "center"],
      },
      defaultValue: "left",
    },
    onClose: {
      description: "Manage onClose Function",
      control: {
        type: "function",
      },
    },
    active: {
      description: "Show and hide Announcement",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    destroy: {
      description: "Show and hide cross button ",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Login
      
    />
  );
};

export const Primary = Template.bind({});
