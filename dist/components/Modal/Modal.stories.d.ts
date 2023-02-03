import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./Modal").ModalI>;
    argTypes: {
        open: {
            description: string;
            control: {
                type: string;
            };
        };
        overlayClose: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        heading: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        children: {
            control: {
                type: string;
            };
        };
        primaryAction: {
            control: {
                type: string;
                disable: boolean;
            };
        };
        secondaryAction: {
            control: {
                type: string;
                disable: boolean;
            };
        };
        tertiaryAction: {
            control: {
                type: string;
                disable: boolean;
            };
        };
        modalSize: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        onClose: {
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
export declare const MoadalSize: any;
export declare const MoadalWithPrimaryAction: any;
export declare const MoadalWithSecondaryAction: any;
export declare const MoadalWithoutFooter: any;
export declare const MoadalWithoutHeader: any;
export declare const MoadalWithTitleAndIcon: any;
export declare const MoadalWithDangerAction: any;
