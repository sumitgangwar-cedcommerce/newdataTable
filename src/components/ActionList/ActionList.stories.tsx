import React, { useCallback, useState } from "react";
import ActionList from "./ActionList";
import { ChevronDown, ChevronUp } from "react-feather";
import Button from "../Button/Button";
import { activity } from "../../Icon/Icon";
import { Card } from "../Card";
import { FlexChild, FlexLayout } from "../FlexLayout";

export default {
  title: "Components/ActionList",
  component: ActionList,
  argTypes: {
    sections: {
      table: {
        disable: true,
      },
    },
    sections1: {
      table: {
        disable: true,
      },
    },
    primaryAction: {
      description: "You can set Primary action at bottom of Dropdown",
      control: {
        disable: true,
      },
    },
    secondaryAction: {
      description: "You can set Secondary action at bottom of Dropdown",
      control: {
        disable: true,
      },
    },
    ActionList: {
      description: "Change Action list button name",
      control: {
        type: "text",
      },
      defaultValue: "Action List",
    },
    open: {
      description: "Controls the Collapsible behaviour of ActionList",
      control: {
        type: "boolean",
        disable:true
      },
    },
    activator: {
      description: "The component on which actionlist is triggred",
      control: {
        disable: true,
      },
    },
    ActionListContent: {
      name: "Content",
      description: "Change Action list content name",
      control: {
        type: "text",
        disable:true,
      },
      defaultValue: "Action List content",
    },
    dropDownheight: {
      description: "Manage the Dropdown Height",
      control: {
        type: "text",
      },
      defaultValue: "250",
    },
    popoverContainer: {
      description: "The Postion of Dropdown Either Near Element or Body",
      control: {
        type: "radio",
        options: ["body", "element"],
      },
      defaultValue: "body",
    },
    direction: {
      description: "This Works with Element Container and Manages the Open Direction of dropdown",
      control: {
        type: "radio",
        options: ["left", "right"],
      },
      defaultValue: "left",
    },
  },
};
const Template = ({ ...rest }) => {
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(
    () => setActive((active) => !active),
    [active]
  );

  const primaryAction1 = {
    loading: false,
    content: "Proceed",
    onClick: () => {
      alert("Conngratulations You Proceeded :)");
      toggleActive();
    },
  };
  const secondaryAction1 = {
    loading: false,
    content: "Cancel",
    onClick: () => {
      alert("Oopps You Cancelled :)");
      toggleActive();
    },
  };
  return (
    <div>
      <Card>
        <FlexLayout halign="start">
          <FlexChild>
            <ActionList
              {...rest}
              direction={rest.direction}
              dropDownheight={rest.dropDownheight}
              onClose={toggleActive}
              activator={
                <Button
                  type="Outlined"
                  onClick={toggleActive}
                  icon={active ? <ChevronUp /> : <ChevronDown />}
                  iconAlign="right"
                  iconRound={false}
                >
                  {rest.ActionList}
                </Button>
              }
              open={active}
              popoverContainer={rest.popoverContainer}
              sections={[
                {
                  title: "Action List With",
                  items: [
                    {
                      content: rest.ActionListContent,
                      description: false,
                      onClick: () => alert("Hello 1"),
                    },
                    {
                      content: rest.ActionListContent,
                      description: false,
                      onClick: () => alert("Hello 2"),
                    },
                    {
                      content: rest.ActionListContent,
                      description: false,
                      onClick: () => alert("Hello 3"),
                    },
                  ],
                },
                {
                  title: "Action List With Icon and Title Only",
                  items: [
                    {
                      prefixIcon: activity,
                      content: rest.ActionListContent,
                      description: false,
                      onClick: () => alert("Hello 1"),
                    },
                    {
                      prefixIcon: activity,
                      content: rest.ActionListContent,
                      description: false,
                      onClick: () => alert("Hello 1"),
                    },
                    {
                      prefixIcon: activity,
                      content: rest.ActionListContent,
                      description: false,
                      onClick: () => alert("Hello 1"),
                    },
                  ],
                },
                {
                  title: "Action List With Content And Description",
                  items: [
                    {
                      content: rest.ActionListContent,
                      description:
                        "Lorem Ipsumm dollar imset gona fine touch for well eing",
                      onClick: () => alert("Hello 1"),
                    },
                    {
                      content: rest.ActionListContent,
                      description:
                        "Lorem Ipsumm dollar imset gona fine touch for well eing",
                      onClick: () => alert("Hello 1"),
                    },
                    {
                      content: rest.ActionListContent,
                      description:
                        "Lorem Ipsumm dollar imset gona fine touch for well eing",
                      onClick: () => alert("Hello 1"),
                    },
                  ],
                },
                {
                  title: "Action List with Prefix Icon and Content",
                  items: [
                    {
                      content: rest.ActionListContent,
                      description:
                        "Lorem Ipsumm dollar imset gona fine touch for well eing",
                      prefixIcon: activity,
                      onClick: () => alert("Hello 1"),
                    },
                    {
                      content: "Single-line item",
                      description:
                        "Lorem Ipsumm dollar imset gona fine touch for well eing",
                      prefixIcon: activity,
                      onClick: () => alert("Hello 1"),
                    },
                  ],
                },
                {
                  title: "Action List with Suffix Icon and Content",
                  items: [
                    {
                      content: rest.ActionListContent,
                      description:
                        "Lorem Ipsumm dollar imset gona fine touch for well eing",
                      suffixIcon: activity,
                      onClick: () => alert("Hello 1"),
                    },
                    {
                      content: "Single-line item",
                      description:
                        "Lorem Ipsumm dollar imset gona fine touch for well eing",
                      suffixIcon: activity,
                      onClick: () => alert("Hello 1"),
                    },
                  ],
                },
                {
                  title:
                    "Action List With Prefix icon , Suffix icon and Content",
                  items: [
                    {
                      content: rest.ActionListContent,
                      description:
                        "Lorem Ipsumm dollar imset gona fine touch for well eing",
                      prefixIcon: activity,
                      suffixIcon: activity,
                      onClick: () => alert("Hello 1"),
                    },
                    {
                      content: rest.ActionListContent,
                      description:
                        "Lorem Ipsumm dollar imset gona fine touch for well eing",
                      prefixIcon: activity,
                      suffixIcon: activity,
                      onClick: () => alert("Hello 1"),
                    },
                  ],
                },
              ]}
              primaryAction={primaryAction1}
              secondaryAction={secondaryAction1}
            />
          </FlexChild>
        </FlexLayout>
      </Card>
    </div>
  );
};

