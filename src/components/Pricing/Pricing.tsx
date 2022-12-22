/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";
import Button from "../Button/Button";
import { Card } from "../Card";
import { FlexChild, FlexLayout } from "../FlexLayout";
import PageHeader from "../PageHeader/PageHeader";
import Tabs from "../Tabs/Tabs";
import TextStyles from "../TextStyles/TextStyles";
import "./Pricing.css";

const Pricing: React.FC<PricingI> = ({
  title,
  description,
  tabsData,
  buttonText,
  faqTitle,
  faqAction,
  faqData,
  faqAccordionTitle,
}: PricingI) => {
  const [selected, setSelected] = useState("Monthly Plan");
  const [showmore, setShowMore] = useState(false);
  const [clicked, setClicked] = useState<number>(0);
  const handleToggle = (index: any) => {
    if (clicked === index) {
      setClicked(-1);
    } else {
      setClicked(index);
    }
  };
  const loadData = showmore ? faqData.length : 3;
  return (
    <div className="pricing__page">
      <PageHeader description={description} title={title} />
      <Card>
        <FlexLayout valign="center" halign="center">
          {tabsData?.map((item: any, index: any) => {
            return (
              <Tabs
                value={item.tabs}
                key={index}
                onChange={(e) => setSelected(e)}
                selected={selected}
              />
            );
          })}
        </FlexLayout>

        <FlexLayout desktopWidth="100" tabWidth="100" mobileWidth="100">
          <hr />
          {tabsData?.map((item: any, index: any) => {
            return (
              <>
                {item.tabs?.map((checkIndex: any) => {
                  return (
                    <>
                      {selected === checkIndex.id && (
                        <FlexLayout
                          desktopWidth="33"
                          tabWidth="33"
                          mobileWidth="100"
                          key={index}
                          spacing="loose"
                        >
                          {item.data?.map((dataItem: any) => {
                            return (
                              <Card key={index} cardType="Bordered">
                                <TextStyles
                                  textcolor="light"
                                  fontweight="normal"
                                  type="Heading"
                                >
                                  {dataItem.Heading}
                                </TextStyles>
                                <FlexLayout valign="end" spacing="extraTight">
                                  <TextStyles
                                    type="Heading"
                                    headingTypes="LG-2.8"
                                    fontweight="extraBold"
                                    lineHeight="LH-2.4"
                                  >
                                    {dataItem.title}
                                  </TextStyles>
                                  <TextStyles
                                    type="smallText"
                                    fontweight="bold"
                                  >
                                    {dataItem.smalltitle}
                                  </TextStyles>
                                </FlexLayout>
                                <TextStyles type="mediumText" textcolor="light">
                                  {dataItem.subtitle}
                                </TextStyles>

                                <FlexLayout
                                  direction="vertical"
                                  spacing="loose"
                                  wrap="noWrap"
                                >
                                  {dataItem.listData?.map(
                                    (items: any, index: any) => {
                                      return (
                                        <FlexLayout
                                          key={index}
                                          spacing="extraTight"
                                          wrap="noWrap"
                                        >
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

                                          <TextStyles
                                            type="mediumText"
                                            fontweight="bold"
                                          >
                                            {items}
                                          </TextStyles>
                                        </FlexLayout>
                                      );
                                    }
                                  )}
                                </FlexLayout>
                                <FlexLayout
                                  halign="center"
                                  direction="vertical"
                                >
                                  <Button type="Outlined" FullBtn={true}>
                                    {buttonText}
                                  </Button>
                                </FlexLayout>
                              </Card>
                            );
                          })}
                        </FlexLayout>
                      )}
                    </>
                  );
                })}
              </>
            );
          })}
        </FlexLayout>
      </Card>
      <Card>
        <PageHeader
          title={faqTitle}
          action={
            <Button type="TextButton" onClick={() => setShowMore(true)}>
              {faqAction}
            </Button>
          }
        />
        <Card title={faqAccordionTitle}>
          <FlexLayout
            direction="vertical"
            spacing="loose"
            tabWidth="100"
            desktopWidth="100"
            mobileWidth="100"
          >
            {faqData.slice(0, loadData).map((items: any, index: any) => {
              return (
                <FlexLayout
                  key={index}
                  tabWidth="50"
                  desktopWidth="50"
                  mobileWidth="100"
                  spacing="extraLoose"
                >
                  <FlexChild>
                    <Accordion
                      active={clicked == index}
                      onClick={() => handleToggle(index)}
                      title={items.question}
                    >
                      <TextStyles textcolor="light">{items.answer}</TextStyles>
                    </Accordion>
                  </FlexChild>
                  <FlexChild>
                    <Accordion
                      active={clicked == index}
                      onClick={() => handleToggle(index)}
                      title={items.question}
                    >
                      <TextStyles textcolor="light">{items.answer}</TextStyles>
                    </Accordion>
                  </FlexChild>
                </FlexLayout>
              );
            })}
          </FlexLayout>
        </Card>
      </Card>
    </div>
  );
};
export interface PricingI {
  tabsData?: any;
  faqData?: any;
  title?: string;
  description?: string;
  buttonText?: string;
  faqTitle?: string;
  faqAction?: string;
  faqAccordionTitle?: string;
}

export default Pricing;