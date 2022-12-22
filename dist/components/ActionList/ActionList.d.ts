import React, { FC } from "react";
import { ButtonI } from "../Button/Button";
import "./ActionList.css";
declare const ActionList: FC<ActionListI>;
export declare const getScrollParent: (node: any) => any;
export interface ActionListI {
    open?: boolean;
    activator: React.ReactNode;
    sections?: any;
    primaryAction?: ButtonI;
    secondaryAction?: ButtonI;
    direction?: "left" | "right";
    popoverContainer?: "body" | "element";
    dropDownheight?: number;
    onClose?: () => void;
}
export default ActionList;
