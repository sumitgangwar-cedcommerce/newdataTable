/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect } from "react";
import "./Toast.css";
import PropTypes from "prop-types";
import { X } from "react-feather";

function Toast({ message, type, onDismiss, timeout }: any): JSX.Element {
  let dismissed: ReturnType<typeof setTimeout>;
  const checkType = () => {
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

  const tType = checkType();
  return (
    <div className={"inte__Toast" + " " + tType}>
      <p>{message}</p>
      {onDismiss ? (
        <span
          onClick={() => {
            onDismiss();
            clearTimeout(dismissed);
          }}
          className={"inte_toastClose"}
        >
          <X size={20} />
        </span>
      ) : null}
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(["success", "warning", "error", "none"]),
  timeout: PropTypes.number,
  onDismiss: PropTypes.func.isRequired,
};

Toast.defaultProps = {
  type: "none",
  message: "",
  timeout: 6000,
  onDismiss: () => {
    return null;
  },
};

export default Toast;
