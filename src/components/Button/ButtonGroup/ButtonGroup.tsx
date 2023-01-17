import React from "react";
import "./ButtonGroup.css";

const ButtonGroup: React.FC<ButtonGroupI> = ({
  segmented = false,
  children,
  vertical = false,
}: ButtonGroupI) => {
  return (
    <div
      className={` ${segmented ? "inte-ButtonGroup--Segmented" : ""}  ${
        vertical ? "inte-ButtonGroup--Vertical" : "inte-ButtonGroup"
      }`}
    >
      {children}
    </div>
  );
};

export interface ButtonGroupI {
  segmented?: boolean;
  children?: JSX.Element | React.ReactNode;
  vertical?: boolean;
}

export default ButtonGroup;
