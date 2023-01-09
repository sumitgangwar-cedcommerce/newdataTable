import React, { useState } from "react";
import { Tabs, Card } from "..";

export default {
  title: "Components/Navigation/Tabs",
  component: Tabs,
  argTypes: {
    value: {
      control: {
        type: "array",
        disable: true,
      },
    },
    selected: {
      control: {
        type: "text",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onChange: {
      control: {
        type: "function",
      },
    },
    alignment: {
      description: "set alignment os wizard",
      control: {
        type: "radio",
        options: ["vertical", "horizontal"],
      },
      defaultValue: "horizontal",
    },
    animate: {
      description: "Set animation style of Tabs Works only with Horizontal Alignemnt",
      control: {
        type: "radio",
        options: ["type1", "type2"],
      },
      defaultValue: "type1",
    },
  },
};

const Template = ({ ...rest }) => {
  const tabs = [
    {
      id: "all-customers",
      content: "All Customers",
    },
    {
      id: "Error",
      content: "Error",
    },
    {
      id: "Pending",
      content: "Pending",
    },
    {
      id: "Warning",
      content: "Warning",
      error: true,
    },
    {
      id: "Finished",
      content: "Finished",
    },
    {
      id: "Not Uploaded",
      content: "Not Uploaded",
    },
  ];

  const [selected, setSelected] = useState("Pending");

  function showTabs(tabs: any) {
    switch (tabs) {
      case "all-customers":
        return <h1>All Customers</h1>;
      case "Not Uploaded":
        return <h1>Not Uploaded</h1>;
      case "Finished":
        return <h1>Finished</h1>;
      case "Warning":
        return <h1>Warning</h1>;
      case "Pending":
        return <h1>Pending</h1>;
      case "Error":
        return <h1>Error</h1>;
      default:
        return <h1>default</h1>;
    }
  }

  return (
    <Tabs
      // animate={rest.animate}
      value={tabs}
      selected={selected}
      onChange={(e) => setSelected(e)}
      alignment={rest.alignment}
      disabled={rest.disabled}
    >
      <Card title={"Card Heading"}>{showTabs(selected)}</Card>
    </Tabs>
  );
};

export const Primary = Template.bind({});

//vertical_without_badge
export const vertical_without_badge: any = Template.bind({});
vertical_without_badge.decorators = [
  () => {
    const [selected, setSelected] = useState("all-customers");
    const tabs = [
      {
        id: "all-customers",
        content: "All",
      },
      {
        id: "Error",
        content: "Product",
      },
      {
        id: "Pending",
        content: "Pending",
      },
      {
        id: "Warning",
        content: "Warning",
        error: true,
      },
      {
        id: "Finished",
        content: "Finished",
      },
      {
        id: "Not Uploaded",
        content: "Not Uploaded",
        disabled: false,
      },
    ];

    function showTabs(tabs: any) {
      switch (tabs) {
        case "all-customers":
          return <h1>Tab 1</h1>;
        case "Not Uploaded":
          return <h1>Not Uploaded</h1>;
        case "Finished":
          return <h1>Finished</h1>;
        case "Warning":
          return <h1>Warning</h1>;
        case "Pending":
          return <h1>Pending</h1>;
        case "Error":
          return <h1>Error</h1>;
        default:
          return <h1>default</h1>;
      }
    }
    return (
      <Tabs
        value={tabs}
        selected={selected}
        onChange={(e) => setSelected(e)}
        alignment="vertical"
      >
        <Card title={"Card Heading"}>{showTabs(selected)}</Card>
      </Tabs>
    );
  },
];
//horizontal_without_badge
export const horizontal_without_badge: any = Template.bind({});
horizontal_without_badge.decorators = [
  () => {
    const [selected, setSelected] = useState("all-customers");
    const tabs = [
      {
        id: "all-customers",
        content: "All",
      },
      {
        id: "Error",
        content: "Product",
      },
      {
        id: "Pending",
        content: "Pending",
      },
      {
        id: "Warning",
        content: "Warning",
        error: true,
      },
      {
        id: "Finished",
        content: "Finished",
      },
      {
        id: "Not Uploaded",
        content: "Not Uploaded",
        disabled: false,
      },
    ];

    function showTabs(tabs: any) {
      switch (tabs) {
        case "all-customers":
          return <h1>Tab 1</h1>;
        case "Not Uploaded":
          return <h1>Not Uploaded</h1>;
        case "Finished":
          return <h1>Finished</h1>;
        case "Warning":
          return <h1>Warning</h1>;
        case "Pending":
          return <h1>Pending</h1>;
        case "Error":
          return <h1>Error</h1>;
        default:
          return <h1>default</h1>;
      }
    }
    return (
      <Tabs
        value={tabs}
        selected={selected}
        onChange={(e) => setSelected(e)}
        alignment="horizontal"
      >
        <Card title={"Card Heading"}>{showTabs(selected)}</Card>
      </Tabs>
    );
  },
];

//vertical_with_badges
export const vertical_with_badges: any = Template.bind({});
vertical_with_badges.decorators = [
  () => {
    const [selected, setSelected] = useState("all-customers");
    const tabs = [
      {
        id: "all-customers",
        content: "All",
        badge: true,
        badgeBgColor: "#ff0000",
        badgeContent: "Helo",
        badgeTextColor: "light",
        customBgColors: "red",
      },
      {
        id: "Error",
        content: "Product",
        badge: true,
        badgeBgColor: "#ff0000",
        badgeContent: "Helo",
        badgeTextColor: "light",
      },
      {
        id: "Pending",
        content: "Pending",
        badge: false,
        badgeBgColor: "#ff0000",
        badgeContent: "Helo",
        badgeTextColor: "light",
      },
      {
        id: "Warning",
        content: "Warning",
        error: true,
        badge: false,
        badgeBgColor: "#ff0000",
        badgeContent: "Helo",
        badgeTextColor: "dark",
      },
      {
        id: "Finished",
        content: "Finished",
        badge: false,
        badgeBgColor: "#ff0000",
        badgeContent: "Helo",
        badgeTextColor: "light",
      },
      {
        id: "Not Uploaded",
        content: "Not Uploaded",
        disabled: false,
        badgeTextColor: "light",
      },
    ];

    function showTabs(tabs: any) {
      switch (tabs) {
        case "all-customers":
          return <h1>Tab 1</h1>;
        case "Not Uploaded":
          return <h1>Not Uploaded</h1>;
        case "Finished":
          return <h1>Finished</h1>;
        case "Warning":
          return <h1>Warning</h1>;
        case "Pending":
          return <h1>Pending</h1>;
        case "Error":
          return <h1>Error</h1>;
        default:
          return <h1>default</h1>;
      }
    }
    return (
      <Tabs
        value={tabs}
        selected={selected}
        onChange={(e) => setSelected(e)}
        alignment="vertical"
      >
        <Card title={"Card Heading"}>{showTabs(selected)}</Card>
      </Tabs>
    );
  },
];
//horizontal_without_badge
export const horizontal_with_badge: any = Template.bind({});
horizontal_with_badge.decorators = [
  () => {
    const [selected, setSelected] = useState("all-customers");
    const tabs = [
      {
        id: "all-customers",
        content: "All",
        badge: true,
        badgeBgColor: "#ff0000",
        badgeContent: "Helo",
        badgeTextColor: "light",
        customBgColors: "red",
      },
      {
        id: "Error",
        content: "Product",
        badge: true,
        badgeBgColor: "#ff0000",
        badgeContent: "Helo",
        badgeTextColor: "light",
      },
      {
        id: "Pending",
        content: "Pending",
        badge: false,
        badgeBgColor: "#ff0000",
        badgeContent: "Helo",
        badgeTextColor: "light",
      },
      {
        id: "Warning",
        content: "Warning",
        error: true,
        badge: false,
        badgeBgColor: "#ff0000",
        badgeContent: "Helo",
        badgeTextColor: "dark",
      },
      {
        id: "Finished",
        content: "Finished",
        badge: false,
        badgeBgColor: "#ff0000",
        badgeContent: "Helo",
        badgeTextColor: "light",
      },
      {
        id: "Not Uploaded",
        content: "Not Uploaded",
        disabled: false,
        badgeTextColor: "light",
      },
    ];

    function showTabs(tabs: any) {
      switch (tabs) {
        case "all-customers":
          return <h1>Tab 1</h1>;
        case "Not Uploaded":
          return <h1>Not Uploaded</h1>;
        case "Finished":
          return <h1>Finished</h1>;
        case "Warning":
          return <h1>Warning</h1>;
        case "Pending":
          return <h1>Pending</h1>;
        case "Error":
          return <h1>Error</h1>;
        default:
          return <h1>default</h1>;
      }
    }
    return (
      <Tabs
        value={tabs}
        selected={selected}
        onChange={(e) => setSelected(e)}
        alignment="horizontal"
      >
        <Card title={"Card Heading"}>{showTabs(selected)}</Card>
      </Tabs>
    );
  },
];
