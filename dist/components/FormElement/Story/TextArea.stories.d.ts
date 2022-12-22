declare const _default: {
    title: string;
    component: ({ type, placeHolder, value, onFocus, required, showHelp, onChange, onEnter, label, rows, error, readOnly, ...props }: import("../TextArea").TextfieldI) => JSX.Element;
    argTypes: {
        value: {
            control: {
                type: string;
            };
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
        required: {
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        rows: {
            control: {
                type: string;
            };
            defaultValue: number;
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
            control: {
                type: string;
            };
            defaultValue: string;
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
        error: {
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
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
