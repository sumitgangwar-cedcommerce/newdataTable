/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./Button.css";

const Button = ({
  type,
  FullBtn=false,
  thickness = "thin",
  halign = "Center",
  loading = false,
  disable = false,
  ...props
}: ButtonI): JSX.Element => {
  const checkType = (): string => {
    switch (type) {
      case "Primary":
        return "inte-btn--Primary";
      case "Outlined":
        return "inte-btn--Outlined";
      case "TextButton":
        return "inte__text-btn";
      case "Danger":
        return "inte-btn--Danger";
      case "DangerOutlined":
        return "inte-btn--DangerOutlined";
      case "DangerPlain":
        return "inte-btn--DangerPlain";
      case "Secondary":
        return "inte-btn--Secondary";
      default:
        return "inte-btn--Primary";
    }
  };

  const getThickness = (): string => {
    switch (thickness) {
      case "extraThin":
        return "inte-btnExtraNarrow";
      case "thin":
        return "inte-btnNarrow";
      case "large":
        return "inte-btnLarge";
      default:
        return "";
    }
  };
  const checkForForHAlign = (): string => {
    switch (halign) {
      case "Equal":
        return "inte-btn--distributionEqualSpacing";
      case "End":
        return "inte-btn--distributionEnd";
      case "Start":
        return "inte-btn--distributionStart";
      case "Between":
        return "inte-btn--distributionBetween";
      case "Center":
        return "inte-btn--distributionCenter";
      default:
        return "";
    }
  };

  const bType = checkType();
  let iconClass = "";
  let icon = <></>;
  const thicknessCss = getThickness();
  const halignCss = checkForForHAlign();

  const { iconAlign = "left" } = props;

  if (props.icon) {
    iconClass = "inte-btn--hasIcon";

    iconAlign !== "left" ? { paddingLeft: "1rem" } : { paddingRight: "1rem" };
    
    icon = (
      <span className={`inte-btn__icon`}>
        {props.icon}
      </span>
    );
  }

  const content = props.content ? props.content : props.children;

  return (
    <button
      disabled={disable}
      tabIndex={props.tabIndex}
      className={
        disable
          ? `inte-btn inte-btn-disable ${bType} ${iconClass} ${halignCss}  ${FullBtn ? "inte_btn--fullWidth" : ""} ${thicknessCss} ${
              loading ? "inte-btn--Loading" : ""
            } ${
              props.content === undefined && props.children === undefined
                ? "inte-btn--onlyIcon"
                : ""
            }`
          : `inte-btn ${bType} ${iconClass} ${halignCss} ${FullBtn ? "inte_btn--fullWidth" : ""} ${thicknessCss} ${
              loading ? "inte-btn--Loading" : ""
            } ${
              props.content === undefined && props.children === undefined
                ? "inte-btn--onlyIcon"
                : ""
            }`
      }
      onClick={() => {
        if (!loading && !disable && props.onAction) props.onAction();
        if (!loading && !disable && props.onClick) props.onClick();
      }}
    >
      {iconAlign === "left" && icon}
      {loading ? <div className="inte-loading"></div> : null}
      {props.children ? <span className={"inte__text"}>{content}</span> : ""}
      {props.content ? <span className={"inte__text"}>{content}</span> : ""}
      {iconAlign === "right" && icon}
    </button>
  );
};
export interface ButtonI {
  children?: string | React.ReactNode | JSX.Element | any;
  content?: string;
  type?:
    | "Primary"
    | "Danger"
    | "DangerOutlined"
    | "Secondary"
    | "Outlined"
    | "DangerPlain"
    | "TextButton";
  FullBtn?: boolean;
  thickness?: "extraThin" | "thin" | "large";
  halign?: "Equal" | "End" | "Start" | "Between" | "Center";
  icon?: React.ReactNode;
  onAction?: () => void;
  onClick?: () => void;
  loading?: boolean;
  disable?: boolean;
  iconAlign?: "left" | "right";
  tabIndex?: number;
}
export default Button;
