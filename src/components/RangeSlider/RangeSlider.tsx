import React, { FC } from "react";
import { Slider } from "antd";
import "antd/dist/antd.css";
import "./RangeSlider.css";

const RangeSlider: FC<RangeSliderI> = ({
  defaultValue,
  disabled = false,
  dots = false,
  tooltipVisible,
  vertical = false,
  range = false,
  reverse = false,
  included = true,
  tooltipPlacement,
  tipFormatter,
  onChange = () => {
    //
  },
  onAfterChange = () => {
    //
  },
  step,
  autoFocus,
  className,
  marks,
  min = 0,
  max = 100,
}: RangeSliderI) => {
  return (
    <div className="inte-RangeSlider">
      <Slider
        defaultValue={defaultValue}
        disabled={disabled}
        dots={dots}
        included={included}
        tooltipVisible={tooltipVisible}
        tooltipPlacement={tooltipPlacement}
        vertical={vertical}
        step={step}
        autoFocus={autoFocus}
        onChange={onChange}
        onAfterChange={onAfterChange}
        tipFormatter={tipFormatter}
        className={className}
        marks={marks}
        reverse={reverse}
        range={range}
        max={max}
        min={min}
      />
    </div>
  );
};

export interface RangeSliderI {
  defaultValue?: any;
  range?: boolean | any;
  dots?: boolean;
  disabled?: boolean;
  tooltipVisible?: boolean;
  vertical?: boolean;
  reverse?: boolean;
  step?: number | null;
  autoFocus?: boolean;
  included?: boolean;
  max?: number;
  min?: number;
  marks?: object | number | any;
  tipFormatter?: string | any;
  onChange?: (() => void) | undefined | any;
  onAfterChange?: (() => void) | undefined | any;
  className?: string;
  tooltipPlacement?: "top" | "bottom" | "left" | "right";
}

export default RangeSlider;
