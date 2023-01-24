import React from "react";
import "./FormElement.css";
declare const RadioNew: React.FC<CheckBoxI>;
export interface CheckBoxI {
    labelHeading?: string;
    options: {
        value: string;
        label: string;
        description?: string;
        disabled?: boolean;
        onChange?: () => {};
    }[];
    required?: boolean;
}
export default RadioNew;
