import React, { useState } from "react";
import { Filter as Filters } from "react-feather";
import { CheckBox, Select, TextField, FlexLayout } from "..";
import { Card } from "../Card";
import { FormElement } from "../FormElement";
import AdvanceFilter from "./AdvanceFilter";

export default {
  title: "Components/Overlays/AdvanceFilter",
  component: AdvanceFilter,
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
      description: "Manage onApply Function",
      control: {
        type: "function",
        disable: true,
      },
    },
    onClose: {
      description: "Manage onClose Function",
      control: {
        type: "function",
        disable: true,
      },
    },
    resetFilter: {
      description: "Manage resetFilter Function",
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
    filterType: {
      description: "You can set type of Button of filter component",
      control: {
        type: "radio",
        options: [
          "Sheet",
          "Popover",
        ],
      },
      defaultValue: "Sheet",
    },
    type: {
      description: "You can set type of Button of filter component",
      control: {
        type: "radio",
        options: [
          "Primary",
          "Danger",
          "DangerOutlined",
          "Secondary",
          "Outlined",
          "DangerPlain",
          "TextButton",
        ],
      },
      defaultValue: "Outlined",
    },
  },
};

const filtersObj = [
  {
    name: "Status Hello",
    badgeCount: 5,
    children: <SelectRender />,
  },
  {
    name: "Sales hello",
    badgeCount: 5,
    children: (
      <>
        <FormElement>
          <SelectRender  />
          <TextFieldRender />
        </FormElement>
      </>
    ),
  },
  {
    name: "Metrics hello",
    children: (
      <FormElement>
        <CheckBoxRender labelVal="Finished" />
        <CheckBoxRender labelVal="Warning" />
        <CheckBoxRender labelVal="Error" />
        <CheckBoxRender labelVal="Pending" />
        </FormElement>
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
function SelectRender() {
  const [selval, setVal] = useState("");
  return (
    <Select
      value={selval}
      onChange={(e) => {
        setVal(e);
      }}
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

const Template = ({ ...rest }) => {
  return (
    <Card>
      <AdvanceFilter
        {...rest}
        filterType={rest.filterType}
        disableReset={rest.disableReset}
        disableApply={rest.disableApply}
        filters={filtersObj}
        type={rest.type}
        onClose={() => {}}
        button={rest.button}
        icon={<Filters color="#2a2a2a" size={16} />}
      />
    </Card>
  );
};

export const Primary = Template.bind({});
export const AdvanceFilterwithAllProps: any = Template.bind({});
AdvanceFilterwithAllProps.decorators = [
  () => {
    return (
      <Card>
        <AdvanceFilter
          filters={filtersObj}
          heading="Filters"
          type={"Outlined"}
          onClose={() => {}}
          button={"More Filter"}
          icon={<Filters color="#2a2a2a" size={16} />}
        />
      </Card>
    );
  },
];
