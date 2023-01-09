import React from "react";
import { Card } from "../Card";
import Pricing from "./Pricing";

export default {
  title: "Templates/Pricing",
  component: Pricing,
  argTypes: {
    title: {
      description: "Enter Header title",
      control: {
        type: "text",
      },
      defaultValue: "Ready to pick a plan!",
    },
    description: {
      description: "Enter Header title",
      control: {
        type: "text",
      },
      defaultValue: "One tool for your whole company. Free for teams to try.",
    },
    tabsData: {
      description:
        "Here array of object in tabs array of object in data array of object in listData array",
      control: {
        disable: true,
      },
    },
    buttonText: {
      description: "Change button text",
      control: {
        type: "text",
      },
      defaultValue: "Choose this plan",
    },
    faqTitle: {
      description: "Change faq Title text",
      control: {
        type: "text",
      },
      defaultValue: "Frequently Asked Question",
    },
    faqAction: {
      description: "Change faq Action button text",
      control: {
        type: "text",
      },
      defaultValue: "View all FAQ articles",
    },
    faqAccordionTitle: {
      description: "Change Accordion Title text",
      control: {
        type: "text",
      },
      defaultValue: "Common Queries",
    },
  },
};

const Template = ({ ...rest }) => {
  const tabsData = [
    {
      tabs: [
        {
          id: "Monthly Plan",
          content: "Monthly Plan",
        },
      ],
      data: [
        {
          Heading: "Individual",
          title: "$100",
          smalltitle: " /month",
          subtitle: "The essensitals to provide your best work for clients.",
          listData: [
            "Unlimited pages & blocks",
            "Share with 5 guests",
            "Sync across devices",
            "API",
          ],
        },
        {
          Heading: "Pro",
          title: "$100",
          smalltitle: " /month",
          subtitle: "The essensitals to provide your best work for clients.",
          listData: [
            "Unlimited team members",
            "Collaborative workspace",
            "Sharing permissions",
            "Admin tools",
          ],
        },
        {
          Heading: "Enterprise",
          title: "$100",
          smalltitle: " /month",
          subtitle: "The essensitals to provide your best work for clients.",
          listData: [
            "Unlimited pages & blocks",
            "SAML SSO",
            "User provisioning (SCIM)",
            "Audit log",
            "Advanced security & controls",
            "Unlimited version history",
            "Dedicated success manager (100+ seats)",
            "Custom contract",
          ],
        },
      ],
    },
    {
      tabs: [
        {
          id: "Yearly Plan",
          content: "Yearly Plan",
        },
      ],
      data: [
        {
          Heading: "Yearly Plan",
          title: "$500",
          smalltitle: " /month",
          subtitle: "The essensitals to provide your best work for clients.",
          listData: [
            "Unlimited pages & blocks",
            "Share with 5 guests",
            "Sync across devices",
            "API",
          ],
        },
        {
          Heading: "Yearly Pro Plan",
          title: "$300",
          smalltitle: " /month",
          subtitle: "The essensitals to provide your best work for clients.",
          listData: [
            "Unlimited team members",
            "Collaborative workspace",
            "Sharing permissions",
            "Admin tools",
          ],
        },
        {
          Heading: "Yearly Pro",
          title: "$500",
          smalltitle: " /month",
          subtitle: "The essensitals to provide your best work",
          listData: [
            "Unlimited team members",
            "Collaborative workspace",
            "Sharing permissions",
            "Admin tools",
          ],
        },
      ],
    },
  ];
  const faqData = [
    {
      question: "Accordian Title",
      answer:
        "1 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      question: "Accordian Title",
      answer:
        "2 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      question: "Accordian Title",
      answer:
        "3 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      question: "Accordian Title",
      answer:
        "4 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      question: "Accordian Title",
      answer:
        "5 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      question: "Accordian Title",
      answer:
        "6 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      question: "Accordian Title",
      answer:
        "7 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
  ];
  return (
    <Card>
      <Pricing
        title={rest.title}
        description={rest.description}
        tabsData={tabsData}
        buttonText={rest.buttonText}
        faqTitle={rest.faqTitle}
        faqAction={rest.faqAction}
        faqData={faqData}
        faqAccordionTitle={rest.faqAccordionTitle}
      />
    </Card>
  );
};

export const Primary = Template.bind({});