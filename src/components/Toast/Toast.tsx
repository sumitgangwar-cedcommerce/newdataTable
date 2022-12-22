import React, { useEffect } from "react";
import { cross } from "../../Icon/Icon";
import { FlexLayout } from "../FlexLayout";
import "./Toast.css";

const Toast: React.FC<ToastI> = ({
  message,
  type = "none",
  timeout = 3000,
  onDismiss,
}: ToastI): JSX.Element => {
  let dismissed: ReturnType<typeof setTimeout>;

  const checkType = (type: string) => {
    switch (type) {
      case "success":
        return "inte__Toast--Success";
      case "warning":
        return "inte__Toast--Warning";
      case "error":
        return "inte__Toast--Error";
      default:
        return "";
    }
  };
  useEffect(() => {
    dismissed = setTimeout(() => {
      if (onDismiss) onDismiss();
    }, timeout);
  }, []);

  const tType = checkType(type);
  return (
    <div className={"inte__Toast" + " " + tType}>
      <FlexLayout
        halign="fill"
        childWidth="fullWidth"
        spacing="extraLoose"
        valign="center"
      >
        <p>{message || "Welcome"}</p>
        {onDismiss ? (
          <span
            onClick={() => {
              onDismiss();
              clearTimeout(dismissed);
            }}
            className={"inte_toastClose"}
          >
            {cross}
          </span>
        ) : null}
      </FlexLayout>
    </div>
  );
};
Toast.defaultProps = {
  message: "Welcome",
};
export interface ToastI {
  message?: string | React.ReactNode;
  type?: "success" | "warning" | "error" | "none";
  timeout?: number;
  onDismiss?: () => void;
}

export default Toast;
