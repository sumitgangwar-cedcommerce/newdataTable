import React from "react";
import "./TextLink.css";

const TextLink: React.FC<TextLinkI> = ({
  label = "Lorem Ipsum",
  disabled = false,
  icon,
  url,
  extraClass="",
  target = "_blank",
  ...props
}: TextLinkI): JSX.Element => {
  return (
    <div
      className={`inte-TextLink ${extraClass ? extraClass :""} ${disabled ? "inte--TextLink-disabled" : ""}`}
    >
      <a
        className="inte-TextLink--Label"
        href={url ? url : "javascript:void(0)"}
        onClick={
          url
            ? () => {
                javascript: void 0;
              }
            : props.onClick
        }
        target={url && target}
      >
        {label}
        {icon}
      </a>
    </div>
  );
};
export interface TextLinkI {
  label?: string | React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  // children?: string | React.ReactNode;
  onClick?: () => void | string | any;
  url?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  extraClass?: string;
}
export default TextLink;
