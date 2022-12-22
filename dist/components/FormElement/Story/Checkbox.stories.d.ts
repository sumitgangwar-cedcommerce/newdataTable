import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("../CheckBox").CheckBoxI>;
    argTypes: {
        checked: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        name: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        labelVal: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        description: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        onChange: {
            description: string;
            control: {
                type: string;
                disable: boolean;
            };
        };
        error: {
            description: string;
            control: {
                type: string;
                defaultValue: boolean;
            };
        };
        disabled: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        required: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
export declare const CheckboxRequired: any;
export declare const DisableCheckbox: any;
export declare const CheckboxWithDescription: any;
