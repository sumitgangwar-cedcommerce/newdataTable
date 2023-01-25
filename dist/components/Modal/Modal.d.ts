import React from "react";
import { ButtonI } from "../Button/Button";
import "./Modal.css";
declare const Modal: React.FC<ModalI>;
export interface ModalI {
    children: React.ReactNode;
    heading?: string;
    headingIcon?: React.ReactNode;
    open: boolean;
    modalSize?: "small" | "medium" | "large" | "xLarge";
    close: () => void;
    primaryAction?: ButtonI;
    secondaryAction?: ButtonI;
    tertiaryAction?: ButtonI;
    overlayClose?: boolean;
    extraClass?: string;
}
export default Modal;
