import React from "react";
import Image from "./Image";
import { Card } from "../Card";
import { FlexLayout } from "../FlexLayout";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    src: {
      description: "Input the source URL",
      control: {
        type: "text",
      },
      defaultValue:
        "https://www.constructionweekonline.com/cloud/2021/07/06/IMG-Worlds-of-Legends-Rendering.jpg",
    },
    alt: {
      description:
        "In cases when images fail to load, the Image component will result into the native <img/> browser fallback.",
      control: {
        type: "text",
      },
      defaultValue: "Image Data Not Found",
    },
    type: {
      description: "Image Types",
      control: {
        type: "radio",
        options: ["black & white", "none"],
      },
      defaultValue: "none",
    },
    height: {
      description: "Specify image height",
      control: {
        type: "number",
      },
      defaultValue: 100,
    },
    width: {
      description: "Specify image width",
      control: {
        type: "number",
      },
      defaultValue: 100,
    },
    radius: {
      description: "Image rounded type",
      control: {
        type: "radio",
        options: ["circle", "corner-radius", "none"],
      },
      defaultValue: "none",
    },
    fit: {
      description: "Image rounded type",
      control: {
        type: "radio",
        options: ["cover", "fill", "center", "scale-down", "none"],
      },
      defaultValue: "cover",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card title={rest.heading}>
      <Image
        alt={rest.alt}
        height={rest.height}
        width={rest.width}
        radius={rest.radius}
        type={rest.type}
        src={rest.src}
        fit={rest.fit}
      />
    </Card>
  );
};
export const Primary = Template.bind({});

const type = ["black & white", "none"];
export const Type: any = Template.bind({});
Type.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="extraLoose">
        {type.map((variant: any) => (
          <>
            <h1>{variant}</h1>
            <Image
              height={100}
              width={100}
              type={variant}
              fit="cover"
              src="https://www.constructionweekonline.com/cloud/2021/07/06/IMG-Worlds-of-Legends-Rendering.jpg"
            />
          </>
        ))}
      </FlexLayout>
    </Card>
  ),
];

const rounded = ["corner-radius", "circle", "none"];
export const Shape: any = Template.bind({});
Shape.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="extraLoose">
        {rounded.map((variant: any) => (
          <>
            <h1>{variant}</h1>
            <Image
              height={100}
              width={100}
              radius={variant}
              fit="cover"
              src="https://www.constructionweekonline.com/cloud/2021/07/06/IMG-Worlds-of-Legends-Rendering.jpg"
            />
          </>
        ))}
      </FlexLayout>
    </Card>
  ),
];

const src = [
  "https://www.constructionweekonline.com/cloud/2021/07/06/IMG-Worlds-of-Legends-Rendering.jpg",
  "image.jpg",
];
export const Fallback: any = Template.bind({});
Fallback.decorators = [
  () => (
    <Card title="In cases when images fail to load, the Image component will result into the native <img/> browser fallback">
      <FlexLayout spacing="extraLoose">
        {src.map((variant: any) => (
          <>
            <Image
              height={100}
              width={100}
              radius={variant}
              fit="cover"
              src={variant}
              alt="Image Data not found"
            />
          </>
        ))}
      </FlexLayout>
    </Card>
  ),
];
