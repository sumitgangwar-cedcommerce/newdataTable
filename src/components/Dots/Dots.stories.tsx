import React from "react";
import { Dots, Card, FlexLayout } from "..";
import { DotI } from "./Dots";

export default {
  title: "Components/Entity/Dots",
  component: Dots,
  argTypes: {
    status: {
      description: "set dot status",
      control: {
        type: "radio",
        options: ["none", "active", "completed"],
      },
      defaultValue: "none",
    },
  },
};

const Template = (rest: DotI) => {
  return (
    <Card>
      <FlexLayout spacing="tight">
        <Dots {...rest}  />
        <Dots {...rest} />
        <Dots {...rest} />
        <Dots {...rest} />
      </FlexLayout>
    </Card>
  );
};

export const Primary = Template.bind({});

// status
const status = ["active", "completed", "none"];
export const Status: any = Template.bind({});
Status.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {status.map((variant: any) => (
          <>
            {variant}
            <Dots status={variant} />
          </>
        ))}
      </FlexLayout>
    </Card>
  ),
];

