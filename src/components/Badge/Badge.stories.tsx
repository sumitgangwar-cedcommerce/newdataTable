import React from "react";
import Card from "../Card/Card";
import FlexLayout from "../FlexLayout/FlexLayout";
import Badge from "./Badge";
import { Check } from "react-feather";
import * as Icons from "../../storybook/Foundation/Icons/Icons";
const allIcons: any = { ...Icons };

export default {
  title: "Components/Media/Badge",
  component: Badge,
  argTypes: {
    children: {
      description: "Enter children",
      control: {
        type: "text",
      },
      defaultValue: "Badge",
    },
    dot: {
      description: "Badge Change in Dot ",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },

    type: {
      description: "Set type badge background color",
      control: {
        type: "radio",
        options: ["Primary", "Secondary", "Success", "Error", "Warning"],
      },
      defaultValue: "Primary",
    },
    helpText: {
      description: "Set help text string",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    helpPosition: {
      description: "Set position of help",
      control: {
        type: "radio",
        options: ["left", "right", "top", "bottom"],
      },
      defaultValue: "bottom",
    },
    iconAlign: {
      description: "Set Postion of Icon",
      control: {
        type: "radio",
        options: ["left", "right"],
      },
      defaultValue: "left",
    },
    variant: {
      description: "Choose variant of Badge",
      control: {
        type: "radio",
        options: ["filled", "accent"],
      },
      defaultValue: "filled",
    },
    icon: {
      description: "Set Badge  Icon",
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
      defaultValue: "Search",
    },
    size: {
      description: "Set Size of Badage",
      control: {
        type: "radio",
        options: ["Large", "Medium", "Small"],
      },
      defaultValue: "Large",
    },
    customBgColor: {
      description: "Set Custom Bg Color",
      control: {
        type: "color",
      },
      defaultValue: "",
    },
    badgeTextColor: {
      description: "Set Custom Color",
      control: {
        type: "color",
      },
      defaultValue: "",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card>
      <Badge
        variant={rest.variant}
        size={rest.size}
        icon={allIcons[rest.icon]({
          size: 16,
          color: `${
            rest.variant === "accent" && rest.type === "Primary"
              ? "var(--inte-P900)"
              : rest.variant === "accent" && rest.type == "Secondary"
              ? "var(--inte-G800)"
              : rest.variant === "accent" && rest.type == "Success"
              ? "var(--inte-GR150)"
              : rest.variant === "accent" && rest.type == "Error"
              ? "var(--inte-R400)"
              : rest.variant === "accent" && rest.type == "Warning"
              ? "var(--inte-Y600)"
              : "var(--inte-G0)"
          }`,
        })}
        iconAlign={rest.iconAlign}
        type={rest.type}
        customBgColor={rest.customBgColor}
        badgeTextColor={rest.badgeTextColor}
        helpText={rest.helpText}
        helpPosition={rest.helpPosition}
        dot={rest.dot}
      >
        {rest.children}
      </Badge>
    </Card>
  );
};

export const Primary: any = Template.bind({});

//Types
const thickness = ["Primary", "Secondary", "Success", "Error", "Warning"];
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
//Size
export const Size: any = Template.bind({});
Size.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {["Small", "Medium", "Large"].map((variant: any) => (
          <Badge size={variant} type={variant}>
            {variant} Badge
          </Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Badge with Filled Variant
export const BadgeFilledVariant: any = Template.bind({});
BadgeFilledVariant.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {thickness.map((variant: any) => (
          <Badge variant="filled" type={variant}>
            {variant} Badge
          </Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Badge with Filled Variant with left and Right Icon Align
export const BadgeFilledVariantWithLeftAndRightIconAlign: any = Template.bind(
  {}
);
BadgeFilledVariantWithLeftAndRightIconAlign.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {thickness.map((variant: any) => (
          <FlexLayout direction="vertical" spacing="loose">
            <Badge
              variant="filled"
              icon={<Check size={16} />}
              iconAlign="left"
              type={variant}
            >
              {variant} Badge
            </Badge>
            <Badge
              variant="filled"
              icon={<Check size={16} />}
              iconAlign="right"
              type={variant}
            >
              {variant} Badge
            </Badge>
          </FlexLayout>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Badge with Accent Variant
export const BadgeAccentVariant: any = Template.bind({});
BadgeAccentVariant.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {thickness.map((variant: any) => (
          <Badge variant="accent" type={variant}>
            {variant} Badge
          </Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Badge with Accent Variant with left and Right Icon Align
export const AccentFilledVariantWithLeftAndRightIconAlign: any = Template.bind(
  {}
);
AccentFilledVariantWithLeftAndRightIconAlign.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {thickness.map((variant: any) => (
          <FlexLayout direction="vertical" spacing="loose">
            <Badge
              variant="accent"
              icon={<Check size={16} />}
              iconAlign="left"
              type={variant}
            >
              {variant} Badge
            </Badge>
            <Badge
              variant="accent"
              icon={<Check size={16} />}
              iconAlign="right"
              type={variant}
            >
              {variant} Badge
            </Badge>
          </FlexLayout>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Badge with Dot Variant
export const BadgeDotVariant: any = Template.bind({});
BadgeDotVariant.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {thickness.map((variant: any) => (
          <Badge dot size="Large" type={variant}>
            {variant} Badge
          </Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Badge with Left Icon
export const BadgeIconLeftAlign: any = Template.bind({});
BadgeIconLeftAlign.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {thickness.map((variant: any) => (
          <Badge icon={<Check size={16} />} iconAlign="left" type={variant}>
            {variant} Badge
          </Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];
// Badge with Right Icon
export const BadgeIconRightAlign: any = Template.bind({});
BadgeIconRightAlign.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {thickness.map((variant: any) => (
          <Badge icon={<Check size={16} />} iconAlign="right" type={variant}>
            {variant} Badge
          </Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];
// Badge with Only Icon
export const BadgeWithOnlyIcon: any = Template.bind({});
BadgeWithOnlyIcon.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose" direction="vertical">
        {thickness.map((variant: any) => (
          <FlexLayout spacing="loose">
            <Badge size="Large" icon={<Check size={16} />} type={variant} />
            <Badge size="Medium" icon={<Check size={16} />} type={variant} />
            <Badge size="Small" icon={<Check size={16} />} type={variant} />
          </FlexLayout>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Badge with CustomBgColor
export const BadgeWithCustomBgcolorAndCustomColor: any = Template.bind({});
BadgeWithCustomBgcolorAndCustomColor.decorators = [
  () => (
    <Card>
      <Badge size="Large" customBgColor="#e6edfa" badgeTextColor="#3577f1">
        Active
      </Badge>
    </Card>
  ),
];

// Badge with Help Text
export const BadgeWithHelpText: any = Template.bind({});
BadgeWithHelpText.decorators = [
  () => (
    <Card>
      <Badge
        helpText="Help tooltip"
        size="Large"
        customBgColor="#e6edfa"
        badgeTextColor="#3577f1"
      >
        Active
      </Badge>
    </Card>
  ),
];
