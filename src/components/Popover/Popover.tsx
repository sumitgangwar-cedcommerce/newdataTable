/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef, useMemo, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import "./Popover.css";

const Popover: React.FC<PopoverI> = ({
  open = false,
  children,
  popoverContainer = "body",
  activator,
  onClose = () => {
    //
  },
  popoverWidth = 200,
}: PopoverI) => {
  const [id] = useState(() => Math.floor(Math.random() * 1000));
  const [openState, setOpenState] = useState(false);
  const myRef: any = useRef();
  const myReff: any = useRef();
  const [storeData, setStoreData] = useState(0);
  useLayoutEffect(() => {
    setStoreData(myReff.current?.offsetHeight);
  }, []);

  function myFun(event: Event) {
    const getPath: EventTarget[] = event.composedPath();
    let flag = true;
    for (let i = 0; i < getPath.length; i++) {
      const element = getPath[i] as any;
      if (
        element.id == `pop_parent_${id}` ||
        element.id === `inte__Popover--Item${id}`
      ) {
        flag = false;
      }
    }

    if (flag && open) {
      onClose();
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
    if (myReff && myReff.current) {
      logit();
    }
  }, [myReff, children]);

  useEffect(() => {
    setOpenState(open);
    // logit();
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
    // dyPos();
  }

  useEffect(() => {
    const ParentEle = getScrollParent(
      document.getElementById("pop_parent_" + id)
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
    const posactivator = positionObject.bottom; // position of elemet from Top
    const remainingBottomheight = windowheight - posactivator; // Remaining Bottom Space When Portal Opens
    const portalHeight = myReff.current?.offsetHeight ?? 0; // Portal Element Height
    if (portalHeight > remainingBottomheight) {
      const x = "popover-top";
      return {
        class: x,
        style: {
          left: positionObject.left + positionObject.width - popoverWidth,
          top: positionObject.top - portalHeight - 5,
        },
      };
    } else {
      const x = "popover-bottom";
      return {
        class: x,
        style: {
          left: positionObject.left + positionObject.width - popoverWidth,
          top: positionObject.top + positionObject.height + 5,
        },
      };
    }
  }
  const pp = dyPos();
  const showElement = (value: any) => {
    switch (value) {
      case "body":
        return (
          <>
            {createPortal(
              <div
                ref={myReff}
                style={{
                  ...pp.style,
                  position: "fixed",
                  width: popoverWidth + "px",
                  visibility: `${openState ? "visible" : "hidden"}`,
                }}
                className={`inte__Popover-Wrapper inte__Popover-Wrapper--Body ${pp.class}`}
                id={"inte__Popover--Item" + id}
              >
                {children}
              </div>,
              document.body
            )}
          </>
        );
      case "element":
        return (
          <div
            ref={myReff}
            style={{
              position: "absolute",
              width: popoverWidth + "px",
              visibility: `${openState ? "visible" : "hidden"}`,
            }}
            className={`inte__Popover-Wrapper inte__Popover-Wrapper--Element`}
            id={"inte__Popover--Item" + id}
          >
            {children}
          </div>
        );
    }
  };

  return (
    <div
      id={"pop_parent_" + id}
      ref={myRef}
      onClick={() => {
        logit();
      }}
      className={`popover-parent`}
    >
      {activator}
      {popoverContainer == "body"
        ? showElement("body")
        : showElement("element")}

      {/* {!openState ? (
        <div
          ref={myReff}
          style={{
            position: "fixed",
            width: popoverWidth + "px",
            visibility: "hidden",
            opacity: 0,
          }}
          className={`inte__Popover-Wrapper inte__Popover-Wrapper--Fake`}
          id={"inte__Popover--Item" + id}
        >
          {children}
        </div>
      ) : popoverContainer == "body" ? (
        createPortal(
          <div
            ref={myReff}
            style={{
              ...pp.style,
              position: "fixed",
              width: popoverWidth + "px",
            }}
            className={`inte__Popover-Wrapper inte__Popover-Wrapper--Body ${pp.class}`}
            id={"inte__Popover--Item" + id}
          >
            {children}
          </div>,
          document.body
        )
      ) : (
        <div
          ref={myReff}
          style={{
            position: "absolute",
            width: popoverWidth + "px",
          }}
          className={`inte__Popover-Wrapper inte__Popover-Wrapper--Element`}
          id={"inte__Popover--Item" + id}
        >
          {children}
        </div>
      )} */}
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
    if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
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
  /* eslint-enable consistent-return */
};

export interface PopoverI {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  activator: React.ReactNode;
  popoverContainer?: "body" | "element";
  popoverWidth?: number;
}

export default Popover;
