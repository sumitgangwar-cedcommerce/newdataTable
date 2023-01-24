// eslint-disable-all-line prettier/prettier
import React from "react";
import { Card, FlexLayout } from "..";
import TextStyles from "../TextStyles/TextStyles";
import FlexChild from "./FlexChild";
import "./FlexStories.css";

export default {
  title: "Components/Layout/FlexLayout",
  component: FlexLayout,
  parameters: {
    docs: {
      description: {
        component:
          "*FLEXLAYOUT* component is an Essentail Ounce component for Using Layout and Structuring of Page. By using this you can easily *WIDTH* of childrens * SPACING* between components",
      },
    },
  },
  argTypes: {
    valign: {
      description: "Manages the Vertical alignment of children items",
      control: {
        type: "radio",
        options: ["start", "center", "end", "stretch", "baseline", "none"],
      },
      defaultValue: "none",
    },
    valignTab: {
      description: "Manages the vertical alignment of children items in tab view",
      control: {
        type: "radio",
        options: ["start", "center", "end", "stretch","baseline", "none"],
      },
      defaultValue: "none",
    },
    valignMob: {
      description: "Manages the vertical alignment of children items in mobile view",
      control: {
        type: "radio",
        options: ["start", "center", "end", "stretch","baseline", "none"],
      },
      defaultValue: "none",
    },
    halign: {
      description: "Manages the horinzontal spacing alignment of children items",
      control: {
        type: "radio",
        options: ["start", "center", "end", "fill", "around", "evenly", "none"],
      },
      defaultValue: "none",
    },
    halignTab: {
      description: "Manages the horizontal spacing of children items in tab view",
      control: {
        type: "radio",
        options: ["start", "center", "end", "fill", "around", "evenly", "none"],
      },
      defaultValue: "none",
    },
    halignMob: {
      description: "Manages the horizontal alignment of children items in mobile view",
      control: {
        type: "radio",
        options: ["start", "center", "end", "fill", "around", "evenly", "none"],
      },
      defaultValue: "none",
    },
    direction: {
      description: "Manages the alignemtnVertical or horizontal",
      control: {
        type: "radio",
        options: ["vertical", "none"],
      },
      defaultValue: "none",
    },
    spacing: {
      description: "Manages the spacing between Items",
      control: {
        type: "radio",
        options: [
          "none",
          "extraTight",
          "mediumTight",
          "tight",
          "loose",
          "mediumLoose",
          "extraLoose",
        ],
      },
      defaultValue: "none",
    },

    childWidth: {
      description: "Makes childwidth full width",
      control: {
        type: "radio",
        options: ["fullWidth", "none"],
      },
      defaultValue: "none",
    },
    children: {
      description: "this is children",
      control: {
        type: "text",
      },
    },
    mobileWidth: {
      description: "Manages the width of child items in mobile view",
      control: {
        type: "radio",
        options: ["100", "50", "80", "75", "66", "33", "25", "20"],
      },
    },
    tabWidth: {
      description: "Manages the width of child items in tab view",
      control: {
        type: "radio",
        options: ["100", "50", "80", "75", "66", "33", "25", "20"],
      },
    },
    desktopWidth: {
      description: "Manages the width of child items in desktop view",
      control: {
        type: "radio",
        options: ["100", "50", "80", "75", "66", "33", "25", "20"],
      },
    },
    order: {
      description: "Manages the order of items",
      control: {
        type: "text",
      },
      defaultValue: "Order",
    },
    directionTab: {
      description: "Manages the direction of items on tab view",
      control: {
        type: "radio",
        options: ["vertical", "vertical-reverse", "row-reverse", "none"],
      },
      defaultValue: "none",
    },
    directionMob: {
      description: "Manages the direction of items on mobile view",
      control: {
        type: "radio",
        options: ["vertical", "vertical-reverse", "row-reverse", "none"],
      },
      defaultValue: "none",
    },
    wrap: {
      description: "Manages whether items break in viewport or overflow",
      control: {
        type: "radio",
        options: ["none", "wrap"],
      },
      defaultValue: "wrap",
    },
    wrapTab: {
      description: "Manages whether items break in viewport or overflow on tab view",
      control: {
        type: "radio",
        options: ["wrap", "noWrap", "none"],
      },
      defaultValue: "none",
    },
    wrapMob: {
      description: "Manages whether items break in viewport or overflow on mobile view",
      control: {
        type: "radio",
        options: ["wrap", "noWrap", "none"],
      },
      defaultValue: "none",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card title="Parent width">
      <div className="flexcontainer" style={{ height: "200px" }}>
        <FlexLayout {...rest}>
          <Card cardType="Bordered">Flex Item 1</Card>
          <Card cardType="Bordered">Flex Item 2</Card>
          <Card cardType="Bordered">Flex Item 3</Card>
        </FlexLayout>
      </div>
    </Card>
  );
};

const TemplateSecondary = ({ ...rest }) => {
  return (
    <Card cardType="Bordered" title="Give Width to Child Component">
      <FlexLayout
        childWidth="fullWidth"
        wrap="noWrap"
        spacing="extraLoose"
        wrapMob="wrap"
      >
        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="100">
          <Card>
            <TextStyles>
             Flex Item
            </TextStyles>
          </Card>
        </FlexChild>
        <FlexChild desktopWidth="25" tabWidth="25" mobileWidth="100">
          <Card>
            <TextStyles>Flex Item</TextStyles>
          </Card>
        </FlexChild>
        <FlexChild desktopWidth="25" tabWidth="25" mobileWidth="100">
          <Card>Flex Item</Card>
        </FlexChild>
        {/* <Card cardType="yellow">DD</Card> */}
      </FlexLayout>
    </Card>
  );
};
export const ParentControl = Template.bind({
  wrap: "wrap",
});
export const ChildControl = TemplateSecondary.bind({});
// Valign
const vertical_align = ["start", "center", "end", "stretch"];
export const Children_vertical_align: any = Template.bind({});
Children_vertical_align.decorators = [
  () => (
    <FlexLayout
      desktopWidth="50"
      tabWidth="50"
      mobileWidth="100"
      spacing="loose"
    >
      {vertical_align.map((valign: any) => (
        <Card
          cardType="Bordered"
          title={valign.charAt(0).toUpperCase() + valign.slice(1).toLowerCase()}
        >
          <div className="flexcontainer" style={{ height: "200px" }}>
            <FlexLayout valign={valign} spacing="loose">
              <Card cardType="Bordered">Flex Item</Card>
              <Card cardType="Bordered">Flex Item</Card>
              <Card cardType="Bordered">Flex Item</Card>
            </FlexLayout>
          </div>
        </Card>
      ))}
    </FlexLayout>
  ),
];
// Halign
const horizontal_align = [
  "start",
  "center",
  "end",
  "fill",
  "around",
  "evenly",
  "none",
];
export const Children_horizontal_align: any = Template.bind({});
Children_horizontal_align.decorators = [
  () => (
    <FlexLayout
      desktopWidth="50"
      tabWidth="50"
      mobileWidth="100"
      spacing="loose"
    >
      {horizontal_align.map((halign: any) => (
        <Card
          cardType="Bordered"
          title={halign.charAt(0).toUpperCase() + halign.slice(1).toLowerCase()}
        >
          <FlexLayout halign={halign} spacing="loose" valign="start">
            <Card cardType="Bordered">Flex Item</Card>
            <Card cardType="Bordered">Flex Item</Card>
            <Card cardType="Bordered">Flex Item</Card>
          </FlexLayout>
        </Card>
      ))}
    </FlexLayout>
  ),
];
// spacing
const spacing = [
  {
    name: "none",
    unit: "0px",
  },
  {
    name: "extraTight",
    unit: "4px",
  },
  {
    name: "mediumTight",
    unit: "8px",
  },
  {
    name: "tight",
    unit: "12px",
  },
  {
    name: "loose",
    unit: "16px",
  },
  {
    name: "mediumLoose",
    unit: "20px",
  },
  {
    name: "extraLoose",
    unit: "24px",
  },
];
export const Children_Spacing: any = Template.bind({});
Children_Spacing.decorators = [
  () => (
    <FlexLayout
      desktopWidth="50"
      tabWidth="50"
      mobileWidth="100"
      spacing="loose"
    >
      {spacing.map((spacing: any) => (
        <Card
          cardType="Bordered"
          title={
            spacing.name.charAt(0).toUpperCase() +
            spacing.name.slice(1).toLowerCase()
          }
        >
          <FlexLayout spacing={spacing.name} valign="start">
            <Card cardType="Bordered">Flex Item {`(${spacing.unit})`}</Card>
            <Card cardType="Bordered">Flex Item {`(${spacing.unit})`}</Card>
            <Card cardType="Bordered">Flex Item {`(${spacing.unit})`}</Card>
          </FlexLayout>
        </Card>
      ))}
    </FlexLayout>
  ),
];
// direction

const direction = ["vertical", "none"];
export const Children_direction: any = Template.bind({});
Children_direction.decorators = [
  () => (
    <FlexLayout
      desktopWidth="50"
      tabWidth="50"
      mobileWidth="100"
      spacing="loose"
    >
      {direction.map((direction: any) => (
        <Card
          cardType="Bordered"
          title={
            direction.charAt(0).toUpperCase() + direction.slice(1).toLowerCase()
          }
        >
          <FlexLayout direction={direction} spacing="loose" valign="start">
            <Card cardType="Bordered">Flex Item </Card>
            <Card cardType="Bordered">Flex Item </Card>
            <Card cardType="Bordered">Flex Item </Card>
          </FlexLayout>
        </Card>
      ))}
    </FlexLayout>
  ),
];
// desktopWidth

const desktopWidth = ["20", "25", "33", "50", "66", "75", "80", "100"];
export const Children_Width: any = Template.bind({});
Children_Width.decorators = [
  () => (
    <FlexLayout direction="vertical" wrap="noWrap" spacing="loose">
      {desktopWidth.map((desktopWidth: any) => (
        <FlexChild
          desktopWidth={desktopWidth}
          tabWidth={desktopWidth}
          mobileWidth={desktopWidth}
        >
          <Card>Children Width {desktopWidth} %</Card>
        </FlexChild>
      ))}
    </FlexLayout>
  ),
];
// children width via parent
const parent_width = ["20", "25", "33", "50", "66", "75", "80", "100"];
export const Children_width_Control_via_parent_width: any = Template.bind({});
Children_width_Control_via_parent_width.decorators = [
  () => (
    <FlexLayout direction="vertical" wrap="noWrap" spacing="loose">
      {parent_width.map((desktopParent: any) => (
        <FlexLayout
          desktopWidth={desktopParent}
          tabWidth={desktopParent}
          mobileWidth={desktopParent}
          spacing="loose"
        >
          <Card>Parent Width {desktopParent} %</Card>
        </FlexLayout>
      ))}
    </FlexLayout>
  ),
];