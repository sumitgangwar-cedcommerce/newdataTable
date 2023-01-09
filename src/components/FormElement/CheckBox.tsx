import React, { useState, useRef } from "react";
import "./FormElement.css";

const CheckBox: React.FC<CheckBoxI> = ({
  onClick = () => {
    //
  },
  ...props
}: CheckBoxI) => {
  const [Rid] = useState(() => "-" + Math.floor(Math.random() * 1000));

  const [checked, toggleChecked] = useState(false);
  return (
    <div
      className={
        props.disabled
          ? "inte-form__checkbox inte-form__checkbox--Disabled"
          : "inte-form__checkbox"
      }
    >
      <label
        htmlFor={
          props.id ? `inte__checkbox-${props.id}` : `inte__checkbox-${Rid}`
        }
        onClick={() => {
          {
            props.disabled ? void 0 : onClick();
          }
        }}
      >
        <input
          disabled={props.disabled}
          id={props.id ? `inte__checkbox-${props.id}` : `inte__checkbox-${Rid}`}
          type="checkbox"
          name={props.name}
          onClick={() => {
            {
              props.disabled ? void 0 : toggleChecked(!checked);
            }
          }}
          checked={checked}
          className={`inte-formElement inte__checkoxFake ${
            props.error ? "inte-form__checkbox--Error" : ""
          }`}
        />
        <span className={"inte__checkboxWrap"}>
          <span className={"inte__checkbox"} />
          <span className="inte__checkbox-Label">{props.labelVal}</span>
          {props.required ? (
            <span style={{ color: "red", lineHeight: "normal" }}>*</span>
          ) : (
            ""
          )}
        </span>
      </label>
      {props.description ? (
        <div className="inte__checkbox--Description">{props.description}</div>
      ) : (
        ""
      )}
    </div>
  );
};
CheckBox.defaultProps = {
  labelVal: "label",
};
export interface CheckBoxI {
  checked?: boolean;
  onClick?: () => void | string;
  labelVal?: string;
  id?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  description?: string;
  error?: boolean;
}

export default CheckBox;
