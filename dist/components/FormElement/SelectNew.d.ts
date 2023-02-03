import React from "react";
import "./FormElement.css";
declare const SelectNew: ({ helperText, label, options, multiSelect, searchable, required, helpIcon, loading, controlStates, disabled, clearable, container, placeholder, ellipsis, customClass, debounceTimer, onChange, customRef, tabIndex, ...props }: SelectI) => JSX.Element;
export declare type SelectI = {
    options?: Array<ObjI>;
    onChange?: (value: string, obj?: ObjI) => void;
    helpIcon?: React.ReactNode | null;
    placeholder?: string;
    controlStates?: "Success" | "Warning" | "Error";
    disabled?: boolean;
    loading?: boolean;
    ellipsis?: boolean;
    container?: "body" | "element";
    required?: boolean;
    helperText?: string | React.ReactNode;
    label?: string | React.ReactNode;
    multiSelect?: boolean;
    tabIndex?: number;
    searchable?: boolean;
    clearable?: boolean;
    value?: string;
    customClass?: string;
    customRef?: React.RefObject<HTMLDivElement>;
    debounceTimer?: number;
};
interface ObjI extends GroupI {
    label: string;
    value: string;
    description?: string | React.ReactNode;
}
interface GroupI {
    label: string;
    group?: ObjI[];
}
export default SelectNew;
