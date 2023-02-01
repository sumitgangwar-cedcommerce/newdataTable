import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from "react";
import { NotFound404, EmptyCampaign, SearchEmptyCampaing, BrokenLink, BrokenPage, EmptyConnectedAccount, EmptyNotification, LogoutScreen, NoFaqFound, NoProduct, NoSearchFaq, NoSearchResult, SessionExpire } from './Illustration';
import { FallBack } from './FallBack';
import Button from '../Button/Button';
import { Card } from '../Card';
import { Plus } from "react-feather";
import TextStyles from '../TextStyles/TextStyles';
import TextLink from '../TextLink/TextLink';
import { FlexLayout } from '../FlexLayout';

export default {
    title: 'Templates/FallBack',
    component: FallBack,
    argTypes: {
        title: {
            description: "Enter the main title",
            control: {
                type: "text",
            },
            defaultValue:
                "Lorem ipsum dolor sit amet consectetur",
        },
        subTitle: {
            description: "Enter subtitle",
            control: {
                type: "text",

            },
            defaultValue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Possimus in harum",
        },
        action: {
            description: "Update your actions",
            control: {
                type: "ReactNode",
            },
            defaultValue: "",
        },
        illustration: {
            description: "Update your illustration",
            control: {
                type: "ReactNode",
            },
            defaultValue: "",
        },
        extraclass: {
            description: "Add Extra Class",
            control: {
                type: "text",
            },
            defaultValue: "",
        },
        buttonText: {
            description: "Enter Button text",
            control: {
                type: "text",
            },
            defaultValue: "Button text",
        },
        FallBackHeight: {
            description: "Choose page Height",
            control: {
                type: "radio",
                options: ['FullPage', 'NormalPage']
            },
            defaultValue: "NormalPage",
        }
    }
} as ComponentMeta<typeof FallBack>;


const Template: ComponentStory<typeof FallBack> = ({ ...rest }) => {
    return (
        <>
            <Card cardType='Subdued'>
                <FallBack
                    illustration={<NotFound404 />}
                    title={rest.title}
                    subTitle={rest.subTitle}
                    action={<Button type="Primary" onAction={() => { alert("Clicked") }} thickness="large" icon={<Plus size={16} color="#fff" />}>Test Button</Button>}
                    extraclass={rest.extraclass}
                    FallBackHeight={rest.FallBackHeight}


                />
            </Card>

        </>
    );
};

export const Default = Template.bind({});

// Empty Campaign page
export const Empty_Campaign_page: any = Template.bind({});
Empty_Campaign_page.decorators = [
    () => {
        return (
            <Card cardType='Subdued'>
                <FallBack
                    illustration={<EmptyCampaign />}
                    title="Create your First Campaign"
                    subTitle={
                        <FlexLayout direction="vertical" halign="center">
                            <TextStyles
                                alignment="center"
                                fontweight="normal"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility="none">
                                You haven’t created anything yet. When you do, it'll show up here.
                            </TextStyles>
                            <p className="Paragraph inte-Align--center inte__text--light none inte__font--normal inte__Paragraph--font--medium  ">
                                Need Help? Read our <TextLink onClick={() => alert("Link clicked")} label="Help Doc" /> for further details.
                            </p>

                        </FlexLayout>
                    }
                    action={<Button type="Primary" onAction={() => { alert("Clicked") }} thickness="large" icon={<Plus size={16} color="#fff" />}>Create Campaign</Button>}




                />
            </Card>
        );
    },
];

// Search Empty Campaign page
export const Search_Empty_Campaign_page: any = Template.bind({});
Search_Empty_Campaign_page.decorators = [
    () => {
        return (
            <Card cardType='Subdued'>
                <FallBack
                    illustration={<SearchEmptyCampaing />}
                    title="No Campaigns found"
                    subTitle={
                        <FlexLayout direction="vertical" halign="center">
                            <TextStyles
                                alignment="center"
                                fontweight="normal"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility="none">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretiu
                            </TextStyles>
                        </FlexLayout>
                    }
                />
            </Card>
        );
    },
];

