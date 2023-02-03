import React, { useCallback, useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import ActionList from "../../ActionList/ActionList";
import { Card } from "../../Card";
import { FlexLayout } from "../../FlexLayout";
import Button from "../Button";
import ButtonGroup from "./ButtonGroup";

export default {
  title: "Components/Actions/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    segmented: {
      description: "Set whether Segmented or not",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    vertical: {
      description: "Whether Align Vertical",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template = (rest: any) => {
  return (
    <Card title={"Button Group"}>
      <ButtonGroup {...rest}>
        <Button type="Outlined">Button</Button>
        <Button type="Outlined">Button</Button>
        <Button type="Outlined">Button</Button>
      </ButtonGroup>
    </Card>
  );
};

export const Primary: any = Template.bind({});

//Types Segmented
export const Segmented: any = Template.bind({});
const typesthickness = [
  "Primary",
  "Danger",
  "DangerOutlined",
  "Secondary",
  "Outlined",
];
Segmented.decorators = [
  () => (
    <Card title={"Segmenetd Buttons"}>
      <FlexLayout direction="vertical" spacing="loose">
        {typesthickness.map((variant: any ,index) => (
          <ButtonGroup segmented key={index}>
            <Button type={variant}>Button</Button>
            <Button type={variant}>Button</Button>
            <Button type={variant}>Button</Button>
          </ButtonGroup>
        ))}
      </FlexLayout>
    </Card>
  ),
];

//Vertical Segmented Button
export const VerticalSegmentedButton: any = Template.bind({});
VerticalSegmentedButton.decorators = [
  () => {
    return (
      <Card title={"Vertical Segmented Button"}>
        <ButtonGroup segmented vertical>
          <Button type="Secondary">Button</Button>
          <Button type="Secondary">Button 1</Button>
        </ButtonGroup>
      </Card>
    );
  },
];

//Types Segmented with ActionList
export const SegmentedWithActionList: any = Template.bind({});
SegmentedWithActionList.decorators = [
  () => {
    const [active, setActive] = useState(false);
    const toggleActive = useCallback(() => setActive((active) => !active), []);
    return (
      <Card title={"Segmented Button With ActionList"}>
        <ButtonGroup segmented>
          <Button type="Secondary">Button</Button>
          <Button type="Secondary">Button</Button>
          <ActionList
            onClose={toggleActive}
            activator={
              <Button
                type="Secondary"
                onClick={toggleActive}
                icon={active ? <ChevronUp /> : <ChevronDown />}
                iconAlign="right"
              >
                Action List
              </Button>
            }
            open={active}
            sections={[
              {
                items: [
                  {
                    content: "Action 1",
                    onClick: () => alert("Hello 1"),
                  },
                  {
                    content: "Action 1",
                    onClick: () => alert("Hello 1"),
                  },
                  {
                    content: "Action 1",
                    onClick: () => alert("Hello 1"),
                  },
                ],
              },
            ]}
          />
        </ButtonGroup>
      </Card>
    );
  },
];


//Types Segmented with ActionList
export const VertcialSegmentedWithActionList: any = Template.bind({});
VertcialSegmentedWithActionList.decorators = [
  () => {
    const [active1, setActive1] = useState(false);
    const toggleActive1 = useCallback(() => setActive1((active1) => !active1), []);
    return (
      <Card title={"Segmented Button With ActionList"}>
        <ButtonGroup segmented vertical>
          <Button type="Secondary">Button</Button>
          <Button type="Secondary">Button</Button>
          <ActionList
            onClose={toggleActive1}
            activator={
              <Button
                type="Secondary"
                onClick={toggleActive1}
                icon={active1 ? <ChevronUp /> : <ChevronDown />}
                iconAlign="right"
              >
                Action List
              </Button>
            }
            open={active1}
            sections={[
              {
                items: [
                  {
                    content: "Action 1",
                    onClick: () => alert("Hello 1"),
                  },
                  {
                    content: "Action 1",
                    onClick: () => alert("Hello 1"),
                  },
                  {
                    content: "Action 1",
                    onClick: () => alert("Hello 1"),
                  },
                ],
              },
            ]}
          />
        </ButtonGroup>
      </Card>
    );
  },
];


