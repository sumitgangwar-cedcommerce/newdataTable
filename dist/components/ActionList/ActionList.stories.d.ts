import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./ActionList").ActionListI>;
    argTypes: {
        sections: {
            control: {
                type: string;
            };
            defaultValue: ({
                title: string;
                items: ({
                    destructive: boolean;
                    content: string;
                    onClick: () => void;
                } | {
                    content: string;
                    onClick: () => void;
                    destructive?: undefined;
                })[];
            } | {
                title: string;
                items: {
                    prefixIcon: JSX.Element;
                    content: string;
                    onClick: () => void;
                }[];
            } | {
                title: string;
                items: {
                    content: string;
                    description: string;
                    onClick: () => void;
                }[];
            } | {
                title: string;
                items: {
                    content: string;
                    description: string;
                    prefixIcon: JSX.Element;
                    onClick: () => void;
                }[];
            } | {
                title: string;
                items: {
                    content: string;
                    description: string;
                    suffixIcon: JSX.Element;
                    onClick: () => void;
                }[];
            })[];
        };
        open: {
            description: string;
            control: {
                type: string;
                disable: boolean;
            };
        };
        activator: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        dropDownheight: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        container: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
export declare const ActionList_with_Action_Only: any;
export declare const ActionList_with_Action_and_title: any;
export declare const ActionList_with_Action_title_and_prefix_icon: any;
export declare const ActionList_with_Action_title_and_suffix_icon: any;
export declare const ActionList_with_Action_title_and_description: any;
export declare const ActionList_with_Action_title_description_and_prefixIcon: any;
