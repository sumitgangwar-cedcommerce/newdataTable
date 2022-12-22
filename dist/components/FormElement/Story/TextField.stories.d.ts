declare const _default: {
    title: string;
    component: ({ onChange, label, prefix, suffix, autocomplete, clearButton, strength, show, helpIcon, disabled, controlStates, ...props }: import("../TextField").TextfieldI) => JSX.Element;
    argTypes: {
        value: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
        placeHolder: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
        label: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
        type: {
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        showHelp: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
        id: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        controlStates: {
            control: {
                type: string;
                options: string[];
            };
        };
        prefix: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: JSX.Element;
        };
        suffix: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        clearButton: {
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        onFocus: {
            control: {
                type: string;
            };
        };
        onEnter: {
            control: {
                disable: boolean;
            };
        };
        onChange: {
            control: {
                disable: boolean;
            };
        };
        connectLeft: {
            control: {
                disable: boolean;
            };
        };
        connectRight: {
            control: {
                disable: boolean;
            };
        };
        maxlength: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
        min: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
        max: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
        helpIcon: {
            control: {
                description: string;
                type: string;
            };
            defaultValue: string;
        };
        required: {
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        readOnly: {
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        autocomplete: {
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        loading: {
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        disabled: {
            control: {
                type: string;
                description: string;
            };
            defaultValue: boolean;
        };
        strength: {
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        tabIndex: {
            control: {
                type: string;
            };
            defaultValue: number;
        };
        show: {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
export declare const Default: any;
export declare const Types: any;
export declare const strengthPassword: any;
export declare const Label: any;
export declare const PlaceHolder: any;
export declare const ShowHelp: any;
export declare const ShowHelpIcon: any;
export declare const Prefix: any;
export declare const Suffix: any;
export declare const ConnectedField: any;
export declare const Loading_Textfield: any;
export declare const ClearButton: any;
export declare const Control_States: any;
