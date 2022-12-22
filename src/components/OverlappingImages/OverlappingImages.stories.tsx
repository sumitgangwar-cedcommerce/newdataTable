
import React from "react";
// import { ComponentStory, ComponentMeta } from "@storybook/react";
import { OverlappingImages } from "..";
import { Card } from "../Card";
export default {
  title: "Components/OverlappingImages",
  component: OverlappingImages,
  argTypes: {
    size: {
        description:'set Image Size',
        control: {
          type: "text",
        },
        defaultValue: "40"
      },
  },
}

const Template = ({ ...rest }) => {
  return (
      <Card cardType="Bordered" title={"OverlappingImages style Example"}>
        <OverlappingImages>
          <img src="https://toolboxpayment.com/wp-content/uploads/2021/06/facebook-600.png"></img>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/150px-Instagram_logo_2022.svg.png"></img>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/150px-Instagram_logo_2022.svg.png"></img>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/150px-Instagram_logo_2022.svg.png"></img>
        </OverlappingImages>
      </Card>
  );
};

export const Primary = Template.bind({});
