/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./ActionList.css";

const ActionList: FC<ActionListI> = ({
  sections,
  activator,
 container = "body",
  open = false,
  onClose = () => {
    //
  },
  dropDownheight = 250,
}: ActionListI): JSX.Element => {
  const [id] = useState(() => Math.floor(Math.random() * 1000));
  const [openState, setOpenState] = useState(false);
  const myRef: any = useRef();
  const myReff: any = useRef();

  const myFun = (event: Event) => {
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
      onClose();
    }
  };
  useEffect(() => {
    if (openState) {
      window.addEventListener("click", myFun, false);
    }
    return () => {
      window.removeEventListener("click", myFun, false);
    };
  }, [openState]);

  useEffect(() => {
    if (myReff && myReff.current) {
      logit();
    }
  }, [myReff]);

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

  useEffect(() => {
    const ParentEle = getScrollParent(
      document.getElementById("inte-ActionList--Container_" + id)
    );

    const GrandParentEle = getScrollParent(ParentEle);
    function watchScroll() {
      window.addEventListener("scroll", logit);
      ParentEle?.addEventListener("scroll", logit);
      GrandParentEle?.addEventListener("scroll", logit);
    }
    function watchResize() {
      window.addEventListener("resize", logit);
      ParentEle?.addEventListener("resize", logit);
      GrandParentEle?.addEventListener("resize", logit);
    }
    watchScroll();
    watchResize();
    return () => {
      window.removeEventListener("scroll", logit);
      ParentEle?.removeEventListener("scroll", logit);
      GrandParentEle?.removeEventListener("scroll", logit);
      window.removeEventListener("resize", logit);
      ParentEle?.removeEventListener("resize", logit);
      GrandParentEle?.removeEventListener("resize", logit);
    };
  });

  function dyPos() {
    const windowheight = window.innerHeight; //Window Height
    const windowWidth = window.innerWidth; //Window Width
    const posactivator = positionObject.bottom; // position of elemet from Top
    const remainingBottomheight = windowheight - posactivator; // Remaining Bottom Space When Portal Opens
    const portalHeight = myReff.current?.offsetHeight ?? 0; // Portal Element Height scroll bottom to top

    if (portalHeight > remainingBottomheight) {
      const x = "inte-ActionList--top";
      if (windowWidth > positionObject.left + 250) {
        return {
          class: x,
          style: {
            left: positionObject.left,
            top: positionObject.top - portalHeight - 5,
          },
        };
      } else {
        if (windowWidth > positionObject.left + 250) {
          return {
            class: x,
            style: {
              left: positionObject.left,
              top: positionObject.top - portalHeight - 5,
            },
          };
        } else {
          if (positionObject.left + positionObject.width <= 250) {
            return {
              class: x,
              style: {
                left:
                  positionObject.left - (250 - positionObject.width) / 2 + 2,
                top: positionObject.top - portalHeight - 5,
              },
            };
          } else {
            return {
              class: x,
              style: {
                left: positionObject.left + positionObject.width - 250,
                top: positionObject.top - portalHeight - 5,
              },
            };
          }
        }
      }
    } else {
      const x = "inte-ActionList--bottom";
      if (windowWidth > positionObject.left + 250) {
        return {
          class: x,
          style: {
            left: positionObject.left,
            top: positionObject.top + positionObject.height + 5,
          },
        };
      } else {
        if (positionObject.left + positionObject.width <= 250) {
          return {
            class: x,
            style: {
              left: positionObject.left - (250 - positionObject.width) / 2 + 2,
              top: positionObject.top + positionObject.height + 5,
            },
          };
        } else {
          return {
            class: x,
            style: {
              left: positionObject.left + positionObject.width - 250,
              top: positionObject.top + positionObject.height + 5,
            },
          };
        }
      }
    }
  }
  const element = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= positionObject.left + 250) {
      const left = "inte-ActionList--Left";
      return {
        class: left,
      };
    } else {
      const right = "inte-ActionList--Right";
      return {
        class: right,
      };
    }
  };
  const pp = dyPos();
  const ele = element();

  const dropdownItem = (
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
                        <p className="inte-ActionList__Title">{item.content}</p>
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
  );

  const bodyPortal = (
    <div
      ref={myReff}
      className={`inte-ActionList--Wrapper  ${pp.class} `}
      id={"inte-ActionList--Wrapper" + id}
      style={{
        visibility: `${openState ? "visible" : "hidden"}`,
        // width: positionObject.width,
        position: "fixed",
        ...pp.style,
        zIndex: 99999,
      }}
    >
      {dropdownItem}
    </div>
  );

  const elementPortal = (
    <div
      ref={myReff}
      className={`inte-ActionList--Wrapper ${ele.class}`}
      id={"inte-ActionList--Wrapper" + id}
      style={{
        display: `${openState ? "block" : "none"}`,
      }}
    >
      {dropdownItem}
    </div>
  );

  return (
    <div
      ref={myRef}
      id={"inte-ActionList--Container_" + id}
      className={`inte-ActionList--Container`}
      onClick={() => {
        logit();
      }}
    >
      {activator}
      {!openState
        ? container == "element"
          ? elementPortal
          : bodyPortal
          : container == "body"
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
  sections: ObjI[];
  container?: "body" | "element";
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
