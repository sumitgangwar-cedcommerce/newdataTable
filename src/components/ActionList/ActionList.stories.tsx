import React, { useCallback, useState } from "react";
import ActionList from "./ActionList";
import { ChevronDown, ChevronUp, Delete, Upload } from "react-feather";
import Button from "../Button/Button";
import { activity } from "../../Icon/Icon";
import { Card } from "../Card";
import { FlexChild, FlexLayout } from "../FlexLayout";

export default {
  title: "Components/Actions/ActionLists",
  component: ActionList,
  argTypes: {
    sections: {
      control: {
        type: "array",
      },
      defaultValue: [
        {
          title: "Action List With title Only",
          items: [
            {
              destructive: true,
              content: "Action List content",
              onClick: () => alert("Hello 1"),
            },
            {
              content: "Action List content",
              onClick: () => alert("Hello 2"),
            },
            {
              content: "Action List content",
              onClick: () => alert("Hello 3"),
            },
          ],
        },
        {
          title: "Action List With Icon and Title Only",
          items: [
            {
              prefixIcon: <Upload size={20} />,
              content: "Action List content",
              onClick: () => alert("Hello 1"),
            },
            {
              prefixIcon: activity,
              content: "Action List content",
              onClick: () => alert("Hello 1"),
            },
            {
              prefixIcon: activity,
              content: "Action List content",
              onClick: () => alert("Hello 1"),
            },
          ],
        },
        {
          title: "Action List With Content And Description",
          items: [
            {
              content: "Action List content",
              description:
                "Lorem Ipsumm dollar imset gona fine touch for well eing",
              onClick: () => alert("Hello 1"),
            },
            {
              content: "Action List content",
              description:
                "Lorem Ipsumm dollar imset gona fine touch for well eing",
              onClick: () => alert("Hello 1"),
            },
            {
              content: "Action List content",
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
              content: "Action List content",
              description:
                "Lorem Ipsumm dollar imset gona fine touch for well eing",
              prefixIcon: <Delete size={20} />,
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
              content: "Action List content",
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
      ],
    },
    open: {
      description: "Controls the Collapsible behaviour of ActionList",
      control: {
        type: "boolean",
        disable: true,
      },
    },
    activator: {
      description: "The component on which actionlist is triggred",
      control: {
        disable: true,
      },
    },

    dropDownheight: {
      description: "Manage the Dropdown Height",
      control: {
        type: "text",
      },
      defaultValue: "250",
    },
    container: {
      description: "The Postion of Dropdown Either Near Element or Body",
      control: {
        type: "radio",
        options: ["body", "element"],
      },
      defaultValue: "body",
    },
  },
};
const Template = ({ ...rest }) => {
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(
    () => setActive((active) => !active),
    [active]
  );

  return (
    <div>
      <Card>
        <FlexLayout halign="start">
          <FlexChild>
            <ActionList
              {...rest}
              dropDownheight={rest.dropDownheight}
              onClose={toggleActive}
              activator={
                <Button
                  type="Outlined"
                  onClick={toggleActive}
                  icon={active ? <ChevronUp /> : <ChevronDown />}
                  iconAlign="right"
                >
                  Action List
                </Button>
              }
              open={active}
              container={rest.container}
              sections={rest.sections}
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
          onClose={toggleActive}
          activator={
            <Button
              type="Outlined"
              onClick={toggleActive}
              icon={active ? <ChevronUp /> : <ChevronDown />}
              iconAlign="right"
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
          onClose={toggleActive}
          activator={
            <Button
              type="Outlined"
              onClick={toggleActive}
              icon={active ? <ChevronUp /> : <ChevronDown />}
              iconAlign="right"
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
          onClose={toggleActive}
          activator={
            <Button
              type="Outlined"
              onClick={toggleActive}
              icon={active ? <ChevronUp /> : <ChevronDown />}
              iconAlign="right"
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
          onClose={toggleActive}
          activator={
            <Button
              type="Outlined"
              onClick={toggleActive}
              icon={active ? <ChevronUp /> : <ChevronDown />}
              iconAlign="right"
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
          onClose={toggleActive}
          activator={
            <Button
              type="Outlined"
              onClick={toggleActive}
              icon={active ? <ChevronUp /> : <ChevronDown />}
              iconAlign="right"
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
          onClose={toggleActive}
          activator={
            <Button
              type="Outlined"
              onClick={toggleActive}
              icon={active ? <ChevronUp /> : <ChevronDown />}
              iconAlign="right"
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