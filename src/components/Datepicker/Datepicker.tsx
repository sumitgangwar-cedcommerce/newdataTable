/* eslint-disable @typescript-eslint/no-explicit-any */
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { FC } from "react";
import React from "react";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import "./Datepicker.css";
import TextStyles from "../TextStyles/TextStyles";
const Datepicker: FC<DateI> = ({
  range,
  showToday = true,
  picker = "date",
  showTime = false,
  disabled,
  value,
  placement = "bottomLeft",
  placeholder,
  onChange,
  format,
  defaultValue,
  name,
  disabledDate,
  ref,
  thickness,
  timeZone,
  controlStates,
  ...props
}: DateI) => {
  const { RangePicker } = DatePicker;
  function getcontrolStates(controlStates: "Success" | "Warning" | "Error") {
    switch (controlStates) {
      case "Success":
        return "inte-formElement--Success";
      case "Warning":
        return "inte-formElement--Warning";
      case "Error":
        return "inte-formElement--Error";
      default:
        return "";
    }
  }

  function getThickness(thickness: "thin" | "thick" | undefined) {
    switch (thickness) {
      case "thin":
        return "inte--DatePicker__thin";
      case "thick":
        return "inte--DatePicker__thick";
      default:
        return "inte--DatePicker__thick";
    }
  }
  const eleThickness = getThickness(thickness);
  const controlStatesVal = getcontrolStates(controlStates);

  return (
    <div className="inte--DatePicker">
      {range ? (
        <Space direction="vertical" size={12}>
          <div
            className={`inte-formElement--Wrap ${controlStatesVal} ${eleThickness}`}
          >
            <TextStyles>{name}</TextStyles>
            <RangePicker
              ref={ref}
              format={format}
              placement={placement}
              value={value}
              picker={picker}
              showTime={showTime}
              disabled={disabled}
              disabledDate={disabledDate}
              onChange={onChange}
              defaultValue={defaultValue}
              locale={timeZone}
            />
            {props.showHelp && (
              <span
                className={`inte-form__itemHelp ${
                  props.helpIcon && "inte-form__itemHelp--HasHelpIcon"
                }`}
              >
                {props.helpIcon && (
                  <span style={{ display: "flex" }}>{props.helpIcon}</span>
                )}
                <span>{props.showHelp}</span>
              </span>
            )}
          </div>
        </Space>
      ) : (
        <div
          className={`inte-formElement--Wrap ${controlStatesVal} ${eleThickness}`}
        >
          <TextStyles>{name}</TextStyles>
          <DatePicker
            ref={ref}
            format={format}
            placement={placement}
            showToday={showToday}
            value={value}
            picker={picker}
            showTime={showTime}
            disabled={disabled}
            disabledDate={disabledDate}
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={defaultValue}
            locale={timeZone}
          />
          {props.showHelp && (
            <span
              className={`inte-form__itemHelp ${
                props.helpIcon && "inte-form__itemHelp--HasHelpIcon"
              }`}
            >
              {props.helpIcon && (
                <span style={{ display: "flex" }}>{props.helpIcon}</span>
              )}
              <span>{props.showHelp}</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
};
export default Datepicker;
export interface DateI {
  value?: any;
  ref?: any;
  name?: string;
  placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  onChange?: (() => void) | any;
  placeholder?: string;
  showToday?: boolean;
  picker?: "date" | "week" | "month" | "quarter" | "year";
  showTime?: boolean;
  range?: boolean;
  disabled?: boolean;
  timeZone?: any;
  disabledDate?: any;
  thickness?: "thin" | "thick";
  format?:
    | "DD/MM/YYYY"
    | "MM/DD/YYYY"
    | "YYYY/MM/DD"
    | "DD-MM-YYYY"
    | "MM-DD-YYYY"
    | "YYYY-MM-DD"
    | string
    | any;
  defaultValue?: any;
  controlStates?: "Sucess" | "Warning" | "Error" | any;
  showHelp?: string;
  helpIcon?: React.ReactNode;
}