export const Primary = Template.bind({});

export const ActionList_with_Action_Only: any = Template.bind({});
ActionList_with_Action_Only.decorators = [
  () => {
    const [active, setActive] = useState(false);
    const toggleActive = useCallback(() => setActive((active) => !active), []);
    return (
      <Card>
        <ActionList
          direction="left"
          onClose={toggleActive}
          activator={
            <Button
              type="Outlined"
              onClick={toggleActive}
              icon={active ? <ChevronUp /> : <ChevronDown />}
              iconAlign="right"
              iconRound={false}
            >
              ActionList
            </Button>
          }
          open={active}
          sections={[
            {
              items: [
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
              ],
            },
          ]}
        />
      </Card>
    );
  },
];

export const ActionList_with_Action_and_title: any = Template.bind({});
ActionList_with_Action_and_title.decorators = [
  () => {
    const [active, setActive] = useState(false);
    const toggleActive = useCallback(() => setActive((active) => !active), []);
    return (
      <Card>
        <ActionList
          direction="left"
          onClose={toggleActive}
          activator={
            <Button
              type="Outlined"
              onClick={toggleActive}
              icon={active ? <ChevronUp /> : <ChevronDown />}
              iconAlign="right"
              iconRound={false}
            >
              ActionList
            </Button>
          }
          open={active}
          sections={[
            {
              title: "Action List Title",
              items: [
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
              ],
            },
          ]}
        />
      </Card>
    );
  },
];

export const ActionList_with_Action_title_and_prefix_icon: any = Template.bind(
  {}
);
ActionList_with_Action_title_and_prefix_icon.decorators = [
  () => {
    const [active, setActive] = useState(false);
    const toggleActive = useCallback(() => setActive((active) => !active), []);
    return (
      <Card>
        <ActionList
          direction="left"
          onClose={toggleActive}
          activator={
            <Button
              type="Outlined"
              onClick={toggleActive}
              icon={active ? <ChevronUp /> : <ChevronDown />}
              iconAlign="right"
              iconRound={false}
            >
              ActionList
            </Button>
          }
          open={active}
          sections={[
            {
              title: "Action List Title with prefix Icon",
              items: [
                {
                  content: "Action 1",
                  prefixIcon: activity,
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  prefixIcon: activity,
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  prefixIcon: activity,
                  onClick: () => alert("Hello 1"),
                },
              ],
            },
          ]}
        />
      </Card>
    );
  },
];

