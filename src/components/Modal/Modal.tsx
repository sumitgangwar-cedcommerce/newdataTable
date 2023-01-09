import React, { useEffect, useState } from "react";
import { ButtonI } from "../Button/Button";
import { createPortal } from "react-dom";
import { FlexLayout, Button, TextStyles } from "..";
import "./Modal.css";
import { X } from "react-feather";

const Modal: React.FC<ModalI> = ({
  modalSize = "small",
  heading = "",
  overlayClose = false,
  extraClass,
  ...props
}: ModalI) => {
  const [id] = useState(() => "-" + Math.floor(Math.random() * 1000));
  useEffect(() => {
    if (props.open) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("inte-Modal--Open");
    } else {
      document.body.style.removeProperty("overflow");
      document.body.classList.remove("inte-Modal--Open");
    }
  }, [props.open]);

  function checModalkWidth() {
    switch (modalSize) {
      case "small":
        return "inte-Modal-Dialog--Small";
      case "medium":
        return "inte-Modal-Dialog--Medium";
      case "large":
        return "inte-Modal-Dialog--Large";
      default:
        return "";
    }
  }
  const modalWidth = checModalkWidth();

  return createPortal(
    <>
      {props.open && (
        <>
          <div
            id={`inte-Modal-${id}`}
            className={`inte-Modal__Wrapper ${extraClass}`}
          >
            <div className={"inte-Modal-Dialog__Container"}>
              <div className={"inte-Modal-Dialog"}>
                <div className={`inte-Modal-Dialog__Modal ${modalWidth}`}>
                  {heading.length > 0 && (
                    <div className={"inte-Modal-Header"}>
                      <div className={"inte-Modal-Header__Title"}>
                        <TextStyles
                          type="Subheading"
                          subheadingTypes="XS-1.6"
                          lineHeight="LH-1.6"
                          fontweight="bold"
                        >
                          {heading}
                        </TextStyles>
                      </div>
                      <Button
                        thickness="thin"
                        type="Secondary"
                        icon={<X size={20} color={"#2a2a2a"} />}
                        onClick={() => {
                          props.close();
                        }}
                      ></Button>
                    </div>
                  )}
                  <div className={"inte-Modal__BodyWrapper"}>
                    <div
                      className={
                        "inte-Modal__Body inte-Scrollable inte-Scrollable--vertical"
                      }
                    >
                      <div className={"inte-Modal-Section"}>
                        {props.children}
                      </div>
                    </div>
                  </div>
                  <>{renderFooter()}</>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                overlayClose ? props.close() : {};
              }}
              className={"inte-Backdrop"}
            />
          </div>
        </>
      )}
    </>,
    document.body
  );

  function renderFooter() {
    if (props.primaryAction || props.secondaryAction) {
      return (
        <div className={"inte-Modal-Footer"}>
          <div className={"inte-Modal-Footer__FooterContent"}>
            <FlexLayout halign="end" spacing="tight" halignMob="start">
              {secondaryAction()}
              {primaryAction()}
            </FlexLayout>
          </div>
        </div>
      );
    }
  }

  function primaryAction() {
    if (props.primaryAction) {
      const primaryAction = props.primaryAction;
      return (
        <Button
          thickness="thin"
          content={primaryAction.content ? primaryAction.content : "Submit"}
          {...primaryAction}
          type={primaryAction.type ? primaryAction.type : "Primary"}
        ></Button>
      );
    }
  }

  function secondaryAction() {
    if (props.secondaryAction) {
      const secondaryAction = props.secondaryAction;
      return (
        <Button
          thickness="thin"
          content={secondaryAction.content ? secondaryAction.content : "Close"}
          {...secondaryAction}
          type={secondaryAction.type ? secondaryAction.type : "Outlined"}
        ></Button>
      );
    }
  }
};

export interface ModalI {
  children: React.ReactNode;
  heading?: string;
  open: boolean;
  modalSize?: "small" | "medium" | "large";
  close: () => void;
  primaryAction?: ButtonI;
  secondaryAction?: ButtonI;
  overlayClose?: boolean;
  extraClass?: string;
}

export default Modal;
