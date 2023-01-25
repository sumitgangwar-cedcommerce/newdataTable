import React from "react";
import ToolTip from "../ToolTip/ToolTip";
import "./Badge.css";
const Badge: React.FC<BadgeI> = ({
    type = "Primary",
    size = "Medium",
    children,
    customBgColor,
    variant = "filled",
    customColor,
    helpPosition = "bottom",
    ...props
}: BadgeI): JSX.Element => {
    const checkBadgeType = () => {
        switch (type) {
            case "Primary":
                return "inte__BadgePrimary";
            case "Secondary":
                return "inte__BadgeSeconadary";
            case "Success":
                return "inte__BadgeSuccess";
            case "Error":
                return "inte__BadgeError";
            case "Warning":
                return "inte__BadgeWarning";
            default:
                return "inte__BadgePrimary";
        }
    };
    const checkBadgeAccentType = () => {
        switch (type) {
            case "Primary":
                return "inte__accentBadgePrimary";
            case "Secondary":
                return "inte__accentBadgeSeconadary";
            case "Success":
                return "inte__accentBadgeSuccess";
            case "Error":
                return "inte__accentBadgeError";
            case "Warning":
                return "inte__accentBadgeWarning";
            default:
                return "inte__accentBadgePrimary";
        }
    };
    const checkSize = () => {
        switch (size) {
            case "Large":
                return "inte--BadgeLarge";
            case "Medium":
                return "inte--BadgeMedium";
            case "Small":
                return "inte--BadgeSmall";
            default:
                return "inte--BadgeMedium";
        }
    };
    const checkDotSize = () => {
        switch (size) {
            case "Large":
                return "inte--BadgeDotLarge";
            case "Medium":
                return "inte--BadgeDotMedium";
            case "Small":
                return "inte--BadgeDotSmall";
            default:
                return "inte--BadgeDotSmall";
        }
    };

    const typeValue = checkBadgeType();
    const accenttypeValue = checkBadgeAccentType();
    const sizeDotsValue = checkDotSize();;
    const sizeValue = checkSize();
    let icon = <></>;
    let iconClass = "";
    const { iconAlign = "left" } = props;

    if (props.icon) {
        iconClass = "inte-badge--hasIcon";
        iconAlign !== "left" ? { paddingLeft: "1rem" } : { paddingRight: "1rem" };
        icon = (
            <span className={`inte-badge__icon`}>
                {props.icon}
            </span>
        );
    }



    return (
        <div
            style={{ backgroundColor: customBgColor, color: customColor }}
            className={props.dot ? `inte--Badgedot ${sizeDotsValue}  ${typeValue} `
                : variant && `inte--Badge ${sizeValue} ${iconClass} ${variant == "accent" ? `${accenttypeValue}` : `${typeValue}`} ${children === undefined ? "inte-badge--onlyIcon" : ""} ${props.helpText ? "inte--Badge--hasHelp" : ""}`
            }
        >
            {
                props.dot ? <></> : variant && <>
                    {iconAlign === "left" && icon}
                    {children ? <div className="inte--Badge-content">
                        {!props.helpText ? <span>{children}</span> : <ToolTip open={false} position={helpPosition} helpText={props.helpText}>
                            <span>{children}</span>
                        </ToolTip>}
                    </div> : ""}
                    {iconAlign === "right" && icon}
                </>
            }
        </div>
    );
};
export interface BadgeI {
    children?: React.ReactNode | string;
    variant?: "filled" | "accent";
    type?: "Primary" | "Secondary" | "Success" | "Error" | "Warning";
    size?: "Large" | "Medium" | "Small";
    customBgColor?: string;
    customColor?: string;
    icon?: React.ReactNode;
    iconAlign?: "left" | "right";
    dot?: boolean;
    helpText?: string | React.ReactNode;
    helpPosition?: "left" | "right" | "top" | "bottom";
}

export default Badge;
