import React, { useState } from "react";
import Upload from "./Upload";
import { Card, FileUpload } from "..";
import { FlexLayout } from "../FlexLayout";

export default {
  title: "Components/Form/Upload",
  component: Upload,
  argTypes: {
    onChange: {
      name: "onChange",
      description: "onChange function ",
      control: {
        type: "event",
      },
    },
    value: {
      name: "Value",
      description: "Value here",
      control: {
        type: "array",
      },
    },
    format: {
      name: "Format",
      description: "Text format Here",
      control: {
        type: "text",
      },
    },
    multiple: {
      name: "Multiple",
      description: "Text format True or false",
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = () => {
  const [value, setvalue] = useState<any>([]);

  return (
    <Card>
      <FlexLayout halign="center">
        <FileUpload
          value={value}
          format={["png", "jpg"]}
          onChange={(e) => {
            setvalue(e);
          }}
        >
          abc
        </FileUpload>
      </FlexLayout>
    </Card>
  );
};

export const Primary = Template.bind({});
