import React from "react";
import "./Toggle.css";
export default function Toggle({ checked, onChange, label, description, disabled, required, className, }: ToggleI): JSX.Element;
export interface ToggleI {
    className?: string;
    checked?: boolean;
    required?: boolean;
    onChange?: () => void;
    label?: React.ReactNode;
    description?: React.ReactNode;
    disabled?: boolean;
}
