import React, { useState } from "react";
import { X } from "react-feather";
import { TextStyles, Button, FlexLayout } from "..";
import Badge from "../Badge/Badge";
import { FI } from "./AdvanceFilter";
import "./AdvanceFilter.css";

const AdvanceFilterSheet: React.FC<FilterSheetI> = ({
  handleToggle = () => {
    return ""; //This function  open and close filter sidebar
  },
  heading = "",
  filters,
  disableReset = true,
  disableApply = true,
  resetFilter = () => {
    return ""; // Click This function Reset page or form
  },
  onApply = () => {
    return ""; // Click This function  Apply this page or form
  },
  onClose = () => {},
}: FilterSheetI) => {
  const showCross = () => (
    <div className={"inte-Filter--Header"}>
      <FlexLayout halign="fill" valign="center" wrap="noWrap">
        <TextStyles
          type="subHeading"
          subheadingTypes="XS-1.6"
          lineHeight="LH-1.6"
          fontweight="bold"
        >
          {heading}
        </TextStyles>
        <Button
          onClick={() => {
            onClose(), handleToggle();
          }}
          type="Secondary"
          thickness="thin"
          icon={<X color="#2a2a2a" size={24} />}
          iconAlign="right"
        ></Button>
      </FlexLayout>
    </div>
  );

  const showFooter = () => (
    <div className={"inte-Filter--Footer"}>
      <FlexLayout
        halign={"start"}
        valign="center"
        spacing={"tight"}
        desktopWidth="50"
        tabWidth="50"
        mobileWidth="50"
      >
        <Button
          FullBtn={true}
          onClick={() => {
            resetFilter();
          }}
          disable={disableReset}
          thickness="thin"
          type="Outlined"
        >
          Clear All
        </Button>
        <Button
          FullBtn={true}
          disable={disableApply}
          onClick={() => {
            onApply();
            handleToggle();
          }}
          thickness="thin"
          type="Primary"
        >
          Apply
        </Button>
      </FlexLayout>
    </div>
  );
  const [currentIndexs, setCurrentIndexs] = useState(0);
  return (
    <div className={"inte-Filter--Wrapper"}>
      {showCross()}
      <div className={"inte-Filter--Body"}>
        <div className="inte-Filter--BodyLeft">
          {filters.map((items: any, index: any) => {
            return (
              <div
                className={
                  currentIndexs === index
                    ? "inte-Filter--BodyAccordion-Header inte-Filter--BodyAccordion-HeaderActive"
                    : "inte-Filter--BodyAccordion-Header"
                }
                key={index}
                onClick={() => setCurrentIndexs(index)}
              >
                <span>
                  <FlexLayout spacing="tight" valign="center" halign="fill" wrap="noWrap">
                    <TextStyles>{items.name}</TextStyles>
                    {!items.badgeCount ? null : (
                      <Badge size="Small" type={currentIndexs === index ? "Primary" : "Secondary"}>{items.badgeCount}</Badge>
                     
                    )}
                  </FlexLayout>
                </span>
              </div>
            );
          })}
        </div>
        <div className="inte-Filter--BodyRight">
          {filters.map((items: any, index: any) => {
            return (
              <React.Fragment key={index}>
                {currentIndexs === index && (
                  <div
                    className={"inte-Filter--BodyAccordion-Body"}
                    key={index}
                  >
                    {items.children}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      {showFooter()}
    </div>
  );
};

export interface FilterSheetI {
  filters: FI[];
  heading?: string | undefined;
  onApply?: () => void;
  onClose?: () => void;
  resetFilter?: () => void;
  handleToggle?: () => void;
  disableReset?: boolean;
  disableApply?: boolean;
  badgeCounter?: number | string;
}

export default AdvanceFilterSheet;
