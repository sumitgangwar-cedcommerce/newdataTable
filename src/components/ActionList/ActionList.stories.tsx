import React, { useCallback, useState } from "react";
import ActionList from "./ActionList";
import { ChevronDown, ChevronUp, Delete, Upload } from "react-feather";
import Button from "../Button/Button";
import { activity } from "../../Icon/Icon";
import { Card } from "../Card";
import { FlexChild, FlexLayout } from "../FlexLayout";

export default {
  title: "Components/Actions/ActionList",
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
    popoverContainer: {
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

  const primaryAction1 = {
    loading: false,
    content: "Proceed",
    onClick: () => {
      // alert("Conngratulations You Proceeded :)");
      setActive(false);
    },
  };
  const secondaryAction1 = {
    loading: false,
    content: "Cancel",
    onClick: () => {
      // alert("Oopps You Cancelled :)");
      setActive(false);
    },
  };
  return (
    <div>
      <Card>
        <FlexLayout halign="start">
          <FlexChild>
            <ActionList
              {...rest}
              dropDownheight={rest.dropDownheight}
              activator={
                <Button
                  type="Outlined"
                  icon={active ? <ChevronUp /> : <ChevronDown />}
                  iconAlign="right"
                  onClick={() => setActive(!active)}
                >
                  Action List
                </Button>
              }
              open={active}
              popoverContainer={rest.popoverContainer}
              sections={rest.sections}
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