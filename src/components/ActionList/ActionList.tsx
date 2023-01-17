/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  FC,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Button, { ButtonI } from "../Button/Button";
import { createPortal } from "react-dom";
import FlexLayout from "../FlexLayout/FlexLayout";
import "./ActionList.css";

const ActionList: FC<ActionListI> = ({
  sections,
  activator,
  direction = "left",
  popoverContainer = "body",
  open = false,
  onClose,
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
  const checkAlignment = () => {
    switch (direction) {
      case "left":
        return "inte-ActionList--Left";
      case "right":
        return "inte-ActionList--Right";
    }
  };

  function myFun(event: Event) {
    const getPath: EventTarget[] = event.composedPath();
    let flag = true;
    for (let i = 0; i < getPath.length; i++) {
      const element = getPath[i] as any;
      if (
        element.id == `inte-ActionList--Container_${id}` ||
        element.id === `inte-ActionList--Wrapper${id}`
      ) {
        flag = false;
      }
    }

    if (flag && open) {
      onClose?.();
    }
  }
  useEffect(() => {
    if (openState) {
      window.addEventListener("click", myFun, false);
    }
    return () => {
      window.removeEventListener("click", myFun, false);
    };
  }, [openState]);

  useEffect(() => {
    setOpenState(open);
  }, [open]);

  const positionObjectMemo = useMemo(() => {
    return myRef.current?.getBoundingClientRect()
      ? myRef.current?.getBoundingClientRect()
      : 10;
  }, []);

  const [positionObject, setpositionObject] = useState(positionObjectMemo);

  function logit() {
    const post = myRef.current?.getBoundingClientRect()
      ? myRef.current?.getBoundingClientRect()
      : 10;
    setpositionObject(post);
  }

  useLayoutEffect(() => {
    const ParentEle = getScrollParent(
      document.getElementById("inte-ActionList--Container_" + id)
    );
    const GrandParentEle = getScrollParent(ParentEle);
    function watchScroll() {
      window.addEventListener("scroll", logit);
      ParentEle?.addEventListener("scroll", logit);
      GrandParentEle?.addEventListener("scroll", logit);
    }
    watchScroll();

    return () => {
      window.removeEventListener("scroll", logit);
      ParentEle?.removeEventListener("scroll", logit);
      GrandParentEle?.removeEventListener("scroll", logit);
    };
  });

  function dyPos() {
    const windowWidths = window.innerWidth;
    const remainingrightWidth = windowWidths - positionObject.right;
    const eleWidth = positionObject.right - positionObject.x;

    if (remainingrightWidth > positionObject.width) {
      const x = "inte-ActionList--Left";
      return {
        class: x,
        style: {
          left: positionObject.right - eleWidth,
          top: positionObject.top + positionObject.height + 5,
        },
      };
    } else {
      const x = "inte-ActionList--Right";
      return {
        class: x,
        style: {
          left: positionObject.right - 250,
          top: positionObject.top + positionObject.height + 5,
        },
      };
    }
  }

  const pp = dyPos();
  const popoverdirection = checkAlignment();

  const bodyPortal = (
    <div
      ref={myReff}
      className={`inte-ActionList--Wrapper ${pp.class}`}
      id={"inte-ActionList--Wrapper" + id}
      style={{
        width: positionObject.width,
        position: "fixed",
        ...pp.style,
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
                      className={`inte-ActionList-group ${
                        item.destructive ? "inte-ActionList--Destrctive" : ""
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
      ref={myReff}
      className="inte-ActionList--Wrapper"
      id={"inte-ActionList--Wrapper" + id}
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
                      className={`inte-ActionList-group ${
                        item.destructive ? "inte-ActionList--Destrctive" : ""
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
      className={`inte-ActionList--Container ${popoverdirection}`}
      onClick={() => {
        logit();
      }}
    >
      {activator}

      {!openState
        ? null
        : popoverContainer == "body"
        ? createPortal(bodyPortal, document.body)
        : elementPortal}
    </div>
  );
};

export const getScrollParent = (node: any) => {
  const regex = /(auto|scroll)/;
  const parents: any = (_node: any, ps: any) => {
    if (_node.parentNode === null) {
      return ps;
    }
    return parents(_node.parentNode, ps.concat([_node]));
  };

  const style = (_node: any, prop: any) =>
    getComputedStyle(_node, null).getPropertyValue(prop);
  const overflow = (_node: any) =>
    style(_node, "overflow") +
    style(_node, "overflow-y") +
    style(_node, "overflow-x");
  const scroll = (_node: any) => regex.test(overflow(_node));

  const scrollParent = (_node: any) => {
    if (!(_node instanceof HTMLElement || _node instanceof SVGElement)) {
      return;
    }

    const ps = parents(_node.parentNode, []);

    for (let i = 0; i < ps.length; i += 1) {
      if (scroll(ps[i])) {
        return ps[i];
      }
    }

    return document.scrollingElement || document.documentElement;
  };

  return scrollParent(node);
};
export interface ActionListI {
  open?: boolean;
  activator: React.ReactNode;
  sections?: any;
  primaryAction?: ButtonI;
  secondaryAction?: ButtonI;
  direction?: "left" | "right";
  popoverContainer?: "body" | "element";
  dropDownheight?: number;
  onClose?: () => void;
}
export default ActionList;
