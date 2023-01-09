import React from "react";
import "./Switcher.css";
import { TextStyles } from "..";

export default function Switcher({
  checked,
  onChange = () => {
    // Use / Click This function and switcher ON or OFF / true or false
    // The onclick event occurs when the user clicks on an element.
  },
  name,
  disabled = false,
  textAligh = "left",
  className
}: SwitcherI): JSX.Element {
  return (
    <div className={`inte__Switcher--Wrapper ${className}`}>
      {name && textAligh === "left" ? (
       <span className="inte__Switcher-Text">{name}</span>
      ) : null}
      <input
        disabled={disabled}
        type="checkbox"
        className="inte--switcher"
        checked={checked}
        onChange={onChange}
      ></input>
      {name && textAligh === "right" ? (
        <span className="inte__Switcher-Text">{name}</span>
      ) : null}
    </div>
  );
}
export interface SwitcherI {
  className?: string;
  checked?: boolean;
  onChange?: () => void;
  name?: React.ReactNode;
  disabled?: boolean;
  textAligh?: "left" | "right";
}