// Empty Campaign page
export const Empty_Notification: any = Template.bind({});
Empty_Notification.decorators = [
    () => {
        return (
            <Card cardType='Subdued'>
                <FallBack
                    illustration={<EmptyNotification />}
                    title="No Notification"
                    subTitle={
                        <FlexLayout direction="vertical" halign="center">
                            <TextStyles
                                alignment="center"
                                fontweight="normal"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility="none">
                                You haven’t notification anything yet. When you have, it'll show up here.
                            </TextStyles>


                        </FlexLayout>
                    }
                    action={<Button type="Primary" onAction={() => { alert("Clicked") }} thickness="large" >Go to Home</Button>}




                />
            </Card>
        );
    },
];

// Empty Products
export const Empty_Products: any = Template.bind({});
Empty_Products.decorators = [
    () => {
        return (
            <Card cardType='Subdued'>
                <FallBack
                    illustration={<NoProduct />}
                    title="Oops. . No Product found!"
                    subTitle={
                        <FlexLayout direction="vertical" halign="center">
                            <TextStyles
                                alignment="center"
                                fontweight="normal"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility="none">
                                Please try some other selection.
                            </TextStyles>
                            <p className="Paragraph inte-Align--center inte__text--light none inte__font--normal inte__Paragraph--font--medium  ">
                                Need Help? Read our <TextLink onClick={() => alert("Link clicked")} label="Help Doc" /> for further details.
                            </p>

                        </FlexLayout>
                    }
                />
            </Card>
        );
    },
];

// Empty Connected Account
export const Empty_Connected_Account: any = Template.bind({});
Empty_Connected_Account.decorators = [
    () => {
        return (
            <Card cardType='Subdued'>
                <FallBack
                    illustration={<EmptyConnectedAccount />}
                    title="Add an account"
                    subTitle={
                        <FlexLayout direction="vertical" halign="center">
                            <TextStyles
                                alignment="center"
                                fontweight="normal"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility="none">
                                Connect a account to take actions on the app
                            </TextStyles>
                        </FlexLayout>
                    }
                    action={<Button type="Primary" onAction={() => { alert("Clicked") }} thickness="large" icon={<Plus size={16} color="#fff" />}>Connect Account</Button>}




                />
            </Card>
        );
    },
];

// Page Not Found 404
export const Page_Not_Found_404: any = Template.bind({});
Page_Not_Found_404.decorators = [
    () => {
        return (
            <Card cardType='Subdued'>
                <FallBack
                    illustration={<NotFound404 />}
                    title="Page Not Found"
                    subTitle={
                        <FlexLayout direction="vertical" halign="center">
                            <TextStyles
                                alignment="center"
                                fontweight="normal"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility="none">
                                You haven’t any search result. Please visit wot homepage
                            </TextStyles>
                            <p className="Paragraph inte-Align--center inte__text--light none inte__font--normal inte__Paragraph--font--medium  ">
                                Need Help? Read our <TextLink onClick={() => alert("Link clicked")} label="Help Doc" /> for further details.
                            </p>

                        </FlexLayout>
                    }
                    action={<Button type="Primary" onAction={() => { alert("Clicked") }} thickness="large">Go to Home</Button>}




                />
            </Card>
        );
    },
];

// Broken_Page
export const Broken_Page: any = Template.bind({});
Broken_Page.decorators = [
    () => {
        return (
            <Card cardType='Subdued'>
                <FallBack
                    illustration={<BrokenPage />}
                    title="Broken Page"
                    subTitle={
                        <FlexLayout direction="vertical" halign="center">
                            <TextStyles
                                alignment="center"
                                fontweight="normal"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility="none">
                                Your file have some error. We’re trying to fix it.
                            </TextStyles>
                            <p className="Paragraph inte-Align--center inte__text--light none inte__font--normal inte__Paragraph--font--medium  ">
                                Need Help? Read our <TextLink onClick={() => alert("Link clicked")} label="Help Doc" /> for further details.
                            </p>

                        </FlexLayout>
                    }
                    action={<Button type="Primary" onAction={() => { alert("Clicked") }} thickness="large">Go to Home</Button>}
                />
            </Card>
        );
    },
];

// Broken_Link
export const Broken_Link: any = Template.bind({});
Broken_Link.decorators = [
    () => {
        return (
            <Card cardType='Subdued'>
                <FallBack
                    illustration={<BrokenLink />}
                    title="Broken Page"
                    subTitle={
                        <FlexLayout direction="vertical" halign="center">
                            <TextStyles
                                alignment="center"
                                fontweight="normal"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility="none">
                                Your file have some error. We’re trying to fix it.
                            </TextStyles>
                            <p className="Paragraph inte-Align--center inte__text--light none inte__font--normal inte__Paragraph--font--medium  ">
                                Need Help? Read our <TextLink onClick={() => alert("Link clicked")} label="Help Doc" /> for further details.
                            </p>

                        </FlexLayout>
                    }
                    action={<Button type="Primary" onAction={() => { alert("Clicked") }} thickness="large">Go to Home</Button>}
                />
            </Card>
        );
    },
];

