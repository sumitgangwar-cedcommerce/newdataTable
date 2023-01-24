
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { List } from "..";
import TextStyles from "../TextStyles/TextStyles";
import { Card } from "../Card";
export default {
  title: "Components/DataTable and List/List",
  component: List,
  argTypes: {
    type: {
      description:'set List Style Type',
      control: {
        type: "radio",
        options: ["disc" , "square", "circle", "decimal", "lower-roman"],
      },
      defaultValue: "disc"
    },
    Image: {
      description:'set custom image for image Text',
      control: {
        type: "text",
      },
      defaultValue: "www.w3schools.com/cssref/sqpurple.gif"
    },
  },
}as ComponentMeta<any>;

const Template : ComponentStory<typeof List> = (args) => {
  return (
      <Card cardType="Bordered" title={"List style Example"}>
        <List {...args}>
          <TextStyles textcolor="light">List Style</TextStyles>
          <TextStyles textcolor="light">List Style</TextStyles>
          <TextStyles textcolor="light">List Style</TextStyles>
        </List>
      </Card>
  );
};

export const Primary = Template.bind({});

// Disc
export const Disc: any = Template.bind({});
Disc.decorators = [
  () => (
    <Card>
      <List type="disc">
        <TextStyles textcolor="light">List Style</TextStyles>
        <TextStyles textcolor="light">List Style</TextStyles>
        <TextStyles textcolor="light">List Style</TextStyles>
      </List>
    </Card>
  ),
];
// Square
export const Square: any = Template.bind({});
Square.decorators = [
  () => (
    <Card>
      <List type="square">
        <TextStyles textcolor="light">List Style</TextStyles>
        <TextStyles textcolor="light">List Style</TextStyles>
        <TextStyles textcolor="light">List Style</TextStyles>
      </List>
    </Card>
  ),
];
// Circle
export const Circle: any = Template.bind({});
Circle.decorators = [
  () => (
    <Card>
      <List type="circle">
        <TextStyles textcolor="light">List Style</TextStyles>
        <TextStyles textcolor="light">List Style</TextStyles>
        <TextStyles textcolor="light">List Style</TextStyles>
      </List>
    </Card>
  ),
];
// Decimal
export const Decimal: any = Template.bind({});
Decimal.decorators = [
  () => (
    <Card>
      <List type="decimal">
        <TextStyles textcolor="light">List Style</TextStyles>
        <TextStyles textcolor="light">List Style</TextStyles>
        <TextStyles textcolor="light">List Style</TextStyles>
      </List>
    </Card>
  ),
];
// lower-roman
export const Lower_Roman: any = Template.bind({});
Lower_Roman.decorators = [
  () => (
    <Card>
      <List type="lower-roman">
        <TextStyles textcolor="light">List Style</TextStyles>
        <TextStyles textcolor="light">List Style</TextStyles>
        <TextStyles textcolor="light">List Style</TextStyles>
      </List>
    </Card>
  ),
];

// List With Image
export const List_with_Image: any = Template.bind({});
List_with_Image.decorators = [
  () => (
    <Card>
      <List type="image" imageSrc={"https://www.w3schools.com/cssref/sqpurple.gif"} >
        <TextStyles textcolor="light">List Style</TextStyles>
        <TextStyles textcolor="light">List Style</TextStyles>
        <TextStyles textcolor="light">List Style</TextStyles>
      </List>
    </Card>
  ),
];

