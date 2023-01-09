import React from "react";
import { Card, TextStyles, } from "../..";
import MainLayout from "./MainLayout";
import "./MainLayout.css";

export default {
  title: "Components/Layout/MainLayout",
  component: MainLayout,
}

const Template = ({ ...rest }) => {
  return (
    <MainLayout {...rest}>
      <Card title="Primary Layout Card 70%">
        <TextStyles>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          numquam adipisci aliquam, neque ratione placeat eligendi, error a
          molestiae voluptate nihil sequi dolore voluptatibus saepe dicta labore
          exercitationem quibusdam totam.
        </TextStyles>
      </Card>
      <Card title="Secondary Layout Card 30%">
        <TextStyles>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          numquam adipisci aliquam, neque ratione placeat eligendi, error a
          molestiae voluptate nihil sequi dolore voluptatibus saepe dicta labore
          exercitationem quibusdam totam.
        </TextStyles>
      </Card>
    </MainLayout>
  );
};

export const Main_Layout = Template.bind({});
