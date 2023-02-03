import React from "react";
import { Button } from "..";
import { ButtonI } from "./Button";
import { Meta } from "@storybook/react";
import { Card } from "../Card";
import { Home, Settings } from "react-feather";
import FlexLayout from "../FlexLayout/FlexLayout";
import ToolTip from "../ToolTip/ToolTip";
import { DocData } from "./BtnDocData";
import * as Icons from "../../storybook/Foundation/Icons/Icons";
const allIcons: any = { ...Icons };
import "../../storybook.css";
import AccordionStory from "../../storybook/AccordionStory";
export default {
  title: "Components/Actions/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "<div class='inte--Badge inte__BadgePositive--300 inte--BadgeNarrow inte--BadgeLight'><div class='inte--Badge-content'><span>STABLE</span></div></div><p><blockquote>Buttons communicate actions that users can take. They should be easy to find among other elements.</blockquote></p> <h3><strong>How to Import</strong></h3><p class='py-15'><code>import { Button } from @cedcommerce/ounce-ui;</code></p> <p class='my-15'>Component Sourcecode on <a target='_blank' href='https://github.com/cedcommerce/ounce-ui/tree/gh-pages/src/components/Button'><code>Github <svg x width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-external-link'><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path><polyline points='15 3 21 3 21 9'></polyline><line x1='10' y1='14' x2='21' y2='3'></line></svg></code></a></p>",
      },
    },
  },
  argTypes: {
    children: {
      description: "Button Content",
      control: {
        type: "text",
        disable: true
      },
    },
    content: {
      description: "Button Content",
      control: {
        type: "text",
      },
      defaultValue: "Button",
    },
    icon: {
      description: "Set Button Icon",
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
      defaultValue: "Search",
    },
    type: {
      description: "Button bg color type",
      control: {
        type: "radio",
        options: [
          "Primary",
          "Danger",
          "DangerOutlined",
          "Secondary",
          "Outlined",
          "DangerPlain",
          "TextButton",
        ],
      },
      defaultValue: "Primary",
    },
    FullBtn: {
      description: "Set Button length",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    thickness: {
      description: "Set Button thickness",
      control: {
        type: "radio",
        options: ["large", "thin", "extraThin"],
      },
      defaultValue: "large",
    },
    halign: {
      description:
        "Button horizontal alignment Usually works with icons and Full lenght buttons ",
      control: {
        type: "radio",
        options: ["Equal", "End", "Start", "Between", "Center"],
      },
      defaultValue: "Equal",
    },
    iconAlign: {
      description: "Button icon Alignment",
      control: {
        type: "radio",
        options: ["left", "right"],
      },
      defaultValue: "left",
    },
    loading: {
      description: "Set Button loading state",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    disable: {
      description: "Set Button disable state",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    onClick: {
      description: "Button onclick function",
      control: {
        type: "function",
      },
    },
    onAction: {
      description: "Button onAction",
      control: {
        type: "function",
        disable: true,
      },
    },
    tabIndex: {
      description: "Button tabIndex",
      control: {
        type: "number",
      },
      defaultValue: "1",
    },
  },
} as Meta;
interface NewI extends ButtonI {
  icon: "home";
}

const Template = (rest: NewI) => {
  // retrieves the appropriate icon passes it as a component prop

  return (
    <Card cardType="Default" title={"Button"}>
      <Button
        {...rest}
        onClick={() => {}}
        icon={allIcons[rest.icon]({
          size: `${
            rest.thickness == "large"
              ? 20
              : rest.thickness == "thin"
              ? 20
              : rest.thickness == "extraThin"
              ? 16
              : 20
          }`,
          color: `${
             rest.type == "Primary" 
              ? "var(--inte-G0)"
              : rest.type == "Danger"
              ? "var(--inte-G0)"
              : rest.type == "DangerOutlined" && !rest.disable
              ? "var(--inte-R200)"
              : rest.type == "DangerOutlined" && rest.disable
              ? "var(--inte-R55)"
              : rest.type == "Secondary" && !rest.disable
              ? "var(--inte-G800)"
              : rest.type == "Secondary" && rest.disable
              ? "var(--inte-G50)"
              : rest.type == "Outlined" && !rest.disable
              ? "var(--inte-G800)"
              : rest.type == "Outlined" && rest.disable
              ? "var(--inte-G40)"
              : rest.type == "DangerPlain" && !rest.disable
              ? "var(--inte-R200)"
              : rest.type == "DangerPlain" && rest.disable
              ? "var(--inte-R55)"
              : rest.type == "TextButton" && !rest.disable
              ? "var(--inte-G200)"
              : rest.type == "TextButton" && rest.disable
              ? "var(--inte-G50)"
              : "var(--inte-G0)"
          }`,
        })}
        FullBtn={rest.FullBtn}
      />
    </Card>
  );
};
export const Primary: any = Template.bind({});

// Button Types
const types = [
  "Primary",
  "Danger",
  "DangerOutlined",
  "Secondary",
  "Outlined",
  "DangerPlain",
  "TextButton",
];

export const Types: any = Template.bind({});
Types.story = {
  parameters: {
    docs: {
      storyDescription:
        "<blockquote>Button types are used as per the requirements of the app, that allow users to easily differentiate between the types of actions. Variants allow you to define the styles used across multiple buttons. It is therefore important that the different variants are implemented consistently across products, so that they message the correct actions</blockquote><p><strong>Primary action </strong>: Primary buttons should be a strong visual indicator to help the user to complete their journey.</p><p><strong>Secondary action</strong> : Secondary buttons are the alternative we give users to the primary action.</p><p><strong>Distructive action</strong> : If a particular destructive action is the primary action, it is usally a good idea to flag this visually with a “destructive” variant of a button. This makes it clear to the user that they are about to take a highly consequential action.</p>",
    },
  },
};
Types.decorators = [
  () => (
    <Card cardType="Default" title={"Button Type Options"}>
      <FlexLayout spacing="loose" valign="center">
        {types.map((variant: any) => (
          <Button thickness="large" type={variant}>{variant}</Button>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Button Length
export const Length: any = Template.bind({});
Length.story = {
  parameters: {
    docs: {
      storyDescription: "<h4 class='hello'>myStoryFunctionDescription</h4>",
    },
  },
};
Length.decorators = [
  () => (
    <Card title={"Button Length Options"}>
      <FlexLayout spacing="extraLoose" direction="vertical">
        <Button
          thickness="large"
          FullBtn={true}
        >"Full Width Button</Button>
      </FlexLayout>
    </Card>
  ),
];

// Button thickness
const typesthickness = [
  "Primary",
  "Danger",
  "DangerOutlined",
  "Secondary",
  "Outlined",
  "DangerPlain",
  "TextButton",
];
export const Thickness: any = Template.bind({});
Thickness.decorators = [
  () => (
    <Card title={"Button Thickness Options"}>
      <FlexLayout direction="vertical" spacing="loose">
        <Card title={"Large"}>
          <FlexLayout spacing="tight" valign="center">
            {typesthickness.map((variant: any) => (
              <Button type={variant}  thickness={"large"}>{variant}</Button>
            ))}
          </FlexLayout>
        </Card>
        <Card title={"Thin"}>
          <FlexLayout spacing="tight" valign="center">
            {typesthickness.map((variant: any) => (
              <Button type={variant}  thickness={"thin"}>{variant}</Button>
            ))}
          </FlexLayout>
        </Card>
        <Card title={"ExtraThin"}>
          <FlexLayout spacing="tight" valign="center">
            {typesthickness.map((variant: any) => (
              <Button
                type={variant}
                thickness={"extraThin"}
              >{variant}</Button>
            ))}
          </FlexLayout>
        </Card>
      </FlexLayout>
    </Card>
  ),
];

// Button Halign
const halign = ["Equal", "End", "Start", "Between", "Center"];
export const Halign: any = Template.bind({});
Halign.decorators = [
  () => (
    <Card
      subTitle={"Works with Icon Only and Full Button"}
      title={"Icon Alignment in Button"}
    >
      <FlexLayout spacing="extraLoose" direction="vertical">
        {halign.map((variant: any) => (
          <Button
            thickness="large"
            icon={<Home size={20} color="#ffffff" />}
            FullBtn={true}
            halign={variant}
          >{variant}</Button>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// iconAlign
const iconAlign = ["left", "right"];
export const Icon_Align: any = Template.bind({});
Icon_Align.decorators = [
  () => (
    <Card title={"Icon Alignment Option"}>
      <FlexLayout spacing="extraLoose">
        {iconAlign.map((variant: any) => (
          <Button
            thickness="large"
            iconAlign={variant}
            icon={<Home color="#ffffff" size={20} />}
          >{variant}</Button>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Disable

export const Disable: any = Template.bind({});
Disable.decorators = [
  () => (
    <Card title={"Disabled Button Options"}>
      <FlexLayout spacing="loose" valign="center">
        {types.map((variant: any) => (
          <Button
            thickness="large"
            type={variant}
            disable={true}
          >Disabled button</Button>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Loading
export const Loading: any = Template.bind({});
Loading.decorators = [
  () => (
    <Card title={"Loading States of Button"}>
      <FlexLayout spacing="loose" valign="center">
        {types.map((variant: any) => (
          <Button
            thickness="large"
            type={variant}
            loading={true}
          >{variant}</Button>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Icon Only
export const Only_Icon: any = Template.bind({});
Only_Icon.decorators = [
  () => (
    <Card title={"Icon Only Options"}>
      <FlexLayout direction="vertical">
        <Card title={"Thickness Large"}>
          <FlexLayout spacing="loose" valign="center">
            {types.map((variant: any) => (
              <ToolTip open={false} helpText={variant} position="bottom">
                <Button
                  thickness="large"
                  type={variant}
                  icon={
                    <Settings
                      color={
                        variant == "Primary" || variant == "Danger"
                          ? "#ffffff"
                          : variant == "DangerOutlined" ||
                            variant == "DangerPlain"
                          ? "#DF5146"
                          : variant == "Secondary" || variant == "Outlined"
                          ? "#1C2433"
                          : variant == "TextButton"
                          ? "#70747e"
                          : "#dddddd"
                      }
                      size={20}
                    />
                  }
                ></Button>
              </ToolTip>
            ))}
          </FlexLayout>
        </Card>
        <Card title={"Thickness Thin"}>
          <FlexLayout spacing="loose" valign="center">
            {types.map((variant: any) => (
              <ToolTip open={false} helpText={variant} position="bottom">
                <Button
                  thickness="thin"
                  type={variant}
                  icon={
                    <Settings
                      color={
                        variant == "Primary" || variant == "Danger"
                          ? "#ffffff"
                          : variant == "DangerOutlined" ||
                            variant == "DangerPlain"
                          ? "#DF5146"
                          : variant == "Secondary" || variant == "Outlined"
                          ? "#1C2433"
                          : variant == "TextButton"
                          ? "#70747e"
                          : "#dddddd"
                      }
                      size={20}
                    />
                  }
                ></Button>
              </ToolTip>
            ))}
          </FlexLayout>
        </Card>
        <Card title={"Thickness ExtraThin"}>
          <FlexLayout spacing="loose" valign="center">
            {types.map((variant: any) => (
              <ToolTip open={false} helpText={variant} position="bottom">
                <Button
                  thickness="extraThin"
                  type={variant}
                  icon={
                    <Settings
                      color={
                        variant == "Primary" || variant == "Danger"
                          ? "#ffffff"
                          : variant == "DangerOutlined" ||
                            variant == "DangerPlain"
                          ? "#DF5146"
                          : variant == "Secondary" || variant == "Outlined"
                          ? "#1C2433"
                          : variant == "TextButton"
                          ? "#70747e"
                          : "#dddddd"
                      }
                      size={20}
                    />
                  }
                ></Button>
              </ToolTip>
            ))}
          </FlexLayout>
        </Card>
      </FlexLayout>
    </Card>
  ),
];

export function Documentation() {
  return (
    <div className="story-documentation">
      {DocData.map((menu: any, index: any) => {
        return <AccordionStory title={menu.title} content={menu.description} />;
      })}
    </div>
  );
}

// Scroller Function

export function Scroller() {
  return (
    <div className="story-scroller">
      <ul>
        <li>
          <a href="#anchor--ounce-button--types" target={"_top"}>
            Types
          </a>
        </li>
        <li>
          <a href="#anchor--ounce-button--length">Length</a>
        </li>
        <li>
          <a href="#anchor--ounce-button--thickness">Thickness</a>
        </li>
      </ul>
    </div>
  );
}
