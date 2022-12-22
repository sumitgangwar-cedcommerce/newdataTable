import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./AdvanceFilter.css";
import AdvanceFilterSheet from "./AdvanceFilterSheet";

const AdvanceFilter: React.FC<Filter1> = ({
  onClose = () => {},
  ...props
}: Filter1) => {
  const [active, handleToggle] = useState(false);

  const toggle = () => {
    handleToggle(!active);
  };
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("inte-Filter--Open");
    } else {
      document.body.style.removeProperty("overflow");
      document.body.classList.remove("inte-Filter--Open");
    }
  }, [active]);

  return (
    <div className="inte-Filter--Advance">
      <div className={"inte-Filter"}>
        <Button
          icon={props.icon}
          type={props.type}
          thickness="thin"
          onClick={toggle}
        >
          {props.button}
        </Button>
      </div>
      <div
        className={
          active
            ? "inte_sheetActive inte_FilterSheetWrapper"
            : "inte_FilterSheetWrapper"
        }
      >
        <AdvanceFilterSheet
          {...props}
          handleToggle={() => {
            toggle();
          }}
          onClose={onClose}
        ></AdvanceFilterSheet>
        <div
          onClick={() => {
            onClose(), toggle();
          }}
          className="inte-Backdrop"
        ></div>
      </div>
    </div>
  );
};
export interface FilterI {
  props?: Filter1;
}
export interface Filter1 {
  filters: FI[];
  heading?: string;
  button?: string;
  icon?: React.ReactNode;
  type?:
    | "Primary"
    | "Danger"
    | "DangerOutlined"
    | "Secondary"
    | "Outlined"
    | "DangerPlain"
    | "TextButton";
  onApply?: () => void;
  onClose?: () => void;
  resetFilter?: () => void;
  disableReset?: boolean;
  disableApply?: boolean;
}
export interface FI {
  name: string;
  children: React.ReactNode;
}

export default AdvanceFilter;