// No Search Result
export const No_Search_Result: any = Template.bind({});
No_Search_Result.decorators = [
    () => {
        return (
            <Card cardType='Subdued'>
                <FallBack
                    illustration={<NoSearchResult />}
                    title="No Search Result"
                    subTitle={
                        <FlexLayout direction="vertical" halign="center">
                            <TextStyles
                                alignment="center"
                                fontweight="normal"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility="none">
                                Your search result is not found. Please try to search your another query.
                            </TextStyles>
                            <p className="Paragraph inte-Align--center inte__text--light none inte__font--normal inte__Paragraph--font--medium  ">
                                Need Help? Read our <TextLink onClick={() => alert("Link clicked")} label="Help Doc" /> for further details.
                            </p>

                        </FlexLayout>
                    }
                />
            </Card>
        );
    },
];

// Session Expire
export const Session_Expire: any = Template.bind({});
Session_Expire.decorators = [
    () => {
        return (
            <Card cardType='Subdued'>
                <FallBack
                    FallBackHeight="FullPage"
                    illustration={<SessionExpire />}
                    title="Session Expired"
                    subTitle={
                        <FlexLayout direction="vertical" halign="center">
                            <TextStyles
                                alignment="center"
                                fontweight="normal"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility="none">
                                Your time limit is end on this page. Please login again to continue.
                            </TextStyles>
                            <p className="Paragraph inte-Align--center inte__text--light none inte__font--normal inte__Paragraph--font--medium  ">
                                Need Help? Read our <TextLink onClick={() => alert("Link clicked")} label="Help Doc" /> for further details.
                            </p>

                        </FlexLayout>
                    }
                    action={<Button type="Primary" onAction={() => { alert("Clicked") }} thickness="large" >Login Again</Button>}




                />
            </Card>
        );
    },
];

// No Responce from server
export const No_Responce_from_server: any = Template.bind({});
No_Responce_from_server.decorators = [
    () => {
        return (
            <Card cardType='Subdued'>
                <FallBack

                    illustration={<NoSearchFaq />}
                    title="refresh this page"
                    subTitle={
                        <FlexLayout direction="vertical" halign="center">
                            <TextStyles
                                alignment="center"
                                fontweight="normal"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility="none">
                                We have encountered some problem kindly refresh the page
                            </TextStyles>
                            <p className="Paragraph inte-Align--center inte__text--light none inte__font--normal inte__Paragraph--font--medium  ">
                                Need Help? Read our <TextLink onClick={() => alert("Link clicked")} label="Help Doc" /> for further details.
                            </p>

                        </FlexLayout>
                    }
                />
            </Card>
        );
    },
];

// Facing Some Issue
export const Facing_Some_Issue: any = Template.bind({});
Facing_Some_Issue.decorators = [
    () => {
        return (
            <Card cardType='Subdued'>
                <FallBack

                    illustration={<NoFaqFound />}
                    title="refresh this page"
                    subTitle={
                        <FlexLayout direction="vertical" halign="center">
                            <TextStyles
                                alignment="center"
                                fontweight="normal"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility="none">
                                We have encountered some problem kindly refresh the page
                            </TextStyles>
                            <p className="Paragraph inte-Align--center inte__text--light none inte__font--normal inte__Paragraph--font--medium  ">
                                Please check back after some time! <TextLink onClick={() => alert("Link clicked")} label="Retry" />
                            </p>

                        </FlexLayout>
                    }
                />
            </Card>
        );
    },
];

// Page Logout
export const Page_Logout: any = Template.bind({});
Page_Logout.decorators = [
    () => {
        return (
            <Card cardType='Subdued'>
                <FallBack
                    FallBackHeight="FullPage"
                    illustration={<LogoutScreen />}
                    title="Logout Successfully"
                   
                    action={<Button type="Primary" onAction={() => { alert("Clicked") }} thickness="large" >Login Again</Button>}
                />
            </Card>
        );
    },
];
