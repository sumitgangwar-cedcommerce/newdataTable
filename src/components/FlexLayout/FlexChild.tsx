import React from "react";

const FlexChild: React.FC<FlexChildI> = ({
  children = <></>,
  desktopWidth,
  tabWidth,
  mobileWidth,
  childWidth = "none",
}: FlexChildI) => {
  /*Case for setting desktop widths for child elements*/
  const getClassForDesktopWidth = () => {
    switch (desktopWidth) {
      case "100":
        return "inte-flex__item--D100";
      case "80":
        return "inte-flex__item--D80";
      case "75":
        return "inte-flex__item--D75";
      case "66":
        return "inte-flex__item--D66";
      case "50":
        return "inte-flex__item--D50";
      case "33":
        return "inte-flex__item--D33";
      case "25":
        return "inte-flex__item--D25";
      case "20":
        return "inte-flex__item--D20";
      default:
        return "";
    }
  };

  /*Case for setting tab widths for child elements*/
  const getClassForTabWidth = () => {
    switch (tabWidth) {
      case "100":
        return "inte-flex__item--T100";
      case "80":
        return "inte-flex__item--T80";
      case "75":
        return "inte-flex__item--T75";
      case "66":
        return "inte-flex__item--T66";
      case "50":
        return "inte-flex__item--T50";
      case "33":
        return "inte-flex__item--T33";
      case "25":
        return "inte-flex__item--T25";
      case "20":
        return "inte-flex__item--T20";
      default:
        return "";
    }
  };

  /*Case for setting mobile widths for child elements*/
  const getClassForMobWidth = () => {
    switch (mobileWidth) {
      case "100":
        return "inte-flex__item--M100";
      case "80":
        return "inte-flex__item--M80";
      case "75":
        return "inte-flex__item--M75";
      case "66":
        return "inte-flex__item--M66";
      case "50":
        return "inte-flex__item--M50";
      case "33":
        return "inte-flex__item--M33";
      case "25":
        return "inte-flex__item--M25";
      case "20":
        return "inte-flex__item--M20";
      default:
        return "";
    }
  };

  const getClassForChildWidth = () => {
    switch (childWidth) {
      case "fullWidth":
        return "inte-flex--fill";
      default:
        return "";
    }
  };

  const Fill = getClassForChildWidth();

  return (
    <div
      className={`inte-flex__item  ${Fill}  ${getClassForMobWidth()} ${getClassForTabWidth()} ${getClassForDesktopWidth()}`
        .trim()
        .replace("  ", " ")}
    >
      {children}
    </div>
  );
};

FlexChild.defaultProps = {
  __TYPE: "FlexChild",
};

export interface FlexChildI {
  children: JSX.Element;
  mobileWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20" | "";
  tabWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20" | "";
  desktopWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20" | "";
  childWidth?: "fullWidth" | "none";
  order?: string;
  __TYPE?: string;
}
export default FlexChild;
