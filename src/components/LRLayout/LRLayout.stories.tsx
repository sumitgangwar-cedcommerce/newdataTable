import React, { useState } from "react";
import { LRLayout, Alert, FlexLayout } from "..";
import TextStyles from "../TextStyles/TextStyles";
import {
  CheckBox,
  FormElement,
  Radio,
  Select,
  TextField,
} from "../FormElement";
import Button from "../Button/Button";
import { Card } from "../Card";

export default {
  title: "Components/Layout/LRLayout",
  component: LRLayout,
  argTypes: {
    children: {
      description: "Pass here ReactNode or string  ",
      control: {
        disable: true,
      },
    },
    title: {
      description: "title Label",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    lrHelpText: {
      description: "Left Right help text",
      control: {
        type: "text",
      },
      defaultValue: "Left Right help text",
    },
    cardTitle: {
      description: "Set card Heading",
      control: {
        type: "text",
      },
    },
    required: {
      description: "show and hide required star in label",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template = ({ ...rest }) => {
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [value3, setValue3] = useState<string>("");

  function onSelectChange(val: any) {
    setValue3(val);
  }
  const optionsArr = [
    {
      label: "label_1",
      value: "value_1",
    },
    {
      label: "label_2",
      value: "value_2",
    },
    {
      label: "label_3",
      value: "value_3",
    },
  ];
  return (
    <Card>
      <LRLayout
        {...rest}
        required={rest.required}
        title={rest.title}
        lrHelpText={rest.lrHelpText}
        cardTitle={rest.cardTitle}
      >
        <FormElement>
          <TextField
            label="Label1"
            value={value1}
            onChange={(e) => setValue1(e)}
          ></TextField>
          <TextField
            label="Label2"
            value={value2}
            onChange={(e) => setValue2(e)}
          ></TextField>
          <Select
            label="Label 3"
            value={value3}
            options={optionsArr}
            onChange={(e) => {
              onSelectChange(e);
            }}
          ></Select>
          <FlexLayout direction="vertical" spacing="mediumTight">
            <TextStyles>Choice List</TextStyles>
            <Radio
              id="one"
              labelVal="Label 1"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              name={"one"}
            ></Radio>
            <Radio
              id="two"
              labelVal="Label 2"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              name={"one"}
            ></Radio>
            <Radio
              id="=three"
              labelVal="Label 3"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              name={"one"}
            ></Radio>
          </FlexLayout>
        </FormElement>
      </LRLayout>
    </Card>
  );
};

export const Primary = Template.bind({});
//LR
const optionsArr = [
  {
    label: "label_1",
    value: "value_1",
  },
  {
    label: "label_2",
    value: "value_2",
  },
  {
    label: "label_3",
    value: "value_3",
  },
];
export const LR_Layout_with_simple_help_text = () => {
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [checked, setChecked] = useState<boolean[]>([]);

  function onSelectChange(val: any) {
    setValue2(val);
  }
  const handleCheckBox = (index: number) => {
    let tempChecked = [...checked];
    tempChecked[index] = !tempChecked[index];
    setChecked(tempChecked);
  };
  return (
    <LRLayout title={"Title"} lrHelpText={"LR Layout help text"}>
      <FormElement>
        <TextField
          label="Label 1"
          value={value1}
          onChange={(e) => setValue1(e)}
        ></TextField>

        <Select
          label="Label "
          value={value2}
          options={optionsArr}
          onChange={(e) => {
            onSelectChange(e);
          }}
        ></Select>
        <FlexLayout direction="vertical" spacing="mediumTight">
          <TextStyles>Radio Buttons</TextStyles>
          <Radio
            id="four"
            labelVal="Label"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            name={"radio"}
          ></Radio>
          <Radio
            id="five"
            labelVal="Label"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            name={"radio"}
          ></Radio>
        </FlexLayout>
        <FlexLayout direction="vertical" spacing="mediumTight">
          <TextStyles>CheckBoxes</TextStyles>
          {["Label", "Label"].map((type: any, index: any) => {
            return (
              <CheckBox
                name="Label"
                id={index}
                labelVal={type}
                onClick={() => {
                  handleCheckBox(index);
                }}
                checked={checked[index]}
              />
            );
          })}
        </FlexLayout>
      </FormElement>
    </LRLayout>
  );
};
//LR_Layout_with_custom_help_text
export const LR_Layout_with_custom_help_text = () => {
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [checked, setChecked] = useState<boolean[]>([]);

  function onSelectChange(val: any) {
    setValue2(val);
  }
  const handleCheckBox = (index: number) => {
    let tempChecked = [...checked];
    tempChecked[index] = !tempChecked[index];
    setChecked(tempChecked);
  };
  return (
    <LRLayout
      title={"Title"}
      lrHelpText={
        <FlexLayout spacing="loose" direction="vertical">
          <TextStyles>LR Help Text</TextStyles>
          <Alert type={"warning"} desciption="Alert description">
            {" "}
            Alert Text message
          </Alert>
        </FlexLayout>
      }
    >
      <FormElement>
        <TextField
          label="Label 1"
          value={value1}
          onChange={(e) => setValue1(e)}
        ></TextField>

        <Select
          label="Label "
          value={value2}
          options={optionsArr}
          onChange={(e) => {
            onSelectChange(e);
          }}
        ></Select>
        <FlexLayout direction="vertical" spacing="mediumTight">
          <TextStyles>Radio Buttons</TextStyles>
          <Radio
            id="six"
            labelVal="Label"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            name={"radio"}
          ></Radio>
          <Radio
            id="seven"
            labelVal="Label"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            name={"radio"}
          ></Radio>
        </FlexLayout>
        <FlexLayout direction="vertical" spacing="mediumTight">
          <TextStyles>CheckBoxes</TextStyles>
          {["Label", "Label"].map((type: any, index: any) => {
            return (
              <CheckBox
                name="Label"
                id={index}
                labelVal={type}
                onClick={() => {
                  handleCheckBox(index);
                }}
                checked={checked[index]}
              />
            );
          })}
        </FlexLayout>
      </FormElement>
    </LRLayout>
  );
};
//3

//LR_Layout_with_custom_help_text
export const LR_Layout_with_Card_Header_and_Action = () => {
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [checked, setChecked] = useState<boolean[]>([]);

  function onSelectChange(val: any) {
    setValue2(val);
  }
  const handleCheckBox = (index: number) => {
    let tempChecked = [...checked];
    tempChecked[index] = !tempChecked[index];
    setChecked(tempChecked);
  };
  return (
    <LRLayout
      cardTitle="Card Title"
      cardAction={<Button type="TextButton">Action</Button>}
      title={"Title"}
      lrHelpText={
        <FlexLayout spacing="loose" direction="vertical">
          <TextStyles>LR Help Text</TextStyles>
          <Alert type={"warning"} desciption="Alert description">
            {" "}
            Alert Text message
          </Alert>
        </FlexLayout>
      }
    >
      <FormElement>
        <TextField
          label="Label 1"
          value={value1}
          onChange={(e) => setValue1(e)}
        ></TextField>

        <Select
          label="Label "
          value={value2}
          options={optionsArr}
          onChange={(e) => {
            onSelectChange(e);
          }}
        ></Select>
        <FlexLayout direction="vertical" spacing="mediumTight">
          <TextStyles>Radio Buttons</TextStyles>
          <Radio
            id="six"
            labelVal="Label"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            name={"radio"}
          ></Radio>
          <Radio
            id="seven"
            labelVal="Label"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            name={"radio"}
          ></Radio>
        </FlexLayout>
        <FlexLayout direction="vertical" spacing="mediumTight">
          <TextStyles>CheckBoxes</TextStyles>
          {["Label", "Label"].map((type: any, index: any) => {
            return (
              <CheckBox
                name="Label"
                id={index}
                labelVal={type}
                onClick={() => {
                  handleCheckBox(index);
                }}
                checked={checked[index]}
              />
            );
          })}
        </FlexLayout>
      </FormElement>
    </LRLayout>
  );
};
