import React, { useState } from "react";
import AutoComplete from "./AutoComplete";
import { Card } from "..";
import { FlexChild, FlexLayout } from "../FlexLayout";
import TextStyles from "../TextStyles/TextStyles";
import Alert from "../Alerts/Alert";

export default {
  title: "Components/AutoComplete",
  component: AutoComplete,
  argTypes: {
    name: {
      name: "Name",
      description: "This is name title",
      control: {
        type: "text",
      },
      defaultValue: "Name",
    },
    options: {
      description: "You can send array of objects for dropdown Items",
      control: {
        disable: true,
      },
    },
    value: {
      description: "It's your selected value",
      control: {
        disable: true,
      },
    },
    prefix: {
      description: "You can send default inner prefix icon",
      control: {
        disable: true,
      },
    },
    suffix: {
      description: "You can send default inner suffix icon",
      control: {
        disable: true,
      },
    },
    showHelp: {
      description: "Show your Help text",
      control: {
        type: "text",
      },
      defaultValue: "Kindly Search your required Item",
    },
    placeHolder: {
      description: "Show your Placeholder",
      control: {
        type: "text",
      },
      defaultValue: "Search Your Items",
    },
    extraClass: {
      description: "Set Any custom class to dropdown to manage your Custom design needs",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    setHiglighted: {
      description: "Show heighlighted text text when user search any query",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    showPopover: {
      description: "Show popover on hovering searched items list",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    onChange: {
      description: "Manage onChange Function",
      control: {
        type: "function",
      },
    },
    onClick: {
      description: "Manage onClick Function",
      control: {
        type: "function",
      },
    },
    onEnter: {
      description: "Manage onEnter Function",
      control: {
        type: "function",
      },
    },
    clearButton: {
      description: "Clear typed query in search box or clear selected value",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    clearFunction: {
      description:
        "Call back function to fire when user clear any data from textfield",
      control: {
        type: "boolean",
        disable: true,
      },
    },
    loading: {
      description: "Show loading state when data is fetching",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    popoverPosition: {
      description: "Set Position Of the Popover",
      control: {
        type: "radio",
        options: ["right", "left", "top", "bottom"],
      },
      defaultValue: "right",
    },
  },
};

const names = [
  {
    label: "Barbara-anne Barbara-anne Barbara-anne Barbara-anne" ,
    value: "Barbara-anne Barbara-anne Barbara-anne Barbara-anne",
    lname: "hello",
    id: "popover0",
    popoverContent: (
      <FlexLayout direction="vertical" spacing="loose">
        <FlexLayout wrap="noWrap" spacing="tight">
          <TextStyles fontweight="bold">Size :</TextStyles>
          <TextStyles textcolor="light">Barbara</TextStyles>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <TextStyles fontweight="bold">Intrests:</TextStyles>
          <TextStyles textcolor="light">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </TextStyles>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <TextStyles fontweight="bold">Description</TextStyles>
          <TextStyles textcolor="light">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </TextStyles>
        </FlexLayout>
        <Alert
          type="info"
          desciption="The audience size for the selected interest group is shown as a range. These numbers are subject to change over time."
        >
          {}
        </Alert>
      </FlexLayout>
    ),
  },
  {
    label: "Jahaj Jahaaj jahaajj",
    value: "Jahaj Jahaaj jahaajj",
    id: "popover1",
    popoverContent: (
      <FlexLayout direction="vertical" spacing="loose">
        <FlexLayout wrap="noWrap" spacing="tight">
          <TextStyles fontweight="bold">Size :</TextStyles>
          <TextStyles textcolor="light">jahaaj</TextStyles>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <TextStyles fontweight="bold">Intrests:</TextStyles>
          <TextStyles textcolor="light">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </TextStyles>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <TextStyles fontweight="bold">Description</TextStyles>
          <TextStyles textcolor="light">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </TextStyles>
        </FlexLayout>
        <Alert
          type="info"
          desciption="The audience size for the selected interest group is shown as a range. These numbers are subject to change over time."
        >
          {}
        </Alert>
      </FlexLayout>
    ),
  },
  {
    label: "Debi",
    value: "Debi",
    id: "popover2",
    popoverContent: (
      <FlexLayout direction="vertical" spacing="loose">
        <FlexLayout wrap="noWrap" spacing="tight">
          <TextStyles fontweight="bold">Size :</TextStyles>
          <TextStyles textcolor="light">42Debi</TextStyles>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <TextStyles fontweight="bold">Intrests:</TextStyles>
          <TextStyles textcolor="light">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </TextStyles>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <TextStyles fontweight="bold">Description</TextStyles>
          <TextStyles textcolor="light">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </TextStyles>
        </FlexLayout>
        <Alert
          type="info"
          desciption="The audience size for the selected interest group is shown as a range. These numbers are subject to change over time."
        >
          {}
        </Alert>
      </FlexLayout>
    ),
  },
  {
    label: "Debi one",
    value: "Debi one",
    id: "popover3",
    popoverContent: (
      <FlexLayout direction="vertical" spacing="loose">
        <FlexLayout wrap="noWrap" spacing="tight">
          <TextStyles fontweight="bold">Size :</TextStyles>
          <TextStyles textcolor="light">4200000 , 520001.</TextStyles>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <TextStyles fontweight="bold">Intrests:</TextStyles>
          <TextStyles textcolor="light">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </TextStyles>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <TextStyles fontweight="bold">Description</TextStyles>
          <TextStyles textcolor="light">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </TextStyles>
        </FlexLayout>
        <Alert
          type="info"
          desciption="The audience size for the selected interest group is shown as a range. These numbers are subject to change over time."
        >
          {}
        </Alert>
      </FlexLayout>
    ),
  },
  {
    label: "Cara",
    value: "Cara",
    id: "popover4",
    popoverContent: (
      <FlexLayout direction="vertical" spacing="loose">
        <FlexLayout wrap="noWrap" spacing="tight">
          <TextStyles fontweight="bold">Size :</TextStyles>
          <TextStyles textcolor="light">4200000 , 520002.</TextStyles>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <TextStyles fontweight="bold">Intrests:</TextStyles>
          <TextStyles textcolor="light">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </TextStyles>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <TextStyles fontweight="bold">Description</TextStyles>
          <TextStyles textcolor="light">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </TextStyles>
        </FlexLayout>
        <Alert
          type="info"
          desciption="The audience size for the selected interest group is shown as a range. These numbers are subject to change over time."
        >
          {}
        </Alert>
      </FlexLayout>
    ),
  },
  {
    label: "Cristin",
    value: "Cristin",
    id: "popover5",
  },
  {
    label: "Auto Autox",
    value: "Auto Autox",
    id: "popover5",
  },
  {
    label: "Auto pqr",
    value: "Auto pqr",
    id: "popover5",
  },
  {
    label: "Jocelyne",
    value: "Jocelyne",
    id: "popover6",
  },
  {
    label: "Elmo",
    value: "Elmo",
    id: "popover7",
  },
  {
    label: "Ivette",
    value: "Ivette",
    id: "popover8",
  },
  {
    label: "Lea",
    value: "Lea",
    id: "popover9",
  },
  {
    label: "Michel",
    value: "Michel",
    id: "popover10",
  },
  {
    label: "Leigha",
    value: "Leigha",
    id: "popover11",
  },
  {
    label: "Titus",
    value: "Titus",
  },
  {
    label: "Nollie",
    value: "Nollie",
  },
  {
    label: "Celle",
    value: "Celle",
  },
  {
    label: "Thea",
    value: "Thea",
  },
  {
    label: "Brynn",
    value: "Brynn",
  },
  {
    label: "Sloane",
    value: "Sloane",
  },
  {
    label: "Margalo",
    value: "Margalo",
  },
  {
    label: "Genevieve",
    value: "Genevieve",
  },
  {
    label: "Niel",
    value: "Niel",
  },
  {
    label: "Heddi",
    value: "Heddi",
  },
  {
    label: "Gregg",
    value: "Gregg",
  },
  {
    label: "Eduard",
    value: "Eduard",
  },
  {
    label: "Kizzee",
    value: "Kizzee",
  },
  {
    label: "Truman",
    value: "Truman",
  },
  {
    label: "Merill",
    value: "Merill",
  },
  {
    label: "Lindie",
    value: "Lindie",
  },
  {
    label: "Vasily",
    value: "Vasily",
  },
  {
    label: "Averil",
    value: "Averil",
  },
  {
    label: "Golda",
    value: "Golda",
  },
  {
    label: "Zorine",
    value: "Zorine",
  },
  {
    label: "Odele",
    value: "Odele",
  },
  {
    label: "Amalie",
    value: "Amalie",
  },
  {
    label: "Ilsa",
    value: "Ilsa",
  },
  {
    label: "Pepillo",
    value: "Pepillo",
  },
];
const Template = ({ ...rest }) => {
  const [value, setValue] = useState("");

  function onChangex(e: string) {
    setValue(e);
  }
  function onEnter(e: string) {
    setValue(e);
  }
  function onclicks(e: string) {}

  // function func1(e:any) {
  //   {
  //     setValue("")
  //     e.stopPropagation();
  //   }
  // }

  return (
    <div>
      <Card title={"Autocomplete"}>
        <FlexLayout halign="center">
          <FlexChild desktopWidth="100" tabWidth="100" mobileWidth="100">
            <AutoComplete
              {...rest}
              options={names}
              name={rest.name}
              showHelp={rest.showHelp}
              value={value}
              onChange={onChangex}
              onEnter={onEnter}
              onClick={onclicks}
              prefix={rest.prefix}
              suffix={rest.suffix}
              setHiglighted={rest.setHiglighted}
              loading={rest.loading}
              clearButton={rest.clearButton}
              clearFunction={() => setValue("")}
            />
          </FlexChild>
        </FlexLayout>
      </Card>
    </div>
  );
};
export const Primary = Template.bind({});

export const autocomplete_without_Higlight: any = Template.bind({});
autocomplete_without_Higlight.decorators = [
  () => {
    const [value, setValue] = useState("");
    function onEnter(e: string) {
      setValue(e);
    }
    function onChange(e: string) {
      setValue(e);
    }
    function onclicks(e: string) {}
    return (
      <Card>
        <AutoComplete
          options={names}
          name="Name"
          placeHolder="Autocomplete without Heighlighted Text"
          showHelp="You can search Your Term"
          value={value}
          onChange={onChange}
          onClick={onclicks}
          onEnter={onEnter}
          setHiglighted={false}
        />
      </Card>
    );
  },
];

// With Popover
export const autocomplete_with_popover_position: any = Template.bind({});
autocomplete_with_popover_position.decorators = [
  () => {
    const [value, setValue] = useState<any>([]);
    function xx(values: any, index: any) {
      const temp = [...value];
      temp[index] = values;
      setValue(temp);
    }

    return (
      <Card>
        <FlexLayout desktopWidth="50" tabWidth="33" spacing="loose">
          {["left", "right", "top", "bottom"].map((item: any, index) => {
            return (
              <AutoComplete
                options={names}
                key={index}
                name={item + " " + "Popover Position"}
                placeHolder="Autocomplete without Heighlighted Text"
                showHelp="You can search Your Term"
                value={value[index]}
                onChange={(e: any) => xx(e, index)}
                // onEnter={onEnter}
                setHiglighted={true}
                showPopover
                popoverPosition={item}
              />
            );
          })}
        </FlexLayout>
      </Card>
    );
  },
];
