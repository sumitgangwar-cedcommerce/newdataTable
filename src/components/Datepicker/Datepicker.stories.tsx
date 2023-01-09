import React, { useState } from "react";
import { Card } from "../Card";
import { FlexLayout } from "../FlexLayout";
import Datepicker from "./Datepicker";
import type { RangePickerProps } from "antd/es/date-picker";
import "./Datepicker.css";
import moment from "moment";
import "moment/locale/zh-cn";
import locale1 from "antd/es/date-picker/locale/de_DE";
import { FormElement } from "../FormElement";
export default {
  title: "Components/Form/Datepicker",
  component: Datepicker,
  argTypes: {
    showToday: {
      description: "	Whether to show Today button",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    picker: {
      description: "Set picker type",
      control: {
        type: "radio",
        options: ["date", "week", "month", "quarter", "year"],
      },
      defaultValue: "date",
    },
    placement: {
      description: "Set picker Placement",
      control: {
        type: "radio",
        options: ["topLeft", "topRight", "bottomLeft", "bottomRight"],
      },
      defaultValue: "bottomLeft",
    },
    showTime: {
      description: "To provide an additional time selection",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    range: {
      description: "set the Range",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    controlStates: {
      control: {
        type: "radio",
        options: ["Success", "Warning", "Error"],
      },
    },
    thickness: {
      description: "Controls the thickness of Component",
      control: {
        type: "radio",
        options: ["thick", "thin", ],
      },
      defaultValue:"thick",
    },
    disabled: {
      description: "Set the DatePicker is disabled",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    placeholder: {
      description: "Set the DatePicker Placeholder",
      control: {
        type: "text",
      },
      defaultValue: "Select Date",
    },
    showHelp: {
      description: "Set the Help Text",
      control: {
        type: "text",
      },
      defaultValue:"Help text"
    },
    value: {
      description: "Set the Value of Date",
      control: {
        disable:true,
      },
    },
    ref: {
      description: "Set the ref of Date",
      control: {
        disable:true,
      },
    },
    format: {
      description: "Set the format of date",
      control: {
        type:"radio",
        options: ["DD/MM/YYYY HH:mm", "MM/DD/YYYY HH:mm", "YYYY/MM/DD HH:mm","DD-MM-YYYY HH:mm","MM-DD-YYYY HH:mm","YYYY-MM-DD HH:mm"],
      },
      defaultValue:"DD/MM/YYYY HH:mm:ss"
    },
    name: {
      description: "Set the Label of component",
      control: {
        type: "text",
      },
      defaultValue:"Label"
    },
    disabledDate: {
      description: "You can disable a range of selected Dates, Use Moment to implement it",
      control: {
        disable:true,
      },
    },
    timeZone: {
      description: "You can set Locale like en-US",
      control: {
        disable:true,
      },
    },
    helpIcon: {
      description: "You can set Help icon before Help text by Sending any React Node",
      control: {
        disable:true,
      },
    },
    defaultValue: {
      description: "You can set a pre specific default selected Value",
      control: {
        disable:true,
      },
    },
  },
};
function Template({ ...rest }) {
  const [value, setValue] = useState();
  function onSelectDate(__: any, dateString: any) {
    setValue(dateString);
  }

  return (
    <Card>
      <Datepicker
      {...rest}
      controlStates={rest.controlStates}
      showToday={rest.showToday}
      picker={rest.picker}
      showTime={rest.showTime}
      range={rest.range}
      disabled={rest.disabled}
      onChange={onSelectDate}
      showHelp={rest.showHelp}
      placeholder={rest.placeholder}
    />
    </Card>
  );
}
export const Primary = Template.bind({});
// placement Variant
const placement = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
export const Placement: any = Template.bind({});
Placement.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {placement.map((variant: any) => (
          <Datepicker
            placement={variant}
            name={
              variant.charAt(0).toUpperCase() + variant.slice(1).toLowerCase()
            }
          />
        ))}
      </FlexLayout>
    </Card>
  ),
];
// placement Variant
const picker = ["date", "week", "month", "quarter", "year"];
export const Picker: any = Template.bind({});
Picker.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {picker.map((variant: any) => (
          <Datepicker
            picker={variant}
            name={
              variant.charAt(0).toUpperCase() + variant.slice(1).toLowerCase()
            }
          />
        ))}
      </FlexLayout>
    </Card>
  ),
];
// Size
const size = ["thin", "thick"];
export const Thickness: any = Template.bind({});
Thickness.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="extraLoose" direction="vertical">
        {size.map((variant: any) => (
          <Datepicker
            thickness={variant}
            name={
              variant.charAt(0).toUpperCase() + variant.slice(1).toLowerCase()
            }
          />
        ))}
      </FlexLayout>
    </Card>
  ),
];
// Placeholder

export const Placeholder: any = Template.bind({});
Placeholder.decorators = [
  () => (
    <Card>
      <Datepicker placeholder="Date PlaceHolder" />
    </Card>
  ),
];
// format

const format = [
  "DD/MM/YYYY",
  "MM/DD/YYYY",
  "YYYY/MM/DD",
  "DD-MM-YYYY",
  "MM-DD-YYYY",
  "YYYY-MM-DD",
];
export const Format: any = Template.bind({});
Format.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {format.map((format: any) => (
          <Datepicker placeholder={format} format={format} />
        ))}
      </FlexLayout>
    </Card>
  ),
];
//defaultValue
export const Default_Value: any = Template.bind({});
Default_Value.decorators = [
  () => (
    <Card>
      <Datepicker defaultValue={moment("07/06/2021", "MM/DD/YYYY")} />
    </Card>
  ),
];
//Time
export const Date_with_Time: any = Template.bind({});
Date_with_Time.decorators = [
  () => (
    <Card>
      <Datepicker showTime={true} placeholder="Select Date and time" />
    </Card>
  ),
];

//Time
export const disabled_date: any = Template.bind({});
disabled_date.decorators = [
  () => (
    <Card>
      <Datepicker
        disabled
        defaultValue={moment("07/06/2021", "MM/DD/YYYY")}
        placeholder="Select Date and time"
      />
    </Card>
  ),
];

//Disabled Range Date

const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  return current && current < moment().add(-1, "days");
};

export const disabled_date_picker: any = Template.bind({});
disabled_date_picker.decorators = [
  () => (
    <Card>
      <Datepicker
        format="YYYY-MM-DD HH:mm:ss"
        disabledDate={disabledDate}
        placeholder="Select Date and time"
      />
    </Card>
  ),
];

export const date_picker_Locale: any = Template.bind({});
date_picker_Locale.decorators = [
  () => (
    <Card>
      <Datepicker
        format="YYYY-MM-DD HH:mm:ss"
        timeZone={locale1}
        placeholder="Select Date and time"
      />
    </Card>
  ),
];

const disabledDate1: RangePickerProps["disabledDate"] = (current) => {
  return current && current < moment().add(-1, "days");
};

const disabledDate2: RangePickerProps["disabledDate"] = (current) => {
  return current && current < moment().subtract(-1, "days");
};


export const disabled_range_picker: any = Template.bind({});
disabled_range_picker.decorators = [
  () => (
    <Card>
      <FormElement horizontal>
      <Datepicker
        format="YYYY-MM-DD HH:mm:ss"
        disabledDate={disabledDate1}
        placeholder="Select start date"
      />
      <Datepicker
        format="YYYY-MM-DD HH:mm:ss"
        disabledDate={disabledDate2}
        placeholder="Select end date"
      />
      </FormElement>
    </Card>
  ),
];
