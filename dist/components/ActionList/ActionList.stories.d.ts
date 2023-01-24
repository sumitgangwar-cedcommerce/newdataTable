import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./ActionList").ActionListI>;
    argTypes: {
        sections: {
            table: {
                disable: boolean;
            };
        };
        sections1: {
            table: {
                disable: boolean;
            };
        };
        primaryAction: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        secondaryAction: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        ActionList: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
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
        ActionListContent: {
            name: string;
            description: string;
            control: {
                type: string;
                disable: boolean;
            };
            defaultValue: string;
        };
        dropDownheight: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        popoverContainer: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        direction: {
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
