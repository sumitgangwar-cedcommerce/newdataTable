/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";
import TextStyles from "../TextStyles/TextStyles";
import "./Alert.css";

const Alert: React.FC<AlertI> = ({
  type,
  children,
  // desrtoy return true or false and show hide icon
  destroy = true,
  //onClose function user click cross button then perform any action on this function
  onClose,
  desciption,
  icon = true,
}: AlertI) => {
  function checkAlertType() {
    switch (type) {
      case "warning":
        return "inte-Alert--warning";
      case "danger":
        return "inte-Alert--danger";
      case "success":
        return "inte-Alert--success";
      case "info":
        return "inte-Alert--info";
      default:
        return "";
    }
  }

  function checkIconType() {
    switch (type) {
      case "warning":
        return <AlertOctagon size={20} color="#b28c35" />;
      case "danger":
        return <AlertTriangle size={20} color="#c4281c" />;
      case "success":
        return <CheckCircle size={20} color="#027a48" />;
      case "info":
        return <Info size={20} color="#8e76d7" />;
      default:
        return "";
    }
  }

  const typeNotify = checkAlertType();
  const typeIcon = checkIconType();

  const checkDestroy = () => {
    if (destroy) {
      return (
        <>
          <span className="inte-Alert--Destroy" onClick={() => destroy}>
            <span
              style={{
                cursor: "pointer",
                display: "flex",
                padding: "0.4rem",
                borderRadius: "4px",
              }}
              onClick={onClose}
            >
              <X size={14} color={"#3b424f"} strokeWidth={3} />
            </span>
          </span>
        </>
      );
    }
  };

  return (
    <div
      className={`inte-Alert ${typeNotify} ${
        destroy ? "inte-Alert__hasAction" : ""
      }`}
    >
      <div className={`inte-Alert__content`}>
        {icon ? <div className="inte-Alert__Icon">{typeIcon}</div> : ""}
        <div className={"inte-Alert__text"}>
          {typeof children == "string" ? (
            <TextStyles fontweight="bold">{children}</TextStyles>
          ) : (
            <>{children}</>
          )}
          {desciption ? (
            <TextStyles
              textcolor="light"
              type="Paragraph"
              paragraphTypes="MD-1.4"
              utility="mt-5 mb-0"
            >
              {desciption}
            </TextStyles>
          ) : null}
        </div>
      </div>
      {checkDestroy() && checkDestroy()}
    </div>
  );
};
Alert.defaultProps = {
  children: "Alert text",
};
export interface AlertI {
  type: "warning" | "success" | "danger" | "info";
  children: any;
  desciption?: string | ReactNode;
  onClose?: () => void;
  destroy?: boolean;
  icon?: boolean;
}

export default Alert;
