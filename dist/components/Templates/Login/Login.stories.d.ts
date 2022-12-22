import Login from "./Login";
declare const _default: {
    title: string;
    component: typeof Login;
    argTypes: {
        children: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        type: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        align: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        onClose: {
            description: string;
            control: {
                type: string;
            };
        };
        active: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        destroy: {
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
