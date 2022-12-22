import React from "react";
import "./Badge.css";
import { Info } from "react-feather";
import ToolTip from "../ToolTip/ToolTip";

const Badge: React.FC<BadgeI> = ({
  type = "Positive-100",
  size = "small",
  children,
  helpText,
  badgeTextColor,
  customBgColor,
  position,
}: BadgeI): JSX.Element => {
  const checkBadgeType = () => {
    switch (type) {
      case "Positive-100":
        return "inte__BadgePositive--100";
      case "Positive-200":
        return "inte__BadgePositive--200";
      case "Positive-300":
        return "inte__BadgePositive--300";
      case "Negative-100":
        return "inte__BadgeNegative--100";
      case "Negative-200":
        return "inte__BadgeNegative--200";
      case "Negative-300":
        return "inte__BadgeNegative--300";
      case "Warning-100":
        return "inte__BadgeWarning--100";
      case "Warning-200":
        return "inte__BadgeWarning--200";
      case "Warning-300":
        return "inte__BadgeWarning--300";
      case "Info-100":
        return "inte__BadgeInfo--100";
      case "Info-200":
        return "inte__BadgeInfo--200";
      case "Info-300":
        return "inte__BadgeInfo--300";
      case "Neutral-100-Border":
        return "inte__BadgeNeutral--100-Border";
      case "Neutral-100":
        return "inte__BadgeNeutral--100";
      case "Neutral-200":
        return "inte__BadgeNeutral--200";
      case "Neutral-300":
        return "inte__BadgeNeutral--300";
      case "Neutral-400":
        return "inte__BadgeNeutral--400";
      default:
        return "inte__BadgeNeutral--100";
    }
  };
  const checkSize = () => {
    switch (size) {
      case "small":
        return "inte--BadgeNarrow";
      default:
        return "";
    }
  };
  const checkBadgeColor = () => {
    switch (badgeTextColor) {
      case "light":
        return "inte--BadgeLight";
      case "dark":
        return "inte--BadgeDark";
      default:
        return "";
    }
  };

  const typeValue = checkBadgeType();
  const sizeValue = checkSize();
  const badgeColor = checkBadgeColor();
  return (
    <div
      style={{ backgroundColor: customBgColor }}
      className={`inte--Badge ${typeValue} ${sizeValue} ${badgeColor}`}
    >
      <div className="inte--Badge-content">
        <span>{children}</span>
        {helpText ? (
          <ToolTip open={false} helpText={helpText} position={position}>
            <Info
              color={badgeTextColor == "light" ? "#fafafb" : "#3b424f"}
              size={16}
            />
          </ToolTip>
        ) : null}
      </div>
    </div>
  );
};
Badge.defaultProps = {
  children: "Badge",
  badgeTextColor: "dark",
};

type Size = "small" | "regular";
export interface BadgeI {
  children: React.ReactNode | string;
  type?:
    | "Positive-100"
    | "Positive-200"
    | "Positive-300"
    | "Negative-100"
    | "Negative-200"
    | "Negative-300"
    | "Warning-100"
    | "Warning-200"
    | "Warning-300"
    | "Info-100"
    | "Info-200"
    | "Info-300"
    | "Neutral-100-Border"
    | "Neutral-100"
    | "Neutral-200"
    | "Neutral-300"
    | "Neutral-400";
  badgeTextColor?: "dark" | "light" | string;
  position?: "top" | "bottom" | "left" | "right";
  size?: Size;
  helpText?: string | React.ReactNode;
  customBgColor?: string;
}

export default Badge;
