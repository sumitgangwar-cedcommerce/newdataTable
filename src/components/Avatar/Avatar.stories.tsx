import React from "react";
import Avatar from "./Avatar";
import { Card } from "..";
import { FlexLayout } from "../FlexLayout";

export default {
  title: "Components/Media/Avatar",
  component: Avatar,
  argTypes: {
    text: {
      name: "Text",
      description:
        "A String which is used to set Profile name or any other usage, Not work with Image",
      defaultValue: "Jon Doe",
      control: {
        type: "text",
      },
    },
    color: {
      name: "Color",
      description: "Set color of Avatar as per need, Not work with Image",
      control: {
        type: "radio",
        options: ["black", "red", "yellow", "green", "blue", "purple"],
      },
      defaultValue: "black",
    },
    type: {
      name: "Type",
      description: "Change Layout of Avatar",
      control: {
        type: "radio",
        options: ["square", "circle", "rounded"],
      },
      defaultValue: "circle",
    },
    zoom: {
      description: "Set Whether Avatar Zoom",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    image: {
      description: "Set Whether Avatar Image , Enter any Image Url to check",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    size: {
      name: "Size",
      description: "Manage and Controls the Size of Avatar",
      control: {
        type: "radio",
        options: ["Small", "Medium", "Large"],
      },
      defaultValue: "Large",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card>
      <FlexLayout halign="center">
        <Avatar
          text={rest.text}
          type={rest.type}
          size={rest.size}
          color={rest.color}
          zoom={rest.zoom}
          image={rest.image}
        />
      </FlexLayout>
    </Card>
  );
};

export const Primary = Template.bind({});

const types = ["square", "circle", "rounded"];
export const Types: any = Template.bind({});
Types.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {types.map((variant: any) => (
          <Avatar type={variant} text="Jon Doe" />
        ))}
      </FlexLayout>
    </Card>
  ),
];

const color = ["black", "red", "yellow", "green", "blue", "purple"];
export const Color: any = Template.bind({});
Color.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {color.map((variant: any) => (
          <Avatar color={variant} text="Jon Doe" />
        ))}
      </FlexLayout>
    </Card>
  ),
];

const size = ["Small", "Medium", "Large"];
export const Size: any = Template.bind({});
Size.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {size.map((variant: any) => (
          <Avatar size={variant} text="Jon Doe" />
        ))}
      </FlexLayout>
    </Card>
  ),
];

export const Avatar_with_Image: any = Template.bind({});
Avatar_with_Image.decorators = [
  () => (
    <Card>
      <Avatar
        size="Medium"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      />
    </Card>
  ),
];

export const Avatar_with_Badge: any = Template.bind({});
Avatar_with_Badge.decorators = [
  () => (
    <Card title={"Avatar With Badges"}>
      <FlexLayout direction="vertical" spacing="loose">
        <FlexLayout spacing="loose">
          {size.map((variant: any) => (
            <Avatar badge size={variant} text="Jon Doe" />
          ))}
        </FlexLayout>
        <FlexLayout spacing="loose">
          {size.map((variant: any) => (
            <Avatar
              badge
              size={variant}
              image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
          ))}
        </FlexLayout>
      </FlexLayout>
    </Card>
  ),
];
