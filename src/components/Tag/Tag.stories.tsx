import React, { useEffect, useState } from "react";
import { Card, Tag } from "..";
import { FlexLayout } from "../FlexLayout";
import Popover from "../Popover/Popover";

export default {
  title: "Components/Actions/Tag",
  component: Tag,
  argTypes: {
    children: {
      description: "Enter children",
      control: {
        type: "text",
      },
      defaultValue: "Tag",
    },
    destroy: {
      description: "destroy cross btn",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    popover: {
      description: "Enable Popover on click",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  }
};

const tags = ["one", "two", "three", "four", "five"];

const Template = ({ ...rest }) => {
  return (
    <Card>
      <Tag {...rest} destroy={rest.destroy}>
        {rest.children}
      </Tag>
    </Card>
  );
};

export const Primary: any = Template.bind({});

// Tags Without Destroy
export const tags_without_destroy: any = Template.bind({});
tags_without_destroy.decorators = [
  () => {
    return (
      <Card title="Tags Without Destroy">
        <FlexLayout spacing="loose">
          {tags.map((item: any) => (
            <Tag>{item}</Tag>
          ))}
        </FlexLayout>
      </Card>
    );
  },
];

// Tags Without Destroy
export const tags_with_destroy: any = Template.bind({});
tags_with_destroy.decorators = [
  () => {
    return (
      <Card title="Tags With Destroy">
        <FlexLayout spacing="loose">
          {tags.map((item: any, index: any) => (
            <Tag
              destroy={() => {
                alert("destroyed cliked" + { index });
              }}
            >
              {item}
            </Tag>
          ))}
        </FlexLayout>
      </Card>
    );
  },
];

// Tags With Popover
export const tags_with_popover: any = Template.bind({});
tags_with_popover.decorators = [
  () => {
    const [open, togglePopover] = useState<any>(false);
    const [open1, togglePopover1] = useState<any>(open);
    const [open3, togglePopover3] = useState<any>(open);
    const togglePop1 = () => togglePopover1((open1: any) => !open1);
    const togglePop = () => togglePopover((open: any) => !open);

    useEffect(() => {
      togglePopover(open);
    }, [open]);
    useEffect(() => {
      togglePopover1(open1);
    }, [open1]);
    useEffect(() => {
      togglePopover1(open3);
    }, [open3]);

    // Activator definattion
    const activator = (
      <Tag popover togglePopup={togglePop} toggle={open} count={2}>
        Element Container
      </Tag>
    );

    const activator1 = (
      <Tag
        togglePopup={togglePop1}
        popover
        count={2}
        destroy={() => {
          alert("destroyed cliked");
        }}
        toggle={open1}
      >
        Body Container
      </Tag>
    );

    return (
      <Card title="Tags With Popover">
        <FlexLayout spacing="loose">
          <Popover
            open={open}
            onClose={togglePop}
            activator={activator}
            popoverContainer="element"
          >
            <FlexLayout spacing="mediumTight">
              <Tag
                destroy={() => {
                  alert("closed");
                }}
                toggle={open}
              >
                one
              </Tag>
              <Tag
                destroy={() => {
                  alert("closed");
                }}
                toggle={open}
              >
                Two
              </Tag>
            </FlexLayout>
          </Popover>

          <Popover
            open={open1}
            onClose={togglePop1}
            activator={activator1}
            popoverContainer="body"
          >
            <FlexLayout spacing="mediumTight">
              <Tag
                destroy={() => {
                  alert("closed");
                }}
                toggle={open1}
              >
                one
              </Tag>
              <Tag
                destroy={() => {
                  alert("closed");
                }}
                toggle={open1}
              >
                Two
              </Tag>
            </FlexLayout>
          </Popover>
        </FlexLayout>
      </Card>
    );
  },
];