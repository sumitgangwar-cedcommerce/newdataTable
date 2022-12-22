import React, { useState } from "react";
import { FC } from "react";
import { Button, Card, FlexLayout, TextStyles, Toast, ToastWrapper } from "..";

const CopyClipboard: FC<CopyClipboardI> = ({
  value = "",
  label,
  align = "none",
}: CopyClipboardI): JSX.Element => {
  const [status, setstatus] = useState(false);
  const [active, setactive] = useState(false);
  function copyText(): void {
    !status
      ? navigator.clipboard.writeText(value)
      : navigator.clipboard.writeText("");
  }
  return (
    <>
      {active && (
        <ToastWrapper>
          <Toast
            message={"Copied"}
            type={"success"}
            timeout={3000}
            onDismiss={() => setactive(false)}
          />
        </ToastWrapper>
      )}
      <FlexLayout halign={align} valign="center" spacing="none">
        <TextStyles>{label}</TextStyles>
        <Button
          type="Outlined"
          thickness="extraThin"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
            </svg>
          }
          onClick={() => {
            copyText();
            setstatus(!status);
            !status && setactive(!active);
          }}
        ></Button>
      </FlexLayout>
    </>
  );
};
export interface CopyClipboardI {
  value?: string | any;
  label?: string | any;
  align?: "fill" | "center" | "end" | "none";
}
export default CopyClipboard;
