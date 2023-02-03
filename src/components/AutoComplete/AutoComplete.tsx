// / eslint-disable @typescript-eslint/no-unused-vars /
// / eslint-disable @typescript-eslint/no-explicit-any /
//  eslint-disable @typescript-eslint/no-explicit-any /
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Search } from "react-feather";
import { FlexChild, FlexLayout } from "../FlexLayout";
import { TextField } from "../FormElement";
import Skeleton from "../Skeleton/Skeleton";
import TextStyles from "../TextStyles/TextStyles";
import "./AutoComplete.css";

function AutoComplete({
  options,
  value = "",
  onChange,
  onClick,
  onEnter,
  label,
  prefix = <Search size={20} color="#7e828b" />,
  suffix,
  showHelp,
  setHiglighted,
  placeHolder,
  loading = false,
  extraClass,
  popoverPosition = "right",
  ...props
}: SearchI): JSX.Element {
  const [showList, setShowList] = useState<boolean>(true);
  const [showList1, setShowList1] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [hoveredCart, setHoveredCart] = useState(-1);
  const [currentID, setCurrentID] = useState("1");

  const filteredName = options.filter((val: any) => {
    if (value === "") {
      return val;
    } else if (
      val.label
        .toLowerCase()
        .includes(
          value.toLowerCase().replace(/\s+/g, " ").trimEnd().trimStart()
        )
    ) {
      return val;
    }
  });

  // Popover fix portal
  const myReff: any = useRef();
  const myReff2: any = useRef({});

  function myFun(event: Event) {
    const getPath: EventTarget[] = event.composedPath();
    let flag = true;
    getPath.forEach((element: any) => {
      if (element.id === currentID) {
        flag = false;
      }
    });
  }

  useEffect(() => {
    if (myReff && myReff.current) {
      logit();
    }
  }, [myReff]);

  useEffect(() => {
    setShowList(true);
    logit();
  }, [true, currentID]);

  const positionObjectMemo = useMemo(() => {
    return myReff2?.current?.[currentID]?.getBoundingClientRect()
      ? myReff2.current?.[currentID]?.getBoundingClientRect()
      : 10;
  }, []);

  const [positionObject, setpositionObject] = useState(positionObjectMemo);

  function logit() {
    const post = myReff2?.current?.[currentID]?.getBoundingClientRect()
      ? myReff2.current?.[currentID]?.getBoundingClientRect()
      : 10;
    setpositionObject(post);
    dyPos();
  }

  useEffect(() => {
    const ParentEle = getScrollParent(document.getElementById(currentID));

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
    if (showList) {
      const rootDiv = document.getElementById("root");
      if (!rootDiv) return;
      rootDiv.addEventListener("MouseEnter", myFun, false);
    }
    return () => {
      const rootDiv = document.getElementById("root");
      if (!rootDiv) return;
      rootDiv.removeEventListener("MouseEnter", myFun, false);
    };
  }, [showList]);

  function dyPos() {
    const portalHeight = myReff.current?.offsetHeight ?? 0; // Portal Element Height
    const portalWidth = myReff.current?.offsetWidth ?? 0; // Portal Element width
    if (popoverPosition == "top") {
      const x = "autocomplete-top";
      return {
        class: x,
        style: {
          left: positionObject.left,
          top: positionObject.top - portalHeight,
        },
      };
    } else if (popoverPosition == "left") {
      const x = "autocomplete-left";
      return {
        class: x,
        style: {
          left: positionObject.left - portalWidth,
          top: positionObject.top,
        },
      };
    } else if (popoverPosition == "bottom") {
      const x = "autocomplete-bottom";
      return {
        class: x,
        style: {
          left: positionObject.left,
          top: positionObject.top + 38,
        },
      };
    } else {
      const x = "autocomplete-right";
      return {
        class: x,
        style: {
          left: positionObject.right,
          top: positionObject.bottom - 38,
        },
      };
    }
  }

  const pp = dyPos();

  const ref: any = useRef(true);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!ref?.current?.contains(event.target)) {
        setShowList(false);
        setShowList1(false);
      } else {
        setShowList(true);
        setShowList1(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);
  const showCartHandler = (i: any) => {
    setHoveredCart(i);
  };

  const hideCartHandler = () => {
    setHoveredCart(-1);
  };
  const renderStatementResult =
    value && value.length > 0 && value !== "" && showList == true;
  function onFocus() {
    setShowList(true);
    setShowList1(true);
    setShow(true);
  }

  function highlight(label: string, text: string) {
    const index = label
      .toLowerCase()
      .indexOf(text.toLowerCase().replace(/\s+/g, " ").trimEnd().trimStart());
    if (index >= 0) {
      return (
        <>
          {label.substring(0, index)}
          <span style={{ color: "#1C2433" }}>
            {label.substring(
              index,
              index + text.replace(/\s+/g, " ").trimEnd().trimStart().length
            )}
          </span>

          {label.substring(
            index + text.replace(/\s+/g, " ").trimEnd().trimStart().length
          )}
        </>
      );
    }
    return label;
  }
  return (
    <>
      <div
        ref={ref}
        onKeyPress={(e) => {
          if (e.key === "Enter" && onEnter) {
            setShowList(false);
            setShowList1(false);
            onEnter(value);
          }
        }}
        className={`inte__AutoComplete ${label ? "inte__AutoComplete--hasName" : false
          } ${props.showPopover && "inte__AutoComplete--HasPopover"} ${props.showPopover && "inte__AutoComplete-Position" + popoverPosition
          }`}
      >
        <TextField
          type="text"
          value={value}
          showHelp={showHelp}
          label={label}
          prefix={prefix}
          suffix={suffix}
          placeHolder={placeHolder}
          loading={loading}
          clearButton={props.clearButton}
          clearFunction={props.clearFunction}
          onChange={(event) => {
            setShowList(true);
            setShowList1(true);
            onChange(event);
          }}
          onFocus={onFocus}
        />

        {renderStatementResult &&
          filteredName.length > 0 &&
          show &&
          value.trim() ? (
          <ul className={`inte-popover-container ${extraClass}`}>
            <>
              {filteredName.map((values: any, index: any) => {
                return (
                  <li
                    ref={(node) => {
                      myReff2.current[values.id] = node;
                    }}
                    id={values.id}
                    key={index}
                    onClick={() => {
                      setShowList(false);
                      setShowList1(false);
                      onChange(values.label);
                      // onFocus;
                      onClick(values.label, values.id);
                    }}
                    onMouseLeave={hideCartHandler}
                    onMouseEnter={() => {
                      showCartHandler(index);
                      setCurrentID(values.id);
                    }}
                  >
                    <FlexLayout halign="fill" wrap="noWrap">
                      <FlexChild key={index}>
                        {setHiglighted ? (
                          <span style={{ color: "var(--inte-G90" }}>
                            {highlight(values.value, value)}
                          </span>
                        ) : (
                          <span style={{ color: "#8C9098" }}>
                            {values.label}
                          </span>
                        )}
                      </FlexChild>

                      {values.lname !== undefined && (
                        <span style={{ color: "var(--inte-G90)" }}>
                          {values.lname}
                        </span>
                      )}
                    </FlexLayout>

                    {hoveredCart === index &&
                      values.popoverContent !== undefined &&
                      props.showPopover &&
                      createPortal(
                        <>
                          <div
                            ref={myReff}
                            id={values.id}
                            style={{ position: "fixed", ...pp.style }}
                            className={`inte-AutoComplete--Popover ${pp.class}`}
                          >
                            <div className="inte-AutoComplet--Popover-Inner">
                              {values.popoverContent}
                            </div>
                          </div>
                        </>,
                        document.body
                      )}
                  </li>
                );
              })}
            </>
          </ul>
        ) : (
          <>
            {showList1 && value.length > 0 && value.trim() && show ? (
              <ul
                ref={myReff}
                className={`inte-popover-container inte-popover-container--Empty ${extraClass}`}
              >
                <FlexLayout
                  spacing="extraTight"
                  direction="vertical"
                  valign={loading ? undefined : "center"}
                  desktopWidth={loading ? "100" : ""}
                >
                  {loading ? (
                    ""
                  ) : (
                    <Search height={20} size={20} color="#7e828b"></Search>
                  )}
                  {loading ? (
                    <Skeleton line={3} type="line" height="20px" />
                  ) : (
                    <FlexLayout
                      spacing="tight"
                      halign="center"
                      direction="vertical"
                      valign="center"
                    >
                      <TextStyles textcolor="light">
                        No Results Found
                      </TextStyles>
                      <h3
                        style={{ textAlign: "center" }}
                        className="inte__text  inte__text--light none inte__font--normal"
                      >
                        Check Your Search Term{" "}
                        <strong>
                          <pre
                            style={{ display: "inline", whiteSpace: "normal" }}
                          >
                            "{value}"
                          </pre>
                        </strong>{" "}
                      </h3>
                    </FlexLayout>
                  )}
                </FlexLayout>
              </ul>
            ) : null}
          </>
        )}
      </div>
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
export interface SearchI {
  options?: any;
  value?: string;
  label?: string;
  onEnter?: ((e: string) => void) | any;
  onChange?: ((e: string) => void) | any;
  onClick?: ((e: string) => void) | any;
  placeHolder?: string;
  showHelp?: string;
  prefix?: string | React.ReactNode;
  suffix?: React.ReactNode;
  setHiglighted?: boolean;
  loading?: boolean;
  clearButton?: boolean;
  clearFunction?: ((e: string) => void) | any;
  showPopover?: boolean | any;
  popoverPosition?: "right" | "left" | "top" | "bottom";
  extraClass?: string;
}

export default AutoComplete;
