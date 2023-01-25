import React from "react";
import ToolTip from "./ToolTip";
import Card from "../Card/Card";
import { Button } from "..";
import { FlexLayout } from "../FlexLayout";
import TextStyles from "../TextStyles/TextStyles";
import ToolTipA from "./TooltipA";

export default {
  title: "Components/Overlays/ToolTip",
  component: ToolTip,
  argTypes: {
    children: {
      control: {
        type: "element",
      },
    },
    helpText: {
      description: "Help Text Accepts string value",
      control: {
        type: "text",
      },
      defaultValue: "Lorem ipsum dolaaler isseu is going to migrate from a new place to another placeLorem ipsum dolaaler isseu is going to migrate from a new place to another placeLorem ipsum dolaaler isseu is going to migrate from a new place to another place",
    },
    position: {
      control: {
        type: "radio",
        options: ["bottom", "top", "left", "right"],
      },
      defaultValue: "bottom",
    },
    type: {
      control: {
        type: "radio",
        options: ["light", "dark"],
      },
      defaultValue: "dark",
    },
    popoverContainer: {
      control: {
        type: "radio",
        options: ["body", "element"],
      },
      defaultValue: "body",
    },
    button: {
      description: "Help Text Button string value",
      control: {
        type: "text",
      },
      defaultValue: "Tooltip",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <div style={{position:"relative",top:"50px"}}>
      <Card>
      <FlexLayout valign="center" halign="start">
        <ToolTip open={false} helpText={rest.helpText} position={rest.position} {...rest}>
          <Button thickness="thin">{rest.button}</Button>
        </ToolTip>
      </FlexLayout>
    </Card>
    </div>
  );
};

export const Primary = Template.bind({});

// Tooltip position
export const Tooltip_position: any = Template.bind({});
Tooltip_position.decorators = [
  () => {
    const position = ["top", "bottom", "left", "right"];
    return (
      <Card>
        <FlexLayout spacing="extraLoose">
          {position.map((item: any) => {
            return (
              <ToolTip
                open={false}
                helpText={item + " alignment"}
                position={item}
                popoverContainer="element"
              >
                <Button>{item}</Button>
              </ToolTip>
            );
          })}
        </FlexLayout>
      </Card>
    );
  },
];

// Tooltip Type
export const Tooltip_type: any = Template.bind({});
Tooltip_type.decorators = [
  () => {
    return (
      <Card>
        <FlexLayout spacing="loose">
          {["light","dark"].map((item:any,index)=>{
              return(
                <ToolTip key={index} position="bottom" open={false} popoverContainer="body" helpText={<TextStyles textcolor={item=="dark" ? "light" : "dark" }>Hello</TextStyles>} type={item}>
                  <Button>Tooltip {item}</Button>
                </ToolTip>
              )
          })}
        </FlexLayout>
      </Card>
    );
  },
];

// Tooltip Container
export const Tooltip_Body_container: any = Template.bind({});
Tooltip_Body_container.decorators = [
  () => {
    return (
      <Card>
        <FlexLayout spacing="loose">
        <ToolTip position="top" open={false} popoverContainer="body" helpText={<TextStyles textcolor="dark">lorem ipsul dollar issue going to be false and poor for rest not of life <Button>Click Here</Button></TextStyles>}>
          <Button>Body Container element with Dark tooltip</Button>
        </ToolTip>
        <ToolTip extraClass="hello" open={false} type="light" popoverContainer="body" helpText={<TextStyles textcolor="dark">lorem ipsul dollar issue going to be false and poor for rest not of life</TextStyles>}>
          <Button>Body Container element With Light Tooltip</Button>
        </ToolTip>
        <ToolTipA open={false} type="light" popoverContainer="body" helpText={<TextStyles textcolor="dark">lorem ipsul dollar issue going to be false and poor for rest not of life <Button>Click Here</Button></TextStyles>}>
          <Button>Body Container element With Light TooltipA</Button>
        </ToolTipA>
        </FlexLayout>
      </Card>
    );
  },
];
