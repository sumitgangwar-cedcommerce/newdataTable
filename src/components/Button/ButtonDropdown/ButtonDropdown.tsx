/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { ChevronDown } from "react-feather";
import Button from "../Button";
import "./ButtonDropdown.css";

function ButtonDropdown({
  list,
  icon = <ChevronDown height={22} width={22} color="#ffffff" />,
  iconAlign = "right",
  ...props
}: ButtonDropdownI): JSX.Element {
  const [toggle, setToggle] = useState(false);
  const [div_id] = useState(() => "-" + Math.floor(Math.random() * 1000));

  function myFun(event: Event) {
    const getPath: EventTarget[] = event.composedPath();
    let flag = true;
    getPath.forEach((element: any) => {
      if (element.id === "inte-btn--Dropdown" + div_id) {
        flag = false;
      }
    });
    if (flag) setToggle(false);
  }

  useEffect(() => {
    if (toggle) {
      window.addEventListener("click", myFun, false);
    }
    return () => {
      window.removeEventListener("click", myFun, false);
    };
  }, [toggle]);

  return (
    <div
      id={"inte-btn--Dropdown" + div_id}
      className={
        toggle
          ? "inte-btn--Dropdown inte-btn--Dropdown-Open"
          : "inte-btn--Dropdown"
      }
    >
      <Button
        type={props.type}
        disable={props.disable}
        loading={props.loading}
        icon={icon}
        iconAlign={iconAlign}
        thickness={props.thickness}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {props.title}
      </Button>
      <ul
        className="inte-btn--Dropdown__Popover"
        style={{ display: toggle ? "block" : "none" }}
      >
        {list.map((e: any, key: number) => (
          <li key={key} onClick={() => setToggle(!toggle)}>
            {e.icon != undefined ? (
              <Button
                type="Outlined"
                icon={e.icon}
                onClick={e.onClick}
                iconAlign={"left"}
              >
                {e.label}
              </Button>
            ) : (
              <Button type="Outlined" onClick={e.onClick}>
                {e.label}
              </Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
ButtonDropdown.defaultProps = {
  children: "",
};
export interface ButtonDropdownI {
  title: string;
  list: any;
  children?: string | React.ReactNode | JSX.Element | any;
  content?: string;
  type?:
    | "Primary"
    | "Danger"
    | "DangerOutlined"
    | "Secondary"
    | "Outlined"
    | "DangerPlain"
    | "TextButton";
  thickness?: "extraThin" | "thin" | "large";
  icon?: React.ReactNode | any;
  onClick?: () => void;
  loading?: boolean;
  disable?: boolean;
  iconAlign?: "left" | "right";
}
export default ButtonDropdown;
