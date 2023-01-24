/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import Button, { ButtonI } from "../Button/Button";
import { createPortal } from "react-dom";
import FlexLayout from "../FlexLayout/FlexLayout";
import "./ActionList.css";

const ActionList: FC<ActionListI> = ({
  sections,
  activator,
  popoverContainer = "body",
  open = false,
  onClose = () => {
    //
  },
  primaryAction,
  dropDownheight = 250,
  secondaryAction,
}: ActionListI): JSX.Element => {
  const [id] = useState(() => Math.floor(Math.random() * 1000));
  const [openState, setOpenState] = useState(false);
  const myRef: any = useRef();
  const myReff: any = useRef();

  function renderPrimaryAction() {
    if (primaryAction) {
      return (
        <Button
          thickness="extraThin"
          content={primaryAction.content ? primaryAction.content : "Submit"}
          {...primaryAction}
          type={primaryAction.type ? primaryAction.type : "Primary"}
        ></Button>
      );
    }
  }

  function renderSecondaryAction() {
    if (secondaryAction) {
      return (
        <Button
          thickness="extraThin"
          content={secondaryAction.content ? secondaryAction.content : "Close"}
          {...secondaryAction}
          type={secondaryAction.type ? secondaryAction.type : "Outlined"}
        ></Button>
      );
    }
  }

  function renderFooter() {
    if (primaryAction || secondaryAction) {
      return (
        <div className={"inte-ActionList--Footer"}>
          <FlexLayout halign="end" spacing="tight">
            {renderSecondaryAction()}
            {renderPrimaryAction()}
          </FlexLayout>
        </div>
      );
    }
  }

  useLayoutEffect(() => {
    const dropdownPopUp = myReff.current?.getBoundingClientRect();
  }, [myReff]);

  const scrollWindow = () => {
    var clientHeight = document.documentElement.clientHeight;
    if (myRef.current && myReff.current) {
      const object = myRef.current?.getBoundingClientRect(); // Button or Activator object
      const dropdownPopUp = myReff.current?.getBoundingClientRect(); // popup or popover object
      console.log(dropdownPopUp)
      const popUpStyle = myReff.current.style; // popup style
      const bottomSpace = clientHeight - object.bottom > dropdownPopUp.height; // get popup bottom space
      popUpStyle.width = `${object.width - 2}px`;
      popUpStyle.left = `${object.left + 1}px`;
      popUpStyle.top = `${object.bottom}px`;

      if (bottomSpace) {
        console.log("have")
        popUpStyle.top = `${object.bottom}px`;
        popUpStyle.left = `${object.left}px`;
      } else {
        console.log("not")
        popUpStyle.top = `${object.top - dropdownPopUp.height - 3}px`;
        popUpStyle.left = `${object.left}px`;
      }
    }
  };
  console.log(open)

  useEffect(() => {
    window.addEventListener("scroll", scrollWindow, true);
    window.addEventListener("resize", scrollWindow, true);
    return () => {
      window.removeEventListener("scroll", scrollWindow, true);
      window.removeEventListener("resize", scrollWindow, true);
    };
  }, []);

  useEffect(() => {
    setOpenState(open);
    scrollWindow()
  }, [open]);

  useLayoutEffect(() => {
    scrollWindow();
  }, [openState, open]);

  const bodyPortal = (
    <div
      ref={myReff}
      className={`inte-ActionList--Wrapper ${"pp.class"}`}
      id={"inte-ActionList--Wrapper" + id}
      style={{
        visibility: `${openState ? "visible" : "hidden"}`,
        position: "fixed",
        zIndex: 99999,
      }}
    >
      <ul
        style={{ maxHeight: dropDownheight + "px" }}
        className="inte-ActionList-section-container"
      >
        {sections?.map((items: any, indexs: any) => {
          return (
            <li key={indexs} className="inte-ActionList-group-section">
              {items.title && (
                <div className="inte-ActionList__Heading">{items.title}</div>
              )}
              <ul className="inte-ActionList-group-container">
                {items.items?.map((item: any, index: any) => {
                  return (
                    <li
                      key={index}
                      className={`inte-ActionList-group ${item.destructive ? "inte-ActionList--Destrctive" : ""
                        }`}
                      onClick={() => {
                        item.onClick();
                        // setOpenState(false);
                      }}
                    >
                      <div className="inte-ActionList__Content">
                        {item.prefixIcon && (
                          <div
                            className={`inte-ActionList__icon inte-ActionList__iconPrefix`}
                          >
                            {item.prefixIcon}
                          </div>
                        )}

                        <div className="inte-ActionList__ContentText">
                          <p className="inte-ActionList__Title">
                            {item.content}
                          </p>
                          {item.description && (
                            <p className="inte-ActionList__Description">
                              {item.description}
                            </p>
                          )}
                        </div>
                        {item.suffixIcon && (
                          <div
                            className={`inte-ActionList__icon inte-ActionList__iconSuffix`}
                          >
                            {item.suffixIcon}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      {renderFooter()}
    </div>
  );
  const elementPortal = (
    <div
      className="inte-ActionList--Wrapper"
      id={"inte-ActionList--Wrapper" + id}
      style={{
        display: `${openState ? "block" : "none"}`,
      }}
    >
      <ul
        style={{ maxHeight: dropDownheight + "px" }}
        className="inte-ActionList-section-container"
      >
        {sections?.map((items: any, indexs: any) => {
          return (
            <li key={indexs} className="inte-ActionList-group-section">
              {items.title && (
                <div className="inte-ActionList__Heading">{items.title}</div>
              )}
              <ul className="inte-ActionList-group-container">
                {items.items?.map((item: any, index: any) => {
                  return (
                    <li
                      key={index}
                      className={`inte-ActionList-group ${item.destructive ? "inte-ActionList--Destrctive" : ""
                        }`}
                      onClick={() => {
                        item.onClick();
                        // setOpenState(false);
                      }}
                    >
                      <div className="inte-ActionList__Content">
                        {item.prefixIcon && (
                          <div
                            className={`inte-ActionList__icon inte-ActionList__iconPrefix`}
                          >
                            <>{item.prefixIcon}</>
                          </div>
                        )}

                        <div className="inte-ActionList__ContentText">
                          <p className="inte-ActionList__Title">
                            {item.content}
                          </p>
                          {item.description && (
                            <p className="inte-ActionList__Description">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                      {item.suffixIcon && (
                        <div
                          className={`inte-ActionList__icon inte-ActionList__iconSuffix`}
                        >
                          <>{item.suffixIcon}</>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      {renderFooter()}
    </div>
  );

  return (
    <div
      ref={myRef}
      id={"inte-ActionList--Container_" + id}
      className="inte-ActionList--Container"
    >
      {activator}
      {openState ? createPortal(bodyPortal, document.body) : elementPortal}
    </div>
  );
};

export interface ActionListI {
  open?: boolean;
  activator: React.ReactNode;
  sections: ObjI[];
  primaryAction?: ButtonI;
  secondaryAction?: ButtonI;
  popoverContainer?: "body" | "element";
  dropDownheight?: number;
  onClose?: () => void;
}
interface ObjI {
  title?: string;
  items?: items[];
}
interface items {
  content?: string;
  destructive?: boolean;
  description?: string;
  onClick?: () => void;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

export default ActionList;