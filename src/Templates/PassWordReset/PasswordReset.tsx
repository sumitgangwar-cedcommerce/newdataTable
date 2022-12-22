import React, { useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "react-feather";
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
              Generate Password Reset link
            </TextStyles>
            <hr className="mt-24 mb-44" />
            <FormElement>
              <Alert type="info" destroy={false}>
                We will send you a link on your email to reset your password{" "}
                {"."}
              </Alert>
              <TextField
                value={value}
                onChange={(e) => setValue(e)}
                autoFocus
                placeHolder="Enter Email"
              ></TextField>
            </FormElement>
            <hr className="my-24" />
            <FlexLayout direction="vertical" spacing="loose">
              <Button thickness="large" FullBtn={true} onClick={() => {}}>
                Generate Link
              </Button>
              <Button
                icon={<ArrowLeft />}
                iconAlign="left"
                type="Outlined"
                thickness="large"
                FullBtn={true}
                onClick={() => {}}
              >
                Back to Login
              </Button>
            </FlexLayout>
            <Footer />
          </Card>
        </div>
      </div>
    </div>
  );
}
