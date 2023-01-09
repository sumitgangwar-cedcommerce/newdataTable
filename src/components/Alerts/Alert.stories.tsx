import React from "react";
import { Alert, Card } from "..";
import FlexLayout from "../FlexLayout/FlexLayout";




export default {
  title: "Components/Feedback/Alert",
  component: Alert,
  argTypes: {
    type: {
      description: "Set your Alert type",
      control: {
        type: "radio",
        options: ["warning", "success", "danger", "info"],
      },
      defaultValue: "warning",
    },
    children: {
      description: "Set your Alert Title",
      control: {
        type: "text",
      },
      defaultValue: "Alert Text Message",
    },
    onClose: {
      description: "Manage onClose Function",
      control: {
        type: "function",
      },
    },
    destroy: {
      description: "Enable Or disable Dismissible Behaviour of Alert",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    desciption: {
      control: {
        type: "text",
      },
      defaultValue:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim",
    },
  },
};

const destroyf = () => {
  alert("Destroy Clicked!!");
};

const Template = ({ icon, ...rest }: any) => {
  return (
    <Card title="Alerts">
      <Alert
        onClose={destroyf}
        destroy
        {...rest}
        type={rest.type}
        desciption={rest.desciption}
      >
        {rest.children}
      </Alert>
    </Card>
  );
};

export const Primary = Template.bind({});

const type = ["warning", "success", "danger", "info"];
export const Types: any = Template.bind({});
Types.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="extraLoose" direction="vertical">
        {type.map((item: any, index) => {
          return (
            <Alert key={index} onClose={destroyf} destroy type={item}>
              {item.toUpperCase()} Alert Message
            </Alert>
          );
        })}
      </FlexLayout>
    </Card>
  ),
];

export const Alert_without_destroy: any = Template.bind({});
Alert_without_destroy.decorators = [
  () => (
    <Card>
          <Alert type={"success"} destroy={false} desciption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ">
            Alert Without Destroy
          </Alert>
    </Card>
  ),
];

export const Alert_with_description_and_destroy: any = Template.bind({});
Alert_with_description_and_destroy.decorators = [
  () => (
    <Card>
          <Alert onClose={destroyf} destroy type={"info"} desciption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ">
              Alert With Description and destroy
          </Alert>
    </Card>
  ),
];



