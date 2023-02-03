import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
import PopOver from "../Popover/Popover";
import "./Topbar.css";

const Topbar: React.FC<TopbarI> = ({
  account = {
    name: "",
    url: "",
    userPopoverMenu: undefined,
  },
  connectLeft,
  connectRight,
  darkMode,
}: TopbarI) => {
  function checkAccount() {
    const [openPopover, togglePopover] = useState(false);

    if (
      account.name !== "" ||
      account.url !== "" ||
      account.userPopoverMenu !== undefined
    ) {
      return (
        <PopOver
          onClose={() =>
            togglePopover(!openPopover && !!account.userPopoverMenu)
          }
          popoverContainer="element"
          open={openPopover}
          activator={
            <div
              className={"inte__Accounts"}
              onClick={() =>
                togglePopover(!openPopover && !!account.userPopoverMenu)
              }
            >
              {account.image ? (
                <div className={"inte__Avatar"}>
                  <img src={account.image} alt="userImage" width="38" />
                </div>
              ) : (
                <div className="inte__Accounts-Avatar">
                  <Avatar size="Medium" type="circle" text={account.name}>
                    {account.name}
                  </Avatar>
                </div>
              )}
              <div className={"inte__accountName"}>
                <span className={"inte__user"}>{account.name}</span>
                {account.url ? (
                  <span className="inte__userUrl inte__text--light">
                    {account.url}
                  </span>
                ) : null}
              </div>
            </div>
          }
        >
          {account.userPopoverMenu}
        </PopOver>
      );
    }
    return null;
  }

  function checkConnectRight() {
    if (connectRight) {
      return <>{connectRight}</>;
    }
    return null;
  }
  const [themeMode, setThemeMode] = useState("light");
  const handleToggleDark = () => {
    if (themeMode == "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      setThemeMode("dark");
      return "dd";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setThemeMode("light");
      return "ddd";
    }
  };

  function checkdarkMode() {
    const moon = (
      <svg
        className="inte__Icon--Dark"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    );

    const sun = (
      <svg
        className="inte__Icon--Light"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    );

    return (
      <div className="inte-darkMode" onClick={handleToggleDark}>
        {themeMode == "light" ? <>{moon}</> : <>{sun}</>}
      </div>
    );
  }

  return (
    <div className={"inte__Topbar"}>
      <div className="inte__Topbar--Inner">
        <div className="inte__Topbar-Connect--Left">{connectLeft}</div>
        <div className="inte__Topbar-Connect--Right">
          {checkConnectRight()}
          {darkMode ? checkdarkMode() : null}
          {account && (
            <div className={"inte__accountsWrapper"}>{checkAccount()}</div>
          )}
        </div>
      </div>
    </div>
  );
};
Topbar.defaultProps = {
  darkMode: false,
};

export interface TopbarI {
  connectLeft?: React.ReactNode;
  connectRight?: React.ReactNode;
  account?: AccountI;
  darkMode?: boolean;
}

export interface AccountI {
  name?: string | React.ReactNode;
  url?: string | React.ReactNode;
  image?: string;
  userPopoverMenu?: React.ReactNode;
}

export default Topbar;
