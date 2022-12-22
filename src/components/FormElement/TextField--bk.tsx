/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { TextStyles } from "..";
import "./FormElement.css";

const TextField = ({
  name = "",
  error = false,
  innerPreIcon,
  innerSufIcon,
  autocomplete = "off",
  clearButton = false,
  onChange = () => {
    return ""; // The onchange event occurs when the value of an element has been changed.
  },
  onFocus = () => {
    // The onfocus event occurs when an element gets focus.
  },
  ...props
}: TextfieldI): JSX.Element => {
  function getThickness(thickness: "thin" | "" | undefined) {
    switch (thickness) {
      case "thin":
        return "inte--Textfield__thin";
      default:
        return "";
    }
  }

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" && e.keyCode === 13 && props.onEnter) {
      props.onEnter();
    }
    if (props.onKeyUp) {
      props.onKeyUp();
    }
  };

  const onblur = () => {
    if (props.onblur) {
      props.onblur();
    }
  };

  const eleThickness = getThickness(props.thickness);
  const errorCss = error ? "inte-formElement--Error" : "";
  const innerPreIconClass = innerPreIcon
    ? "inte-formElement--hasInnerIconPre"
    : "";
  const innerSufIconClass = innerSufIcon
    ? "inte-formElement--hasInnerIconSuf"
    : "";

  const autoComplete = () => {
    switch (autocomplete) {
      case "off":
        return "off";
      case "on":
        return "on";
    }
  };
  const auto = autoComplete();
  const getInput = () => (
    <>
      <input
        id={props.id}
        type={props.type}
        style={{ opacity: props.readOnly ? "0.6" : "1" }}
        value={props.value}
        onFocus={onFocus}
        readOnly={props.readOnly || props.loading}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        autoComplete={auto}
        onBlur={onblur}
        onKeyUp={handleKeyPress}
        minLength={props.min}
        maxLength={props.max}
        placeholder={props.placeHolder}
        tabIndex={props.tabIndex}
        className="inte-formElement inte-formElementTextfield"
      />
      {clearButton && props.value ? (
        <div className="inte-clear" onClick={props.clearFunction}>
          <svg
            viewBox="0 0 20 20"
            width="12"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.414 10l6.293-6.293a1 1 0 10-1.414-1.414L10 8.586 3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293A.998.998 0 0018 17a.999.999 0 00-.293-.707L11.414 10z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      ) : null}
      {props.loading ? (
        <div className="icon-container">
          <div className="inte-triple-dots inte-loading" />
        </div>
      ) : null}
    </>
  );

  const inputWrapper = () => {
    if (!props.prefix && !props.suffix) {
      return getInput();
    } else {
      return (
        <div className="inte-formElement--hasPreSuf">
          {props.prefix ? (
            <span className={"inte-form__prefix"}>{props.prefix}</span>
          ) : (
            ""
          )}
          {getInput()}
          {props.suffix ? (
            <span className={"inte-form__suffix"}>{props.suffix}</span>
          ) : (
            ""
          )}
        </div>
      );
    }
  };

  return (
    <div
      className={`inte-formElement--Wrap ${
        clearButton ? "inte-formElement--hasClear" : ""
      } ${errorCss} ${eleThickness} ${innerPreIconClass} ${innerSufIconClass}`}
    >
      {name ? (
        <TextStyles utility={props.required ? "inte--Required" : ""}>
          {name}
        </TextStyles>
      ) : null}
      <div className="inte-formElemet--Inner">
        {inputWrapper()}
        {innerPreIconClass != "" ? (
          <span className={"inte-form__innericPrefix"}>{innerPreIcon}</span>
        ) : null}
        {innerSufIconClass != "" ? (
          <span className={"inte-form__innericSuffix"}>{innerSufIcon}</span>
        ) : null}
      </div>
      {props.showHelp && props.showHelp.length > 0 ? (
        <span className={"inte-form__itemHelp"}>{props.showHelp}</span>
      ) : null}
    </div>
  );
};
export interface TextfieldI {
  innerPreIcon?: React.ReactNode;
  innerSufIcon?: React.ReactNode;
  suffix?: string | React.ReactNode;
  prefix?: string | React.ReactNode;
  name?: string | React.ReactNode;
  showHelp?: string;
  id?: string;
  value?: string | number;
  placeHolder?: string;
  min?: number;
  max?: number;
  tabIndex?: number;
  readOnly?: boolean;
  clearButton?: boolean;
  required?: boolean;
  error?: boolean;
  loading?: boolean;
  type?: "text" | "number" | "password" | "tel" | "url" | "email";
  autocomplete?: "off" | "on";
  thickness?: "thin" | "";
  onChange?: (e: string) => void;
  onEnter?: () => void;
  onblur?: () => void;
  onKeyUp?: () => void;
  onFocus?: () => void;
  clearFunction?: () => void;
}

export default TextField;
