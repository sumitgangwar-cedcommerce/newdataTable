import React from "react";
import { Card } from "../..";
import PageHeader from "./PageHeader";
import { Meta } from "@storybook/react/types-6-0";
import Badge from "../Badge/Badge";
import { Check} from "react-feather";

export default {
  title: "Components/Layout/PageHeader",
  component: PageHeader,
  argTypes: {
    children: {
      description: "Header children",
      control: {
        type: "text",
      },
      defaultValue: "Header children",
    },
    title: {
      description: "Enter title",
      control: {
        type: "text",
      },
      defaultValue: "Dashboard",
    },
    sticky: {
      description: "Enter title",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    reverseNavigation: {
      description: "reverseNavigation set true or false",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    description: {
      description: "Enter description",
      control: {
        type: "text",
      },
      defaultValue: "Sell and manage all your orders and inventory",
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template = ({ ...rest }) => {
  return (
    <Card>
      <PageHeader {...rest} />
    </Card>
  );
};

export const Primary = Template.bind({});
const primaryAction1 = {
  content: "Save",
  icon: <Check />,
  onClick: () => {
    alert("Conngratulations You proceeded :)");
  },
};

const secondaryAction1 = [
  {
    content: "Sync With MarketPlace",
    onClick: () => {
      alert("Conngratulations You Syned :)");
    },
  },
  {
    content: "Sync With MarketPlaces",
    onClick: () => {
      alert("Conngratulations You Syned :)");
    },
  },
  {
    destructive: true,
    content: "Delete Listing",
    onClick: () => {
      alert("Conngratulations You Syned :)");
    },
  },
];

// Only Page Title
export const Page_header_with_only_title: any = Template.bind({});
Page_header_with_only_title.decorators = [
  () => (
    <Card>
      <PageHeader title="Page Header"></PageHeader>
    </Card>
  ),
];

//  Page Title and Description
export const Page_header_with_title_and_description: any = Template.bind({});
Page_header_with_title_and_description.decorators = [
  () => (
    <Card>
      <PageHeader
        title="Page Header"
        description="A product can be a service or an item. It can be physical or in virtual or cyber form. Every product is made at a cost and each is sold at a price."
      ></PageHeader>
    </Card>
  ),
];

//  Page Title and Description and reverse Navigation
export const Page_header_with_title_and_reverse_navigation: any = Template.bind(
  {}
);
Page_header_with_title_and_reverse_navigation.decorators = [
  () => (
    <Card>
      <PageHeader
        reverseNavigation
        title="Page Header"
        description="Page Description"
        onClick={() => {
          alert("Go Back Cliked");
        }}
      ></PageHeader>
    </Card>
  ),
];

//  Page Title and MetaData
export const Page_header_with_title_and_metaData: any = Template.bind({});
Page_header_with_title_and_metaData.decorators = [
  () => (
    <Card>
      <PageHeader
        metaData={<Badge type="Positive-100" children={"Connected"} />}
        title="Page Header"
        description="Page Description"
        onClick={() => {
          alert("Go Back Cliked");
        }}
      ></PageHeader>
    </Card>
  ),
];

//  Page Title  and Actions
export const Page_header_with_title_and_Action: any = Template.bind({});
Page_header_with_title_and_Action.decorators = [
  () => {
    return (
      <Card>
        <PageHeader
          title="Page Header"
          primaryAction={primaryAction1}
          secondaryAction={secondaryAction1}
        ></PageHeader>
      </Card>
    );
  },
];

//  Page Header with all features
export const Page_header_with_all_faetures: any = Template.bind({});
Page_header_with_all_faetures.decorators = [
  () => {
    return (
      <Card>
        <PageHeader
          reverseNavigation
          metaData={<Badge type="Positive-100" children={"Connected"} />}
          title="Page Header"
          description="A product can be a service or an item. It can be physical or in virtual or cyber form. Every product is made at a cost and each is sold at a price."
          primaryAction={primaryAction1}
          secondaryAction={secondaryAction1}
        ></PageHeader>
      </Card>
    );
  },
];
