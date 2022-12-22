import React, { useState } from "react";
import Button from "../Button/Button";
import { Toast, Card, ToastWrapper } from "..";

export default {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    message: {
      description: " Accepts string value",
      control: {
        type: "text",
      },
      defaultValue: "Welcome",
    },
    type: {
      description: "You can change color",
      control: {
        type: "radio",
        options: ["success", "warning", "error", "none"],
      },
      defaultValue: "none",
    },
    timeout: {
      description: "set timer for toast",
      control: {
        type: "number",
      },
      defaultValue: 3000,
    },
  },
};

const Template = ({ ...rest }) => {
  const [active, setActive] = useState(true);
  const toggleActive = () => setActive((active) => !active);
  const type = ["success", "warning", "error", "none"];
  return (
    <Card title="Toast">
      <>
        <Button onClick={toggleActive}>click</Button>
        {active && (
          <ToastWrapper>
            <Toast
              message={rest.message}
              type={rest.type}
              timeout={rest.timeout}
              onDismiss={toggleActive}
            />
          </ToastWrapper>
        )}
      </>
    </Card>
  );
};

export const Primary = Template.bind({});
// Types Success
export const Success: any = Template.bind({});
Success.decorators = [
  () => {
    const [active, setActive] = useState(true);
    const toggleActive = () => setActive((active) => !active);
    return (
      <Card title="Success Toast">
        <>
          <Button onClick={toggleActive}>Success</Button>
          {active && (
            <ToastWrapper>
              <Toast
                message={"Success"}
                type="success"
                timeout={1000}
                onDismiss={toggleActive}
              />
            </ToastWrapper>
          )}
        </>
      </Card>
    );
  },
];
// Types Warning
export const Warning: any = Template.bind({});
Warning.decorators = [
  () => {
    const [active, setActive] = useState(true);
    const toggleActive = () => setActive((active) => !active);
    return (
      <Card title="Warning Toast">
        <>
          <Button onClick={toggleActive}>Warning</Button>
          {active && (
            <ToastWrapper>
              <Toast
                message="Warning"
                type="warning"
                timeout={1000}
                onDismiss={toggleActive}
              />
            </ToastWrapper>
          )}
        </>
      </Card>
    );
  },
];

// Types Error
export const Error: any = Template.bind({});

Error.decorators = [
  () => {
    const [active, setActive] = useState(true);
    const toggleActive = () => setActive((active) => !active);
    return (
      <Card title="Error Toast">
        <>
          <Button onClick={toggleActive}>Error</Button>
          {active && (
            <ToastWrapper>
              <Toast
                message="Error"
                type="error"
                timeout={1000}
                onDismiss={toggleActive}
              />
            </ToastWrapper>
          )}
        </>
      </Card>
    );
  },
];
// Types None
export const None: any = Template.bind({});

None.decorators = [
  () => {
    const [active, setActive] = useState(true);
    const toggleActive = () => setActive((active) => !active);
    return (
      <Card title="None Toast">
        <Button onClick={toggleActive}>None</Button>
        {active && (
          <ToastWrapper>
            <Toast
              message="None"
              type="none"
              timeout={1000}
              onDismiss={toggleActive}
            />
          </ToastWrapper>
        )}
      </Card>
    );
  },
];
// Types None
export const Timeout: any = Template.bind({});
Timeout.decorators = [
  () => {
    const [active, setActive] = useState(true);
    const toggleActive = () => setActive((active) => !active);
    return (
      <Card title="Timeout Toast">
        <Button onClick={toggleActive}>Timeout 1000</Button>
        {active && (
          <ToastWrapper>
            <Toast
              message="Timeout 1000"
              timeout={1000}
              onDismiss={toggleActive}
            />
          </ToastWrapper>
        )}
      </Card>
    );
  },
];
