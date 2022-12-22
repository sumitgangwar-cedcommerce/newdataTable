/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from "react";
import { ChevronsRight, Menu, X } from "react-feather";
import { box } from "../../Icon/Icon";
import Button from "../Button/Button";
import "./Sidebar.css";

const defaultMenu = {
  content: "N/A",
  path: "/",
  icon: box,
};
class Sidebar extends Component<SidebarI, StateI> {
  [x: string]: any;

  handleSidebar = (): void => {
    this.setState({ isActive: !this.state.isActive });
  };

  constructor(props: SidebarI) {
    super(props);
    this.state = {
      isActive: false,
      sideMenus: this.ValidateSideMenus(props.menu),
      subMenu: this.ValidateSideMenus(props.subMenu),
      sidebarOpen: false,
      y_value: 0,
      toggle: true,
    };
  }

  componentWillUnmount(): void {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    window.removeEventListener("scroll", () => {});
    // window.innerWidth;
    // window.removeEventListener("resize",() => window.innerWidth)
  }
  // componentDidMount() {
  //   window.innerWidth;
  //   window.addEventListener("resize",() => window.innerWidth)
  // }

  toggleSidebar = (): void => {
    const { sidebarOpen } = this.state;
    this.setState({ sidebarOpen: !sidebarOpen });
  };

  ValidateSideMenus = (menus: MenuI[] = []): MenuI[] => {
    if (menus && Object.keys(menus).length > 0) {
      return Object.values(menus).map((menuValue) => ({
        ...defaultMenu,
        ...menuValue,
      }));
    }
    return [];
  };
  removeClassAll = () => {
    document.querySelectorAll("inte__Menus--active").forEach((menu: any) => {
      menu.classList.remove("inte__Menus--active");
    });
  };
  // inte__Menus--hasChild
  renderSideBarMenu = (menus: MenuI[]): JSX.Element[] => {
    return Object.values(menus).map((menu, index) => {
      const hasChild =
        typeof menu.children === "object" && menu.children.length > 0;
      return (
        <li
          className={`inte-flex__item ${
            hasChild ? "inte__Menus--hasChild" : ""
          } ${
            this.state.toggle && this.props.path?.includes(menu.path)
              ? "inte__Menus--active"
              : ""
          }`.trim()}
          key={index}
        >
          <a
            className={"inte__Menus"}
            onClick={(e: any) => {
              if (hasChild) return;
              this.removeClassAll();
              if (!hasChild) this.handleSidebar();
              this.props.onChange(menu);
              if (
                e.target.parentElement.classList.value.includes(
                  "inte__Menus--active"
                )
              ) {
              } else {
              }
            }}
          >
            <span
              className={"inte__menuIcon"}
              onClick={(e: any) => {
                if (
                  e.target.parentElement.parentElement.classList.value.includes(
                    "inte__Menus--active"
                  )
                ) {
                  e.target.parentElement.parentElement.classList.remove(
                    "inte__Menus--active"
                  );
                } else {
                  e.target.parentElement.parentElement.classList.add(
                    "inte__Menus--active"
                  );
                }
              }}
            >
              {menu.icon}
            </span>
            <span
              onClick={(e: any) => {
                if (
                  e.target.parentElement.parentElement.classList.value.includes(
                    "inte__Menus--active"
                  )
                ) {
                  e.target.parentElement.parentElement.classList.remove(
                    "inte__Menus--active"
                  );
                } else {
                  e.target.parentElement.parentElement.classList.add(
                    "inte__Menus--active"
                  );
                }
              }}
              className={"inte__menuItem"}
            >
              {menu.content}
            </span>
            {hasChild ? (
              <span className={"inte__menuArrow"}>
                <svg
                  onClick={(e: any) => {
                    if (
                      e.target.parentElement.parentElement.parentElement.classList.value.includes(
                        "inte__Menus--active"
                      )
                    ) {
                      e.target.parentElement.parentElement.parentElement.classList.remove(
                        "inte__Menus--active"
                      );
                    } else {
                      e.target.parentElement.parentElement.parentElement.classList.add(
                        "inte__Menus--active"
                      );
                    }
                  }}
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
            ) : null}
          </a>
          {hasChild && menu.children && (
            <ul
              onClick={(e) => e.stopPropagation()}
              className={
                "inte-flex intel-flex--align-start inte-flex--vertical"
              }
            >
              {this.renderSideBarMenu(menu.children)}
            </ul>
          )}
        </li>
      );
    });
  };

