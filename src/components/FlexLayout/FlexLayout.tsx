/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import FlexChild from "./FlexChild";

const FlexLayout: React.FC<FlexLayoutI> = ({
  valign = "none",
  valignTab = "none",
  valignMob = "none",
  halign = "none",
  halignTab = "none",
  halignMob = "none",
  spacing = "none",
  direction = "none",
  directionTab = "none",
  directionMob = "none",
  wrap = "wrap",
  wrapTab = "none",
  wrapMob = "none",
  children = <></>,
  childWidth = "none",
  tabWidth = "",
  desktopWidth = "",
  mobileWidth = "",
}: FlexLayoutI) => {
  const getClassForVAlign = (valign: string) => {
    switch (valign) {
      case "end":
        return "intel-flex--align-end";
      case "start":
        return "intel-flex--align-start";
      case "center":
        return "intel-flex--align-center";
      case "stretch":
        return "intel-flex--align-stretch";
      case "baseline":
        return "intel-flex--align-baseline";
      default:
        return "";
    }
  };
  const getClassForVAlignTab = (valignTab: string) => {
    switch (valignTab) {
      case "end":
        return "intel-flex--align-endTab";
      case "start":
        return "intel-flex--align-startTab";
      case "center":
        return "intel-flex--align-centerTab";
      case "stretch":
        return "intel-flex--align-stretchTab";
      case "baseline":
        return "intel-flex--align-baselineTab";
      default:
        return "";
    }
  };
  const getClassForVAlignMob = (valignMob: string) => {
    switch (valignMob) {
      case "end":
        return "intel-flex--align-endMob";
      case "start":
        return "intel-flex--align-startMob";
      case "center":
        return "intel-flex--align-centerMob";
      case "stretch":
        return "intel-flex--align-stretchMob";
      case "baseline":
        return "intel-flex--align-baselineMob";
      default:
        return "";
    }
  };

  const getClassForHAlign = (halign: string) => {
    switch (halign) {
      case "start":
        return "intel-flex--distribute-start";
      case "center":
        return "intel-flex--distribute-center";
      case "end":
        return "intel-flex--distribute-end";
      case "fill":
        return "intel-flex--distribute-spaceBetween";
      case "around":
        return "intel-flex--distribute-spaceAround";
      case "evenly":
        return "intel-flex--distribute-spaceEvenly";
      default:
        return "";
    }
  };
  const getClassForHAlignTab = (halignTab: string) => {
    switch (halignTab) {
      case "start":
        return "intel-flex--distribute-startTab";
      case "center":
        return "intel-flex--distribute-centerTab";
      case "end":
        return "intel-flex--distribute-endTab";
      case "fill":
        return "intel-flex--distribute-spaceBetweenTab";
      case "around":
        return "intel-flex--distribute-spaceAroundTab";
      case "evenly":
        return "intel-flex--distribute-spaceEvenlyTab";
      default:
        return "";
    }
  };
  const getClassForHAlignMob = (halignMob: string) => {
    switch (halignMob) {
      case "start":
        return "intel-flex--distribute-startMob";
      case "center":
        return "intel-flex--distribute-centerMob";
      case "end":
        return "intel-flex--distribute-endMob";
      case "fill":
        return "intel-flex--distribute-spaceBetweenMob";
      case "around":
        return "intel-flex--distribute-spaceAroundMob";
      case "evenly":
        return "intel-flex--distribute-spaceEvenlyMob";
      default:
        return "";
    }
  };

  const getClassForDirection = (direction: string) => {
    switch (direction) {
      case "vertical":
        return "inte-flex--vertical";
      case "vertical-reverse":
        return "inte-flex--vertical-reverse";
      case "row-reverse":
        return "inte-flex--row-reverse";
      default:
        return "";
    }
  };
  const getClassForDirectionTab = (directionTab: string) => {
    switch (directionTab) {
      case "vertical":
        return "inte-flex--verticalTab";
      case "vertical-reverse":
        return "inte-flex--vertical-reverseTab";
      case "row-reverse":
        return "inte-flex--row-reverseTab";
      default:
        return "";
    }
  };
  const getClassForDirectionMob = (directionMob: string) => {
    switch (directionMob) {
      case "vertical":
        return "inte-flex--verticalMob";
      case "vertical-reverse":
        return "inte-flex--vertical-reverseMob";
      case "row-reverse":
        return "inte-flex--row-reverseMob";
      default:
        return "";
    }
  };

  const getClassForSpacing = (spacing: string) => {
    switch (spacing) {
      case "extraTight":
        return "inte-flex--spacing-ExtraTight";
      case "mediumTight":
        return "inte-flex--spacing-MediumTight";
      case "tight":
        return "inte-flex--spacing-tight";
      case "loose":
        return "inte-flex--spacing-loose";
      case "mediumLoose":
        return "inte-flex--spacing-Mediumloose";
      case "extraLoose":
        return "inte-flex--spacing-Extraloose";
      default:
        return "";
    }
  };
  const getClassForWrap = (wrap: string) => {
    switch (wrap) {
      case "wrap":
        return "inte-flex--wrap";
      case "noWrap":
        return "inte-flex--noWrap";
      default:
        return "";
    }
  };
  const getClassForWrapTab = (wrapTab: string) => {
    switch (wrapTab) {
      case "wrap":
        return "inte-flex--wrapTab";
      case "noWrap":
        return "inte-flex--noWrapTab";
      default:
        return "";
    }
  };
  const getClassForWrapMob = (wrapMob: string) => {
    switch (wrapMob) {
      case "wrap":
        return "inte-flex--wrapMob";
      case "noWrap":
        return "inte-flex--noWrapMob";
      default:
        return "";
    }
  };

  /*Case for setting desktop widths for child elements*/
  const getClassForDesktopWidth = (desktopWidth: string) => {
    switch (desktopWidth) {
      case "100":
        return "inte-flex--D100";
      case "80":
        return "inte-flex--D80";
      case "75":
        return "inte-flex--D75";
      case "66":
        return "inte-flex--D66";
      case "50":
        return "inte-flex--D50";
      case "33":
        return "inte-flex--D33";
      case "25":
        return "inte-flex--D25";
      case "20":
        return "inte-flex--D20";
      default:
        return "";
    }
  };

  /*Case for setting tab widths for child elements*/
  const getClassForTabWidth = (tabWidth: string) => {
    switch (tabWidth) {
      case "100":
        return "inte-flex--T100";
      case "80":
        return "inte-flex--T80";
      case "75":
        return "inte-flex--T75";
      case "66":
        return "inte-flex--T66";
      case "50":
        return "inte-flex--T50";
      case "33":
        return "inte-flex--T33";
      case "25":
        return "inte-flex--T25";
      case "20":
        return "inte-flex--T20";
      default:
        return "";
    }
  };

  /*Case for setting mobile widths for child elements*/
  const getClassForMobWidth = (mobileWidth: string) => {
    switch (mobileWidth) {
      case "100":
        return "inte-flex--M100";
      case "80":
        return "inte-flex--M80";
      case "75":
        return "inte-flex--M75";
      case "66":
        return "inte-flex--M66";
      case "50":
        return "inte-flex--M50";
      case "33":
        return "inte-flex--M33";
      case "25":
        return "inte-flex--M25";
      case "20":
        return "inte-flex--M20";
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
  const VAlign = getClassForVAlign(valign);
  const VAlignTab = getClassForVAlignTab(valignTab);
  const VAlignMob = getClassForVAlignMob(valignMob);

  const HAlign = getClassForHAlign(halign);
  const HAlignTab = getClassForHAlignTab(halignTab);
  const HAlignMob = getClassForHAlignMob(halignMob);

  const Direction = getClassForDirection(direction);
  const DirectionTab = getClassForDirectionTab(directionTab);
  const DirectionMob = getClassForDirectionMob(directionMob);

  const Wrap = getClassForWrap(wrap);
  const WrapTab = getClassForWrapTab(wrapTab);
  const WrapMob = getClassForWrapMob(wrapMob);

  const Spacing = getClassForSpacing(spacing);
  const Fill = getClassForChildWidth();
  const Dwidth = getClassForDesktopWidth(desktopWidth);
  const Twidth = getClassForTabWidth(tabWidth);
  const Mwidth = getClassForMobWidth(mobileWidth);

  const childrens: any = React.Children.toArray(children);
  const newChildrens = childrens.map((children: any, index: string) => {
    if (children.props && children.props?.__TYPE === "FlexChild") {
      return children;
    } else {
      return <FlexChild key={index}>{children}</FlexChild>;
    }
  });

  return (
    <div
      className={`inte-flex ${Wrap} ${WrapTab} ${WrapMob} ${VAlign} ${VAlignTab} ${VAlignMob}  ${HAlign} ${HAlignTab} ${HAlignMob} ${Spacing} ${Direction} ${DirectionTab} ${DirectionMob}   ${Fill}  ${Dwidth} ${Twidth} ${Mwidth}`.trim()}
    >
      {newChildrens}
    </div>
  );
};

export interface FlexLayoutI {
  valign?: "start" | "center" | "end" | "stretch" | "baseline" | "none";
  valignTab?: "start" | "center" | "end" | "stretch" | "baseline" | "none";
  valignMob?: "start" | "center" | "end" | "stretch" | "baseline" | "none";
  halign?: "start" | "center" | "end" | "fill" | "around" | "evenly" | "none";
  halignTab?:
    | "start"
    | "center"
    | "end"
    | "fill"
    | "around"
    | "evenly"
    | "none";
  halignMob?:
    | "start"
    | "center"
    | "end"
    | "fill"
    | "around"
    | "evenly"
    | "none";
  spacing?:
    | "none"
    | "tight"
    | "mediumTight"
    | "extraTight"
    | "loose"
    | "mediumLoose"
    | "extraLoose";
  direction?: "vertical" | "vertical-reverse" | "row-reverse" | "none";
  directionTab?: "vertical" | "vertical-reverse" | "row-reverse" | "none";
  directionMob?: "vertical" | "vertical-reverse" | "row-reverse" | "none";
  wrap?: "wrap" | "noWrap" | "none";
  wrapTab?: "wrap" | "noWrap" | "none";
  wrapMob?: "wrap" | "noWrap" | "none";
  children?: JSX.Element | React.ReactNode;
  childWidth?: "fullWidth" | "none";
  mobileWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20" | "";
  tabWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20" | "";
  desktopWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20" | "";
}

export default FlexLayout;
