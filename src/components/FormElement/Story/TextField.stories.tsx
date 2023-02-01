import React, { useState } from "react";
import { Search } from "react-feather";
import { TextField, Card, FlexLayout, Select } from "../..";
import Button from "../../Button/Button";
import FormChild from "../FormChild";
import FormElement from "../FormElement";
import * as Icon from "../../../storybook/Foundation/Icons/Icons";
const allIcons: any = { ...Icon };

export default {
  title: "Components/Form/TextField",
  component: TextField,
  argTypes: {
    value: {
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    placeHolder: {
      control: {
        type: "text",
      },
      defaultValue: "Placeholder",
    },
    label: {
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    type: {
      control: {
        type: "radio",
        options: ["text", "number", "password", "tel", "url"],
      },
      defaultValue: "text",
    },
    showHelp: {
      control: {
        type: "text",
      },
      defaultValue: "Help Text of Textfield",
    },
    id: {
      description: "Set any custom ID for TextField",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    controlStates: {
      control: {
        type: "radio",
        options: ["Success", "Warning", "Error"],
      },
    },
    prefix: {
      description: "You can Use any Icon or ReactNode as Prefix",
      control: {
        type: "text",
      },
      defaultValue: <Search size={20} />,
    },
    suffix: {
      description: "You can Use any Icon or ReactNode as Suffix",
      control: {
        type: "text",
      },
      defaultValue: "cm",
    },
    clearButton: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    onFocus: {
      control: {
        type: "boolean",
      },
    },
    onEnter: {
      control: {
        disable: true,
      },
    },
    onChange: {
      control: {
        disable: true,
      },
    },
    connectLeft: {
      control: {
        disable: true,
      },
    },
    connectRight: {
      control: {
        disable: true,
      },
    },
    maxlength: {
      control: {
        type: "text",
      },
      defaultValue: "200",
    },
    min: {
      control: {
        type: "text",
      },
      defaultValue: "20",
    },
    max: {
      control: {
        type: "text",
      },
      defaultValue: "200",
    },
    helpIcon: {
      description: "set icon beside help text",
      control: {
          type: "select",
          options: Object.keys(allIcons),
      },
      defaultValue: "Search"
  },
    required: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    readOnly: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    autocomplete: {
      control: {
        type: "radio",
        options: ["off", "on"],
      },
      defaultValue: "off",
    },
    loading: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    disabled: {
      control: {
        type: "boolean",
        description: "You can Enable or Disable textfields",
      },
      defaultValue: false,
    },
    strength: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    tabIndex: {
      control: {
        type: "text",
      },
      defaultValue: 1,
    },
    show: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = ({ ...rest }) => {
  const [tt, setTT] = useState("");
  function hello() {
    alert("Enter pressed");
  }
  function clearField() {
    setTT("");
  }

  return (
    <Card>
      <FormElement>
        <FormChild>
          <TextField
            id={rest.id}
            label={rest.label}
            maxlength={rest.maxlength}
            clearButton={rest.clearButton}
            clearFunction={() => {
              clearField();
            }}
            type={rest.type}
            autocomplete={rest.autocomplete}
            placeHolder={rest.placeHolder}
            disabled={rest.disabled}
            loading={rest.loading}
            max={rest.max}
            min={rest.min}
            readOnly={rest.readOnly}
            value={tt || rest.value}
            onEnter={() => {
              hello();
            }}
            onKeyUp={() => {}}
            onblur={() => {}}
            onChange={setTT}
            onBackspace={() => alert("hello backspace")}
            tabIndex={rest.tabIndex}
            required={rest.required}
            showHelp={rest.showHelp}
            controlStates={rest.controlStates}
            prefix={rest.prefix}
            suffix={rest.suffix}
            helpIcon={allIcons[rest.helpIcon]({ size: 20, color: `${rest.controlStates == "Error" ? "var(--inte-R200)" : "var(--inte-G90)"}` })}
          />
        </FormChild>
      </FormElement>
    </Card>
  );
};

export const Primary = Template.bind({});
// Variants
// default
export const Default: any = Template.bind({});
Default.decorators = [
  () => {
    const [value, setValue] = useState("");
    return (
      <Card>
        <FlexLayout desktopWidth="100" tabWidth="100" mobileWidth="100">
          <TextField type="text" onChange={(e) => setValue(e)} value={value} />
        </FlexLayout>
      </Card>
    );
  },
];

// Types
const type = ["text", "number", "password", "tel", "url"];
export const Types: any = Template.bind({});
Types.decorators = [
  () => {
    const [value, setvalue] = useState<any>([]);
    const handleChange = (e: string, index: any) => {
      const temp = [...value];
      temp[index] = e;
      setvalue(temp);
    };
    return (
      <Card>
        <FlexLayout
          desktopWidth="50"
          tabWidth="50"
          mobileWidth="100"
          spacing="extraLoose"
        >
          {type.map((type: any, index: any) => {
            return (
              <TextField
                type={type}
                label={
                  type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()
                }
                value={value[index]}
                onChange={(e) => handleChange(e, index)}
                autocomplete="off"
                placeHolder={`Enter ${type}`}
              />
            );
          })}
        </FlexLayout>
      </Card>
    );
  },
];
// password
export const strengthPassword: any = Template.bind({});
strengthPassword.decorators = [
  () => {
    const [value, setValue] = useState("");

    return (
      <Card>
        <TextField
          label="Password"
          type="password"
          onChange={(e) => setValue(e)}
          value={value}
          strength={true}
          connectRight={
            <Button
              type="DangerOutlined"
              thickness="large"
              onClick={() => {
                setValue("");
              }}
            >
              Clear
            </Button>
          }
        />
      </Card>
    );
  },
];
// Label
export const Label: any = Template.bind({});
Label.decorators = [
  () => {
    const [value, setValue] = useState("");
    return (
      <Card>
        <TextField
          label="Label"
          type="text"
          onChange={(e) => setValue(e)}
          value={value}
        />
      </Card>
    );
  },
];
// Place Holder
export const PlaceHolder: any = Template.bind({});
PlaceHolder.decorators = [
  () => {
    const [value, setValue] = useState("");
    return (
      <Card>
        <TextField
          type="text"
          placeHolder="Enter here"
          onChange={(e) => setValue(e)}
          value={value}
        />
      </Card>
    );
  },
];
// Show Help
export const ShowHelp: any = Template.bind({});
ShowHelp.decorators = [
  () => {
    const [value, setValue] = useState("");
    return (
      <Card>
        <TextField
          type="text"
          label="Label"
          placeHolder="Enter here"
          showHelp="Show Help"
          onChange={(e) => setValue(e)}
          value={value}
        />
      </Card>
    );
  },
];
// Show Help
export const ShowHelpIcon: any = Template.bind({});
ShowHelpIcon.decorators = [
  () => {
    const [value, setValue] = useState("");
    return (
      <Card>
        <TextField
          type="text"
          label="Label"
          placeHolder="Enter here"
          showHelp="Show Help"
          onChange={(e) => setValue(e)}
          value={value}
          helpIcon={<Search size={20} />}
        />
      </Card>
    );
  },
];
// Prefix
export const Prefix: any = Template.bind({});
Prefix.decorators = [
  () => {
    const [value, setValue] = useState("");
    return (
      <Card>
        <FormElement>
          <TextField
            type="text"
            label="Label"
            placeHolder="Prefix with Icon"
            onChange={(e) => setValue(e)}
            value={value}
            prefix={<Search size={20} />}
          />
          <TextField
            type="text"
            label="Label"
            placeHolder="Prefix with Text"
            onChange={(e) => setValue(e)}
            value={value}
            prefix={"Weight"}
          />
        </FormElement>
      </Card>
    );
  },
];

//Suffix
export const Suffix: any = Template.bind({});
Suffix.decorators = [
  () => {
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("");
    return (
      <Card>
        <FormElement>
          <TextField
            type="text"
            label="Label"
            placeHolder="Suffix With icon"
            onChange={(e) => setValue(e)}
            value={value}
            suffix={<Search size={20} />}
          />
          <TextField
            type="text"
            label="Label"
            placeHolder="Suffix with Text"
            onChange={(e) => setValue1(e)}
            value={value1}
            suffix={"Cm"}
          />
        </FormElement>
      </Card>
    );
  },
];

//Connected
export const ConnectedField: any = Template.bind({});
ConnectedField.decorators = [
  () => {
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("Kg");
    function onSelectChange(val: string) {
      setValue1(val);
    }
    const [value2, setValue2] = useState("Kg");
    function onSelectChange2(val: string) {
      setValue2(val);
    }
    const options = [
      {
        value: "Kg",
        label: "Kg",
      },
      {
        value: "Gram",
        label: "Gram",
      },
      {
        value: "Mg",
        label: "Mg",
      },
    ];
    return (
      <Card>
        <FormElement>
          <TextField
            type="text"
            label="Connect Left"
            placeHolder="Enter text"
            onChange={(e) => setValue(e)}
            value={value}
            showHelp={"Helper text"}
            connectLeft={
              <Select
                onChange={(e) => {
                  onSelectChange(e);
                }}
                placeholder="Kg"
                value={value1}
                options={options}
              />
            }
          />
          <TextField
            type="text"
            label="Connect Right"
            placeHolder="Enter text"
            onChange={(e) => setValue(e)}
            value={value}
            showHelp={"Helper text"}
            connectRight={<Button content="Submit" thickness="large"></Button>}
          />
          <TextField
            type="text"
            label="Connected Both"
            placeHolder="Enter text"
            onChange={(e) => setValue(e)}
            value={value}
            showHelp={"Helper text"}
            connectLeft={
              <Select
                onChange={(e) => {
                  onSelectChange2(e);
                }}
                placeholder="Kg"
                value={value2}
                options={options}
              />
            }
            connectRight={<Button content="Submit" thickness="large"></Button>}
          />
        </FormElement>
      </Card>
    );
  },
];

// loading
export const Loading_Textfield: any = Template.bind({});
Loading_Textfield.decorators = [
  () => {
    const [value, setValue] = useState("");
    return (
      <Card>
        <TextField
          type="text"
          label="Label"
          placeHolder="Enter here"
          onChange={(e) => setValue(e)}
          value={value}
          loading={true}
        />
      </Card>
    );
  },
];

//clearButton
export const ClearButton: any = Template.bind({});
ClearButton.decorators = [
  () => {
    const [value, setValue] = useState("");
    return (
      <Card>
        <TextField
          type="text"
          label="Label"
          placeHolder="Enter here"
          onChange={(e) => setValue(e)}
          value={value}
          clearButton={true}
          clearFunction={() => setValue("")}
        />
      </Card>
    );
  },
];

//Control States
export const Control_States: any = Template.bind({});
Control_States.decorators = [
  () => {
    const controlStates = ["Default", "Warning", "Success", "Error"];
    const [value, setValue] = useState("");
    return (
      <Card>
        <FormElement>
          {controlStates.map((data: any, index: any) => {
            return (
              <TextField
                type="text"
                label={data}
                showHelp="Help Text"
                placeHolder="Enter here"
                onChange={(e) => setValue(e)}
                value={value}
                controlStates={data}
              />
            );
          })}
        </FormElement>
      </Card>
    );
  },
];
