import React, { useState } from "react";
import { Filter as Filters } from "react-feather";
import { CheckBox, Select, TextField, FlexLayout, Card } from "..";
import { FormElement, Radio } from "../FormElement";
import Filter from "./Filter";

export default {
  title: "Components/Filter",
  component: Filter,
  argTypes: {
    filters: {
      description: "Filter array",
      control: {
        disable: true,
      },
    },
    heading: {
      description: "Enter heading Of Filter Sheet",
      control: {
        type: "text",
      },
      defaultValue: "Filter Heading",
    },
    button: {
      description: "Enter label of Activator",
      control: {
        type: "text",
      },
      defaultValue: "More Filters",
    },
    disableReset: {
      description: "disable Reset set true or flase Reset btn",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    disableApply: {
      description:
        "Disable Reset set true or flase Apply btn, You can enable it after checking or selecting any field in filter",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    onApply: {
      description:
        "Manage onApply Function",
      control: {
        type: "function",
        disable: true,
      },
    },
    onClose: {
      description:
        "Manage onClose Function",
      control: {
        type: "function",
        disable: true,
      },
    },
    resetFilter: {
      description:
        "Manage resetFilter Function",
      control: {
        type: "function",
        disable: true,
      },
    },
    icon: {
      description: "Set Filter Icon as per Your Requirement",
      control: {
        disable: true,
      },
    },

    type: {
      description: "You can set type of Button of filter component",
      control: {
        type: "radio",
        options: [
          "Primary",
          "Plain",
          "Danger",
          "Secondary",
          "PlainDark",
          "Small",
          "Outlined",
          "none",
        ],
      },
      defaultValue: "Outlined",
    },
  },
};

const filtersObj = [
  {
    name: "Select Filter",
    children: (
      <Select
        options={[
          {
            label: "Option 1",
            value: "valuedf",
          },
          {
            label: "Option 2",
            value: "value",
          },
        ]}
      />
    ),
  },
  {
    name: "Select and Text Field Filter",
    children: (
      <>
        <FormElement>
          <Select
            options={[
              {
                label: "Option 1",
                value: "valuedf",
              },
              {
                label: "Option 2",
                value: "value",
              },
            ]}
          />
          <TextFieldRender />
        </FormElement>
      </>
    ),
  },
  {
    name: "Checkbox Filter",
    children: (
      <FlexLayout spacing="tight" direction="vertical">
        <CheckBoxRender labelVal="Finished" />
        <CheckBoxRender labelVal="Warning" />
        <CheckBoxRender labelVal="Error" />
        <CheckBoxRender labelVal="Pending" />
      </FlexLayout>
    ),
  },
  {
    name: "Checbox Filter",
    children: (
      <FlexLayout spacing="tight" direction="vertical">
        <RadioRender />
       
      </FlexLayout>
    ),
  },
];

function TextFieldRender() {
  const [text, updateText] = useState("");

  return (
    <TextField
      placeHolder="Enter text"
      value={text}
      onChange={(e) => {
        updateText(e);
      }}
    />
  );
}

function CheckBoxRender({ labelVal }: any) {
  const [checked, updateChecked] = useState(false);

  return (
    <CheckBox
      checked={checked}
      labelVal={labelVal}
      onClick={() => {
        updateChecked(!checked);
      }}
    />
  );
}

function RadioRender() {
  const [value, setvalue] = useState<any>({})
  return (
    <Card title={'Radio Button'}>
      <FormElement>
        {['1', '2','3'].map((items: any,index:any) => {
          return (
            <Radio
              id={index}
              checked={value.index}
              name={"2"}
              labelVal={items}
              value={value}
              onClick={() => {
                const temp={...value};
                temp[index]=true
                setvalue(temp)
              }
              }
            />
          )
        })}
      </FormElement>
    </Card>
  )
}

const Template = ({ ...rest }) => {
  return (
    <>
      <Filter
        {...rest}
        disableReset={false}
        filters={filtersObj}
        type={rest.type}
        button={rest.button}
        icon={<Filters color="#2a2a2a" size={16} />}
      />
    </>
  );
};

export const Primary = Template.bind({});
