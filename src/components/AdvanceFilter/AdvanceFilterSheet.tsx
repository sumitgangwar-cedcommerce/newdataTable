import React, { useState } from "react";
import { ChevronRight, X } from "react-feather";
import { TextStyles, Button, FlexLayout } from "..";
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
  badgeCounter,
  resetFilter = () => {
    return ""; // Click This function Reset page or form
  },
  onApply = () => {
    return ""; // Click This function  Apply this page or form
  },
  onClose = () => {},
}: FilterSheetI) => {
  const showCross = () => (
    <div className={"inte-FilterSheet--Header"}>
      <FlexLayout halign="fill" valign="center" wrap="noWrap">
        <TextStyles
          type="Paragraph"
          paragraphTypes="LG-1.5"
          lineHeight="LH-1.6"
          fontweight="bold"
        >
          {heading}
        </TextStyles>
        <Button
          onClick={() => {
            onClose(), handleToggle();
          }}
          type="Outlined"
          thickness="thin"
          icon={<X color="#2a2a2a" size={20} />}
          iconRound={false}
          iconAlign="right"
        ></Button>
      </FlexLayout>
    </div>
  );

  const showFooter = () => (
    <div className={"inte-FilterSheet--Footer"}>
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
          Reset
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
    <div className={"inte-FilterSheet"}>
      {showCross()}
      <div className={"inte-FilterSheet--Body"}>
        <div className="inte-FilterSheet--BodyLeft">
          {filters.map((items: any, index: any) => {
            return (
              <div
                className={
                  currentIndexs === index
                    ? "inte-FilterSheet--BodyAccordion-Header inte-FilterSheet--BodyAccordion-HeaderActive"
                    : "inte-FilterSheet--BodyAccordion-Header"
                }
                key={index}
                onClick={() => setCurrentIndexs(index)}
              >
                <span>
                  <FlexLayout
                    halign="fill"
                    valign="center"
                    wrap="noWrap"
                    spacing="tight"
                  >
                    <FlexLayout spacing="tight" valign="center">
                      <TextStyles>{items.name}</TextStyles>
                      {badgeCounter && (
                        <span className="inte-FilterSheet--Counter">
                          {items.badgeCounter}
                        </span>
                      )}
                    </FlexLayout>

                    <ChevronRight
                      style={{ display: "flex" }}
                      size={20}
                      color={currentIndexs === index ? "#2C127A" : "#70747E"}
                    />
                  </FlexLayout>
                </span>
              </div>
            );
          })}
        </div>
        <div className="inte-FilterSheet--BodyRight">
          {filters.map((items: any, index: any) => {
            return (
              <React.Fragment key={index}>
                {currentIndexs === index && (
                  <div
                    className={"inte-FilterSheet--BodyAccordion-Body"}
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
