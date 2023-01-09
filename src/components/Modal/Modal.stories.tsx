import React from "react";
import { Datepicker, Modal, Select } from "..";
import Button from "../Button/Button";
import { useState } from "react";
import { Card } from "../Card";
import { FlexLayout } from "../FlexLayout";
import { FormElement } from "../FormElement";

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
    children: {
      control: {
        type: "any",
      },
    },
    primaryAction: {
      control: {
        type: "object",
      },
    },
    secondaryAction: {
      control: {
        type: "object",
      },
    },
    modalSize: {
      description: "set modal size",
      control: {
        type: "radio",
        options: ["small", "medium", "large", "none"],
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
  return (
    <>
      <Card title={"Modal"}>
        <FlexLayout spacing="loose">
          <Button onClick={() => toggleModal1(!open1)}>Model</Button>
        </FlexLayout>
      </Card>
      <Modal
        modalSize={rest.modalSize}
        open={!open1 || rest.open}
        heading={rest.heading}
        overlayClose={rest.overlayClose}
        primaryAction={primaryAction1}
        secondaryAction={secondaryAction1}
        close={() => {
          toggleModal1(!open1);
        }}
      >
       <FormElement>
        <Datepicker name="Choose Date" placeholder="Date PlaceHolder" />
        <Select
          name="Select Options"
          popoverContainer="body"
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

    return (
      <>
        <Card>
          <FlexLayout spacing="loose">
            <Button onClick={() => toggleModal1(!open1)}>Small Model</Button>
            <Button onClick={() => toggleModal2(!open3)}>Medium Modal</Button>
            <Button onClick={() => toggleModal3(!open3)}>Large Modal</Button>
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
          This is small modal
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
          This is medium modal
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
          This is medium modal
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
          Modal with Primary Action
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
          Modal with Primary Action
        </Modal>
      </Card>
    );
  },
];
//Footer
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
          Modal with Primary Action
        </Modal>
      </Card>
    );
  },
];
//
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
          Modal WithOut Header
        </Modal>
      </Card>
    );
  },
];
