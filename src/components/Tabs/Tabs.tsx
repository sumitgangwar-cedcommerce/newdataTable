/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useLayoutEffect, useState } from "react";
import Badge from "../Badge/Badge";
import "./Tabs.css";

const Tabs: React.FC<TabsI> = ({
  value = [],
  alignment,
  onChange = () => {
    return null;
  },
  selected = "",
  children,
}: TabsI) => {
  const checkAlignment = () => {
    switch (alignment) {
      case "horizontal":
        return "inte-Tabs--horizontal";
      case "vertical":
        return "inte-Tabs--vertical";
      default:
        return "inte-Tabs--horizontal";
    }
  };

  function renderTabs() {
    return value.map((tab: any, index: any) => {
      let errorCss = "";
      if (tab.error) {
        errorCss = "inteTab--text__error";
      }
      return (
        <li
          key={index}
          style={
            tab.disabled
              ? { opacity: "0.5", pointerEvents: "none" }
              : { opacity: "1", pointerEvents: "auto" }
          }
          id={tab.id}
          className={
            tab["id"] === selected
              ? `inte__item inte__item--active`
              : `inte__item`
          }
        >
          <a
            className={`inteTab--text ${errorCss}`}
            onClick={() => {
              if (!tab.disabled) onChange(tab["id"]);
            }}
          >
            <span className="inteTab__TabContent">
              {tab.icon ? (
                <span className="inte-TabIcon">{tab.icon}</span>
              ) : null}
              {tab.content}
            </span>
            {tab.badge ? (
              <div className="inteTab--Status">
                <Badge 
                  customBgColor={tab.customBgColors}
                  badgeTextColor={tab.badgeTextColor}
                >
                  {tab.badgeContent}
                </Badge>
              </div>
            ) : null}
          </a>
        </li>
      );
    });
  }
  const alignments = checkAlignment();
  const [tabview, settabview] = useState<boolean>();
  useLayoutEffect(() => {
    const fn = () => {
      const width = window.innerWidth >= 768;
      settabview(width);
      width && alignments;
    };
    fn();
    window.onresize = fn;
  }, []);

  return (
    <div className={`inte-tabsWrapper ${tabview ? alignments : ""}`}>
      {alignment == "vertical" && window.innerWidth >= 768 ? (
        <div className="inte-tabsWrap--Items">
          {" "}
          <ul className={`inte-tabsWrap`}>{renderTabs()}</ul>
        </div>
      ) : (
        <ul className={`inte-tabsWrap`}>{renderTabs()}</ul>
      )}
      <div className="inte-tabsWrap--Content">{children}</div>
    </div>
  );
};

export type TabsI = {
  value?: NewI[] | any;
  selected?: string;
  onChange?: (id: string) => React.ReactNode | void | JSX.Element;
  disabled?: boolean;
  alignment?: "vertical" | "horizontal";
  children?: React.ReactNode | any;
};

export type NewI = {
  id: string;
  content?: any;
  disabled?: boolean;
  error?: boolean;
  badge?: boolean;
  badgeTextColor?: "dark" | "light";
  badgeContent?: string | number | React.ReactNode;
  customBgColors?: string;
  icon?: React.ReactNode | any;
};

export default Tabs;