export const ActionList_with_Action_title_and_suffix_icon: any = Template.bind(
  {}
);
ActionList_with_Action_title_and_suffix_icon.decorators = [
  () => {
    const [active, setActive] = useState(false);
    const toggleActive = useCallback(() => setActive((active) => !active), []);
    return (
      <Card>
        <ActionList
          direction="left"
          onClose={toggleActive}
          activator={
            <Button
              type="Outlined"
              onClick={toggleActive}
              icon={active ? <ChevronUp /> : <ChevronDown />}
              iconAlign="right"
              iconRound={false}
            >
              ActionList
            </Button>
          }
          open={active}
          sections={[
            {
              title: "Action List Title with Suffix Icon",
              items: [
                {
                  content: "Action 1",
                  suffixIcon: activity,
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  suffixIcon: activity,
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  suffixIcon: activity,
                  onClick: () => alert("Hello 1"),
                },
              ],
            },
          ]}
        />
      </Card>
    );
  },
];

export const ActionList_with_Action_title_and_description: any = Template.bind(
  {}
);
ActionList_with_Action_title_and_description.decorators = [
  () => {
    const [active, setActive] = useState(false);
    const toggleActive = useCallback(() => setActive((active) => !active), []);
    return (
      <Card>
        <ActionList
          direction="left"
          onClose={toggleActive}
          activator={
            <Button
              type="Outlined"
              onClick={toggleActive}
              icon={active ? <ChevronUp /> : <ChevronDown />}
              iconAlign="right"
              iconRound={false}
            >
              ActionList
            </Button>
          }
          open={active}
          sections={[
            {
              title: "Action List Title with Description",
              items: [
                {
                  content: "Action 1",
                  description: "Description text",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  description: "Description text",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  description: "Description text",
                  onClick: () => alert("Hello 1"),
                },
              ],
            },
          ]}
        />
      </Card>
    );
  },
];

export const ActionList_with_Action_title_description_and_prefixIcon: any =
  Template.bind({});
ActionList_with_Action_title_description_and_prefixIcon.decorators = [
  () => {
    const [active, setActive] = useState(false);
    const toggleActive = useCallback(() => setActive((active) => !active), []);
    return (
      <Card>
        <ActionList
          direction="left"
          onClose={toggleActive}
          activator={
            <Button
              type="Outlined"
              onClick={toggleActive}
              icon={active ? <ChevronUp /> : <ChevronDown />}
              iconAlign="right"
              iconRound={false}
            >
              ActionList
            </Button>
          }
          open={active}
          sections={[
            {
              title: "Action List Title with Description",
              items: [
                {
                  content: "Action 1",
                  description: "Description text",
                  prefixIcon: activity,
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  description: "Description text",
                  prefixIcon: activity,
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  description: "Description text",
                  prefixIcon: activity,
                  onClick: () => alert("Hello 1"),
                },
              ],
            },
          ]}
        />
      </Card>
    );
  },
];

export const ActionList_with_Action_and_footer_Actions: any = Template.bind({});
ActionList_with_Action_and_footer_Actions.decorators = [
  () => {
    const [active, setActive] = useState(false);
    const toggleActive = useCallback(() => setActive((active) => !active), []);
    const primaryAction1 = {
      loading: false,
      content: "Proceed",
      onClick: () => {
        alert("Conngratulations You proceeded :)");
      },
    };
    const secondaryAction1 = {
      loading: false,
      content: "Cancel",
      onClick: () => {
        alert("Conngratulations You proceeded :)");
      },
    };
    return (
      <Card>
        <ActionList
          direction="left"
          onClose={toggleActive}
          activator={
            <Button
              type="Outlined"
              onClick={toggleActive}
              icon={active ? <ChevronUp /> : <ChevronDown />}
              iconAlign="right"
              iconRound={false}
            >
              ActionList
            </Button>
          }
          open={active}
          sections={[
            {
              items: [
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
              ],
            },
          ]}
          primaryAction={primaryAction1}
          secondaryAction={secondaryAction1}
        />
      </Card>
    );
  },
];
