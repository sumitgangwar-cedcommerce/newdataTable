import React from "react";
import { Badge } from "..";
import { BadgeI } from "./Badge";
import Card from "../Card/Card";
import FlexLayout from "../FlexLayout/FlexLayout";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    children: {
      description: "Enter children",
      control: {
        type: "text",
      },
      defaultValue: "Badge",
    },
    type: {
      description: "Set type badge background color",
      control: {
        type: "radio",
        options: [
          "Positive-100",
          "Positive-200",
          "Positive-300",
          "Negative-100",
          "Negative-200",
          "Negative-300",
          "Warning-100",
          "Warning-200",
          "Warning-300",
          "Info-100",
          "Info-200",
          "Info-300",
          "Neutral-100-Border",
          "Neutral-100",
          "Neutral-200",
          "Neutral-300",
          "Neutral-400",
        ],
      },
      defaultValue: "Positive-100",
    },
    size: {
      description: "Set badge size",
      control: {
        type: "radio",
        options: ["small", "large"],
      },
      defaultValue: "small",
    },
    badgeTextColor: {
      description: "Set badge text color",
      control: {
        type: "radio",
        options: ["dark", "light"],
      },
      defaultValue: "dark",
    },
    helpText: {
      description: "Set Help Text For tooltip",
      control: {
        type: "text",
      },
      defaultValue: "Tooltip Help Text",
    },
    customBgColor: {
      description: "Set Custom Bg Color",
      control: {
        type: "text",
      },
    },
    position: {
      description: "Set Postion of Tooltip from element",
      control: {
        type: "radio",
        options: ["bottom", "top", "left", "right"],
      },
      defaultValue: "bottom",
    },
  },
};

interface NewI extends BadgeI {
  icon: "home";
}

const Template = (rest: NewI) => {
  return (
    <Card>
      <Badge type={rest.type} {...rest} />
    </Card>
  );
};

export const Primary: any = Template.bind({});
//Types Variant
const thickness = [
  "Positive-100",
  "Positive-200",
  "Positive-300",
  "Negative-100",
  "Negative-200",
  "Negative-300",
  "Warning-100",
  "Warning-200",
  "Warning-300",
  "Info-100",
  "Info-200",
  "Info-300",
  "Neutral-100-Border",
  "Neutral-100",
  "Neutral-200",
  "Neutral-300",
  "Neutral-400",
];
export const Types: any = Template.bind({});
Types.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {thickness.map((variant: any) => (
          <Badge type={variant}>{variant} Badge</Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];
//badgeTextColor
const badgeTextColor = ["dark", "light"];
export const Badge_Text_Color: any = Template.bind({});
Badge_Text_Color.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {badgeTextColor.map((variant: any) => (
          <Badge badgeTextColor={variant} position="bottom" helpText="helpText">
            Badge
          </Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];
//size
const size = ["small", ""];
export const Size: any = Template.bind({});
Size.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {size.map((variant: any) => (
          <Badge size={variant} position="bottom" helpText="helpText">
            Badge
          </Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];

export const BadgeWithHelpText: any = Template.bind({});
BadgeWithHelpText.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        <Badge helpText="helpText" position="bottom">
          Badge With HelpText
        </Badge>
      </FlexLayout>
    </Card>
  ),
];

export const BadgeWithOutHelpText: any = Template.bind({});
BadgeWithOutHelpText.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        <Badge>Badge WithOut HelpText</Badge>
      </FlexLayout>
    </Card>
  ),
];

const position = ["bottom", "top", "left", "right"];
export const BadgeHelpTextPosition: any = Template.bind({});
BadgeHelpTextPosition.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {position.map((variant: any) => (
          <Badge
            size={variant}
            position={variant}
            helpText={`Badge position ${variant}`}
          >
            Badge position {variant}
          </Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];
