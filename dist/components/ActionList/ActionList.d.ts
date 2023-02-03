import React, { FC } from "react";
import "./ActionList.css";
declare const ActionList: FC<ActionListI>;
export declare const getScrollParent: (node: any) => any;
export interface ActionListI {
    open?: boolean;
    activator: React.ReactNode;
    sections: ObjI[];
    container?: "body" | "element";
    dropDownheight?: number;
    onClose?: () => void;
}
interface ObjI {
    title?: string;
    items?: items[];
}
interface items {
    content?: string;
    destructive?: boolean;
    description?: string;
    onClick?: () => void;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
}
export default ActionList;
