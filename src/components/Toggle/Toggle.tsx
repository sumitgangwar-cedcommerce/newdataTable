import React from "react";
import "./Toggle.css";

export default function Toggle({
  checked,
  onChange = () => {
    // Use / Click This function and switcher ON or OFF / true or false
    // The onclick event occurs when the user clicks on an element.
  },
  label,
  description,
  disabled = false,
  required,
  className="",
}: ToggleI): JSX.Element {
  return (
    <div
      className={`inte__Toggle--Wrapper ${className} ${
        required ? "inte__Toggle--Required" : ""
      }`}
    >
      <input
        disabled={disabled}
        type="checkbox"
        className="inte--Toggle"
        checked={checked}
        onChange={onChange}
      ></input>
      {label || description ? (
        <div className="inte__Toggle--Content">
          {label && <span className="inte__Toggle-Text">{label}</span>}
          {description && (
            <span className="inte__Toggle-Description">{description}</span>
          )}
        </div>
      ) : null}
    </div>
  );
}
export interface ToggleI {
  className?: string;
  checked?: boolean;
  required?: boolean;
  onChange?: () => void;
  label?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
}
