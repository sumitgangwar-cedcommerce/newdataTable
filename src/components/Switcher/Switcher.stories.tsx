import React from "react";
import { useState } from "react";
import Switcher from "./Switcher";
import Card from "../Card/Card";

export default {
  title: "Components/Actions/Switcher",
  component: Switcher,
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
  const icon= <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M0 0.5H20V15.5H0V0.5Z" fill="white"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.5H20V15.5H0V5.5Z" fill="#0039A6"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M0 10.5H20V15.5H0V10.5Z" fill="#D52B1E"/>
  </svg>
  
  const [buttonText, setButtonText] = useState("More Actions");
  const [buttonIcon, setButtonIcon] = useState(icon);
  const changeText = (text: any) => setButtonText(text);
  const changeIcon = (text: any) => setButtonIcon(text);

  return (
    <Card title={"Switcher"}>
        <Switcher
          {...rest}
          title={rest.title}
          icon={<>{buttonIcon}</>}
          type={rest.type}
          thickness={rest.thickness}
          list={[
            {
              label: "Country 1",
              onClick: () => {changeText("Country 1"),changeIcon(<>{buttonIcon}</>)},
              icon: <>{buttonIcon}</>,
            },
            {
              label: "Country 2",
              onClick: () => {changeText("Country 2"),changeIcon(<>{buttonIcon}</>)},
              icon: <>{buttonIcon}</>,
            },
            {
              label: "Country 3",
              icon: <>{buttonIcon}</>,
              onClick: () => {changeText("Country 3"),changeIcon(<>{buttonIcon}</>)},
            },
          ]}
        />
    </Card>
  );
};

export const Primary: any = Template.bind({});
