import React from "react";
import { ChevronLeft } from "react-feather";
import { Button } from "..";
import TextStyles from "../TextStyles/TextStyles";
import "./PageHeader.css";

function PageHeader({
  title,
  action,
  description,
  sticky,
  reverseNavigation = false,
  ...props
}: PageHeaderI): JSX.Element {
  return (
    <div
      className={`inte-pageHeader ${sticky && "inte-pageHeader--fixed"} ${
        reverseNavigation ? "inte__has--reverseNavigation" : ""
      } ${description ? "inte__has--pageHeaderDescription" : ""}`}
    >
      <div className="inte-PageHeader--Wrapper">
        <div className="inte-PageHeader-Title-Action-Wrapper">
          <div className="inte-PageHeader--Title-And-Reversenavigation">
            {reverseNavigation ? (
              <div className="inte__reverseNavigation">
                <Button
                  icon={<ChevronLeft size={20} color={"#3b424f"} />}
                  onClick={() => {
                    if (props.onClick) props.onClick();
                  }}
                  type="Outlined"
                  iconAlign="left"
                ></Button>
              </div>
            ) : null}
            {title && (
              <div className={`inte-pageHeader--Title ${props.metaData ? "inte-PageHeader--hasMetadata":""}`}>
                <TextStyles
                  type="Heading"
                  headingTypes="LG-2.8"
                  fontweight="bold"
                  lineHeight="LH-3.6"
                >
                  {title}
                </TextStyles>
                {props.metaData ? props.metaData :""}
              </div>
            )}
          </div>
          {action && window.innerWidth >= 768 && (
            <div className="inte-PageHeader-Action">{action}</div>
          )}
        </div>
        {description && (
          <div className="inte-PageHeader--Description">
            <TextStyles
              type="SubHeading"
              lineHeight="LH-2.8"
              subheadingTypes="XS-1.6"
              textcolor="light"
              utility="mt-5"
            >
              {description}
            </TextStyles>
          </div>
        )}
        {action && window.innerWidth <= 767 && (
          <div className="inte-PageHeader-Action inte-PageHeader-ActionMobile">
            {action}
          </div>
        )}
      </div>
    </div>
  );
}
export interface PageHeaderI {
  title?: string | React.ReactNode;
  action?: string | React.ReactNode;
  sticky?: boolean;
  reverseNavigation?: boolean;
  description?: string | React.ReactNode;
  onClick?: () => void;
  metaData?: React.ReactNode;
}

export default PageHeader;
