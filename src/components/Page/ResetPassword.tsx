/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import { Eye, EyeOff } from "react-feather";
import { FormElement, TextField } from "../FormElement";
import ToastWrapper from "../Toast/ToastWrapper";
import Toast from "../Toast/Toastchild";

const ResetPassword = () => {
  const [value, setValue] = useState<string>("");
  const [password, setPassword] = useState<string | number>("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [showtoast, setShowtoast] = useState<boolean>();
  const [active, setActive] = useState(true);
  const otpVerification = () => {
    setActive(true);
    if (value !== "" && value === password && value.trim()) {
      setShowtoast(true);
      setMessage("Successfully Reset Password");
      return true;
    } else {
      setShowtoast(false);
      setMessage("New Password And Reset Password Not Match");
    }
  };
  const toggleActive = () => setActive((active) => !active);
  return (
   <div className="inte-ResetPassword__Page">
      <FormElement>
      <TextField
        type="password"
        placeHolder="Enter New password"
        label="New Password"
        value={value}
        onChange={(e) => setValue(e)}
      />

      <TextField
        type={show ? "text" : "password"}
        placeHolder="Enter Re-password"
        label="Re-password"
        suffix={
          show ? (
            <Eye color="#3B424F" size={20} onClick={() => setShow(!show)} />
          ) : (
            <EyeOff color="#3B424F" size={20} onClick={() => setShow(!show)} />
          )
        }
        value={password}
        onChange={(e) => setPassword(e)}
      />

      <Button
        content="RESET PASSWORD"
        FullBtn={true}
        halign="Equal"
        thickness="thin"
        onClick={otpVerification}
      />

      {active && (
        <>
          {showtoast !== undefined ? (
            <ToastWrapper>
              <Toast
                message={message}
                type={showtoast ? "success" : "error"}
                timeout={6000}
                onDismiss={toggleActive}
              />
            </ToastWrapper>
          ) : null}
        </>
      )}
    </FormElement>
   </div>
  );
};
export default ResetPassword;
