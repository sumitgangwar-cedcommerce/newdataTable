import React, { useEffect, useState } from "react";
import { Card } from "../..";
import PageHeader from "./PageHeader";
import { Meta } from "@storybook/react/types-6-0";
import Button from "../Button/Button";
import { FlexLayout } from "../FlexLayout";
import Badge from "../Badge/Badge";
import Popover from "../Popover/Popover";
import { LogOut, MoreVertical } from "react-feather";

export default {
  title: "Components/PageHeader",
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
        type: "radio",
        options: ["sticky", "none"],
      },
      defaultValue: "none",
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
    action: {
      description: "Enter Action button",
      control: {
        type: "text",
      },
      defaultValue: (
        <Button
          type="TextButton"
          onClick={() => {
            alert("clicked");
          }}
        >
          Action
        </Button>
      ),
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
        description="Page Description"
      ></PageHeader>
    </Card>
  ),
];

//  Page Title and Description
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

//  Page Title and Description
export const Page_header_with_title_and_Action: any = Template.bind({});
Page_header_with_title_and_Action.decorators = [
  () => {
    const [open, togglePopover] = useState(false);
    const togglePop = () => togglePopover((open: any) => !open);
    useEffect(() => {
      togglePopover(open);
    }, [open]);
    return (
      <Card>
        <PageHeader
          title="Page Header"
          action={
            <Popover
              open={open}
              onClose={togglePop}
              activator={<Button type="Outlined" onClick={togglePop} icon={<MoreVertical />}></Button>}
             
            > <Button halign="Start" FullBtn icon={<LogOut />} type="TextButton">Logout</Button></Popover>
          }
        ></PageHeader>
      </Card>
    );
  },
];

//  Page Header with all features
export const Page_header_with_all_faetures: any = Template.bind({});
Page_header_with_all_faetures.decorators = [
  () => {
    const [open, togglePopover] = useState(false);
    const togglePop = () => togglePopover((open: any) => !open);
    useEffect(() => {
      togglePopover(open);
    }, [open]);
    return (
      <Card>
        <PageHeader
          metaData={<Badge type="Positive-100" children={"Connected"} />}
          title="Page Header"
          description="Page Description"
          action={
            <Popover
              open={open}
              onClose={togglePop}
              activator={<Button type="Outlined" onClick={togglePop} icon={<MoreVertical />}></Button>}
             
            > <Button halign="Start" FullBtn icon={<LogOut />} type="TextButton">Logout</Button></Popover>
          }
        ></PageHeader>
      </Card>
    );
  },
];

