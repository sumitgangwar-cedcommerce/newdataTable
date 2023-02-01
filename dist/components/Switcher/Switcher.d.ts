import React from "react";
import "./Switcher.css";
declare function Switcher({ list, icon, direction, ...props }: ButtonDropdownI): JSX.Element;
declare namespace Switcher {
    var defaultProps: {
        children: string;
    };
}
export interface ButtonDropdownI {
    title: string;
    list: any;
    children?: string | React.ReactNode | JSX.Element | any;
    type?: "Primary" | "Danger" | "DangerOutlined" | "Secondary" | "Outlined" | "DangerPlain" | "TextButton";
    thickness?: "extraThin" | "thin" | "large";
    icon?: React.ReactNode | any;
    onClick?: () => void;
    loading?: boolean;
    disable?: boolean;
    direction?: "left" | "right";
}
export default Switcher;
