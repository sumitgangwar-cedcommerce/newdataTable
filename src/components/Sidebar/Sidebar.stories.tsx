import React from "react";
import { Sidebar } from "../../index";
import { box, home, note, bag, setting } from "../../Icon/Icon";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {
    menu: {
      description: "set menue",
      control: {
        type: "array",
      },
      defaultValue: [
        {
          id: "dashboard",
          content: "Dashboard",
          path: "/panel/dashboard",
          icon: home,
        },
        {
          id: "profiling",
          content: "Profile",
          path: "/panel/profiling",
          icon: box,
        },
        {
          id: "products",
          content: "Products",
          path: "/panel/products",
          icon: note,
        },
        {
          id: "order",
          content: "Orders",
          path: "/panel/order",
          icon: bag,
        },
        {
          id: "configuration",
          content: "Configuration",
          path: "/panel/config",
          icon: setting,
        },
        {
          id: "queuedtasks",
          content: "Activities",
          path: "/panel/queuedtasks",
          icon: box,
        },
      ],
    },
    subMenu: {
      description: "set submenue",
      control: {
        type: "array",
      },
      defaultValue: [
        {
          id: "dashboard",
          content: "FAQ",
          path: "/panel/dashboard",
          icon: home,
        },
        {
          id: "profiling",
          content: "HELP",
          path: "/panel/profiling",
          icon: box,
        },
      ],
    },
    logo: {
      control: {
        disable: true,
      },
    },
  },
};

const Template = ({ ...rest }) => {
  const subMenu = [
    {
      id: "dashboard",
      content: "FAQ",
      path: "/panel/dashboard",
      icon: home,
    },
    {
      id: "profiling",
      content: "HELP",
      path: "/panel/profiling",
      icon: box,
    },
  ];
  const menu = [
    {
      id: "dashboard",
      content: "Dashboard",
      path: "/panel/dashboard",
      icon: home,
      children: [
        {
          id: "profiling1",
          content: "Create Product",
          path: "/product/12",
          // icon : box,
          children: [
            {
              id: "profiling2",
              content: "Create Product",
              path: "/product/1322",
              // icon : box
            },
            {
              id: "profiling3",
              content: "View Product",
              path: "/product/21111",
              // icon : box
            },
          ],
        },
        {
          id: "profilingrfe4",
          content: "View Product",
          path: "/product/2",
          // icon : box
        },
      ],
    },
    {
      id: "profiling",
      content: "Profile",
      path: "/panel/profiling",
      icon: box,
    },
    {
      id: "products",
      content: "Products",
      path: "/panel/products",
      icon: note,
    },
    {
      id: "order",
      content: "Orders",
      path: "/panel/order",
      icon: bag,
    },
    {
      id: "configuration",
      content: "Configuration",
      path: "/panel/config",
      icon: setting,
    },
    {
      id: "queuedtasks",
      content: "Activities",
      path: "/panel/queuedtasks",
      icon: box,
    },
  ];
  return (
    <Sidebar
      menu={menu}
      subMenu={subMenu}
      onChange={() => {
        return null;
      }}
      {...rest}
    />
  );
};

export const Primary: any = Template.bind({});
Primary.args = {};
