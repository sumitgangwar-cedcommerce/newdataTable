import React, { useEffect, useRef, useState } from "react";
import "./FormElement.css";

export interface CheckBoxI {
  checked?: boolean | 'indeterminate';
  onChange?: (state:any) => void;
  label?: string;
  id?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  description?: string;
  error?: boolean;
  customRef?: React.MutableRefObject<HTMLInputElement | null>
}

const CheckBox2: React.FC<CheckBoxI> = ({
  onChange,
  customRef,
  ...props
}: CheckBoxI) => {
  const [checked, toggleChecked] = useState<boolean | 'indeterminate' | undefined>(props.checked || false);

  const checkboxRef = useRef<HTMLInputElement | null>(null)

  const giveRef = (item:HTMLInputElement | null) =>{
    checkboxRef.current = item
    if(customRef) customRef.current = item
  }

  const checkboxClickHandler = () => {
    toggleChecked(!checked);
    if(onChange)   onChange(!checked);
  }

  useEffect(() => {
    if(checkboxRef.current) {
      if (props.checked === 'indeterminate') {
        checkboxRef.current.indeterminate = true;
      } else {
        checkboxRef.current.indeterminate = false;
      }
      toggleChecked(props.checked)
    }
  }, [props.checked])

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
          props.id && `inte__checkbox-${props.id}`
        }
      >
        <input
          disabled={props.disabled}
          ref={giveRef}
          id={props.id && `inte__checkbox-${props.id}`}
          type="checkbox"
          name={props.name}
          onClick={(e) => {
            e.stopPropagation();
            props.disabled ? void 0 :checkboxClickHandler()
          }}
          onChange={()=>{}}
          checked={checked === true}
          className={`inte-formElement inte__checkoxFake ${
            props.error ? "inte-form__checkbox--Error" : ""
          }`}
        />
        <span className={"inte__checkboxWrap"}>
          <span className={"inte__checkbox"} />
          <span className="inte__checkbox-Label">{props.label}</span>
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
// CheckBox2.defaultProps = {
//   label: "label",
// };

export default CheckBox2;
