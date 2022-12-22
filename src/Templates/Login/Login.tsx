import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import Button from "../../components/Button/Button";
import { Card } from "../../components/Card";
import { FlexLayout } from "../../components/FlexLayout";
import { FormElement, TextField } from "../../components/FormElement";
import TextStyles from "../../components/TextStyles/TextStyles";
import Footer from "../Components/Footer";
import Left from "../Components/Left";
import "../Onboard.css";

export default function Login() {
  const [value, setValue] = useState<string>("");
  const [password, setPassword] = useState<string | number>("");
  const [show, setShow] = useState(false);
  return (
    <div className="inte-Onboard__Wrapper">
      <div className="inte-Onboard__Wrapper--Inner">
        <Left></Left>
        <div className="inte-Onboard__Right">
          <Card extraClass="inte-Onboard__RightCard--Light">
            <TextStyles
              type="Heading"
              headingTypes="LG-2.8"
              fontweight="extraBold"
            >
              Sign In
            </TextStyles>
            <hr className="mt-24 mb-44" />
            <FormElement>
              <TextField
                showHelp="Email Must not be blank"
                value={value}
                onChange={(e) => setValue(e)}
                autoFocus
                placeHolder="Enter Email"
              ></TextField>
              <TextField
                placeHolder="Enter Password"
                type="password"
                show={show}
                strength={show == false ? true : false}
                suffix={
                  show ? (
                    <EyeOff
                      color="#9FA4AD"
                      size={20}
                      onClick={() => setShow(!show)}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <Eye
                      color="#9FA4AD"
                      size={20}
                      style={{ cursor: "pointer" }}
                      onClick={() => setShow(!show)}
                    />
                  )
                }
                value={password}
                onChange={(e) => setPassword(e)}
              ></TextField>

              <div className="align-right">
                <Button type="TextButton">Forgot Password?</Button>
              </div>
            </FormElement>
            <hr className="my-24" />
            <Button thickness="large" FullBtn={true}>
              Sign In
            </Button>
            <div className="bottom-text mt-44">
              <FlexLayout valign="center" halign="center" spacing="extraTight">
                <TextStyles>Not a member yet?</TextStyles>
                <Button type="TextButton">Create an Account</Button>
              </FlexLayout>
            </div>
            <Footer />
          </Card>
        </div>
      </div>
    </div>
  );
}
