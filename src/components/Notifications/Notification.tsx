/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import { X } from "react-feather";
import TextStyles from "../TextStyles/TextStyles";
import "./Notification.css";

const Notification: React.FC<NotificationI> = ({
  type,
  children,
  destroy = true,
  onClose,
  desciption,
  subdesciption,
  icon= true,
}: NotificationI) => {
  function checkNotificationType() {
    switch (type) {
      case "warning":
        return "inte-notification--warning";
      case "danger":
        return "inte-notification--danger";
      case "success":
        return "inte-notification--success";
      case "info":
        return "inte-notification--info";
      default:
        return "";
    }
  }

  const typeNotify = checkNotificationType();

  const checkDestroy = () => {
    if (destroy) {
      return (
        <>
          <span className="inte-notification--Destroy" onClick={() => destroy}>
            <span
              style={{
                cursor: "pointer",
                display: "flex",
                padding: "0.4rem",
                borderRadius: "4px",
              }}
              onClick={onClose}
            >
              <X size={16} />
            </span>
          </span>
        </>
      );
    }
  };

  return (
    <div
      className={`inte-notification ${typeNotify} ${
        destroy ? "inte-notification__hasAction" : ""
      }`}
    >
      <div
        className={`inte-notification__content inte-notification__hasCircleIcon `}
      >
        {icon && <div className="inte-notification__CircleIcon"></div>}
        <div className={"inte-notification__text"}>
          {typeof children == "string" ? (
            <TextStyles
              fontweight="bold"
              utility="inte-notification__SubHeading"
            >
              {children}
            </TextStyles>
          ) : (
            <>{children}</>
          )}
          {desciption ? (
            <TextStyles
              textcolor="light"
              type="Paragraph"
              paragraphTypes="MD-1.4"
              lineHeight="LH-2.0"
              utility="mt-5 mb-5"
            >
              {desciption}
            </TextStyles>
          ) : null}
          {subdesciption ? (
            <TextStyles
              textcolor="light"
              type="Paragraph"
              paragraphTypes="XS-1.2"
              lineHeight="LH-1.6"
              utility="mt-8 mb-0"
            >
              {subdesciption}
            </TextStyles>
          ) : null}
        </div>
      </div>
      {checkDestroy() && checkDestroy()}
    </div>
  );
};
Notification.defaultProps = {
  children: "notification text",
};
export interface NotificationI {
  type: "warning" | "success" | "danger" | "info";
  children?: any;
  desciption?: string | ReactNode;
  subdesciption?: string | ReactNode;
  onClose?: () => void;
  destroy?: boolean;
  icon?:boolean;
}

export default Notification;
