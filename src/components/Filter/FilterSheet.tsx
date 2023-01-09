/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { ChevronDown, ChevronUp, X } from "react-feather";
import { TextStyles, Button, FlexLayout } from "..";
import { FI } from "./Filter";
import "./Filter.css";

const FilterSheet: React.FC<FilterSheetI> = ({
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
}: FilterSheetI) => {
  const showCross = () => (
    <div className={"inte-FilterSheet--Header"}>
      <FlexLayout halign="fill" valign="center">
        <TextStyles
          type="Paragraph"
          paragraphTypes="LG-1.5"
          lineHeight="LH-1.6"
          fontweight="bold"
        >
          {heading}
        </TextStyles>
        <Button
          onClick={handleToggle}
          type="Outlined"
          thickness="thin"
          icon={<X color="#2a2a2a" size={20} />}
          iconAlign="right"
        ></Button>
      </FlexLayout>
    </div>
  );

  const showFooter = () => (
    <div className={"inte-FilterSheet--Footer"}>
      <FlexLayout halign={"start"} valign="center" spacing={"tight"}>
        <Button
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

  return (
    <div className={"inte-FilterSheet"}>
      {showCross()}
      <div className={"inte-FilterSheet--Body"}>
        {filters.map(RenderFilters)}
      </div>
      {showFooter()}
    </div>
  );
};

const RenderFilters = ({ name, children }: FI, index: number) => {
  const [active, toggle] = useState<boolean>(false);
  return (
    <div key={index} className={"inte-FilterSheet--BodyAccordion"}>
      <div
        className={
          active
            ? "inte-FilterSheet--BodyAccordion-Header inte-FilterSheet--BodyAccordion-HeaderActive"
            : "inte-FilterSheet--BodyAccordion-Header"
        }
      >
        <span
          onClick={() => {
            toggle(!active);
          }}
        >
          <FlexLayout halign="fill" valign="center">
            <TextStyles>{name}</TextStyles>
            {active ? (
              <ChevronUp size={20} color="#2a2a2a" />
            ) : (
              <ChevronDown size={20} color="#2a2a2a" />
            )}
          </FlexLayout>
        </span>
      </div>
      {active ? (
        <div className="inte__accordion--active inte__accordion">
          <div className={"inte-FilterSheet--BodyAccordion-Body"}>
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export interface FilterSheetI {
  filters: FI[];
  heading?: string | undefined;
  onApply?: () => void;
  resetFilter?: () => void;
  handleToggle?: () => void;
  disableReset?: boolean;
  disableApply?: boolean;
}

export default FilterSheet;
