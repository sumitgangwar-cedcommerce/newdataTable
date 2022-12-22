import React from "react";
import "./AutoComplete.css";
declare function AutoComplete({ options, value, onChange, onClick, onEnter, name, prefix, suffix, showHelp, setHiglighted, placeHolder, loading, extraClass, popoverPosition, ...props }: SearchI): JSX.Element;
export declare const getScrollParent: (node: any) => any;
export interface SearchI {
    options?: any;
    value?: string;
    name?: string;
    onEnter?: ((e: string) => void) | any;
    onChange?: ((e: string) => void) | any;
    onClick?: ((e: string) => void) | any;
    placeHolder?: string;
    showHelp?: string;
    prefix?: string | React.ReactNode;
    suffix?: React.ReactNode;
    setHiglighted?: boolean;
    loading?: boolean;
    clearButton?: boolean;
    clearFunction?: ((e: string) => void) | any;
    showPopover?: boolean | any;
    popoverPosition?: "right" | "left" | "top" | "bottom";
    extraClass?: string;
}
export default AutoComplete;
