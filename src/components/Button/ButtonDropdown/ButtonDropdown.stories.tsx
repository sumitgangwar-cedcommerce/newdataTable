import React from "react";
import { useState } from "react";
import * as Icon from "../../../Icon/Icon";
import { ButtonDropdown } from "../..";
import { Card } from "../../Card";
import { activity ,logout, down } from "../../../Icon/Icon";
const iconMap = { ...Icon };

export default {
  title: "Components/Actions/ButtonDropdown",
  component: ButtonDropdown,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    title: {
      description: "Button text",
      control: {
        type: "text",
      },
      defaultValue: "Button",
    },
    content: {
      description: "Button text",
      control: {
        disable:true,
        type: "text",
      },
      defaultValue: "",
    },
    list: {
      description: "You can send array of objects for dropdown Items",
      control: {
        disable: true,
      },
    },
    type: {
      description: "Button bg color type",
      control: {
        type: "radio",
        options: [
          "Primary",
          "Plain",
          "Danger",
          "Secondary",
          "PlainDark",
          "Small",
          "Outlined",
          "none",
        ],
      },
      defaultValue: "Primary",
    },
   
    thickness: {
      description: "Set Button thickness",
      control: {
        type: "radio",
        options: ["extraThin", "thin", "large"],
      },
      defaultValue: "thin",
    },
    halign: {
      description: "Button horizontal alignment Usually works with icons and Full lenght buttons ",
      control: {
        type: "radio",
        options: ["Equal", "End", "Start", "Between", "None"],
      },
      defaultValue: "Equal",
    },
    iconAlign: {
      description: "Buttondropdown icon Alignment",
      control: {
        type: "radio",
        options: ["left", "right"],
      },
      defaultValue: "left",
    },
    loading: {
      description: "Set Buttondropdown loading state",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    disable: {
      description: "Set Buttondropdown disable state",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    icon: {
      description: "Set Button icon",
      control: {
        type: "select",
        options: Object.keys(iconMap),
        disable:true,
      },
    },
    onClick: {
      description: "Button Buttondropdown onClick function",
      control: {
        type: "function",
      },
    },
    onAction: {
      description: "Buttondropdown onAction function",
      control: {
        type: "function",
        disable: true,
      },
    },
  },
};

const Template = ({ ...rest }) => {
  const [buttonText, setButtonText] = useState("More Actions");
  const [buttonIcon, setButtonIcon] = useState(activity);
  const changeText = (text: any) => setButtonText(text);
  const changeIcon = (text: any) => setButtonIcon(text);

  return (
    <Card title={"Button Dropdown"}>
        <ButtonDropdown
          {...rest}
          title={rest.title}
          icon={buttonIcon}
          type={rest.type}
          content={rest.content}
          thickness={rest.thickness}
          list={[
            {
              label: "Dropdown Item 1",
              onClick: () => {changeText("Dropdown Item 1"),changeIcon(activity)},
              icon: activity,
            },
            {
              label: "Dropdown Item 2",
              onClick: () => {changeText("Dropdown Item 2"),changeIcon(logout)},
              icon: logout,
            },
            {
              label: "Dropdown Item 3",
              icon: down,
              onClick: () => {changeText("Dropdown Item 3"),changeIcon(down)},
            },
          ]}
        />
    </Card>
  );
};

export const Primary: any = Template.bind({});
