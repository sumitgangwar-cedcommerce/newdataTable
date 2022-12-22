/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from "react";
import { Card, CheckBox, ChoiceList } from "../..";
import { SelectI } from "../ChoiceList";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Form/ChoiceList",
  component: ChoiceList,
  argTypes: {
    thickness: {
      description: "Manages the thickness of component",
      control: {
        type: "radio",
        options: ["thick", "thin"],
      },
      defaultValue: "thick",
    },
    value: {
      description: "Selected Value",
      control: {
        type: "array",
      },
    },
    selectHelp: {
      description: "This is select Help",
      control: {
        type: "text",
      },
      defaultValue: "ChoiceList Help Text",
    },
    name: {
      description: "Set Label Of component",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    required: {
      description: "Set whether Required",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    placeholder: {
      description: "Set placeholder",
      control: {
        type: "text",
      },
      defaultValue: "Placeholder",
    },
    error: {
      description: "Set rerror",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    disabled: {
      description: "Set Diabled true",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    searchEable: {
      description: "Set searchEable option true or false",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    showBadges: {
      description: "Show badges of selected option",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    ellipsis: {
      description: "Trim text if it overflows the component",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    options: {
      description: "Default Options",
      control: {
        type: "array",
      },
      defaultValue:  [
        {
          groupLabel: "Description of Label",
          value: "1",
          label: "Option1",
          description: "Label Description",
          group: [
            { value: "5", label: "Child1",description: "Label Description" },
            { value: "6", label: "Child2" },
          ],
        },
        { value: "2", label: "Option2", description: "Label Description" },
        { value: "3", label: "Option3", description: "Label Description" },
      ],
    },
    popoverContainer: {
      description: "Ppover Container",
      control: {
        type: "radio",
        options: ["body", "element"],
      },
      defaultValue: "body",
    },
    childFlexOptions: {
      description: "List of Choicllist in array",
      control: {
        type: "array",
        disable: true,
      },
    },
  },
} as Meta;
const options=[
  {
    groupLabel: "Description of Label",
    value: "1",
    label: "Option1",
    description: "Label Description",
    group: [
      { value: "5", label: "Child1",description: "Label Description" },
      { value: "6", label: "Child2" },
    ],
  },
  { value: "2", label: "Option2", description: "Label Description" },
  { value: "3", label: "Option3", description: "Label Description" },
];
const Template: Story<SelectI> = ({ ...rest }) => {
  const [value1, setValue] = useState(rest.value);
  function onSelectChange(val: any) {
    setValue(val);
  }
  return (
   <Card title={"ChoiceList"}>
      <ChoiceList
      {...rest}
      value={value1}
      placeholder="Choose Your Fields"
      selectHelp={rest.selectHelp}
      onChange={(e) => {
        onSelectChange(e);
      }}
      helpIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c3c3c3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>}
    />
   </Card>
  );
};
export const Primary: any = Template.bind({});
export const ChoiceListRequired: any = Template.bind({});
ChoiceListRequired.decorators = [
  () => {
    const [value1, setValue] = useState("");
  function onSelectChange(val: string) {
    setValue(val);
  }
    return(
     <Card>
       <ChoiceList
       options={options}
      name={"ChoiceList"}
      required
      onChange={(e) => {
        onSelectChange(e);
      }}
      helpIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c3c3c3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>}
    />
     </Card>
    )
  },
];
//disable
export const DisableChoiceList: any = Template.bind({});
DisableChoiceList.decorators = [
  () => {
    const [value, setValue] = useState("");
  function onSelectChange(val: string) {
    setValue(val);
  }
    return(
     <Card>
       <ChoiceList
       options={options}
      name={"ChoiceList"}
      disabled
      onChange={(e) => {
        onSelectChange(e);
      }}
      helpIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c3c3c3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>}
    />
     </Card>
    )
  },
];

// search Enable
export const SearchEnableChoiceList: any = Template.bind({});
SearchEnableChoiceList.decorators = [
  () => {
  const [value1, setValue] = useState("");
  function onSelectChange(val: string) {
    setValue(val);
  }
    return(
     <Card>
       <ChoiceList
       options={options}
       name={"ChoiceList"}
       searchEable
       onChange={(e) => {
        onSelectChange(e);
      }}
      helpIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c3c3c3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>}
    />
     </Card>
    )
  },
];

// search Enable and Badges
export const Search_and_Badges_EnableChoiceList: any = Template.bind({});
Search_and_Badges_EnableChoiceList.decorators = [
  () => {
  const [value1, setValue] = useState("");
  function onSelectChange(val: string) {
    setValue(val);
  }
    return(
     <Card>
       <ChoiceList
       options={options}
       name={"ChoiceList"}
       searchEable
       showBadges
       onChange={(e) => {
        onSelectChange(e);
      }}
      helpIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c3c3c3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>}
    />
     </Card>
    )
  },
];

export const ChoicListWithHelpTextAndIcon: any = Template.bind({});
ChoicListWithHelpTextAndIcon.decorators = [
  () => {
  const [value1, setValue] = useState("");
  function onSelectChange(val: string) {
    setValue(val);
  }
    return(
     <Card>
       <ChoiceList
       options={options}
       name={"ChoiceList"}
        selectHelp={"Write help text here"}
       onChange={(e) => {
        onSelectChange(e);
      }}
      helpIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c3c3c3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>}
    />
     </Card>
    )
  },
];
//
export const ChoicListWithHelpTextAndWithoutIcon: any = Template.bind({});
ChoicListWithHelpTextAndWithoutIcon.decorators = [
  () => {
  const [value1, setValue] = useState("");
  function onSelectChange(val: string) {
    setValue(val);
  }
    return(
     <Card>
       <ChoiceList
       options={options}
       name={"ChoiceList"}
       selectHelp={"Write help text here"}
       onChange={(e) => {
        onSelectChange(e);
      }}
    />
     </Card>
    )
  },
];
