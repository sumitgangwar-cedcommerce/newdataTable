import React from "react";
import "./FormElement.css";

const Radio: React.FC<CheckBoxI> = ({
  labelVal,
  name,
  checked,
  onClick, // This function working on the Radio button and set the value true of false
  value,
  id = (Math.random()*100).toString(),
  disabled,
  required,
  ...props
}: CheckBoxI) => {
  return (
    <div
      className={
        disabled
          ? "inte-form__Radio inte-form__Radio--Disabled"
          : "inte-form__Radio"
      }
    >
      <div>
        <input
          disabled={disabled}
          id={id}
          value={value}
          type="radio"
          name={name}
          onChange={onClick}
          checked={checked}
          className={"inte__RadioFake"}
        />
        <span className={"inte__RadioWrap"}>
          <span className={"inte__Radio"} />
          <label htmlFor={id} className="inte__radio-Label">
            {labelVal} {required ? <span style={{ color: "red" }}>*</span> : ""}
          </label>
        </span>
      </div>
      {props.description ? (
        <div className="inte__Radio--Description">{props.description}</div>
      ) : (
        ""
      )}
    </div>
  );
};
export interface CheckBoxI {
  onClick?: () => void;
  name?: string;
  labelVal?: string;
  value?: string | number;
  id?: string;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  description?: string;
}

export default Radio;
