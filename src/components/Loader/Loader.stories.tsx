import React from "react";
import Loader from "./Loader";

export default {
  title: "Components/Behaviour/Loader",
  component: Loader,
  argTypes: {
    title: {
      description: "set Loader Text",
      control: {
        type: "text",
      },
      defaultValue: "We are Setting Up your Store",
    },
    subtitle: {
      description: "set Loader 2 SubText",
      control: {
        type: "text",
      },
      defaultValue: "Hold On Magic is in Progress !!!",
    },
    percentage: {
      description: "set Loader 3 percentage Value",
      control: {
        type: "text",
      },
      defaultValue: 20,
    },
    type: {
      description: "set Loader Text",
      control: {
        type: "radio",
        options: ["Loader1", "Loader2" , "Loader3"],
      },
      defaultValue: "Loader1",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <>
      <Loader percentage={rest.percentage}  type={rest.type} title={rest.title} />
    </>
  );
};

export const Primary = Template.bind({});
// Loder 1
export const Loder1: any = Template.bind({});
Loder1.decorators = [() => <Loader type="Loader1" title={"title"} />];
// Loader 2
export const Loder2: any = Template.bind({});
Loder2.decorators = [() => <Loader type="Loader2" title={"title"} />];

// Loader 3
export const Loder3: any = Template.bind({});
Loder3.decorators = [() => <Loader percentage={20} subtitle="Dd" type="Loader3" title={"title"} />];
