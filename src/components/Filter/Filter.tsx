import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import FilterSheet from "./FilterSheet";
import "./Filter.css";

const Filter: React.FC<Filter1> = ({ ...props }: Filter1) => {
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
    <>
      <div className={"inte-Filter"}>
        {props.icon ? (
          <Button
            type={props.type}
            thickness="thin"
            onClick={toggle}
            icon={props.icon}
            iconAlign="left"
          >
            {props.button}
          </Button>
        ) : (
          <Button type={props.type} thickness="large" onClick={toggle}>
            {props.button}
          </Button>
        )}
      </div>
      <div
        className={
          active
            ? "inte_sheetActive inte_FilterSheetWrapper"
            : "inte_FilterSheetWrapper"
        }
      >
        <FilterSheet
          {...props}
          handleToggle={() => {
            toggle();
          }}
        />
        <div onClick={toggle} className="inte-Backdrop"></div>
      </div>
    </>
  );
};
export interface FilterI {
  props?: Filter1;
}
export interface Filter1 {
  filters: FI[];
  heading?: string;
  button?: string | React.ReactNode;
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
  resetFilter?: () => void;
  disableReset?: boolean;
  disableApply?: boolean;
}
export interface FI {
  name: string;
  children: React.ReactNode;
}

export default Filter;
