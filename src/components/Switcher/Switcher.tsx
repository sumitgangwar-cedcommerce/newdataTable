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
}: SwitcherI): JSX.Element {
  return (
    <div className="inte__Switcher--Wrapper">
      {name && textAligh === "left" ? (
        <TextStyles
          type="SubHeading"
          subheadingTypes="XS-1.6"
          paragraphTypes="LG-1.5"
          lineHeight="LH-1.6"
        >
          {name}
        </TextStyles>
      ) : null}
      <input
        disabled={disabled}
        type="checkbox"
        className="inte--switcher"
        checked={checked}
        onChange={onChange}
      ></input>
      {name && textAligh === "right" ? (
        <TextStyles
          type="Paragraph"
          paragraphTypes="MD-1.4"
          lineHeight="LH-1.6"
        >
          {" "}
          {name}
        </TextStyles>
      ) : null}
    </div>
  );
}
export interface SwitcherI {
  checked?: boolean;
  onChange?: () => void;
  name?: React.ReactNode;
  disabled?: boolean;
  textAligh?: "left" | "right";
}
