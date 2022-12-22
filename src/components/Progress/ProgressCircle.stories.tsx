import { Story } from "@storybook/react";
import React from "react";
import { ProgressCircle, Card } from "..";
import { ProgressCircle1 } from "./progressCircle";

export default {
  title: "Components/Progress/ProgressCircle",
  component: ProgressCircle,
  argTypes: {
    percentage: {
      description: "set Percentage of circlebar",
      control: {
        type: "number",
      },
      defaultValue: 0,
    },
    size: {
      description: "Set Type of Skelton",
      control: {
        type: "number",
      },
      defaultValue: 100,
    },
    enablePercent: {
      description: "enable percentage",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    fontsize: {
      description: "set fontsize of circlebar",
      control: {
        type: "number",
      },
      defaultValue: 7,
    },
  },
};

const Template: Story<ProgressCircle1> = (rest: ProgressCircle1) => {
  return (
    <Card title="Progress Circle">
      <ProgressCircle {...rest} />
    </Card>
  );
};

export const Primary = Template.bind({
  percentage: 10,
});
//
export const ProgressCircleSize: any = Template.bind({});
ProgressCircleSize.decorators = [
  () => {
    return(
      <Card title="Progress Circle Size">
      
        {
        ["100","120","150"].map((items:any)=>{
          return(
            <ProgressCircle size={items} percentage={items+"px"} enablePercent={false}/>
          )
        })
      }

    </Card>
    )
  },
];
//
export const ProgressCircleWithoutPercentage: any = Template.bind({});
ProgressCircleWithoutPercentage.decorators = [
  () => {
    return(
      <Card title="Progress Circle without Percentage Symbol">
            <ProgressCircle enablePercent={false} percentage={11}/>
    </Card>
    )
  },
];
//
export const ProgressCircleWithDiffrentFontSize: any = Template.bind({});
ProgressCircleWithDiffrentFontSize.decorators = [
  () => {
    return(
      <Card title="Progress Circle Font Size">
      
        {
        ["7","8","9","10"].map((items:any)=>{
          return(
            <ProgressCircle fontsize={items} percentage={items}/>
          )
        })
      }

    </Card>
    )
  },
];