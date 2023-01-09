import React, { useState } from "react";
import { Story } from "@storybook/react";
import { Card, Button, TextField } from "..";
import { CardI } from "./Card";
import { FormElement } from "../FormElement";
import FlexLayout from "../FlexLayout/FlexLayout";

export default {
  title: "Components/Layout/Card",
  component: Card,
  argTypes: {
    cardType: {
      description: "set card type bg color",
      control: {
        type: "radio",
        options: ["Default", "Bordered", "Plain", "Shadowed", "Subdued"],
      },
      defaultValue: "Default",
    },
    extraClass: {
      description: "Set any extraClass for your custom requirement",
      control: {
        type: "text",
      },
      defaultValue: "Card Title",
    },
    title: {
      description: "set card title",
      control: {
        type: "text",
      },
      defaultValue: "Card Title",
    },
    subTitle: {
      description: "set card Sub Title",
      control: {
        type: "text",
      },
      defaultValue: "Card Sub Title",
    },
    media: {
      description: "Card Media , Enter Any Image Url to check results",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    action: {
      description: "Card Action",
      control: {
        disable: true,
      },
    },
    primaryAction: {
      description: "Card Acrion in array format",
      control: {
        type: "array",
        disable:true,
      },
    },
    secondaryAction: {
      description: "Card Acrion in array format",
      control: {
        type: "array",
        disable:true,
      },
    },
  },
};

function BodyFun() {
  const [text, setText] = useState("");

  return (
    <React.Fragment>
      <TextField
        value={text}
        label="Label"
        onChange={(e) => {
          setText(e);
        }}
        placeHolder="Placeholder..."
      />
    </React.Fragment>
  );
}

const Template: Story<CardI> = (args) => (
  <Card
    action={<Button type="Outlined">Action</Button>}
    {...args}
    primaryAction={{ content: "Card Footer Primary", type: "Primary" }}
    secondaryAction={{ content: "Card Footer Secondary", type: "Outlined" }}
  >
    <FormElement>
      <BodyFun />
      <BodyFun />
    </FormElement>
  </Card>
);

export const Primary = Template.bind({});

// Card Types
const cardType = ["Default", "Bordered", "Plain", "Subdued", "Shadowed"];
export const Card_Type: any = Template.bind({});
Card_Type.decorators = [
  () => (
    <Card>
      <FlexLayout
        spacing="loose"
        desktopWidth="50"
        tabWidth="50"
        mobileWidth="100"
      >
        {cardType.map((variant: any) => (
          <Card
            cardType={variant}
            title={variant+ " Card"}
          >
            <FormElement>
              <BodyFun />
              <BodyFun />
            </FormElement>
          </Card>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Card Types

export const Card_with_Header_and_header_action: any = Template.bind({});
Card_with_Header_and_header_action.decorators = [
  () => (
      <Card cardType={"Bordered"}  title="Card With Header And Header Action" action={<Button type="Outlined">Action</Button>}>
        <FormElement>
          <BodyFun />
          <BodyFun />
        </FormElement>
      </Card>
  ),
];
// card with footer actions

export const card_with_footer_actions: any = Template.bind({});
card_with_footer_actions.decorators = [
  () => (
    <Card
      cardType="Default"
      title="Title"
      subTitle="Subtitle" 
      primaryAction={{ content: "Card Footer Primary", type: "Primary" }}
      secondaryAction={{
        content: "Card Footer Secondary",
        type: "Outlined",
      }}
    >
      <FormElement>
        <BodyFun />
        <BodyFun />
      </FormElement>
    </Card>
  ),
];
// Card with media
export const Card_with_media: any = Template.bind({});
Card_with_media.decorators = [
  () => (
    <Card cardType={"Shadowed"} media="https://i.imgur.com/1TqLoyq.png">
      <FormElement>
        <BodyFun />
        <BodyFun />
      </FormElement>
    </Card>
  ),
];

