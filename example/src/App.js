import React, { Component } from "react";

import {
  Topbar,
  NewSidebar,
  Button,
  AppWrapper,
  BodyLayout,
  LoginPage,
  TextField,
} from "ounce-ui";
import { Switch, withRouter, Route, Redirect } from "react-router-dom";
import "ounce-ui/dist/index.css";
import { panelFunctions } from "./menu";
import Order from "./Order";
import Product from "./Product";
import Activity from "./Activity";
import Dashboard from "./Dashboard";
import Config from "./Config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: {
        order_id: {
          title: "Ref. No",
          type: "string",
          show: true,
          filter: true,
          width: "100",
          alignment: "left", // default
        },
        date: {
          title: "Date",
          type: "node",
          show: true,
          filter: true,
          width: "150",
          alignment: "center",
        },
        customer: {
          title: "Customer",
          type: "node",
          show: true,
          filter: true,
          width: "200",
          alignment: "center",
        },
        payment: {
          title: "Payment",
          type: "node",
          show: true,
          filter: true,
          width: "150",
          alignment: "center",
        },
        total: {
          title: "Total",
          type: "node",
          show: true,
          filter: true,
          width: "100",
          alignment: "center",
        },
        action: {
          title: "",
          type: "node",
          show: true,
          filter: true,
          width: "100",
          alignment: "center",
        },
      },
      path: "/panel/dashboard",
      rows: [],
      theme: "light",
    };
  }
  

 

  render() {
    return (
      <AppWrapper>
        {/* <AnnouncementBar type={"warning"} onClose>
          <TextStyles type="simpleText" alignment="center">Increase your products visibility with Google Free Listings. Start with our FREE PLAN</TextStyles>
        </AnnouncementBar> */}
        <Topbar
          darkMode={true}
          connectLeft={""}
          // connectRight={
          //   <Switcher
          //     name="Theme"
          //     checked={this.state.switcherToggle}
          //     onChange={() => {
          //       if (this.state.theme === "dark") {
          //         document.documentElement.setAttribute("data-theme", "light");
          //         this.setState({ theme: "light" });
          //       } else {
          //         document.documentElement.setAttribute("data-theme", "dark");
          //         this.setState({ theme: "dark" });
          //       }
          //       this.setState({ switcherToggle: !this.state.switcherToggle });
          //     }}
          //   />
          // }
          account={{
            name: "John Doe",
            userPopoverMenu: (
              <>
                <Button onClick={() => {}}>Log out</Button>
              </>
            ),
            image: "https://i.imgur.com/RI59Y2q.jpg",
          }}
        />
        {/*<Modal/>*/}
        <NewSidebar
          path={this.state.path}
          menu={panelFunctions.getMenu()}
          // subMenu={panelFunctions.getMenu()}
          onChange={this.onChange}
        />
        <BodyLayout>
          <Switch>
            <Route
              path="/login"
              render={(props) => {
                return (
                 <>
                  <LoginPage
                    heading="Facebook &amp; Instagram Ads"
                    subheading="Promote your products across Facebook and Instagram with Dynamic Product Ads."
                    footertitle="A CedCommerce Inc Product @ 2022"
                  />
                  <TextField value={""} onChange={(e,z)=> console.log(e , "lll",z ,"hello")}></TextField>
                 </>
                );
              }}
            />
            <Route
              path="/dashboard"
              render={(props) => {
                return <Dashboard {...props} />;
              }}
            />
            <Route path="/queuedtasks" component={Activity} />
            <Route path="/config" component={Config} />
            <Route path="/order" component={Order} />
            <Route path="/product" component={Product} />
            <Redirect path="**" to="/dashboard" />
          </Switch>
        </BodyLayout>
      </AppWrapper>
    );
  }

  onChange = (menu) => {
    this.props.history.push(menu.path);
    this.setState({ path: menu.path });
  };
}

export default withRouter(App);
