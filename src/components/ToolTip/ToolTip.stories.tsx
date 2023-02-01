import React from "react";
import ToolTip from "./ToolTip";
import Card from "../Card/Card";
import { Button } from "..";
import { FlexLayout } from "../FlexLayout";
import TextStyles from "../TextStyles/TextStyles";

export default {
  title: "Components/Overlays/ToolTip",
  component: ToolTip,
  argTypes: {
    children: {
      description: "Help Text Button string value",
      control: {
        type: "text",
      },
      defaultValue: "Tooltip",
    },
    helpText: {
      description: "Help Text Accepts string value or React Node",
      control: {
        type: "text",
      },
      defaultValue:
        "Lorem ipsum dolaaler isseu is going to migrate from a new place to another placeLorem ipsum dolaaler isseu is going to migrate from a new place to another placeLorem ipsum dolaaler isseu is going to migrate from a new place to another place",
    },
    position: {
      description: "This position work only element case",
      control: {
        type: "radio",
        options: ["bottom", "top", "left", "right"],
      },
      defaultValue: "bottom",
    },
    popoverContainer: {
      control: {
        type: "radio",
        options: ["body", "element"],
      },
      defaultValue: "body",
    },
    extraClass: {
      description: "Add Extra Class in Popover",
      control: {
        type: "text",
      },
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <div style={{ position: "relative", top: "50px", paddingRight: "64px" }}>
      <Card>
        <FlexLayout halign="start">
          <ToolTip
            open={false}
            helpText={rest.helpText}
            position={rest.position}
            popoverContainer="body"
            {...rest}
          >
            <Button thickness="thin">{rest.children}</Button>
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


// Tooltip Container
export const Tooltip_Body_container: any = Template.bind({});
Tooltip_Body_container.decorators = [
  () => {
    return (
      <Card>
        <FlexLayout spacing="loose">
          <ToolTip
            open={false}
            popoverContainer="body"
            helpText={
              "lorem ipsul dollar issue going to be false and poor for rest not of life"
            }
          >
            <Button>Body Container Tooltip</Button>
          </ToolTip>
          <ToolTip
            position="bottom"
            open={false}
            popoverContainer="element"
            helpText={
              "lorem ipsul dollar issue going to be false and poor for rest not of life"
            }
          >
            <Button>Elelemt Container Tooltip</Button>
          </ToolTip>
        </FlexLayout>
      </Card>
    );
  },
];