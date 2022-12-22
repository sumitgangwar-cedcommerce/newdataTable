/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from "react";
import { ArrowLeft } from "react-feather";
import Button from "../../Button/Button";
import { FormElement, TextArea, TextField } from "../../FormElement";
import Toast from "../../Toast/Toastchild";
import ToastWrapper from "../../Toast/ToastWrapper";
import { Eye, EyeOff } from "react-feather";
import LRLayout from "../../LRLayout/LRLayout";
import TextStyles from "../../TextStyles/TextStyles";
import "./LoginPage.css";
import { FlexChild, FlexLayout } from "../../FlexLayout";

const LoginPage = (props: any) => {
  const [login, setLogin] = useState(true);
  const [linkmail, setLinkMail] = useState(false);
  const [registration, setRegistration] = useState(false);
  const [contact, setContact] = useState(false);
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive((active) => !active);

  const Login = () => {
    const [value, setvalue] = useState<string>("");
    const [password, setPassword] = useState<string | number>("");
    const [show, setShow] = useState(false);

    return (
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
            type="password"
            show={show}
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
              content="Forgot Password ?"
              type="TextButton"
              FullBtn={true}
              halign="End"
              onClick={() => {
                setLinkMail(true);
                setLogin(false);
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
        <FlexLayout valign="center" halign="fill">
          <FlexChild>
            <FlexLayout valign="center" spacing="loose">
              <TextStyles content="New User?" />
              <Button
                content="Register Now"
                type="TextButton"
                onClick={() => {
                  setLinkMail(false);
                  setLogin(false);
                  setRegistration(true);
                }}
              />
            </FlexLayout>
          </FlexChild>
          <Button
            content="Contact us"
            type="TextButton"
            onClick={() => {
              setLinkMail(false);
              setLogin(false);
              setRegistration(false);
              setContact(true);
            }}
          />
        </FlexLayout>
      </FormElement>
    );
  };

  const Forgot = () => {
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
          content="Send Authentication Link"
          FullBtn={true}
          halign="Equal"
          thickness="thin"
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
        <Button
          icon={<ArrowLeft />}
          iconAlign="left"
          iconRound={false}
          content="Return To Login"
          type="TextButton"
          halign="Equal"
          thickness="thin"
          onClick={() => {
            setLinkMail(false);
            setLogin(true);
          }}
        />
      </FormElement>
    );
  };

  const RegistrationPage = () => {
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
              setLinkMail(false);
              setLogin(true);
              setRegistration(false);
            }}
          />
          <TextStyles content=" if you already have an account" />
        </div>
      </FormElement>
    );
  };

  const Contact = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    return (
      <FormElement>
        <TextField
          type="text"
          label="Name"
          value={name}
          placeHolder="Enter Name"
          onChange={(e) => setName(e)}
        />

        <TextField
          type="text"
          label="Email"
          value={email}
          placeHolder="Enter Email"
          onChange={(e) => setEmail(e)}
        />
        <TextArea
          label="Message"
          placeHolder="Enter message"
          value={message}
          onChange={(e) => setMessage(e)}
        />
        <Button
          content="Send"
          FullBtn={true}
          thickness="thin"
          halign="Equal"
        />
      </FormElement>
    );
  };

  return (
    <>
      <div className="init-LoginPage__Wrapper">
        <div className="init-LoginPage">
          <LRLayout lrHelpText={props.subheading} title={props.heading}>
            {login && <Login />}
            {linkmail && <Forgot />}
            {registration && <RegistrationPage />}
            {contact && <Contact />}
          </LRLayout>
          <div className="inte-LoginPage__Footer">
            <TextStyles content={props.footertitle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
