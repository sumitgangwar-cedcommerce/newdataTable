/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Check } from "react-feather";
import Button from "../Button/Button";
import { Card } from "../Card";
import { FlexLayout } from "../FlexLayout";
import TextStyles from "../TextStyles/TextStyles";

function Individual() {
  const Individuals = [
    {
      Heading: "Individual",
      title: "$100",
      subtitle: "The essensitals to provide your best work for clients.",
      a: [
        "Unlimited pages & blocks",
        "Share with 5 guests",
        "Sync across devices",
        "API",
      ],
    },
    {
      Heading: "Pro",
      title: "$100",
      subtitle: "The essensitals to provide your best work for clients.",
      a: [
        "Unlimited team members",
        "Collaborative workspace",
        "Sharing permissions",
        "Admin tools",
      ],
    },
    {
      Heading: "Enterprise",
      title: "$100",
      subtitle: "The essensitals to provide your best work for clients.",
      a: [
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
  ];
  return (
    <div className="pricing__page">
      <FlexLayout
        desktopWidth="33"
        tabWidth="33"
        mobileWidth="100"
        spacing="loose"
      >
        {Individuals?.map((item: any, index: any) => {
          return (
            <Card cardType="Bordered" extraClass="footer_bottom" key={index}>
              <FlexLayout
                spacing="loose"
                direction="vertical"
                halign="fill"
                wrap="noWrap"
              >
                <FlexLayout direction="vertical" spacing="loose" halign="fill">
                  <TextStyles
                    textcolor="light"
                    fontweight="normal"
                    type="Heading"
                  >
                    {item.Heading}
                  </TextStyles>
                  <FlexLayout valign="end" spacing="extraTight">
                    <TextStyles
                      type="Heading"
                      headingTypes="LG-2.8"
                      fontweight="extraBold"
                      lineHeight="LH-2.4"
                    >
                      {item.title}
                    </TextStyles>
                    <TextStyles type="smallText" fontweight="bold">
                      /month
                    </TextStyles>
                  </FlexLayout>
                  <TextStyles type="mediumText" textcolor="light">
                    {item.subtitle}
                  </TextStyles>

                  <FlexLayout
                    direction="vertical"
                    spacing="loose"
                    wrap="noWrap"
                  >
                    {item.a?.map((items: any) => {
                      return (
                        <FlexLayout spacing="extraTight" wrap="noWrap">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0001 1.66675C5.39771 1.66675 1.66675 5.39771 1.66675 10.0001C1.66675 14.6025 5.39771 18.3334 10.0001 18.3334C14.6025 18.3334 18.3334 14.6025 18.3334 10.0001C18.3334 5.39771 14.6025 1.66675 10.0001 1.66675Z"
                              fill="#027A48"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.0893 7.74408C13.4148 8.06951 13.4148 8.59715 13.0893 8.92259L9.756 12.2559C9.43057 12.5814 8.90293 12.5814 8.57749 12.2559L6.91083 10.5893C6.58539 10.2638 6.58539 9.73618 6.91083 9.41074C7.23626 9.08531 7.7639 9.08531 8.08934 9.41074L9.16675 10.4882L11.9108 7.74408C12.2363 7.41864 12.7639 7.41864 13.0893 7.74408Z"
                              fill="white"
                            />
                          </svg>

                          <TextStyles type="mediumText" fontweight="bold">
                            {items}
                          </TextStyles>
                        </FlexLayout>
                      );
                    })}
                  </FlexLayout>
                </FlexLayout>
                <FlexLayout halign="center" direction="vertical">
                  <Button type="Outlined" FullBtn={true}>
                    Choose this plan
                  </Button>
                </FlexLayout>
              </FlexLayout>
            </Card>
          );
        })}
      </FlexLayout>
    </div>
  );
}
export default Individual;
