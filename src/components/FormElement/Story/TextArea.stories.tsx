import React, { useState } from "react";
import { Card } from "../../..";
import TextArea from "../TextArea";

export default {
  title: "Components/Form/TextArea",
  component: TextArea,
  argTypes: {
    value: {
      control: {
        type: "text",
      },
    },
    placeHolder: {
      control: {
        type: "text",
      },
      defaultValue: "Type..",
    },
    label: {
      control: {
        type: "text",
      },
      defaultValue: "Name",
    },
    required: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    rows: {
      control: {
        type: "number",
      },
      defaultValue: 2,
    },
    type: {
      control: {
        type: "radio",
        options: ["textarea", "badge"],
      },
      defaultValue: "textarea",
    },
    showHelp: {
      control: {
        type: "text",
      },
      defaultValue: "showHelp",
    },
    id: {
      control: {
        type: "text",
      },
      defaultValue: "id",
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
    error: {
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
  },
};

const Template = ({ ...rest }) => {
  const [val, setval] = useState("");
  return (
    <Card>
      <TextArea
        {...rest}
        id={rest.id}
        value={val}
        type={rest.type}
        error={rest.error}
        placeHolder={rest.placeHolder}
        label={rest.label}
        showHelp={rest.showHelp}
        onChange={(e) => setval(e)}
        onEnter={() => {
          setval("");
        }}
      />
    </Card>
  );
};

export const Primary = Template.bind({});
