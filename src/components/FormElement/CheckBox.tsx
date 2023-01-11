import React, { useState, useRef, useEffect } from "react";
import "./FormElement.css";

const CheckBox: React.FC<CheckBoxI> = ({...props}: CheckBoxI) => {
  const [id] = useState(() => "-" + Math.floor(Math.random() * 1000));
  const [checked, toggleChecked] = useState(false);


  const checkBoxRef = useRef<HTMLInputElement>(null)

  const handelCheckboxClick = () => {
    props.onClick && props.onClick();
  }

  useEffect(()=>{
    if(checkBoxRef.current){
      if(props.indeterminate) {
        checkBoxRef.current.indeterminate = true;
      }
      else checkBoxRef.current.indeterminate = false;
    }
  },[props.indeterminate])

  useEffect(()=>{
    toggleChecked(props.checked || false)
  },[props.checked])

  return (
    <label
      htmlFor={`inte__checkbox-${id}`}
      className={
        props.disabled
          ? "inte-form__checkbox inte-form__checkbox--Disabled"
          : "inte-form__checkbox"
      }
    >
      <div onClick={() => {
        { props.disabled ? void (0) : ''}
      }}>
        <input
          ref={checkBoxRef}
          disabled={props.disabled}
          id={`inte__checkbox-${id}`}
          type="checkbox"
          name={props.name}
          onClick={() => {
            { props.disabled ? void (0) : handelCheckboxClick() }

          }}
          checked={checked}
          className={`inte-formElement inte__checkoxFake ${props.error ? "inte-form__checkbox--Error" : ""}`}
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
      </div>
      {props.description ? (
        <div className="inte__checkbox--Description">{props.description}</div>
      ) : (
        ""
      )}
    </label>
  );
};
// CheckBox.defaultProps = {
//   labelVal: "label",
// };
export interface CheckBoxI {
  checked?: boolean;
  indeterminate?: boolean;
  onClick?: Function;
  labelVal?: string;
  id?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  description?: string;
  error?: boolean;
}

export default CheckBox;
