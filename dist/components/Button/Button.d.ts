import React from "react";
import "./Button.css";
declare const Button: ({ type, FullBtn, thickness, halign, loading, disable, ...props }: ButtonI) => JSX.Element;
export interface ButtonI {
    children?: string | React.ReactNode | JSX.Element | any;
    content?: string;
    type?: "Primary" | "Danger" | "DangerOutlined" | "Secondary" | "Outlined" | "DangerPlain" | "TextButton";
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