  renderSubSideBarMenu = (menus: MenuI[]): React.ReactNode =>
    Object.values(menus).map((menu, index) => (
      <li className={"inte-flex__item"} key={index}>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            this.handleSidebar();
            this.removeClassAll();
            this.props.onChange(menu);
          }}
        >
          {menu.content}
        </a>
      </li>
    ));

  render(): React.ReactNode {
    if (this.props.logo != undefined && window.innerWidth >= 768) {
      document.body.className = "inte__Sidebar--expanded";
    }
    const { sideMenus, subMenu } = this.state;
    const isActive = this.state.isActive;
    const y_value = this.state.y_value;
    return (
      <React.Fragment>
        <div
          style={{ display: "none" }}
          className={`inte__Toggle ${isActive ? "inte__toggle--Active" : ""}`}
          onClick={this.handleSidebar}
        >
          <Button
            type="Outlined"
            icon={<Menu size={16} color={"#3B424F"} />}
          ></Button>
        </div>
        {this.props.logo == undefined ? (
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
            <ChevronsRight size={25} color={"#E7E6FA"}></ChevronsRight>
          </div>
        ) : (
          <>
            {window.innerWidth >= 768 && (
              <div className="inte--logoWrapper">{this.props.logo ?? ""}</div>
            )}
            {this.props.mobileLogo && window.innerWidth <= 768 && (
              <div className="inte--logoWrapper inte--logoWrapper--Mobile">
                {this.props.mobileLogo}
              </div>
            )}
          </>
        )}
        <div
          className={
            isActive
              ? `inte__Sidebar inte__Sidebar--Active ${
                  this.props.logo && "inte__Sidebar--hasLogo"
                }`
              : " " +
                `inte__Sidebar ${this.props.logo && "inte__Sidebar--hasLogo"}`
          }
        >
          <div
            onMouseEnter={() => {
              if (
                document.body.className !== "inte__Sidebar--expanded" &&
                this.props.logo == undefined &&
                window.innerWidth >= 768
              )
                document.body.className = "inte__Sidebar--hovered";
            }}
            onMouseLeave={() => {
              if (
                document.body.className !== "inte__Sidebar--expanded" &&
                this.props.logo == undefined
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
            {this.props.logo && window.innerWidth <= 768 && (
              <div className="inte__Sidebar--Header">
                <div className="inte--logoWrapper-Mobile">
                  {this.props.logo}
                </div>
                {window.innerWidth <= 768 && (
                  <div
                    className={`inte__Toggle--Mobile`}
                    onClick={this.handleSidebar}
                  >
                    <Button
                      type="TextButton"
                      icon={<X size={20} color={"#3B424F"}></X>}
                    ></Button>
                  </div>
                )}
              </div>
            )}

            <ul className={"inte-flex  inte-flex--vertical"}>
              {this.renderSideBarMenu(sideMenus)}
            </ul>
            <ul className={"inte-flex  inte-flex--vertical"}>
              {this.renderSideBarMenu(subMenu)}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export interface StateI {
  isActive: boolean;
  y_value: number;
  sideMenus: MenuI[];
  subMenu: MenuI[];
  sidebarOpen?: boolean;
  toggleexpandView?: boolean;
  toggle?: boolean;
}

export interface SidebarI {
  menu: MenuI[];
  subMenu: MenuI[];
  logo?: undefined | React.ReactNode;
  mobileLogo?: undefined | React.ReactNode;
  onChange: (menu: MenuI) => void;
  path?: string;
}
export interface MenuI extends ChildI {
  id: string;
  content: string;
  path: string;
  icon?: React.ReactNode;
}

interface ChildI {
  children?: MenuI[];
}

export default Sidebar;
