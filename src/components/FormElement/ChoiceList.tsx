/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef, useMemo } from "react";
import { TextStyles, CheckBox, TextField } from "..";
import { FlexLayout } from "../FlexLayout";
import { createPortal } from "react-dom";
import Tag from "../Tag/Tag";
import { ChevronDown, Search } from "react-feather";
import "../../styles.module.css";
import "./FormElement.css";
export interface SelectI {
  options?: Array<ObjI>;
  thickness?: "thin" | "thick";
  onChange?: (value: string, obj?: ObjI) => void;
  value?: string[];
  name?: string | React.ReactNode;
  selectHelp?: string | React.ReactNode;
  helpIcon?: React.ReactNode;
  placeholder?: string;
  showBadges?: boolean;
  error?: boolean;
  searchEable?: boolean;
  disabled?: boolean;
  childFlexOptions?: any;
  ellipsis?: boolean;
  popoverContainer?: "body" | "element";
  required?: boolean;
}
interface ObjI extends GroupI {
  label: string;
  value: string;
  groupLabel?: string;
  description?: string;
}
interface GroupI {
  group?: ObjI[];
}
function ChoiceList({
  thickness = "thick",
  options = [],
  onChange = () => null,
  value = [],
  selectHelp,
  helpIcon,
  name = undefined,
  error,
  placeholder = "Select Items",
  showBadges = false,
  disabled,
  ellipsis = false,
  searchEable,
  childFlexOptions = {},
  required = false,
  popoverContainer = "body",
}: SelectI): JSX.Element {
  const [displayMenu, setdisplayMenu] = useState(false);
  const [id] = useState(() => "-" + Math.floor(Math.random() * 1000));
  const [searchValue, updateSearch] = useState("");
  const myRef: any = useRef();
  const myReff: any = useRef();
  function getThickness() {
    switch (thickness) {
      case "thin":
        return "inte-select--thin";
      case "thin":
        return "inte-select--thick";
      default:
        return "inte-select--thick";
    }
  }
  function myFun(event: Event) {
    const getPath: EventTarget[] = event.composedPath();
    let flag = true;
    getPath.forEach((element: any) => {
      if (
        element.id === "inte-Select__ChoiceList--Item" + id ||
        element.id === "inte-Select__ChoiceList" + id
      ) {
        flag = false;
      }
    });
    if (flag) setdisplayMenu(false);
  }
  useEffect(() => {
    if (displayMenu) {
      window.addEventListener("click", myFun, false);
    }
    return () => {
      window.removeEventListener("click", myFun, false);
    };
  }, [displayMenu]);
  function showDropdownMenu() {
    setdisplayMenu(!displayMenu);
  }
  function MoldGroupOptions(group: ObjI[]) {
    return group.filter(itWillSearchForYou).map((option) => {
      return (
        <li
          className="inte-Select__ChoicelistGroup"
          key={option.value}
          value={option.value}
          onClick={(event) => {
            event.stopPropagation();
          }}
          id={"inte-Select__ChoiceList--Item" + id}
        >
          <CheckBox
            labelVal={option.label}
            description={option.description}
            checked={value.includes(option.value)}
            onClick={() => {
              onChange(option.value, option);
              logit();
            }}
          />
        </li>
      );
    });
  }
  const itWillSearchForYou = ({ label, group = [] }: ObjI): boolean => {
    let flag = false;
    if (Object.keys(group).length > 0) {
      flag = group.filter(itWillSearchForYou).length > 0;
    }
    if (flag) return true;
    return typeof label === "string"
      ? label.toLowerCase().search(searchValue.toLowerCase()) > -1
      : true || searchValue === "";
  };
  function moldOptions() {
    return options.filter(itWillSearchForYou).map((option) => {
      return (
        <li
          className={
            option.group
              ? "inte-Select__ChoiceList--Item inte-Select__ChoiceList--ItemGrouped"
              : "inte-Select__ChoiceList--Item"
          }
          key={option.value}
          value={option.value}
          onClick={(event) => {
            event.stopPropagation();
          }}
          id={"inte-Select__ChoiceList--Item" + id}
        >
          {option.groupLabel && <TextStyles>{option.groupLabel}</TextStyles>}
          <CheckBox
            labelVal={option.label}
            description={option.description}
            checked={value.includes(option.value)}
            onClick={() => {
              onChange(option.value, option);
              setTimeout(logit, 1);
            }}
          />
          {option.group ? <ol>{MoldGroupOptions(option.group)}</ol> : null}
        </li>
      );
    });
  }
  const renderSearch = () => {
    return (
      <div id={"ced-li-componenet" + id} onClick={(e) => e.stopPropagation()}>
        <TextField
          prefix={<Search size={20} color={"#70747e"} />}
          value={searchValue}
          placeHolder="Search"
          autoFocus={true}
          onChange={(e) => {
            const reg = /[!@#$%^&*()+\-=\[\]{};':"\\|<>\/?]/g;
            !reg.test(e) && updateSearch(e);
          }}
        />
      </div>
    );
  };
  const eleThickness = getThickness();

  const extractName = (value: string) => {
    let name = value;
    Object.values(options).forEach((key: any) => {
      if (Object.keys(key.group ?? []).length > 0) {
        Object.values(key.group).forEach((groupVa: any) => {
          if (groupVa.value === value) {
            name = groupVa.label;
          }
        });
      }
      if (key.value === value) {
        name = key.label;
      }
    });
    return name;
  };
  const checkSelectedID = () => {
    if (Object.keys(value).length > 0) {
      return (
        <div className="inte-Select__ChoiceListTags">
          <FlexLayout spacing="mediumTight" wrap="wrap" {...childFlexOptions}>
            {Object.keys(value).map((key: any) => {
              return (
                <Tag
                  key={key}
                  destroy={() => {
                    onChange(value[key]);
                    updateSearch("");
                  }}
                >
                  {extractName(value[key])}
                </Tag>
              );
            })}
          </FlexLayout>
        </div>
      );
    } else {
      return null;
    }
  };
  const errorCss = error ? "inte-formElement--Error" : "";
  const positionObjectMemo = useMemo(() => {
    return myRef.current?.getBoundingClientRect()
      ? myRef.current?.getBoundingClientRect()
      : 10;
  }, []);
  const [positionObject, setpositionObject] = useState(positionObjectMemo);
  function dyPos() {
    const windowheight = window.innerHeight;
    const posactivator = positionObject.bottom;
    const remainingBottomheight = windowheight - posactivator;
    const portalHeight = myReff.current?.offsetHeight ?? 0;
    if (portalHeight > remainingBottomheight) {
      const x = "select-top";
      return {
        class: x,
        style: {
          left: positionObject.left,
          top:
            positionObject.top +
            positionObject.height -
            portalHeight -
            (positionObject.bottom - positionObject.y) -
            1,
        },
      };
    } else {
      const x = "select-bottom";
      return {
        class: x,
        style: {
          top: positionObject.top + positionObject.height + 2,
          left: positionObject.left,
        },
      };
    }
  }
  const pp = dyPos();
  const ulEle = (
    <div
      ref={myReff}
      className={`inte-select inte-select--Fixed ${pp.class}`}
      id={"inte-select" + id}
      style={{
        width: positionObject.width,
        position: "fixed",
        ...pp.style,
        zIndex: 999,
      }}
    >
      <ul className="inte-choiceList--dropdown">
        {searchEable ? (
          <li className="inte-choiceList--search">{renderSearch()}</li>
        ) : (
          ""
        )}
        <ul className="inte-choiceList--options">{moldOptions()}</ul>
      </ul>
    </div>
  );
  const ulElel = (
    <ul id={"inte-select" + id} className="inte-choiceList--dropdown">
      {searchEable ? (
        <li className="inte-choiceList--search">{renderSearch()}</li>
      ) : (
        ""
      )}
      <ul className="inte-choiceList--options">{moldOptions()}</ul>
    </ul>
  );
  useEffect(() => {
    setdisplayMenu(false);
    logit();
  }, [open]);
  function logit() {
    const post = myRef.current?.getBoundingClientRect()
      ? myRef.current?.getBoundingClientRect()
      : 10;
    setpositionObject(post);
  }
  useEffect(() => {
    const ParentEle = getScrollParent(
      document.getElementById("inte-Select__ChoiceList" + id)
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
    };
  });

  return (
    <>
      <div
        aria-expanded={displayMenu ? "true" : "false"}
        data-ellipsis={ellipsis ? "inte--ellipsis" : "inte--Noellipsis"}
        id={"inte-Select__ChoiceList" + id}
        className={`inte-formElement--Wrap inte-formElement--ChoiceList ${errorCss} ${eleThickness} ${
          displayMenu ? "inte-formElelemt--Focus" : null
        } `}
      >
        {name ? (
          <TextStyles utility={required ? "inte--Required" : ""}>
            {name}
          </TextStyles>
        ) : null}
        <div className="inte-formElemet--Inner">
          <div
            ref={myRef}
            onClick={() => {
              if (disabled) return;
              logit();
              showDropdownMenu();
            }}
            style={{ opacity: disabled ? "0.5" : "1" }}
            className={` inte-formElement inte-select inte-Select__ChoiceList`}
          >
            {showBadges ? <>{checkSelectedID()}</> : null}
            <div className="inte-formElemet--Inner">
              {placeholder ? <TextStyles>{placeholder}</TextStyles> : ""}
            </div>
            <div className="inte-formElemet__Arrow">
              <ChevronDown
                size={20}
                strokeWidth={2.5}
                color={"#3b424f"}
              ></ChevronDown>
            </div>

            {!displayMenu ? (
              <div
                ref={myReff}
                className={`inte-select inte-select--Fixed  inte-select--Fake`}
                id={"inte-select" + id}
                style={{
                  width: positionObject.width,
                  position: "fixed",
                  zIndex: 999,
                  visibility: "hidden",
                  opacity: 0,
                }}
              >
                <ul className="inte-choiceList--dropdown">
                  {searchEable ? (
                    <li className="inte-choiceList--search">
                      {renderSearch()}
                    </li>
                  ) : (
                    ""
                  )}
                  <ul className="inte-choiceList--options">{moldOptions()}</ul>
                </ul>
              </div>
            ) : popoverContainer == "body" ? (
              createPortal(ulEle, document.body)
            ) : (
              ulElel
            )}
          </div>
        </div>
        {selectHelp && (
          <span
            className={`inte-form__itemHelp ${
              helpIcon && "inte-form__itemHelp--HasHelpIcon"
            }`}
          >
            {helpIcon && <span style={{ display: "flex" }}>{helpIcon}</span>}
            <span>{selectHelp}</span>
          </span>
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
};

export default ChoiceList;
