import React, { useState, useRef, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import "./ToolTip.css";

function ToolTip({
  children,
  helpText,
  position = "top",
  open = false,
  popoverContainer = "body",
  extraClass,
}: ToolTipI): JSX.Element {
  const [id] = useState(() => Math.floor(Math.random() * 1000));
  const [openState, setOpenState] = useState(open);
  const myRef: any = useRef();
  const myReff: any = useRef();

  useEffect(() => {
    logit();
  }, [myReff, children]);

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

  const dyPos = () => {
    const windowheight = window.innerHeight; //Window Height
    const posactivator = positionObject.bottom; // position of elemet from Top
    const remainingBottomheight = windowheight - posactivator; // Remaining Bottom Space When Portal Opens
    const portalHeight = myReff.current?.offsetHeight ?? 0; // Portal Element Height
    const popoverlWidth = myReff.current?.offsetWidth ?? 0; // Portal Element Width
    const windowWidth = window.innerWidth; // get window inner width
    const halfWidth = positionObject.width / 2; // get object half width

    if (portalHeight > remainingBottomheight) {
      const x = "tooltip-top";
      if (popoverlWidth / 2 > positionObject.left + halfWidth) {
        return {
          class: x,
          style: {
            left: positionObject.left,
            top: positionObject.top - portalHeight,
            svgTopIndex: halfWidth,
          },
        };
      } else if (
        windowWidth >=
        positionObject.right + popoverlWidth / 2 - halfWidth
      ) {
        return {
          class: x,
          style: {
            left: positionObject.left + halfWidth - popoverlWidth / 2,
            top: positionObject.top - portalHeight,
            svgTopIndex: popoverlWidth / 2,
          },
        };
      } else {
        return {
          class: x,
          style: {
            left: positionObject.left + positionObject.width - popoverlWidth,
            top: positionObject.top - portalHeight,
            svgTopIndex: popoverlWidth - halfWidth,
          },
        };
      }
    } else {
      const x = "tooltip-bottom";
      if (popoverlWidth / 2 > positionObject.left + halfWidth) {
        return {
          class: x,
          style: {
            left: positionObject.left,
            top: positionObject.top + positionObject.height,
            svgBottomIndex: halfWidth,
          },
        };
      } else if (
        windowWidth >=
        positionObject.right + popoverlWidth / 2 - halfWidth
      ) {
        return {
          class: x,
          style: {
            left: positionObject.left + halfWidth - popoverlWidth / 2,
            top: positionObject.top + positionObject.height,
            svgBottomIndex: popoverlWidth / 2,
          },
        };
      } else {
        return {
          class: x,
          style: {
            left: positionObject.left + positionObject.width - popoverlWidth,
            top: positionObject.top + positionObject.height,
            svgBottomIndex: popoverlWidth - positionObject.width / 2,
          },
        };
      }
    }
  };

  const pp = dyPos();

  const bottom = {
    left: pp.style.svgBottomIndex,
    top: "0px",
    transform: "rotate(90deg) translateY(50%)",
    padding: "0 0 0.9rem 0",
  };
  const top = {
    left: pp.style.svgTopIndex,
    bottom: "0px",
    padding: "0.9rem 0 0 0",
    transform: "rotate(270deg) translateY(-50%)",
  };

  const bodyPortal = (
    <div
      ref={myReff}
      style={{
        ...pp.style,
        position: "fixed",
        padding: pp.class == "tooltip-bottom" ? top.padding : bottom.padding,
        visibility: `${openState ? "visible" : "hidden"}`,
      }}
      className={`inte__ToolTip-dark ${pp.class} ${extraClass} `}
    >
      <span
        className={`inte__ToolTip-pointer`}
        style={{
          position: "absolute",
          display: "inline-flex",
          top: pp.class == "tooltip-bottom" ? bottom.top : "",
          bottom: pp.class == "tooltip-top" ? top.bottom : "",
          left: pp.class == "tooltip-bottom" ? bottom.left : top.left,
          transform:
            pp.class == "tooltip-bottom" ? bottom.transform : top.transform,
        }}
      >
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0V12L0 6L6 0Z"
            fill={"black"}
          />
        </svg>
      </span>

      <div className="inte__ToolTip-message">{helpText}</div>
    </div>
  );
  const elementPortal = (
    <div
      className={`inte__ToolTip-bubble inte__ToolTip-${position} inte__ToolTip-dark ${extraClass}`}
      style={{
        display: `${openState ? "" : "none"}`,
      }}
    >
      <span className="inte__ToolTip-pointer">
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0V12L0 6L6 0Z"
            fill={"black"}
          />
        </svg>
      </span>
      <div className="inte__ToolTip-message">{helpText}</div>
    </div>
  );

  // Tooltip portal code end
  return (
    <>
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
      {!openState
        ? popoverContainer == "element"
          ? elementPortal
          : createPortal(bodyPortal, document.body)
        : popoverContainer == "body"
        ? createPortal(bodyPortal, document.body)
        : elementPortal}

      <span className="inte__ToolTip-trigger">{children}</span>
    </span>
    </>
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
  extraClass?: string;
}

export default ToolTip;