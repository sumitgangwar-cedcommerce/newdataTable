/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from "react";
import { Eye, EyeOff, HelpCircle } from "react-feather";
import Button from "../../Button/Button";
import { FormElement, TextField } from "../../FormElement";
import TextStyles from "../../TextStyles/TextStyles";
import cedcommercelogo from "../../images/cedcommercelogo.svg";
import { ArrowLeft } from "react-feather";
import Toast from "../../Toast/Toastchild";
import ToastWrapper from "../../Toast/ToastWrapper";
import "./LoginSimple.css";
import { Card } from "../../Card";
import { FlexLayout } from "../../FlexLayout";

const LoginSimple = (props: any) => {
  const [login, setLogin] = useState(true);
  const [linkmail, setLinkMail] = useState(false);
  const [registration, setRegistration] = useState(false);
  const [resetpassword, setResetPassword] = useState(false);
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive((active) => !active);

  const Login = () => {
    const [value, setvalue] = useState<string>("");
    const [password, setPassword] = useState<string | number>("");
    const [show, setShow] = useState(false);
    return (
      <>
        <FormElement>
          <TextField
            type="text"
            placeHolder="Enter Email"
            label="Email / Username"
            value={value}
            onChange={(e) => setvalue(e)}
          />

          <div>
            <TextField
              type={show ? "text" : "password"}
              label="Password"
              placeHolder="Enter Password"
              suffix={
                show ? (
                  <Eye
                    color="#3B424F"
                    size={20}
                    onClick={() => setShow(!show)}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <EyeOff
                    color="#3B424F"
                    size={20}
                    style={{ cursor: "pointer" }}
                    onClick={() => setShow(!show)}
                  />
                )
              }
              value={password}
              onChange={(e) => setPassword(e)}
            />

            <div className="ForgotPassword--button">
              <Button
                content="Forgotten Password ?"
                type="TextButton"
                FullBtn={true}
                halign="End"
                onClick={() => {
                  setLogin(false);
                  setLinkMail(true);
                  setRegistration(false);
                }}
              />
            </div>
          </div>
          <hr className="login-horizontal--line" />
          <Button
            content="Sign In"
            FullBtn={true}
            thickness="thin"
            halign="Equal"
            onClick={toggleActive}
          />
          {active && (
            <ToastWrapper>
              <Toast
                message="Check validation email and password"
                type="error"
                timeout={700}
                onDismiss={toggleActive}
              />
            </ToastWrapper>
          )}
          <div className="registration-button">
            <TextStyles content="New User?" />
            <Button
              content="Register Here"
              type="TextButton"
              onClick={() => {
                setLogin(false);
                setLinkMail(false);
                setRegistration(true);
              }}
            />
          </div>
        </FormElement>
      </>
    );
  };

  const ForgotSimple = () => {
    const [value, setValue] = useState<string>("");
    const [active, setActive] = useState(true);
    const toggleActive = () => setActive((active) => !active);

    return (
      <FormElement>
        <TextField
          type="text"
          placeHolder="Enter Email"
          label="Email"
          value={value}
          onChange={(e) => setValue(e)}
        />

        <Button
          content="Generate password reset link"
          FullBtn={true}
          halign="Equal"
          thickness="thin"
          onClick={() => {
            toggleActive;
            setResetPassword(true);
            setLogin(false);
            setLinkMail(false);
            setRegistration(false);
          }}
        />
        {active && (
          <ToastWrapper>
            <Toast
              message="Check validation email and password"
              type="error"
              timeout={700}
              onDismiss={toggleActive}
            />
          </ToastWrapper>
        )}

        <Button
          icon={<ArrowLeft size={20} />}
          iconAlign="left"
          iconRound={false}
          content="Return To Login"
          type="TextButton"
          halign="Equal"
          thickness="thin"
          onClick={() => {
            setLogin(true);
            setLinkMail(false);
            setRegistration(false);
          }}
        />
      </FormElement>
    );
  };

  const RegistrationSimple = () => {
    const [fname, setFname] = useState<string>("");
    const [lname, setLname] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [repassword, setRepassword] = useState<string>("");
    const [passwordshowhide, setPasswordshowhide] = useState<boolean>(false);
    const [repasswordshowhide, setRepasswordshowhide] = useState<boolean>(
      false
    );

    return (
      <FormElement>
        <TextField
          type="text"
          placeHolder="First Name"
          label="First Name"
          value={fname}
          onChange={(e) => setFname(e)}
        />
        <TextField
          type="text"
          placeHolder="Last Name"
          label="Last Name"
          value={lname}
          onChange={(e) => setLname(e)}
        />
        <TextField
          type="text"
          placeHolder="User Name"
          label="User Name"
          value={username}
          onChange={(e) => setUsername(e)}
        />
        <TextField
          type="text"
          placeHolder="Enter Email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e)}
        />
        <TextField
          type={passwordshowhide ? "text" : "password"}
          label="Password"
          placeHolder="Confirm Password"
          value={password}
          onChange={(e) => setPassword(e)}
          suffix={
            passwordshowhide ? (
              <Eye
                style={{ cursor: "pointer" }}
                color="#3B424F"
                size={20}
                onClick={() => setPasswordshowhide(!passwordshowhide)}
              />
            ) : (
              <EyeOff
                style={{ cursor: "pointer" }}
                color="#3B424F"
                size={20}
                onClick={() => setPasswordshowhide(!passwordshowhide)}
              />
            )
          }
        />
        <TextField
          type={repasswordshowhide ? "text" : "password"}
          label="Confirm Password"
          placeHolder="Confirm Password"
          value={repassword}
          onChange={(e) => setRepassword(e)}
          suffix={
            repasswordshowhide ? (
              <Eye
                style={{ cursor: "pointer" }}
                color="#3B424F"
                size={20}
                onClick={() => setRepasswordshowhide(!repasswordshowhide)}
              />
            ) : (
              <EyeOff
                style={{ cursor: "pointer" }}
                color="#3B424F"
                size={20}
                onClick={() => setRepasswordshowhide(!repasswordshowhide)}
              />
            )
          }
        />
        <Button
          content="Create new account"
          FullBtn={true}
          thickness="thin"
          halign="Equal"
          onClick={toggleActive}
        />
        {active && (
          <ToastWrapper>
            <Toast
              message="Check validation email and password"
              type="error"
              timeout={700}
              onDismiss={toggleActive}
            />
          </ToastWrapper>
        )}
        <div className="registration">
          <Button
            content="Sign In "
            type="TextButton"
            onClick={() => {
              setLogin(true);
              setLinkMail(false);
              setRegistration(false);
            }}
          />
          <TextStyles content=" if you already have an account" />
        </div>
      </FormElement>
    );
  };

  const ResetPassword = () => {
    const [newpsw, setNewpsw] = useState<string>("");
    const [confirmpsw, setConfirmpsw] = useState<string | number>("");
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const [showtoast, setShowtoast] = useState<boolean>();
    const [active, setActive] = useState(true);
    const otpVerification = () => {
      setActive(true);
      if (newpsw !== "" && newpsw === confirmpsw && newpsw.trim()) {
        setShowtoast(true);
        setMessage("Successfully Password and Re-password match");
        return true;
      } else {
        setShowtoast(false);
        setMessage("New Password And Re-password Not Match");
      }
    };
    const toggleActive = () => setActive((active) => !active);
    return (
      <FormElement>
        <TextField
          type={show ? "text" : "password"}
          placeHolder="Enter New password"
          label="New Password"
          value={newpsw}
          onChange={(e) => setNewpsw(e)}
          suffix={
            show ? (
              <Eye color="#3B424F" size={20} onClick={() => setShow(!show)} />
            ) : (
              <EyeOff
                color="#3B424F"
                size={20}
                onClick={() => setShow(!show)}
              />
            )
          }
        />
        <FlexLayout wrap="noWrap" spacing="loose">
          <Button type="TextButton" iconRound={false} icon={<HelpCircle />} />
          <TextStyles content="To have a strong password make sure your password contains one upper case alphabet, one lower case alphabet, one numeric and one special character" />
        </FlexLayout>
        <TextField
          type="password"
          placeHolder="Enter Confirm New Password"
          label="Confirm New Password"
          value={confirmpsw}
          onChange={(e) => setConfirmpsw(e)}
        />

        <Button
          content="Save"
          FullBtn={true}
          halign="Equal"
          thickness="thin"
          onClick={otpVerification}
        />
        <Button
          content="Return To Email"
          type="TextButton"
          icon={<ArrowLeft size={20} />}
          iconRound={false}
          onClick={() => {
            setLogin(false);
            setLinkMail(true);
            setRegistration(false);
            setResetPassword(false);
          }}
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
    );
  };

  return (
    <>
      <div className="init-LoginSimple__Wrapper">
        <div className="init-LoginSimple">
          <div className="init-LoginSimple--logoContent">
            <div className="init-LoginSimple--logo">
              <img src={cedcommercelogo} alt="cedcommerce logo not found" />
            </div>

            <div>
              <TextStyles
                content={props.heading}
                fontweight="bold"
                type="SubHeading"
              />
              <TextStyles
                content={props.subheading}
                textcolor="light"
                type="SubHeading"
              />
            </div>
          </div>

          <div className="init-LoginSimple--fields">
            <Card>
              {login && <Login />}
              {linkmail && <ForgotSimple />}
              {registration && <RegistrationSimple />}
              {resetpassword && <ResetPassword />}
            </Card>
          </div>

          <div className="inte-LoginSimple__Footer">
            <TextStyles content={props.footertitle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSimple;
