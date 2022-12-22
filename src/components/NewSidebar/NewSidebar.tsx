//  eslint-disable @typescript-eslint/no-explicit-any /
// eslint-disable @typescript-eslint/explicit-module-boundary-types /
import React, { useEffect, useRef, useState } from "react";
import { ChevronsRight, Menu, X } from "react-feather";
import Button from "../Button/Button";
import "./NewSidebar.css";

const NewSidebars: React.FC<SidebarI> = ({
  menu,
  subMenu,
  logo,
  mobileLogo,
  path,
  onChange,
}: SidebarI) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(true);
  const [y_value, setY_value] = useState(0);

  const parentId = useRef<string>("");
  const lastDepth = useRef<number>(0);
  const lastSelectedEl = useRef<HTMLElement>();
  const currentParent = useRef<HTMLElement>();
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const removeAll = () => {
    const activeEls = Array.from(
      document.querySelectorAll(".inte__Menus--active")
    );
    activeEls.forEach((el) => {
      el.classList.remove("inte__Menus--active");
      if (
        currentParent.current?.isSameNode(el) &&
        el.classList.contains("inte__Menus-DropdownActive")
      ) {
        el.classList.add("inte__Menus");
      }
    });
  };

  const handleMenuClick = (
    event: any,
    prntId: string,
    depth: number,
    hasChild: boolean
  ) => {
    event.stopPropagation();
    const currentEl: HTMLElement = event.currentTarget;
    const isSameNode = currentEl.isSameNode(lastSelectedEl.current ?? null);
    if (depth == 1 && parentId.current !== prntId) {
      currentParent.current = currentEl;
      removeAll();
      parentId.current == prntId;

      if (!currentEl.classList.contains("inte__Menus--active")) {
        currentEl.classList.add("inte__Menus--active");
      }
    } else {
      currentParent.current?.classList.remove("inte__Menus-DropdownActive");
      if (isSameNode) {
        if (hasChild) {
          currentEl.classList.toggle("inte__Menus--active");
        } else {
          currentEl.classList.add("inte__Menus--active");
        }
      } else {
        if (lastDepth.current == depth)
          lastSelectedEl.current?.classList.remove("inte__Menus--active");
        currentEl.classList.add("inte__Menus--active");
      }
      lastSelectedEl.current = currentEl;
    }
    lastDepth.current = depth;
  };

  const renderSideBarMenu = (menus: any, depth: number): JSX.Element[] => {
    depth = depth?.toString() ? depth + 1 : 0;

    return Object.values(menus).map((menu: any, index: any) => {
      const hasChild =
        typeof menu.children === "object" && menu.children.length > 0;

      return (
        <li
          className={`inte-flex__item ${menu.extraClass ? menu.extraClass : ""}
           ${
             hasChild ? "inte__Menus--hasChild inte__Menus-DropdownActive" : ""
           } ${
            toggle && path?.includes(menu.path) ? "inte__Menus--active" : ""
          }  `.trim()}
          key={index}
          // onClick={(event) => {
          //   handleMenuClick(event, menu.id, depth, menu.children?.length > 0);
          // }}
        >
          <a
            className={"inte__Menus"}
            onClick={() => {
              if (!hasChild) {
                setIsActive(!isActive);
                onChange(menu);
              }
            }}
          >
            <span className={"inte__menuIcon"}>{menu.icon}</span>
            <span className={"inte__menuItem"}>{menu.content}</span>
            {hasChild && (
              <span className={"inte__menuArrow"}>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6.5L6 1.5L11 6.5"
                    stroke="#707070"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </a>

          {hasChild && menu.children && (
            <ul
              id={menu.id}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={
                "inte-flex intel-flex--align-start inte-flex--vertical"
              }
            >
              {renderSideBarMenu(menu.children, depth)}
            </ul>
          )}
        </li>
      );
    });
  };

  // Window resize
  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(getWindowSize()));
    return () => {
      window.removeEventListener("resize", () =>
        setWindowSize(getWindowSize())
      );
    };
  }, []);

  function getWindowSize() {
    return window.innerWidth;
  }

  return (
    <>
      <div
        style={{ display: "none" }}
        className={`inte__Toggle ${isActive ? "inte__toggle--Active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <Button
          type="Outlined"
          icon={<Menu size={16} color={"#3B424F"} />}
        ></Button>
      </div>
      {logo == undefined ? (
        <div
          onClick={() => {
            if (document.body.className === "inte__Sidebar--expanded") {
              document.body.className = "";
            } else {
              document.body.className = "inte__Sidebar--expanded";
            }
          }}
          className="inte__Sidebar--toggle inte-Desktop--show inte-Mobile--hide"
        >
          <ChevronsRight size={25} color={"#E7E6FA"} />
        </div>
      ) : (
        <>
          {windowSize > 991 && (
            <div className="inte--logoWrapper">{logo ?? ""}</div>
          )}
          {mobileLogo && windowSize <= 991 && (
            <div className="inte--logoWrapper inte--logoWrapper--Mobile">
              {mobileLogo}
            </div>
          )}
        </>
      )}

      <div
        className={
          isActive
            ? `inte__Sidebar inte__Sidebar--Active ${
                logo && "inte__Sidebar--hasLogo"
              }`
            : " " + `inte__Sidebar ${logo && "inte__Sidebar--hasLogo"}`
        }
      >
        <div
          onMouseEnter={() => {
            if (
              document.body.className !== "inte__Sidebar--expanded" &&
              logo == undefined &&
              windowSize >= 991
            )
              document.body.className = "inte__Sidebar--hovered";
          }}
          onMouseLeave={() => {
            if (
              document.body.className !== "inte__Sidebar--expanded" &&
              logo == undefined
            )
              document.body.className = "";
          }}
          className={
            y_value < 0
              ? `inte__Sidebar--Sticky inte__SidebarItems`
              : `inte__SidebarItems`
          }
          id={"sidebar"}
        >
          <div className="inte__Sidebar--Header">
            {logo && windowSize <= 991 && (
              <div className="inte--logoWrapper-Mobile">{logo}</div>
            )}
            {windowSize <= 991 && (
              <div
                className={`inte__Toggle--Mobile`}
                onClick={() => setIsActive(!isActive)}
              >
                <Button
                  type="Secondary"
                  icon={<X size={20} color={"#3B424F"}></X>}
                ></Button>
              </div>
            )}
          </div>

          <ul className={"inte-flex inte-flex--vertical"}>
            {renderSideBarMenu(menu, 0)}
          </ul>
          {subMenu && (
            <ul className={"inte-flex inte-flex--vertical"}>
              {renderSideBarMenu(subMenu, 0)}
            </ul>
          )}
        </div>
      </div>
      {windowSize <= 991 && (
        <div
          className={isActive ? "inte__Sidebar--OutSideClick" : ""}
          onClick={() => {
            setIsActive(false);
          }}
        ></div>
      )}
    </>
  );
};

export interface SidebarI {
  menu: any;
  subMenu?: any;
  logo?: undefined | React.ReactNode;
  mobileLogo?: undefined | React.ReactNode;
  onChange?: (() => void) | any;
  path?: string;
}

export default NewSidebars;
