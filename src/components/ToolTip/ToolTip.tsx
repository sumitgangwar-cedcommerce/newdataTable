import React, { useState, useRef, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import "./ToolTip.css";

function ToolTip({
  children,
  helpText,
  position = "top",
  open = false,
  popoverContainer = "element",
  type = "dark",
  extraClass,
}: ToolTipI): JSX.Element {
  // Tooltip Portal code
  const [id] = useState(() => Math.floor(Math.random() * 1000));
  const [openState, setOpenState] = useState(false);
  const myRef: any = useRef();
  const myReff: any = useRef();

  function myFun(event: Event) {
    const getPath: EventTarget[] = event.composedPath();
    let flag = true;
    getPath.forEach((element: any) => {
      if (element.id === "inte-Tooltip-Parent_" + id) {
        flag = false;
      }
    });
    if (flag && open) {
      // onClose();
    }
  }

  useEffect(() => {
    if (myReff && myReff.current) {
      logit();
    }
  }, [myReff, children]);

  useEffect(() => {
    setOpenState(open);
    logit();
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
      document.getElementById("inte-Tooltip-Parent_" + id)
    );

    function watchScroll() {
      window.addEventListener("scroll", logit);
      ParentEle?.addEventListener("scroll", logit);
    }
    function watchResize() {
      window.addEventListener("resize", logit);
      ParentEle?.addEventListener("resize", logit);
    }
    watchScroll();
    watchResize();
    return () => {
      window.removeEventListener("scroll", logit);
      ParentEle?.removeEventListener("scroll", logit);
      window.removeEventListener("resize", logit);
      ParentEle?.removeEventListener("resize", logit);
    };
  });

  useEffect(() => {
    if (openState) {
      const rootDiv = document.getElementById("root");
      if (!rootDiv) return;
      rootDiv.addEventListener("MouseOver", myFun, false);
    }
    return () => {
      const rootDiv = document.getElementById("root");
      if (!rootDiv) return;
      rootDiv.removeEventListener("MouseOver", myFun, false);
    };
  }, [openState]);

  function dyPos() {
    const windowheight = window.innerHeight; //Window Height
    const posactivator = positionObject.bottom; // position of elemet from Top
    const posactivatortop = positionObject.top; // top remaining space
    const remainingBottomheight = windowheight - posactivator; // Remaining Bottom Space When Portal Opens
    const portalHeight = myReff.current?.offsetHeight ?? 0; // Portal Element Height
    const eleWidth = positionObject.right - positionObject.left;

    if (portalHeight > remainingBottomheight) {
      const x = "tooltip-top";
      return {
        class: x,
        style: {
          left: positionObject.left + eleWidth / 2,
          top: positionObject.top - portalHeight - 4,
        },
      };
    } else {
      const x = "tooltip-bottom";
      return {
        class: x,
        style: {
          left: positionObject.left + eleWidth / 2,
          top: positionObject.top + positionObject.height,
        },
      };
    }
  }

  const pp = dyPos();

  // Tooltip portal code end
  return (
    <span
      id={"inte-Tooltip-Parent_" + id}
      ref={myRef}
      className="inte__ToolTip"
      onMouseOver={() => {
        setOpenState(true);
      }}
      onMouseLeave={() => {
        setOpenState(false);
      }}
    >
      {" "}
      {!openState ? null : popoverContainer == "body" ? (
        createPortal(
          <>
            <div
              ref={myReff}
              style={{
                ...pp.style,
                position: "fixed",
                transform: "translateX(-50%)",
              }}
              className={`inte__ToolTip-bubble  ${pp.class} inte__Tooltip-bubble-Portal inte__ToolTip-${type} ${extraClass}`}
            >
              <div className="inte__ToolTip-message">{helpText}</div>
            </div>
          </>,
          document.body
        )
      ) : (
        <div
          ref={myReff}
          className={`inte__ToolTip-bubble inte__ToolTip-${position} inte__ToolTip-${type} ${extraClass}`}
        >
          <div className="inte__ToolTip-message">{helpText}</div>
        </div>
      )}
      <span className="inte__ToolTip-trigger">{children}</span>
    </span>
  );
}

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
  /* eslint-enable consistent-return */
};

export interface ToolTipI {
  children: React.ReactNode;
  helpText?: string | React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  open: boolean;
  popoverContainer?: "body" | "element";
  type?: "light" | "dark";
  extraClass?: string;
}

export default ToolTip;
