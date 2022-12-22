/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useState } from "react";
import { TextStyles } from "..";
import Badge from "../Badge/Badge";
import { FlexLayout } from "../FlexLayout";
import "./FormElement.css";

const TextArea = ({
  type = "textarea",
  placeHolder = "Type..",
  value = "",
  onFocus = false, // onFocus is not use
  required = false,
  showHelp,
  onChange = () => {
    return ""; // The onchange event occurs when the value of an element has been changed.
  },
  onEnter = () => {
    return ""; // Press the "Enter" key inside the input field to trigger the button
  },
  label = "",
  rows = 3,
  error = false,
  readOnly = false,
  ...props
}: TextfieldI): JSX.Element => {
  const tempArr: any = [];
  const [arr, setArr] = useState(tempArr);
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter" && onEnter) {
      const temp = arr;
      temp.push(value);
      setArr(temp);
      value = "";

      onEnter(temp);
    }
  };
  const errorCss = error ? "inte-formElement--Error" : "";
  return (
    <div className="inte-formElement--Wrap ">
      {label ? (
        <TextStyles utility={required ? "inte--Required" : ""}>
          {label}
        </TextStyles>
      ) : null}

      {type == "badge" ? (
        <div
          className={`${errorCss} inte-formElement inte-formElementTextfield`}
        >
          <div style={{ maxHeight: "150px", overflowY: "auto" }}>
            <FlexLayout spacing="tight" wrap="wrap">
              {arr.map((e: any, i: number) => (
                <Badge key={i}>{e}</Badge>
              ))}
            </FlexLayout>
          </div>
          <input
            id={props.id}
            type={type}
            style={{
              opacity: readOnly ? "0.6" : "1",
              border: "none",
              height: "45px",
              width: "100%",
              outline: "none",
            }}
            value={value}
            readOnly={readOnly}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            onKeyPress={handleKeyPress}
            placeholder={placeHolder}
          ></input>
        </div>
      ) : (
        <textarea
          id={props.id}
          className={`${errorCss} inte-formElement inte-formElementTextfield`}
          style={{
            opacity: readOnly ? "0.6" : "1",
            width: "100%",
            resize: "vertical",
          }}
          rows={rows}
          value={value}
          readOnly={readOnly}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          placeholder={placeHolder}
        />
      )}

      {showHelp ? (
        <span className={"inte-form__itemHelp"}>{showHelp}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export interface TextfieldI {
  onChange?: (e: string) => void;
  value?: string | number;
  label?: string;
  type?: "textarea" | "badge";
  placeHolder?: string;
  showHelp?: string;
  onEnter?: (arr: any) => void;
  onFocus?: boolean;
  readOnly?: boolean;
  id?: string;
  error?: boolean;
  rows?: number;
  required?: boolean;
}

export default TextArea;
