/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from "react";
import { Card, CardHeader } from "../../Card";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import TextStyles from "../../TextStyles/TextStyles";
import Button from "../../Button/Button";
import Accordion from "../../Accordion/Accordion";

const Help = (props: any) => {
  const [showmore, setShowMore] = useState(false);
  const [clicked, setClicked] = useState<number>(-1);
  const handleToggle = (index: any) => {
    if (clicked === index) {
      setClicked(-1);
    } else {
      setClicked(index);
    }
  };

  const loadData = showmore ? props.faqData.length : 3;
  return (
    <div className="inte-Help__Page">
      <CardHeader title={props.cardheading} />
      <Card>
        <FlexLayout spacing="loose">
          <TextStyles content={props.cardtitle} />
          <FlexLayout halign="fill" spacing="loose" mobileWidth="100" desktopWidth="33" tabWidth="33">
            {props.data.map((items: any,index:any) => {
              return (
                <React.Fragment key={index}>
                  <Card cardType="Bordered">
                    <FlexLayout halign="fill" wrap="noWrap" spacing="loose">
                      <FlexLayout direction="vertical" halign="fill">
                        <div style={{ minHeight: "100px" }}>
                          <TextStyles
                            content={items.heading}
                            fontweight="extraBold"
                          />
                          <TextStyles
                            content={items.description}
                            textcolor="light"
                            type="smallText"
                          />
                        </div>
                        <Button onClick={items.onClick} content={items.btncontent} type="Outlined" />
                      </FlexLayout>
                      <FlexChild>
                        <img src={items.icon} alt="" height={50} width={50} />
                      </FlexChild>
                    </FlexLayout>
                  </Card>
                </React.Fragment>
              );
            })}
          </FlexLayout>
        </FlexLayout>
      </Card>
      <Card
        title={props.faq}
        action={
          <Button
            content="View all FAQ articles"
            type="TextButton"
            onClick={() => setShowMore(true)}
          />
        }
      >
        {props.faqData.slice(0, loadData).map((items: any, index: any) => {
          return (
            <React.Fragment key={index}>
              <Accordion
                title={items.title}
                active={clicked == index}
                onClick={() => handleToggle(index)}
              >
                <TextStyles textcolor="light"> {items.content}</TextStyles>
              </Accordion>
            </React.Fragment>
          );
        })}
      </Card>
    </div>
  );
};

export default Help;
