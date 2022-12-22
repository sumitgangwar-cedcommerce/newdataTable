import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import Alert from "../../components/Alerts/Alert";
import Button from "../../components/Button/Button";
import { Card } from "../../components/Card";
import { FlexLayout } from "../../components/FlexLayout";
import { FormElement, TextField, Radio } from "../../components/FormElement";
import TextStyles from "../../components/TextStyles/TextStyles";
import Footer from "../Components/Footer";
import Left from "../Components/Left";
import "../Onboard.css";

export default function Register() {
  const [value, setValue] = useState<string>("");
  const [password, setPassword] = useState<string | number>("");
  const [password1, setPassword1] = useState<string | number>("");
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
              Create Account
            </TextStyles>
            <hr className="mt-24 mb-44" />
            <FormElement>
              <Alert icon={false} type="info" destroy={false}>
                Enter organization {"/"} brand name
              </Alert>
              <TextField
                value={value}
                onChange={(e) => setValue(e)}
                autoFocus
                placeHolder="Enter Email"
              ></TextField>
              <TextField
                placeHolder="Enter Password"
                type={show ? "text" : "password"}
                strength
                suffix={
                  show ? (
                    <EyeOff
                      color="#3B424F"
                      size={20}
                      onClick={() => setShow(!show)}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <Eye
                      color="#3B424F"
                      size={20}
                      style={{ cursor: "pointer" }}
                      onClick={() => setShow(!show)}
                    />
                  )
                }
                value={password}
                onChange={(e) => setPassword(e)}
              ></TextField>
              <TextField
                placeHolder="Confirm Password"
                type={"password"}
                value={password1}
                onChange={(e) => setPassword1(e)}
              ></TextField>
              <FlexLayout halign="fill" valign="center">
                <Radio
                  labelVal="Accept Terms and Conditions"
                  name="Accept Terms and Conditions"
                ></Radio>
                <Button type="TextButton">Forgot Password?</Button>
              </FlexLayout>
            </FormElement>
            <hr className="my-24" />
            <Button thickness="large"FullBtn={true} onClick={() => {}}>
              Register
            </Button>
            <div className="bottom-text mt-44">
              <FlexLayout valign="center" halign="center" spacing="extraTight">
                <TextStyles>Already a Member?</TextStyles>
                <Button type="TextButton">Sign In</Button>
              </FlexLayout>
            </div>
            <Footer />
          </Card>
        </div>
      </div>
    </div>
  );
}
