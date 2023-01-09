import React from "react";
import { Skeleton, Card, FlexLayout} from "..";

export default {
  title: "Components/Layout/Skeleton",
  component: Skeleton,
  argTypes: {
    type: {
      description:"Set Type of Skelton",
      control: {
        type: "radio",
        options: ['None', 'line', 'image', 'name', 'custom']
      },
      defaultValue:"line"
    },
    line: {
      description:"Set no of skelton",
      control: {
        type: "number",
      },
      defaultValue:1
    },
    width: {
      description:"set width of skelton",
      control: {
        type: "text",
      },
      defaultValue:"50px"
    },
    height: {
      description:"set height of skelton",
        control: {
          type: "text",
        },
        defaultValue:"50px"
      },
      rounded: {
        description:"set radius of skelton",
          control: {
            type: "text",
          },
          defaultValue:"50%"
        },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card>
      <Skeleton
      
      line={rest.line}
      height={rest.height}
      width={rest.width}
      type={rest.type}
      rounded={rest.rounded}
    />
    </Card>
  );
};

export const Primary = Template.bind({});

//Types Variant
const type = ["none", "line", "image", "name", "custom"];
export const Types: any = Template.bind({});
Types.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="extraLoose" direction="vertical">
        {type.map((type: any) => (
          <>
            {type}
            <Skeleton type={type} line={type==="line"? 3 : 1} rounded={type==="custom" ? "50%" :"0%"} />
          </>
        ))}
      </FlexLayout>
    </Card>
  ),
];

//Custom height Width
export const custom_height_width: any = Template.bind({});
custom_height_width.decorators = [
  () => (
    <Card title="Height 150px Width 150px">
        <Skeleton type="custom" height="150px" width="150px" />
    </Card>
  ),
];


