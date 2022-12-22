import React, { useState, useRef, useEffect, useMemo } from "react";
import CSSTransition from 'react-transition-group';
import { createPortal } from "react-dom";
import "./ToolTip.css";

function ToolTipA({
  children,
  helpText,
  position = "top",
  open = false,
  popoverContainer = "element",
  type = "dark",
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
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
      ParentEle?.removeEventListener("scroll", logit);
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
    const remainingBottomheight = windowheight - posactivator; // Remaining Bottom Space When Portal Opens
    const remainingRightWidth =window.innerWidth -positionObject.right; //Right side space from element
    const eleWidth = positionObject.right - positionObject.left; // Activator Width
    const portalHeight = myReff.current?.offsetHeight ?? 0; // Portal Element Height
    const portalWidth = myReff.current?.offsetWidth ?? 0; // Portal Element width
    if (portalHeight > remainingBottomheight) {
      const x = "tooltip-top";
      return {
        class: x,
        style: {
          left: positionObject.left + eleWidth / 2,
          top: positionObject.top - portalHeight,
        },
      };
    }
    else if(remainingRightWidth < portalWidth){
      const x = "tooltip-left";
      return {
        class: x,
        style: {
          left: positionObject.left - portalWidth ,
          top: positionObject.top,
        },
      };
    }

  else if(portalHeight > positionObject.top){
    const x = "tooltip-bottom";
      return {
        class: x,
        style: {
          left: positionObject.left ,
          top: positionObject.top + 38,
        },
      };
  }
    else {
      const x = "tooltip-right";
      return {
        class: x,
        style: {
          left: positionObject.right + eleWidth / 2,
          top: positionObject.bottom - 38,
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
      {!openState ? null : popoverContainer == "body" ? (
        createPortal(
          <div
            ref={myReff}
            style={{
              ...pp.style,
              position: "fixed",
              transform: "translateX(-50%)",
            }}
            className={`inte__ToolTip-bubble  ${pp.class} inte__Tooltip-bubble-Portal inte__ToolTip-${type}`}
          >
            <div className="inte__ToolTip-message">{helpText}</div>
          </div>,
          document.body
        )
      ) : (
        
        <div
          ref={myReff}
          className={`inte__ToolTip-bubble inte__ToolTip-${position} inte__ToolTip-${type}`}
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
}

export default ToolTipA;
