import React, { useState } from "react";
import Accordion from "./Accordion";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "../Card";
import { TextStyles } from "..";

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          "Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time. An accordion is used to show (and hide) HTML content.",
      },
    },
  },
  argTypes: {
    title: {
      description: "Enter Accordion Title",
      control: {
        type: "text",
      },
      defaultValue:
        "Accordion Header",
    },
    active: {
      description: "Active Prop enables Collapsible Behaviour of Accordion.",
      control: {
        type: "boolean",
        disable: true,
      },
    },
    icon: {
      description: "Show or hide the accordion icons at right side.",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    iconAlign: {
      description: "Set Accordion Icon Alignment",
      control: {
        type: "radio",
        options: ["left", "right"],
      },
      defaultValue: "left",
    },
    boxed: {
      description: "Boxed => This Will show Accordion in bordered Box else Border bottom",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<any>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Accordion> = (args) => {
  const [clicked, setClicked] = useState<number>(-1);
  const handleToggle = (index: any) => {
    if (clicked === index) {
      setClicked(-1);
    } else {
      setClicked(index);
    }
  };

  const accordionArr = [
    {
      answer:
        "1 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      answer:
        "2 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      answer:
        "3 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
  ];

  return (
    <>
      <Card title="Accordion Example">
        {accordionArr.map((items: any, index: any) => {
          return (
            <Accordion
              key={index}
              active={clicked == index}
              {...args}
              onClick={() => handleToggle(index)}
            >
              <TextStyles textcolor="light">{items.answer}</TextStyles>
            </Accordion>
          );
        })}
      </Card>
    </>
  );
};
export const Primary = Template.bind({});

const accordionArr = [
  {
    answer:
      "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
  },
  {
    answer:
      "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
  },
  {
    answer:<div dangerouslySetInnerHTML={{__html: "<div>Hello</div>"}} /> ,
  },
];

export const Boxed_Accordion_with_leftAlign_Icon: any = Template.bind({});
Boxed_Accordion_with_leftAlign_Icon.decorators = [
  () => {
    const [clicked, setClicked] = useState<number>(-1);
    const handleToggle = (index: any) => {
      if (clicked === index) {
        setClicked(-1);
      } else {
        setClicked(index);
      }
    };
    return (
      <Card>
        {accordionArr.map((items: any, index: any) => {
          return (
            <Accordion
              key={index}
              title={`${index + 1} Accordion Header`}
              active={clicked == index}
              onClick={() => handleToggle(index)}
            >
              <TextStyles textcolor="light">{items.answer}</TextStyles>
            </Accordion>
          );
        })}
      </Card>
    );
  },
];

const accordionCloseArr = [
  {
    answer:
      "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
  },
  {
    answer:
      "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
  },
  {
    answer:
      "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
  },
];

export const Boxed_Accordion_with_rightAlign_Icon: any = Template.bind({});
Boxed_Accordion_with_rightAlign_Icon.decorators = [
  () => {
    const [clicked, setClicked] = useState<number>(-1);
    const handleToggle = (index: any) => {
      if (clicked === index) {
        setClicked(-1);
      } else {
        setClicked(index);
      }
    };
    return (
      <Card>
        {accordionCloseArr.map((items: any, index: any) => {
          return (
            <Accordion
              key={index}
              title={`${index + 1} Accordion Header`}
              iconAlign="right"
              active={clicked == index}
              onClick={() => handleToggle(index)}
            >
              <TextStyles textcolor="light">{items.answer}</TextStyles>
            </Accordion>
          );
        })}
      </Card>
    );
  },
];

//
export const Bordered_Accordion_with_rightAlign_Icon: any = Template.bind({});
Bordered_Accordion_with_rightAlign_Icon.decorators = [
  () => {
    const [clicked, setClicked] = useState<number>(-1);
    const handleToggle = (index: any) => {
      if (clicked === index) {
        setClicked(-1);
      } else {
        setClicked(index);
      }
    };
    return (
      <Card>
        {accordionCloseArr.map((items: any, index: any) => {
          return (
            <Accordion
              key={index}
              active={clicked == index}
              onClick={() => handleToggle(index)}
              title={`${index + 1} Accordion Header`}
              iconAlign="right"
              boxed={false}
            >
              <TextStyles textcolor="light">{items.answer}</TextStyles>
            </Accordion>
          );
        })}
      </Card>
    );
  },
];
export const Bordered_Accordion_with_leftAlign_Icon: any = Template.bind({});
Bordered_Accordion_with_leftAlign_Icon.decorators = [
  () => {
    const [clicked, setClicked] = useState<number>(-1);
    const handleToggle = (index: any) => {
      if (clicked === index) {
        setClicked(-1);
      } else {
        setClicked(index);
      }
    };
    return (
      <Card>
        {accordionCloseArr.map((items: any, index: any) => {
          return (
            <Accordion
              key={index}
              active={clicked == index}
              onClick={() => handleToggle(index)}
              title={`${index + 1} Accordion Header`}
              iconAlign="left"
              boxed={false}
            >
              <TextStyles textcolor="light">{items.answer}</TextStyles>
            </Accordion>
          );
        })}
      </Card>
    );
  },
];
// accordion without icon

export const Bordered_Accordion_without_icon: any = Template.bind({});
Bordered_Accordion_without_icon.decorators = [
  () => {
    const [clicked, setClicked] = useState<number>(-1);
    const handleToggle = (index: any) => {
      if (clicked === index) {
        setClicked(-1);
      } else {
        setClicked(index);
      }
    };
    return (
      <Card>
        {accordionCloseArr.map((items: any, index: any) => {
          return (
            <Accordion
              key={index}
              active={clicked == index}
              onClick={() => handleToggle(index)}
              title={`${index + 1} Accordion Header`}
              iconAlign="left"
              icon={false}
              boxed={false}
            >
              <TextStyles textcolor="light">{items.answer}</TextStyles>
            </Accordion>
          );
        })}
      </Card>
    );
  },
];
