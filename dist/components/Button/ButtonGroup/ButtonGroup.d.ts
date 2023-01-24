import React from "react";
import "./ButtonGroup.css";
declare const ButtonGroup: React.FC<ButtonGroupI>;
export interface ButtonGroupI {
    segmented?: boolean;
    children?: JSX.Element | React.ReactNode;
    vertical?: boolean;
}
export default ButtonGroup;
