import React from "react";
import './AutoComplete.css';
declare function Auto({ options, value, onChange, onClick, onEnter, name, innerPreIcon, innerSufIcon, showHelp, thickness, setHiglighted, placeHolder, loading, extraClass, popoverPosition, ...props }: SearchI): JSX.Element;
export interface SearchI {
    options?: any;
    value?: string;
    name?: string;
    onEnter?: ((e: string) => void) | any;
    onChange?: ((e: string) => void) | any;
    onClick?: ((e: string) => void) | any;
    thickness?: "thin" | "thick";
    placeHolder?: string;
    showHelp?: string;
    innerPreIcon?: string | React.ReactNode;
    innerSufIcon?: React.ReactNode;
    setHiglighted?: boolean;
    loading?: boolean;
    clearButton?: boolean;
    clearFunction?: ((e: string) => void) | any;
    showPopover?: boolean | any;
    popoverPosition?: "right" | "left" | "top" | "bottom";
    extraClass?: string;
}
export default Auto;
