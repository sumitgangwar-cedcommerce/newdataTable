import React from "react";
import { ComponentMeta } from '@storybook/react';
import { Card } from "../Card";
import { FlexLayout } from "../FlexLayout";
import { ExternalLink } from 'react-feather';
import TextLink from './TextLink';
import TextStyles from '../TextStyles/TextStyles';
import { TextLinkI } from "./TextLink";
import * as Icons from "../../storybook/Foundation/Icons/Icons";
const allIcons: any = { ...Icons };

export default {
    title: 'Components/Actions/TextLink',
    component: TextLink,
    argTypes: {
        label: {
            description: "Kindly Enter Label",
            control: {
                type: "text",
            },
            defaultValue: "Text Link",
        },
        extraClass: {
            description: "You can add any extraClass",
            control: {
                type: "text",
            },
            defaultValue: "extraClass",
        },
        disabled: {
            description: "Make text link disabled",
            control: {
                type: "boolean",
            },
            defaultValue: false,
        },
        icon: {
            description: "Choose icon",
            control: {
                type: "select",
                options: Object.keys(allIcons),
            },
            defaultValue: "ExternalLink",
        },
        url: {
            description: "Kindly Enter Label",
            control: {
                type: "text",
            },
            defaultValue: "",
        },
        target: {
            description: "Url will open in targeted page",
            control: {
                type: "radio",
                options: ['_self', '_blank', '_parent', '_top'],
            },
            defaultValue: "_blank",
        },
    }
} as ComponentMeta<typeof TextLink>;


interface NewI extends TextLinkI {
    icon: "ExternalLink";
}

const Template = (rest: NewI) => {
    return (
        <>
            <Card title={"Primary Text Link"}>
                <TextLink
                    {...rest}
                    target={rest.target}
                    label={rest.label}
                    disabled={rest.disabled}
                    icon={allIcons[rest.icon]({
                        size: `16`,
                        color: `currentColor`,
                      })}
                    onClick={() => alert("Link clicked")}/>
            </Card>
        </>
    );
};

export const Primary = Template.bind({});

// Text Links Without Icon and onClick
export const Text_Links_Without_Icon_and_onClick: any = Template.bind({});
Text_Links_Without_Icon_and_onClick.decorators = [
    () => {
        return (
            <Card title=" Text Links Without Icon and onClick">
                <FlexLayout spacing="loose">
                    <TextLink onClick={() => alert("Link clicked")} label="Text Link" />
                </FlexLayout>
            </Card>
        );
    },
];

// Text Links With Icon and onClick
export const Text_Links_With_Icon_and_onClick: any = Template.bind({});
Text_Links_With_Icon_and_onClick.decorators = [
    () => {
        return (
            <Card title=" Text Links With Icon and onClick">
                <FlexLayout spacing="loose">
                    <TextLink onClick={() => alert("Link clicked")} icon={<ExternalLink size="16" />} label="Text Link" />
                </FlexLayout>
            </Card>
        );
    },
];

// Text Links With url
export const Text_Links_With_Url: any = Template.bind({});
Text_Links_With_Url.decorators = [
    () => {
        return (
            <Card title=" Text Links With Url">
                <FlexLayout spacing="loose">
                    <TextLink url="www.google.com" target="_blank" icon={<ExternalLink size="16" />} label="Text Link" />
                </FlexLayout>
            </Card>
        );
    },
];

// Text Links With Paragraph Without icon
export const Text_Links_With_Paragraph_Without_Icon: any = Template.bind({});
Text_Links_With_Paragraph_Without_Icon.decorators = [
    () => {
        return (
            <Card title=" Text Links With Icon">
                <TextStyles type="Heading">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy
                    {" "}<TextLink onClick={() => alert("Link clicked")} label="text ever" /> {" "}
                    since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </TextStyles>
            </Card>
        );
    },
];

// Text Links With Paragraph With icon
export const Text_Links_With_Paragraph_With_Icon: any = Template.bind({});
Text_Links_With_Paragraph_With_Icon.decorators = [
    () => {
        return (
            <Card title=" Text Links With Icon">
                <TextStyles type="Heading">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy
                    {" "}<TextLink onClick={() => alert("Link clicked")} label="text ever" icon={<ExternalLink size="16" />} /> {" "}
                    since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </TextStyles>
            </Card>
        );
    },
];






