import React, { useCallback, useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, MoreVertical } from "react-feather";
import { Button } from "..";
import ActionList from "../ActionList/ActionList";
import { ButtonI } from "../Button/Button";
import TextStyles from "../TextStyles/TextStyles";
import "./PageHeader.css";

function PageHeader({
  title,
  description,
  sticky=false,
  reverseNavigation = false,
  primaryAction,
  secondaryAction,
  ...props
}: PageHeaderI): JSX.Element {
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);
  // Window resize
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(getWindowSize()));
    return () => {
      window.removeEventListener("resize", () =>
        setWindowSize(getWindowSize())
      );
    };
  }, []);

  function getWindowSize() {
    return window.innerWidth;
  }
  return (
    <div
      className={`inte-pageHeader ${sticky ? "inte-pageHeader--fixed":""} ${
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
              <div
                className={`inte-pageHeader--Title ${
                  props.metaData ? "inte-PageHeader--hasMetadata" : ""
                }`}
              >
                <TextStyles
                  type="Heading"
                  fontweight="extraBold"
                  lineHeight="LH-2.4"
                >
                  {title}
                </TextStyles>
                {props.metaData ? props.metaData : ""}
              </div>
            )}
          </div>
          {(primaryAction || secondaryAction) && windowSize >= 768 && (
            <div className="inte-PageHeader-Action">
              {secondaryAction && secondaryAction.length < 2 ? (
                secondaryAction.map((item, index) => {
                  return (
                    <Button
                      type="Outlined"
                      {...secondaryAction}
                      content={secondaryAction[index]?.content}
                      icon={secondaryAction[index]?.icon}
                    ></Button>
                  );
                })
              ) : (
                <ActionList
                  direction="right"
                  open={active}
                  onClose={toggleActive}
                  activator={
                    <Button
                      type="Outlined"
                      icon={<ChevronDown />}
                      iconAlign={"right"}
                      onClick={toggleActive}
                      content="More Action"
                    ></Button>
                  }
                  sections={[
                    
                    {
                      items: secondaryAction,
                    },
                  ]}
                ></ActionList>
              )}
              {primaryAction ? (
                <Button
                  type="Primary"
                  {...primaryAction}
                  content={primaryAction?.content}
                  icon={<>{primaryAction?.icon}</>}
                ></Button>
              ) : (
                ""
              )}
            </div>
          )}
          {(primaryAction || secondaryAction) && windowSize <= 767 && (
            <div className="inte-PageHeader-Action inte-PageHeader-ActionMobile">
              {secondaryAction ? (
                <ActionList
                  direction="right"
                  popoverContainer="element"
                  open={active}
                  onClose={toggleActive}
                  activator={
                    <Button
                      type="Outlined"
                      icon={<MoreVertical />}
                      onClick={toggleActive}
                    ></Button>
                  }
                  sections={[
                    {
                      items: secondaryAction,
                    },
                  ]}
                ></ActionList>
              ) : (
                ""
              )}
              {primaryAction ? (
                <Button
                  type="Primary"
                  {...props}
                  content={primaryAction?.content}
                  icon={primaryAction?.icon}
                ></Button>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        {description && (
          <div className="inte-PageHeader--Description">
            <TextStyles
              type="SubHeading"
              lineHeight="LH-2.0"
              subheadingTypes="XS-1.6"
              textcolor="light"
            >
              {description}
            </TextStyles>
          </div>
        )}
      </div>
    </div>
  );
}
export interface PageHeaderI {
  title?: string | React.ReactNode;
  sticky?: boolean;
  reverseNavigation?: boolean;
  description?: string | React.ReactNode;
  onClick?: () => void;
  metaData?: React.ReactNode;
  primaryAction?: ButtonI;
  secondaryAction?: Array<ButtonI>;
}

export default PageHeader;
