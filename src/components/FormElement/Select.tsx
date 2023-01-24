/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef, useMemo } from "react";
import { createPortal } from "react-dom";
import { TextStyles, TextField ,Tag } from "..";
import { ChevronDown } from "react-feather";
import "../../styles.module.css";
import "./FormElement.css";

function Select({
  options = [],
  onChange = () => null,
  value = "",
  selectHelp,
  name = "",
  placeholder = "Select",
  disabled = false,
  searchEable = false,
  loading = false,
  ellipsis = true,
  helpIcon,
  controlStates,
  position = "bottom",
  popoverContainer = "body",
  required = false,
  customClass = "",
  ...props
}: SelectI): JSX.Element {
  const [displayMenu, setdisplayMenu] = useState(false);
  const [id] = useState(() => "-" + Math.floor(Math.random() * 1000));
  const [searchValue, updateSearch] = useState("");
  const [setClick, setClicked] = useState<any>([]);
  const myRef = useRef<any>();
  const myReff= useRef<any>();
  const listRef =useRef<any>();
  useEffect(() =>{
    console.log(listRef.current)
  },[]);
  const parentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (parentRef && parentRef.current) {
      logit();
    }
  }, [parentRef]);

  const onblur = () => {
    if (props.onblur) {
      props.onblur();
    }
  };

  function getPosition() {
    switch (position) {
      case "top":
        return "inte-select--top";
      case "bottom":
        return "inte-select-bottom";
      default:
        return "";
    }
  }

 
  function getcontrolStates(controlStates: "Success" | "Warning" | "Error") {
    switch (controlStates) {
      case "Success":
        return "inte-formElement--Success";
      case "Warning":
        return "inte-formElement--Warning";
      case "Error":
        return "inte-formElement--Error";
      default:
        return "";
    }
  }

  const controlStatesVal = getcontrolStates(controlStates);

  function myFun(event: Event) {
    const getPath: EventTarget[] = event.composedPath();
    let flag = true;
    getPath.forEach((element: any) => {
      if (
        element.id === "ced-li-componenet" + id ||
        element.id === "ced-select-componenet" + id
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
    return group.filter(itWillSearchForYou).map((option,index) => {
      return (
        <li
          ref={listRef}
          key={option.value}
          value={option.value}
          onClick={(event) => {
            onChange(option.value, option);
            {props.multiSelect ? setdisplayMenu(true):setdisplayMenu(false)}
            updateSearch("");
            setClicked(index)
            event.stopPropagation();
          }}
          className={setClick === index  ? "hello" :""}
          id={"ced-li-componenet" + id}
        >
          <TextStyles textcolor="light">{option.label}</TextStyles>
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
    return options.filter(itWillSearchForYou).map((option: any) => {
      return (
        <li
          className={
            option.group
              ? "inte-Select__Select--Item inte-Select__Select--ItemGrouped"
              : "inte-Select__Select--Item"
          }
          onClick={(e) => {
            // onChange(option.value, option);
            e.stopPropagation();
            {props.multiSelect ? setdisplayMenu(true):setdisplayMenu(true)}
            updateSearch("");
          }}
          key={option.value}
          id={"ced-li-componenet" + id}
          value={option.value}
        >
          <TextStyles utility="inte-Select__Select--ItemHeading" textcolor="light">{option.label}</TextStyles>
          {option.group ? <ol className="inte-Select__Select--ItemGroupItem">{MoldGroupOptions(option.group)}</ol> : null}
        </li>
      );
    });
  }

  const elePosition = getPosition();

  const checkSelectedID = () => {
    let valueNew: React.ReactNode = (
      <div className="inte-select-placeholder">{placeholder}</div>
    );
    options.map((option) => {
      if (option.value === value) valueNew = option.label;
      if (option.group)
        option.group.map((e) => {
          if (e.value === value) valueNew = e.label;
        });
    });
    return valueNew;
  };
 

  const renderSearch = () => {
    return (
      <div
        className="inte-formElement-Search"
        onClick={(e) => {
          e.stopPropagation();
          showDropdownMenu();
        }}
      >
        <TextField
          value={searchValue}
          autoFocus={true}
          onChange={(e) => {
            const reg = /[!@#$%^*()+\-=\[\]{};':"\\|<>\?]/g;
            !reg.test(e) && updateSearch(e);
          }}
        />
      </div>
    );
  };

  const positionObjectMemo = useMemo(() => {
    return myRef.current?.getBoundingClientRect()
      ? myRef.current?.getBoundingClientRect()
      : 10;
  }, []);

  const [positionObject, setpositionObject] = useState(positionObjectMemo);

  function dyPos() {
    const windowheight = window.innerHeight;
    const remainingBottomheight = windowheight - positionObject.bottom;
    const portalHeight = myReff.current?.offsetHeight ?? 0;
    if (remainingBottomheight < portalHeight) {
      const x = "select-top";
      return {
        class: x,
        style: {
          left: positionObject.left,
          top: positionObject.top - portalHeight - 3,
        },
      };
    } else {
      const x = "select-bottom";
      return {
        class: x,
        style: {
          top: positionObject.top + positionObject.height + 3,
          left: positionObject.left,
        },
      };
    }
  }
  const pp = dyPos();

  const ulEle = (
    <div
      ref={myReff}
      className={`inte-select inte-select--Fixed ${pp.class} ${customClass}`}
      id={"inte-select" + id}
      style={{
        width: positionObject.width,
        position: "fixed",
        ...pp.style,
        zIndex: 9999999,
      }}
    >
      <ul
        style={{ maxHeight: 250 + "px" }}
        aria-label="inte-select-options"
        className={"inte-select-options"}
      >
        {moldOptions()}
      </ul>
    </div>
  );

  const ulElel = (
    <ul
      style={{ maxHeight: 250 + "px" }}
      id={"inte-select" + id}
      aria-label="inte-select-options"
      className={`${
        searchEable
          ? "inte__Search-Enabled inte-select-options"
          : "inte-select-options"
      }`}
    >
      {searchEable ? (
        <li className="inte-search--options">
          <ul>{moldOptions()}</ul>
        </li>
      ) : (
        moldOptions()
      )}
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
      document.getElementById("ced-select-componenet" + id)
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

  return (
    <>
      <div
        aria-expanded={displayMenu ? "true" : "false"}
        data-ellipsis={ellipsis ? "inte--ellipsis" : "inte--Noellipsis"}
        className={`inte-formElement--Wrap ${controlStatesVal}  ${
          displayMenu ? "inte-formElement--Focus" : ""
        }`}
      >
        {name ? (
          <TextStyles
            utility={
              required ? "inte--Required inte-Label--Text" : "inte-Label--Text"
            }
          >
            {name}
          </TextStyles>
        ) : null}
        <div className="inte-formElemet--Inner">
          <div
            ref={myRef}
            onClick={() => {
              if (disabled || loading) return;
              dyPos();
              showDropdownMenu();
              logit();
            }}
            onBlur={onblur}
            style={{ opacity: disabled || loading ? "0.6" : "1" }}
            id={"ced-select-componenet" + id}
            className={`inte-formElement inte-select  ${elePosition} ${
              disabled ? "inte-select--Disabled" : ""
            }`}
          >
            <>
              <span className="inte__Select--Selected">
                {props.multiSelect ? <Tag destroy={()=> alert("destryed")} children={checkSelectedID()} /> : <>{checkSelectedID()}</>}
              </span>
              {searchEable && renderSearch()}
              <div className="inte-formElemet__Arrow">
                <ChevronDown
                  size={20}
                  strokeWidth={2.5}
                  color={"currentColor"}
                ></ChevronDown>
              </div>
            </>
            {!displayMenu ? (
              <div
                ref={myReff}
                className={`inte-select inte-select--Fixed inte-select--Fake`}
                id={"inte-select" + id}
                style={{
                  width: positionObject.width,
                  position: "fixed",
                  zIndex: 999,
                  visibility: "hidden",
                  opacity: 0,
                }}
              >
                <ul
                  style={{ maxHeight: 250 + "px" }}
                  aria-label="inte-select-options"
                  className={`inte-select-options`}
                >
                  {moldOptions()}
                </ul>
              </div>
            ) : popoverContainer == "body" ? (
              createPortal(ulEle, document.body)
            ) : (
              ulElel
            )}

            {loading ? <div className="inte-loading"></div> : null}
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

export type SelectI = {
  options?: Array<ObjI>;
  onChange?: (value: string, obj?: ObjI) => void;
  onblur?: () => void;
  value?: string;
  name?: string | React.ReactNode;
  selectHelp?: string | React.ReactNode;
  helpIcon?: React.ReactNode;
  placeholder?: string;
  controlStates?: "Sucess" | "Warning" | "Error" | any;
  disabled?: boolean;
  searchEable?: boolean;
  loading?: boolean;
  ellipsis?: boolean;
  position?: "top" | "bottom";
  popoverContainer?: "body" | "element";
  required?: boolean;
  customClass?: string;
  multiSelect?:boolean;
};

interface ObjI extends GroupI {
  label: string | React.ReactNode;
  value: string;
}

interface GroupI {
  group?: ObjI[];
}

export default Select;
