/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Switcher.css";

function Switcher({
  list,
  icon,
  direction="left",
  ...props
}: ButtonDropdownI): JSX.Element {
  const [toggle, setToggle] = useState(false);
  const [div_id] = useState(() => "-" + Math.floor(Math.random() * 1000));

  function myFun(event: Event) {
    const getPath: EventTarget[] = event.composedPath();
    let flag = true;
    getPath.forEach((element: any) => {
      if (element.id === "inte--Switcher" + div_id) {
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
      id={"inte--Switcher" + div_id}
      className={
        toggle
          ? "inte--Switcher inte--Switcher-Open"
          : "inte--Switcher"
      }
    >
      <Button
        type={"Outlined"}
        disable={props.disable}
        loading={props.loading}
        icon={icon}
        iconAlign={"left"}
        thickness={props.thickness}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {props.title}
      </Button>
      <ul
        className={`inte--Switcher__Popover ${"inte--Switcher__Popover--"+direction}`}
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
Switcher.defaultProps = {
  children: "",
};
export interface ButtonDropdownI {
  title: string;
  list: any;
  children?: string | React.ReactNode | JSX.Element | any;
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
  direction?: "left"| "right";
}
export default Switcher;
