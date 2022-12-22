/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from "react";
import { Select } from "../..";
import { SelectI } from "../Select";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Card } from "../../Card";
import { HelpCircle, Search } from "react-feather";

export default {
  title: "Components/Form/Select",
  component: Select,
  argTypes: {
    value: {
      control: {
        type: "array",
      },
    },
    thickness: {
      control: {
        type: "radio",
        options: ["thick", "thin"],
      },
      defaultValue: "thick",
    },
    controlStates: {
      control: {
        type: "radio",
        options: ["Success", "Warning", "Error", "none"],
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    ellipsis: {
      description: "Truncate selection if it oerflows the Select Box",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    name: {
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    required: {
      description: "Works Only with Normal Label Placement",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    searchEable: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    loading: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    position: {
      control: {
        type: "radio",
        options: ["top", "bottom"],
      },
    },
    labelInLine: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    helpIcon: {
      description: "Add any desired custom Icon beside help text",
      control: {
        type: "text",
      },
      defaultValue: <Search size={20} color={"#c3c3c3"} />,
    },
    selectHelp: {
      control: {
        type: "text",
      },
      defaultValue: "Write help text here",
    },
    customClass: {
      description: "Add any desired custom class on Dropdown popover",
      control: {
        type: "text",
      },
      defaultValue: "CustomClass",
    },
    popoverContainer: {
      control: {
        type: "radio",
        options: ["body", "element"],
      },
      defaultValue: "body",
    },
    placeholder: {
      control: {
        type: "text",
      },
      defaultValue: "Select",
    },
  },
} as Meta;
const options = [
  {
    value: "0",
    label: "This is your Heading 0",
    group: [
      { value: "0.1", label: "Option 0.1" },
      { value: "0.2", label: "Option 0.2" },
    ],
  },
  {
    value: "1.0",
    label: "This is your Heading 1",
    group: [
      { value: "1.1", label: "Option 1.1" },
      { value: "1.2", label: "Option 1.2" },
    ],
  },
  {
    value: "2.0",
    label: "Collection Of headings",
    group: [
      { value: "2", label: "Option2" },
      { value: "3", label: "Option3" },
      { value: "4", label: "Option4" },
      { value: "5", label: "Option5" },
      { value: "6", label: "Option6" },
      { value: "7", label: "Option7" },
      { value: "8", label: "Option8" },
    ],
  },
];
const Template: Story<SelectI> = ({ ...rest }) => {
  const [value1, setValue] = useState("");
  function onSelectChange(val: string) {
    setValue(val);
  }
  return (
    <Card title={"hello"}>
      <Select
        {...rest}
        value={value1}
        name={rest.name}
        labelInLine={rest.labelInLine}
        position="top"
        popoverContainer="body"
        required={rest.required}
        controlStates={rest.controlStates}
        onChange={(e) => {
          onSelectChange(e);
        }}
        helpIcon={rest.helpIcon}
      />
    </Card>
  );
};

const Group: Story<SelectI> = ({ ...rest }) => {
  const [value1, setValue] = useState("");
  function onSelectChange(val: string) {
    setValue(val);
  }

  return (
    <Card title={"hello"}>
      <Select
        {...rest}
        onblur={() => {}}
        value={value1}
        popoverContainer={rest.popoverContainer}
        name={rest.name}
        labelInLine={rest.labelInLine}
        onChange={(e) => {
          onSelectChange(e);
        }}
        helpIcon={rest.helpIcon}
      />
    </Card>
  );
};

export const Basic = (args: SelectI) => <Group {...args} />;
Basic.args = {
  options: [
    {
      value: "0",
      label: "This is your Heading 0",
      group: [
        { value: "0.1", label: "Option 0.1" },
        { value: "0.2", label: "Option 0.2" },
      ],
    },
    {
      value: "1.0",
      label: "This is your Heading 1",
      group: [
        { value: "1.1", label: "Option 1.1" },
        { value: "1.2", label: "Option 1.2" },
      ],
    },
    {
      value: "2.0",
      label: "Collection Of headings",
      group: [
        { value: "2", label: "Option2" },
        { value: "3", label: "Option3" },
        { value: "4", label: "Option4" },
        { value: "5", label: "Option5" },
        { value: "6", label: "Option6" },
        { value: "7", label: "Option7" },
        { value: "8", label: "Option8" },
      ],
    },
  ],
};

// Required
export const SelectRequired: any = Template.bind({});
SelectRequired.decorators = [
  () => {
    const [value1, setValue] = useState("");
    function onSelectChange(val: string) {
      setValue(val);
    }
    return (
      <Card>
        <Select
          options={options}
          onblur={() => {}}
          value={value1}
          // dropDownheight={200}
          name={"Select"}
          required
          onChange={(e) => {
            onSelectChange(e);
          }}
          helpIcon={<HelpCircle size={20} />}
        />
      </Card>
    );
  },
];
//disable
export const DisableSelect: any = Template.bind({});
DisableSelect.decorators = [
  () => {
    const [value1, setValue] = useState("");
    function onSelectChange(val: string) {
      setValue(val);
    }
    return (
      <Card>
        <Select
          options={options}
          onblur={() => {}}
          value={value1}
          // dropDownheight={200}
          name={"Select"}
          disabled
          onChange={(e) => {
            onSelectChange(e);
          }}
          helpIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c3c3c3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          }
        />
      </Card>
    );
  },
];
// with Description
export const SelectLoading: any = Template.bind({});
SelectLoading.decorators = [
  () => {
    const [value1, setValue] = useState("");
    function onSelectChange(val: string) {
      setValue(val);
    }
    return (
      <Card>
        <Select
          options={options}
          onblur={() => {}}
          value={value1}
          // dropDownheight={200}
          name={"Select"}
          loading
          onChange={(e) => {
            onSelectChange(e);
          }}
          helpIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c3c3c3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          }
        />
      </Card>
    );
  },
];
// position
export const SelectPopoverPosition: any = Template.bind({});
SelectPopoverPosition.decorators = [
  () => {
    const [value1, setValue] = useState("");
    function onSelectChange(val: string) {
      setValue(val);
    }
    return (
      <Card>
        <Select
          options={options}
          onblur={() => {}}
          value={value1}
          // dropDownheight={200}
          name={"Select"}
          onChange={(e) => {
            onSelectChange(e);
          }}
          helpIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c3c3c3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          }
        />
      </Card>
    );
  },
];
export const SearchEnableSelect: any = Template.bind({});
SearchEnableSelect.decorators = [
  () => {
    const [value1, setValue] = useState("");
    function onSelectChange(val: string) {
      setValue(val);
    }
    return (
      <Card>
        <Select
          options={options}
          onblur={() => {}}
          value={value1}
          // dropDownheight={200}
          name={"Select"}
          searchEable
          onChange={(e) => {
            onSelectChange(e);
          }}
          helpIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c3c3c3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          }
        />
      </Card>
    );
  },
];
//Labelinline
export const LabelInLineSelect: any = Template.bind({});
LabelInLineSelect.decorators = [
  () => {
    const [value1, setValue] = useState("");
    function onSelectChange(val: string) {
      setValue(val);
    }
    return (
      <Card>
        <Select
          options={options}
          onblur={() => {}}
          value={value1}
          // dropDownheight={200}
          name={"Select Label"}
          labelInLine
          onChange={(e) => {
            onSelectChange(e);
          }}
          helpIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c3c3c3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          }
        />
      </Card>
    );
  },
];
//with HelpText and Icon
export const SelectWithHelpTextAndIcon: any = Template.bind({});
SelectWithHelpTextAndIcon.decorators = [
  () => {
    const [value1, setValue] = useState("");
    function onSelectChange(val: string) {
      setValue(val);
    }
    return (
      <Card>
        <Select
          options={options}
          onblur={() => {}}
          value={value1}
          // dropDownheight={200}
          name={"Select Label"}
          selectHelp={"Write help text here"}
          onChange={(e) => {
            onSelectChange(e);
          }}
          helpIcon={<HelpCircle size={20} />}
        />
      </Card>
    );
  },
];
//
export const SelectWithHelpTextAndWithoutIcon: any = Template.bind({});
SelectWithHelpTextAndWithoutIcon.decorators = [
  () => {
    const [value1, setValue] = useState("");
    function onSelectChange(val: string) {
      setValue(val);
    }
    return (
      <Card>
        <Select
          options={options}
          onblur={() => {}}
          value={value1}
          name={"Select Label"}
          selectHelp={"Write help text here"}
          onChange={(e) => {
            onSelectChange(e);
          }}
        />
      </Card>
    );
  },
];
