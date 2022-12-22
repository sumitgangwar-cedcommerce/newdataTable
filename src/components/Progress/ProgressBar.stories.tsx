import React from "react";
import { Progressbar, Card, FlexLayout } from "..";
import { ProgressbarI } from "./Progressbar";

export default {
  title: "Components/Progress/Progressbar",
  component: Progressbar,
  argTypes: {
    percentage: {
      description: "set Percentage od progresbar",
      control: {
        type: "number",
      },
      defaultValue: 10,
    },
    progessThickness: {
      description: "set thickness of progresbar",
      control: {
        type: "radio",
        options: ["thin", "none"],
      },
      defaultValue: "none",
    },
    message: {
      description: "set message ",
      control: {
        type: "text",
      },
      defaultValue:"Hello"
    },
    animating: {
      description: "set message ",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template = (rest: ProgressbarI) => {
  return (
    <Card title="Progress Bar">
      <Progressbar message={rest.message} percentage={20} {...rest} />
    </Card>
  );
};

export const Primary = Template.bind({
  percentage: 20,
});
//
export const ProgressBarWithoutMessage: any = Template.bind({});
ProgressBarWithoutMessage.decorators = [
  () => {
    return(
      <Card title="Progress Bar Without Message">
      <Progressbar  percentage={20}/>
    </Card>
    )
  },
];
// thickness
export const ProgressThickness: any = Template.bind({});
ProgressThickness.decorators = [
  () => {
    return(
      <Card title="Progress Bar Thickness">
        <FlexLayout spacing="loose" direction="vertical">
        {
        ["thin","none"].map((items:any)=>{
          return(
            <Progressbar progessThickness={items}  percentage={20}/>
          )
        })
      }
        </FlexLayout>
    </Card>
    )
  },
];
// animation
export const ProgressWithAnimation: any = Template.bind({});
ProgressWithAnimation.decorators = [
  () => {
    return(
      <Card title="Progress Bar with Animation">
            <Progressbar animating  percentage={20}/>
    </Card>
    )
  },
];