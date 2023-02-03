import React, { useState, useEffect } from "react";
import Popover from "./Popover";
import { Card, Button } from "..";
import { Select, TextField } from "../FormElement";
import { FlexChild, FlexLayout } from "../FlexLayout";
import { ChevronDown } from "react-feather";
import Avatar from "../Avatar/Avatar";
import TextStyles from "../TextStyles/TextStyles";

export default {
  title: "Components/Overlays/Popover",
  component: Popover,
  argTypes: {
    open: {
      description: "Open popover",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    activator: {
      description: "Element on which Popover triggers",
      control: {
        disable: true,
      },
    },
    popoverContainer: {
      description: "popover container",
      control: {
        type: "radio",
        options: ["body", "element"],
      },
      defaultValue: "body",
    },
    popoverWidth: {
      description: "set popover width",
      control: {
        type: "number",
      },
      defaultValue: 250,
    },
  },
};

const Template = ({ ...rest }) => {
  const [open, togglePopover] = useState(rest.open);
  const [open1, togglePopover1] = useState(rest.open1);
  const [value, setvalue] = useState<any>([]);
  const togglePop = () => togglePopover((open: any) => !open);
  const togglePop1 = () => togglePopover1((open1: any) => !open1);

  useEffect(() => {
    togglePopover(rest.open);
  }, [rest.open]);
  useEffect(() => {
    togglePopover1(rest.open1);
  }, [rest.open1]);

  const activator = (
    <Button onClick={togglePop}>Popover With Simple Form</Button>
  );
  const activator1 = (
    <Button
      type="Outlined"
      onClick={togglePop1}
      icon={<ChevronDown color="#d4d4d4" />}
      iconAlign={"right"}
    >
      Popover With React Node
    </Button>
  );
  const data = [
    {
      name: "Label 1",
    },
    {
      name: "Label 2",
    },
  ];
  const handleChange = (data: string, index: any) => {
    const temp = [...value];
    temp[index] = data;
    setvalue(temp);
  };
  const [selval, setVal] = useState("");
  return (
    <>
      <Card>
        <FlexLayout halign="center" spacing="loose">
          <Popover
            {...rest}
            popoverContainer={rest.popoverContainer}
            open={open}
            onClose={togglePop}
            activator={activator}
            popoverWidth={rest.popoverWidth}
          >
            <FlexLayout direction="vertical" spacing="loose">
              {data.map((items: any, index: any) => {
                return (
                  <TextField
                    showHelp={items.showHelp}
                    type="text"
                    label={items.name}
                    placeHolder={"Placeholder"}
                    id={index}
                    key={index}
                    value={value[index]}
                    onChange={(data) => handleChange(data, index)}
                  />
                );
              })}
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
              <FlexLayout halign="end" spacing="mediumTight">
                <Button thickness="extraThin" type="Secondary">
                  Cancel
                </Button>
                <Button thickness="extraThin">Save</Button>
              </FlexLayout>
            </FlexLayout>
          </Popover>
          <Popover
            {...rest}
            popoverContainer={rest.popoverContainer}
            open={open1}
            onClose={togglePop1}
            activator={activator1}
            popoverWidth={rest.popoverWidth}
          >
            <FlexLayout wrap="noWrap" spacing="loose">
              <FlexChild>
                <Avatar
                  image="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                  size="Medium"
                ></Avatar>
              </FlexChild>
              <FlexChild>
                <TextStyles>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  inventore ipsam maxime nihil, commodi molestias labore earum
                  blanditiis asperiores quos facere fugiat in sit nostrum ipsa
                  necessitatibus veritatis sed tenetur.{" "}
                  <Button type="TextButton" onClick={() => alert("clicked")}>
                    Click here
                  </Button>
                </TextStyles>
              </FlexChild>
            </FlexLayout>
          </Popover>
        </FlexLayout>
      </Card>
    </>
  );
};

export const Primary = Template.bind({});

// Popover with body
export const Popover_with_body_container: any = Template.bind({});
Popover_with_body_container.decorators = [
  () => {
    const [open, togglePopover] = useState(false);
    const [open1, togglePopover1] = useState(open);
    const [value, setvalue] = useState<any>([]);
    const togglePop = () => togglePopover((open: any) => !open);
    const togglePop1 = () => togglePopover1((open1: any) => !open1);

    useEffect(() => {
      togglePopover(open);
    }, [open]);
    useEffect(() => {
      togglePopover1(open1);
    }, [open1]);
    const activator = (
      <Button onClick={togglePop}>Popover With Simple Form</Button>
    );
    const activator1 = (
      <Button
        type="Outlined"
        onClick={togglePop1}
        icon={<ChevronDown color="#d4d4d4" />}
        iconAlign={"right"}
      >
        Popover With Buttons
      </Button>
    );
    const data = [
      {
        name: "Label 1",
      },
      {
        name: "Label 2",
      },
    ];
    const handleChange = (data: string, index: any) => {
      const temp = [...value];
      temp[index] = data;
      setvalue(temp);
    };
    return (
      <>
        <Card>
          <FlexLayout halign="center">
            <Popover
              popoverContainer="body"
              open={open}
              onClose={togglePop}
              activator={activator}
              popoverWidth={200}
            >
              <FlexLayout direction="vertical" spacing="loose">
                {data.map((items: any, index: any) => {
                  return (
                    <TextField
                      showHelp={items.showHelp}
                      type="text"
                      label={items.name}
                      placeHolder={"Placeholder"}
                      id={index}
                      key={index}
                      value={value[index]}
                      onChange={(data) => handleChange(data, index)}
                    />
                  );
                })}
                <FlexLayout halign="end" spacing="mediumTight">
                  <Button
                    thickness="extraThin"
                    type="Secondary"
                    onClick={() => togglePopover(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    thickness="extraThin"
                    onClick={() => {
                      alert("Data Save and close popover");
                      togglePopover(false);
                    }}
                  >
                    Save
                  </Button>
                </FlexLayout>
              </FlexLayout>
            </Popover>
          </FlexLayout>
        </Card>
      </>
    );
  },
];
// popover with container
export const popover_with_element_container: any = Template.bind({});
popover_with_element_container.decorators = [
  () => {
    const [open, togglePopover] = useState<any>(false);
    const [open1, togglePopover1] = useState<any>(open);
    const [value, setvalue] = useState<any>([]);
    const togglePop = () => togglePopover((open: any) => !open);
    const togglePop1 = () => togglePopover1((open1: any) => !open1);

    useEffect(() => {
      togglePopover(open);
    }, [open]);
    useEffect(() => {
      togglePopover1(open1);
    }, [open1]);

    const activator = (
      <Button onClick={togglePop}>Popover With Simple Form</Button>
    );
    const activator1 = (
      <Button
        type="Outlined"
        onClick={togglePop1}
        icon={<ChevronDown color="#d4d4d4" />}
        iconAlign={"right"}
      >
        Popover With Buttons
      </Button>
    );
    const data = [
      {
        name: "Label 1",
      },
      {
        name: "Label 2",
      },
    ];
    const handleChange = (data: string, index: any) => {
      const temp = [...value];
      temp[index] = data;
      setvalue(temp);
    };
    return (
      <>
        <Card>
          <FlexLayout halign="center">
            <Popover
              popoverContainer="element"
              open={open}
              onClose={togglePop}
              activator={activator}
              popoverWidth={200}
            >
              <FlexLayout direction="vertical" spacing="loose">
                {data.map((items: any, index: any) => {
                  return (
                    <TextField
                      showHelp={items.showHelp}
                      type="text"
                      label={items.name}
                      placeHolder={"Placeholder"}
                      id={index}
                      key={index}
                      value={value[index]}
                      onChange={(data) => handleChange(data, index)}
                    />
                  );
                })}
                <FlexLayout halign="end" spacing="mediumTight">
                  <Button
                    thickness="extraThin"
                    type="Secondary"
                    onClick={() => togglePopover(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    thickness="extraThin"
                    onClick={() => {
                      alert("Data Save and close popover");
                      togglePopover(false);
                    }}
                  >
                    Save
                  </Button>
                </FlexLayout>
              </FlexLayout>
            </Popover>
          </FlexLayout>
        </Card>
      </>
    );
  },
];

// popover with container
// export const popover_with_element_xyz: any = Template.bind({});
// popover_with_element_xyz.decorators = [
//   () => {
//     let [showInfo1, setShowInfo1] = useState(false);
//     return (
//       <>
//         <div className="container">
//       <div className="info-box-wrapper">
//         <button onClick={() => {setShowInfo1(!showInfo1)}} style={{marginRight: '4px'}}>Show InfoBox Functional</button>
//         <Popover2 show={showInfo1} onClickOutside={() => {setShowInfo1(false)}} message="Click outside to close this"/>
//       </div>
//     </div>
//       </>
//     );
//   },
// ];
