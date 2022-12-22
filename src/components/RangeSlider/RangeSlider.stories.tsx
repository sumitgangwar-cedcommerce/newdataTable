import React from "react";
import { Card } from "..";
import RangeSlider from "./RangeSlider"
import "antd/dist/antd.css";

export default {
  title: "Components/RangeSlider",
  component: RangeSlider,
  argTypes: {
    range: {
      description: "Dual thumb mode",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    disabled: {
      description: "If true, the slider will not be interactable",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    dots: {
      description: "Whether the thumb can drag over tick only",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    tooltipVisible: {
      description:
        "If true, Tooltip will show always, or it will not show anyway, even if dragging or hovering",
      control: {
        type: "boolean",
      },
    },
    tooltipPlacement: {
      description: "	Set Tooltip display position. Ref Tooltip",
      control: {
        type: "radio",
        options: ["bottom", "top", "left", "right"],
      },
    },
    vertical: {
      description: "If true, the slider will be vertical",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    step: {
      description:
        "The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When marks no null, step can be null",
      control: {
        type: "number",
      },
      defaultValue: 1,
    },
    autoFocus: {
      description: "Whether get focus when component mounted",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    included: {
      description:
        "Make effect when marks not null, true means containment and false means coordinative",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    reverse: {
      description: "	Reverse the component",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    min: {
      description: "The minimum value the slider can slide to",
      control: {
        type: "number",
      },
      defaultValue: 0,
    },
    max: {
      description: "	The maximum value the slider can slide to",
      control: {
        type: "number",
      },
      defaultValue: 100,
    },
    defaultValue: {
      description:
        "The default value of slider. When range is false, use number, otherwise, use [number, number]",
      control: {
        type: "",
      },
      defaultValue: "",
    },

    marks: {
      description:
        "Tick mark of Slider, type of key must be number, and must in closed interval [min, max], each mark can declare its own style",
      control: {
        disable: true,
      },
    },
    tipFormatter: {
      description:
        "Slider will pass its value to tipFormatter, and display its value in Tooltip, and hide Tooltip when return value is null",
      control: {
        disable: true,
      },
    },
    onAfterChange: {
      description: "Fire when onmouseup is fired",
      control: {
        disable: true,
      },
    },
    onChange: {
      description:
        "Callback function that is fired when the user changes the slider's value",
      control: {
        disable: true,
      },
    },
    className: {
      description: "Add extra class ",
      control: {
        disable: true,
      },
    },
  },
};

const Template = ({ ...rest }) => {
  const TipFormatter = (value: any) => `${value}%`;

  const onChange = (value: any) => {

  };

  const onAfterChange = (value: any) => {
 
  };

  return (
    <Card>
      <RangeSlider
        defaultValue={[10, 60]}
        disabled={rest.disabled}
        dots={rest.dots}
        tooltipPlacement={rest.tooltipPlacement}
        tooltipVisible={rest.tooltipVisible}
        tipFormatter={TipFormatter}
        vertical={rest.vertical}
        onChange={onChange}
        onAfterChange={onAfterChange}
        included={rest.included}
        step={rest.step}
        autoFocus={rest.autoFocus}
        range={rest.range}
        reverse={rest.reverse}
        min={rest.min}
        max={rest.max}
      />
    </Card>
  );
};

export const Primary = Template.bind({});
// Variants

//Simple
export const Simple: any = Template.bind({});
Simple.decorators = [
  () => (
    <Card>
      <RangeSlider defaultValue={20} />
    </Card>
  ),
];
// Double
export const Double: any = Template.bind({});
Double.decorators = [
  () => (
    <Card>
      <RangeSlider defaultValue={[10, 60]} range={true} />
    </Card>
  ),
];
//Dots
export const Dots: any = Template.bind({});
Dots.decorators = [
  () => (
    <Card>
      <RangeSlider defaultValue={20} dots={true} />
    </Card>
  ),
];
//Reverse
export const reverse: any = Template.bind({});
reverse.decorators = [
  () => (
    <Card>
      <RangeSlider defaultValue={20} />
      <RangeSlider defaultValue={20} reverse={true} />
    </Card>
  ),
];
//Vertical
export const vertical: any = Template.bind({});
vertical.decorators = [
  () => (
    <Card extraClass="vertical-slider">
      <RangeSlider defaultValue={20} vertical={true} />
    </Card>
  ),
];
//Tool Tip Visible
export const Tooltip_Visible: any = Template.bind({});
Tooltip_Visible.decorators = [
  () => (
    <Card>
      <RangeSlider defaultValue={30} tooltipVisible={true} tooltipPlacement="right" />
    </Card>
  ),
];
//Step
export const Step: any = Template.bind({});
Step.decorators = [
  () => (
    <Card>
      <RangeSlider defaultValue={15} step={5} />
    </Card>
  ),
];
//Tooltip Position
const position = ["bottom", "top", "left", "right"];

export const Tooltip_Position: any = Template.bind({});
Tooltip_Position.decorators = [
  () => (
    <Card>
      {position.map((items: any) => {
        return (
          <>
            <RangeSlider defaultValue={15} tooltipPlacement={items} />
          </>
        );
      })}
    </Card>
  ),
];
//Disabled
export const Disabled: any = Template.bind({});
Disabled.decorators = [
  () => (
    <Card>
      <RangeSlider defaultValue={20} disabled={true} />
    </Card>
  ),
];
// Marks
const marks = {
  0: "0°C",
  26: "26°C",
  37: "37°C",
  100: {
    style: {
      color: "#f50",
    },
    label: "100°C",
  },
};
// Marks
export const Marks: any = Template.bind({});
Marks.decorators = [
  () => (
    <Card>
      <RangeSlider defaultValue={70} marks={marks} />
    </Card>
  ),
];
// Draggable Track
export const Draggable_Track: any = Template.bind({});
Draggable_Track.decorators = [
  () => (
    <Card>
      <RangeSlider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
    </Card>
  ),
];
//TipFormatter
const TipFormatters = (value: any) => `${value}%`;
export const TipFormatter: any = Template.bind({});
TipFormatter.decorators = [
  () => (
    <Card>
      <RangeSlider tipFormatter={TipFormatters} defaultValue={50} />
    </Card>
  ),
];
function e(e: any): void {
  throw new Error("Function not implemented.");
}
