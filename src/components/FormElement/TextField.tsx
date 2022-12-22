/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useLayoutEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, X } from "react-feather";
import { TextStyles } from "..";
import "./FormElement.css";
import { ClearIcon } from "../../assets/icon/ActionIcons";
const TextField = ({
  onChange = () => {
    return "";
  },
  label = "",
  prefix,
  suffix,
  autocomplete = "off",
  clearButton = false,
  strength = false,
  show,
  helpIcon,
  disabled = false,
  controlStates,
  ...props
}: TextfieldI): JSX.Element => {
  const [color, setColor] = useState("");
  const [poorPassword, setPoorPassword] = useState(false);
  const [weakPassword, setWeakPassword] = useState(false);
  const [strongPassword, setStrongPassword] = useState(false);
  const [per, setPer] = useState<number>(0);
  const stepperColor = () => {
    switch (color) {
      case "Poor":
        return "inte__PasswordStrenth--StatusPoor";
      case "weak":
        return "inte__PasswordStrenth--StatusWeak";
      case "Strong":
        return "inte__PasswordStrenth--StatusStrong";
      default:
        return " ";
    }
  };
  const passwordStrength = (evnt: any) => {
    const passwordValue = evnt;
    const passwordLength = passwordValue.length;
    const poorRegExp = /[a-z]/;
    const AllRegExp = /[A-Z]/;
    const weakRegExp = /(?=.*?[0-9])/;
    const strongRegExp = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
    const All = AllRegExp.test(passwordValue);
    const poorPassword = poorRegExp.test(passwordValue);
    const weakPassword = weakRegExp.test(passwordValue);
    const strongPassword = strongRegExp.test(passwordValue);
    const space = /^\S*$/.test(passwordValue);
    if (passwordValue === "") {
    } else {
      // to check poor password
      if (
        // passwordLength <= 3 &&
        poorPassword ||
        All ||
        weakPassword ||
        strongPassword ||
        !space
      ) {
        setPoorPassword(true);
        setColor("Poor");
        setPer(15);
      }
      // to check weak password
      if (
        // passwordLength >= 4 &&
        (poorPassword || All) &&
        (weakPassword || strongPassword)
      ) {
        setWeakPassword(true);
        setColor("weak");
        setPer(50);
      }
      // to check strong Password
      if (
        (passwordLength >= 8 &&
          poorPassword &&
          All &&
          weakPassword &&
          strongPassword) ||
        (passwordLength >= 8 &&
          poorPassword &&
          All &&
          weakPassword &&
          strongPassword &&
          space)
      ) {
        // setStrongPassword(true);
        setColor("Strong");
        setPer(100);
      }
    }
  };
  const strengthColor = stepperColor();
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

  const controlStatesVal = getcontrolStates(controlStates);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" && e.keyCode === 13 && props.onEnter) {
      props.onEnter();
    }
    if (e.key === "Backspace" && e.keyCode === 8 && props.onBackspace) {
      props.onBackspace();
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

  const innerPreIconClass = prefix ? "inte-formElement--hasInnerIconPre" : "";
  const innerSufIconClass = suffix ? "inte-formElement--hasInnerIconSuf" : "";
  const connectLeftRight =
    props.connectLeft || props.connectRight
      ? "inte-formElement--hasConnectLeftRight"
      : "";

  // Manage padding space of Inner Prefix icon from left
  const innerPreref: any = useRef(null);
  const [innerIconWidth, SetInnericonWidth] = useState(0);
  useLayoutEffect(() => {
    prefix && SetInnericonWidth(innerPreref.current.offsetWidth);
  }, [innerPreref, prefix]);
  const innerPreIConWidth = prefix ? innerIconWidth + 26 : 12;

  // Manage padding  of Inner Prefix icon from right
  const innerSufrefWidth: any = useRef(null);
  const [innerIconWidthSuf, SetInnericonWidthSuff] = useState(0);
  useLayoutEffect(() => {
    suffix && SetInnericonWidthSuff(innerSufrefWidth.current.offsetWidth);
  }, [innerSufrefWidth, suffix]);
  const clearIconWidth = clearButton ? 28 : 0;
  const innerPreIConWidthSuf = suffix ? innerIconWidthSuf + 22 : 12;

  const numIncrement = () => {
    const a = <>{props.value}</>;
    return a;
  };

  const numValur = numIncrement;
  console.log(numValur);

  const getInput = () => (
    <>
      <input
        style={{
          paddingLeft: innerPreIConWidth + "px",
          paddingRight: innerPreIConWidthSuf + clearIconWidth + "px",
        }}
        id={props.id}
        type={
          props.type == "password" ? (show ? "text" : "password") : props.type
        }
        disabled={disabled && disabled}
        value={props.value}
        readOnly={props.readOnly}
        onChange={(e) => {
          if (props.type == "password") {
            passwordStrength(e.target.value);
            onChange(e.target.value);
          } else {
            onChange(e.target.value);
          }
        }}
        autoComplete={autocomplete}
        onBlur={onblur}
        onKeyUp={handleKeyPress}
        onFocus={props.onFocus}
        min={props.min}
        max={props.max}
        placeholder={props.placeHolder}
        tabIndex={props.tabIndex}
        autoFocus={props.autoFocus}
        className="inte-formElement inte-formElementTextfield"
        maxLength={props.maxlength}
      />
      {props.type == "password" && strength && props.value !== "" && (
        <div className={`inte__PasswordStrenth`}>
          <div
            className={`${strengthColor} inte__PasswordStrenth--Status`}
          ></div>
        </div>
      )}
      {clearButton && props.value ? (
        <div
          className="inte-clear"
          style={{ right: innerPreIConWidthSuf + "px" }}
          onClick={props.clearFunction}
        >
          {<ClearIcon />}
        </div>
      ) : null}
      {props.loading ? (
        <div
          className="inte-loading"
          style={{ right: innerPreIConWidthSuf + "px" }}
        ></div>
      ) : null}
    </>
  );

  const getConnectedField = () => (
    <div className="inte-formElement--connectedField">
      {props.connectLeft && (
        <div className="inte-formElement--ConnectLeft">{props.connectLeft}</div>
      )}

      <div className="inte-formElemet--Inner">
        {getInput()}
        {innerSufIconClass != "" ? (
          <span ref={innerSufrefWidth} className={"inte-form__innericSuffix"}>
            {suffix}
          </span>
        ) : null}
      </div>
      {props.connectRight && (
        <div className="inte-formElement--ConnectRight">
          {props.connectRight}
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`inte-formElement--Wrap ${connectLeftRight} ${
        props.loading ? "inte-formElement--Loading" : ""
      } ${
        clearButton ? "inte-formElement--hasClear" : ""
      } ${controlStatesVal} ${innerPreIconClass} ${innerSufIconClass} ${
        disabled ? "inte-formElement--disabled" : ""
      }`}
    >
      {label ? (
        <TextStyles
          type="SubHeading"
          subheadingTypes="XS-1.6"
          utility={
            props.required
              ? "inte--Required inte-Label--Text"
              : "inte-Label--Text"
          }
        >
          {label}
        </TextStyles>
      ) : null}
      {props.connectLeft || props.connectRight ? (
        getConnectedField()
      ) : (
        <div className="inte-formElemet--Inner">
          {getInput()}
          {innerPreIconClass != "" ? (
            <span ref={innerPreref} className={"inte-form__innericPrefix"}>
              {prefix}
            </span>
          ) : null}
          {innerSufIconClass != "" ? (
            <span ref={innerSufrefWidth} className={"inte-form__innericSuffix"}>
              {suffix}
            </span>
          ) : null}
          {props.type == "number" ? (
            <div className="inte-formElement--Spinner">
              <span
                onClick={numIncrement}
                className="inte-formElement-SpinnerTop"
              >
                <ChevronUp size={20} color="#1c2433" />
              </span>
              <span className="inte-formElement-SpinnerBottom">
                <ChevronDown size={20} color="#1c2433" />
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      )}

      {props.showHelp && (
        <span
          className={`inte-form__itemHelp ${
            helpIcon ? "inte-form__itemHelp--HasHelpIcon" : ""
          }`}
        >
          {helpIcon && <span style={{ display: "flex" }}>{helpIcon}</span>}
          <span>{props.showHelp}</span>
        </span>
      )}
    </div>
  );
};

export interface TextfieldI {
  onChange?: (e: string) => void;
  value?: string | number;
  label?: string | React.ReactNode;
  type?: "text" | "number" | "password" | "tel" | "url" | "email";
  placeHolder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  connectLeft?: React.ReactNode;
  connectRight?: React.ReactNode;
  showHelp?: string;
  helpIcon?: React.ReactNode;
  onEnter?: () => void;
  onblur?: () => void;
  onKeyUp?: () => void;
  onFocus?: () => void;
  onBackspace?: () => void;
  readOnly?: boolean;
  id?: string;
  controlStates?: "Sucess" | "Warning" | "Error" | any;
  loading?: boolean;
  autocomplete?: string;
  clearButton?: boolean;
  required?: boolean;
  min?: number;
  max?: number;
  tabIndex?: number;
  clearFunction?: () => void;
  show?: boolean;
  maxlength?: number | string | any;
  strength?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
}

export default TextField;
