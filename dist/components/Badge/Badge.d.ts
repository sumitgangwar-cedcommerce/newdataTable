import React from "react";
import "./Badge.css";
declare const Badge: React.FC<BadgeI>;
export interface BadgeI {
    children?: React.ReactNode | string;
    variant?: "filled" | "accent";
    type?: "Primary" | "Secondary" | "Success" | "Error" | "Warning";
    size?: "Large" | "Medium" | "Small";
    customBgColor?: string;
    badgeTextColor?: string;
    icon?: React.ReactNode;
    iconAlign?: "left" | "right";
    dot?: boolean;
    helpText?: string | React.ReactNode;
    helpPosition?: "left" | "right" | "top" | "bottom";
}
export default Badge;
