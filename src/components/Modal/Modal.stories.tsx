import React from "react";
import { Datepicker, Modal, Select } from "..";
import Button, { ButtonI } from "../Button/Button";
import { useState } from "react";
import { Card } from "../Card";
import { FlexLayout } from "../FlexLayout";
import { FormElement } from "../FormElement";
import { AlertOctagon, Gitlab } from "react-feather";
import TextStyles from "../TextStyles/TextStyles";
import * as Icons from "../../storybook/Foundation/Icons/Icons";
const allIcons: any = { ...Icons };
export default {
  title: "Components/Overlays/Modal",
  component: Modal,
  argTypes: {
    open: {
      description: "open modal",
      control: {
        type: "boolean",
      },
    },
    overlayClose: {
      description: "Enable Modal close on overlay Click",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    heading: {
      description: "Modal Title heading",
      control: {
        type: "text",
      },
      defaultValue: "Modal Title",
    },
    extraClass: {
      description: "Modal extra Class ",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    headingIcon: {
      description: "Set Heading Icon",
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
      defaultValue: "Gitlab",
    },
    children: {
      control: {
        type: "any",
      },
    },
    primaryAction: {
      control: {
        type: "object",
        disable: true,
      },
    },
    secondaryAction: {
      control: {
        type: "object",
        disable: true,
      },
    },
    tertiaryAction: {
      control: {
        type: "object",
        disable: true,
      },
    },
    modalSize: {
      description: "set modal size",
      control: {
        type: "radio",
        options: ["small", "medium", "large", "xLarge"],
      },
      defaultValue: "medium",
    },
    onClose: {
      control: {
        type: "function",
      },
    },
  },
};

const Template = ({ ...rest }) => {
  const [open1, toggleModal1] = useState(true);
  const primaryAction1 = {
    loading: false,
    content: "Proceed",
    onClick: () => {
      alert("Conngratulations You proceeded :)");
      toggleModal1(!open1);
    },
  };
  const secondaryAction1 = {
    content: "Close",
    loading: false,
    onClick: () => {
      toggleModal1(!open1);
    },
  };
  const tertiaryAction1 = {
    content: "Read More",
    onClick: () => {
      alert("Read More Action triggred");
    },
  };
  return (
    <>
      <Card title={"Modal"}>
        <FlexLayout spacing="loose">
          <Button onClick={() => toggleModal1(!open1)}>Model</Button>
        </FlexLayout>
      </Card>
      <Modal
        headingIcon={allIcons[rest.headingIcon]({
          size: `24`,
          color: `var(--inte-G800)`,
        })}
        modalSize={rest.modalSize}
        extraClass={rest.extraClass}
        open={!open1 || rest.open}
        heading={rest.heading}
        overlayClose={rest.overlayClose}
        primaryAction={primaryAction1}
        secondaryAction={secondaryAction1}
        tertiaryAction={tertiaryAction1}
        close={() => {
          toggleModal1(!open1);
        }}
      >
        <FormElement>
          <Datepicker name="Choose Date" placeholder="Date PlaceHolder" />
          <Select
            label="Select Options"
            container="body"
            options={[
              {
                label: "Option 1",
                value: "valuedf",
              },
            ]}
          />
        </FormElement>
      </Modal>
    </>
  );
};

export const Primary = Template.bind({});
// Size
export const MoadalSize: any = Template.bind({});
MoadalSize.decorators = [
  () => {
    const [open1, toggleModal1] = useState(true);
    const [open2, toggleModal2] = useState(true);
    const [open3, toggleModal3] = useState(true);
    const [open4, toggleModal4] = useState(true);

    const primaryAction1 = {
      loading: false,
      content: "Proceed",
      onClick: () => {
        alert("Conngratulations You proceeded :)");
        toggleModal1(!open1);
      },
    };
    const secondaryAction1 = {
      content: "Close",
      loading: false,
      onClick: () => {
        toggleModal1(!open1);
      },
    };

    const primaryAction2 = {
      loading: false,
      content: "Proceed",
      onClick: () => {
        alert("Conngratulations You proceeded :)");
        toggleModal2(!open2);
      },
    };
    const secondaryAction2 = {
      content: "Close",
      loading: false,
      onClick: () => {
        toggleModal2(!open2);
      },
    };

    const primaryAction3 = {
      loading: false,
      content: "Proceed",
      onClick: () => {
        alert("Conngratulations You proceeded :)");
        toggleModal3(!open3);
      },
    };
    const secondaryAction3 = {
      content: "Close",
      loading: false,
      onClick: () => {
        toggleModal3(!open3);
      },
    };
    const primaryAction4 = {
      loading: false,
      content: "Proceed",
      onClick: () => {
        alert("Conngratulations You proceeded :)");
        toggleModal4(!open4);
      },
    };
    const secondaryAction4 = {
      content: "Close",
      loading: false,
      onClick: () => {
        toggleModal4(!open4);
      },
    };

    return (
      <>
        <Card>
          <FlexLayout spacing="loose">
            <Button onClick={() => toggleModal1(!open1)}>Small Model</Button>
            <Button onClick={() => toggleModal2(!open3)}>Medium Modal</Button>
            <Button onClick={() => toggleModal3(!open3)}>Large Modal</Button>
            <Button onClick={() => toggleModal4(!open4)}>
              Extra Large Modal
            </Button>
          </FlexLayout>
        </Card>
        <Modal
          modalSize="small"
          open={!open1}
          heading={"Small Modal Size"}
          primaryAction={primaryAction1}
          secondaryAction={secondaryAction1}
          close={() => {
            toggleModal1(!open1);
          }}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <AlertOctagon size={20} color={"rgb(178, 140, 53)"} />
            <FlexLayout spacing="extraTight">
              <TextStyles
                type="SubHeading"
                subheadingTypes="SM-1.8"
                fontweight="normal"
              >
                Small Modal Size
              </TextStyles>
              <TextStyles textcolor="light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TextStyles>
            </FlexLayout>
          </FlexLayout>
        </Modal>
        <Modal
          modalSize="medium"
          open={!open2}
          heading={"Modal Size Medium"}
          primaryAction={primaryAction2}
          secondaryAction={secondaryAction2}
          close={() => {
            toggleModal2(!open2);
          }}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <AlertOctagon size={20} color={"rgb(178, 140, 53)"} />
            <FlexLayout spacing="extraTight">
              <TextStyles
                type="SubHeading"
                subheadingTypes="SM-1.8"
                fontweight="normal"
              >
                Modal Size Medium
              </TextStyles>
              <TextStyles textcolor="light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TextStyles>
            </FlexLayout>
          </FlexLayout>
        </Modal>
        <Modal
          modalSize="large"
          open={!open3}
          heading={"Modal Size Large"}
          primaryAction={primaryAction3}
          secondaryAction={secondaryAction3}
          close={() => {
            toggleModal3(!open3);
          }}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <AlertOctagon size={20} color={"rgb(178, 140, 53)"} />
            <FlexLayout spacing="extraTight">
              <TextStyles
                type="SubHeading"
                subheadingTypes="SM-1.8"
                fontweight="normal"
              >
                Modal Size Large
              </TextStyles>
              <TextStyles textcolor="light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TextStyles>
            </FlexLayout>
          </FlexLayout>
        </Modal>
        <Modal
          modalSize="xLarge"
          open={!open4}
          heading={"Modal Size Extra Large"}
          primaryAction={primaryAction4}
          secondaryAction={secondaryAction4}
          close={() => {
            toggleModal4(!open4);
          }}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <AlertOctagon size={20} color={"rgb(178, 140, 53)"} />
            <FlexLayout spacing="extraTight">
              <TextStyles
                type="SubHeading"
                subheadingTypes="SM-1.8"
                fontweight="normal"
              >
                Modal Size Extra Large
              </TextStyles>
              <TextStyles textcolor="light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TextStyles>
            </FlexLayout>
          </FlexLayout>
        </Modal>
      </>
    );
  },
];
// PrimaryAction
export const MoadalWithPrimaryAction: any = Template.bind({});
MoadalWithPrimaryAction.decorators = [
  () => {
    const [open3, toggleModal3] = useState(true);
    const primaryAction1 = {
      loading: false,
      content: "Proceed",
      onClick: () => {
        alert("Conngratulations You proceeded :)");
        toggleModal3(!open3);
      },
    };
    return (
      <Card>
        <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
        <Modal
          modalSize="large"
          open={!open3}
          heading={"Modal with Primary Action"}
          primaryAction={primaryAction1}
          close={() => {
            toggleModal3(!open3);
          }}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <AlertOctagon size={20} color={"rgb(178, 140, 53)"} />
            <FlexLayout spacing="extraTight">
              <TextStyles
                type="SubHeading"
                subheadingTypes="SM-1.8"
                fontweight="normal"
              >
                Modal With Primary Action Only
              </TextStyles>
              <TextStyles textcolor="light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TextStyles>
            </FlexLayout>
          </FlexLayout>
        </Modal>
      </Card>
    );
  },
];
//SecondaryAction
export const MoadalWithSecondaryAction: any = Template.bind({});
MoadalWithSecondaryAction.decorators = [
  () => {
    const [open3, toggleModal3] = useState(true);
    const secondaryAction3 = {
      content: "Close",
      loading: false,
    };
    return (
      <Card>
        <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
        <Modal
          modalSize="large"
          open={!open3}
          heading={"Modal with Secondary Action"}
          secondaryAction={secondaryAction3}
          close={() => {
            toggleModal3(!open3);
          }}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <AlertOctagon size={20} color={"rgb(178, 140, 53)"} />
            <FlexLayout spacing="extraTight">
              <TextStyles
                type="SubHeading"
                subheadingTypes="SM-1.8"
                fontweight="normal"
              >
                Modal with Secondary Action
              </TextStyles>
              <TextStyles textcolor="light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TextStyles>
            </FlexLayout>
          </FlexLayout>
        </Modal>
      </Card>
    );
  },
];
//TertiaryAction
export const MoadalWithTertiaryAction: any = Template.bind({});
MoadalWithTertiaryAction.decorators = [
  () => {
    const [open3, toggleModal3] = useState(true);
    const tertiaryAction1 = {
      content: "Read More",
      onClick: () => {
        alert("Read More Action triggred");
      },
    };
    return (
      <Card>
        <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
        <Modal
          modalSize="large"
          open={!open3}
          heading={"Modal with Tertiary Action"}
          tertiaryAction={tertiaryAction1}
          close={() => {
            toggleModal3(!open3);
          }}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <AlertOctagon size={20} color={"rgb(178, 140, 53)"} />
            <FlexLayout spacing="extraTight">
              <TextStyles
                type="SubHeading"
                subheadingTypes="SM-1.8"
                fontweight="normal"
              >
                Modal with Secondary Action
              </TextStyles>
              <TextStyles textcolor="light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TextStyles>
            </FlexLayout>
          </FlexLayout>
        </Modal>
      </Card>
    );
  },
];
//Without Footer
export const MoadalWithoutFooter: any = Template.bind({});
MoadalWithoutFooter.decorators = [
  () => {
    const [open3, toggleModal3] = useState(true);
    return (
      <Card>
        <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
        <Modal
          modalSize="large"
          open={!open3}
          heading={"Modal WithOut Footer "}
          close={() => {
            toggleModal3(!open3);
          }}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <AlertOctagon size={20} color={"rgb(178, 140, 53)"} />
            <FlexLayout spacing="extraTight">
              <TextStyles
                type="SubHeading"
                subheadingTypes="SM-1.8"
                fontweight="normal"
              >
                Modal Without Footer
              </TextStyles>
              <TextStyles textcolor="light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TextStyles>
            </FlexLayout>
          </FlexLayout>
        </Modal>
      </Card>
    );
  },
];
//Without Header
export const MoadalWithoutHeader: any = Template.bind({});
MoadalWithoutHeader.decorators = [
  () => {
    const [open3, toggleModal3] = useState(true);
    const secondaryAction3 = {
      content: "Close",
      loading: false,
      onClick: () => {
        toggleModal3(!open3);
      },
    };
    return (
      <Card>
        <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
        <Modal
          modalSize="large"
          open={!open3}
          close={() => {
            toggleModal3(!open3);
          }}
          secondaryAction={secondaryAction3}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <AlertOctagon size={20} color={"rgb(178, 140, 53)"} />
            <FlexLayout spacing="extraTight">
              <TextStyles
                type="SubHeading"
                subheadingTypes="SM-1.8"
                fontweight="normal"
              >
                Modal Without Header
              </TextStyles>
              <TextStyles textcolor="light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TextStyles>
            </FlexLayout>
          </FlexLayout>
        </Modal>
      </Card>
    );
  },
];

// Modal with Title and Icon
export const MoadalWithTitleAndIcon: any = Template.bind({});
MoadalWithTitleAndIcon.decorators = [
  () => {
    const [open3, toggleModal3] = useState(true);
    const secondaryAction3 = {
      content: "Close",
      loading: false,
      onClick: () => {
        toggleModal3(!open3);
      },
    };
    const primaryAction3 = {
      content: "Proceed",
      loading: false,
      onClick: () => {
        alert("Proceeded");
      },
    };
    return (
      <Card>
        <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
        <Modal
          headingIcon={<Gitlab size={20} />}
          heading="Modal With Icon"
          modalSize="small"
          open={!open3}
          close={() => {
            toggleModal3(!open3);
          }}
          secondaryAction={secondaryAction3}
          primaryAction={primaryAction3}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <AlertOctagon size={20} color={"rgb(178, 140, 53)"} />
            <FlexLayout spacing="extraTight">
              <TextStyles
                type="SubHeading"
                subheadingTypes="SM-1.8"
                fontweight="normal"
              >
                Modal With Header Icon
              </TextStyles>
              <TextStyles textcolor="light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TextStyles>
            </FlexLayout>
          </FlexLayout>
        </Modal>
      </Card>
    );
  },
];

// Modal with Danger Action
export const MoadalWithDangerAction: any = Template.bind({});
MoadalWithDangerAction.decorators = [
  () => {
    const [open3, toggleModal3] = useState(true);
    const secondaryAction3 = {
      content: "Close",
      loading: false,
      onClick: () => {
        toggleModal3(!open3);
      },
    };
    const primaryAction3: ButtonI = {
      content: "Delete",
      type: "Danger",
      loading: false,
      onClick: () => {
        alert("You Deleted");
      },
    };
    return (
      <Card>
        <FlexLayout>
          <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
          <Modal
            heading="Modal With danger Action"
            modalSize="small"
            open={!open3}
            close={() => {
              toggleModal3(!open3);
            }}
            secondaryAction={secondaryAction3}
            primaryAction={primaryAction3}
          >
            <FlexLayout spacing="loose" valign="start" wrap="noWrap">
              <AlertOctagon size={20} color={"rgb(178, 140, 53)"} />
              <FlexLayout spacing="extraTight">
                <TextStyles
                  type="SubHeading"
                  subheadingTypes="SM-1.8"
                  fontweight="normal"
                >
                  Modal with Danger Action
                </TextStyles>
                <TextStyles textcolor="light">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </TextStyles>
              </FlexLayout>
            </FlexLayout>
          </Modal>
        </FlexLayout>
      </Card>
    );
  },
];
