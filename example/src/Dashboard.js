import React, { Component } from "react";
import {
  FlexLayout,
  Card,
  Button,
  MainLayout,
  TextStyles,
  BodyHeader,
  Notification,
  Badge,
  facebook,
  insta,
  downArrow,
  upArrow,
  spread,
  refresh,
  Switcher,
  Datepicker,
  LoginPage,
  Popover,
  PageHeader
} from "ounce-ui";

import { Line, Doughnut } from "react-chartjs-2";
import { RefreshCcw } from "react-feather";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
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
      minValue: 40,
      maxValue: 80,
    };
  }
  setminValue = (value) => this.setState({ minValue: Math.ceil(value) });
  setmaxValue = (value) => this.setState({ maxValue: Math.ceil(value) });

  // const [minValue, setminValue] = useState(0);
  // const [maxValue, setmaxValue] = useState(100);
  render() {
    return this.renderApp();
  }

  getRows = () => {
    let row = {
      order_id: (
        <Button loading={false} type="Plain">
          #121212
        </Button>
      ),
      customer: "Seeley Booth",
      date: "19th Aug,2020",
      total: "190$",
      payment: (
        <Badge size="small" type="Success">
          PAID
        </Badge>
      ),
      action: <Button type="Plain">{spread}</Button>,
    };
    let rows = [row, row, row, row];
    return rows;
  };

  renderApp = () => {
    let { columns } = this.state;

    let data1 = {
      labels: ["Fulfil", "Cancel", "Refunded", "Skipped"],
      datasets: [
        {
          data: [300, 50, 100, 10],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#af2cff"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#af2cff"],
        },
      ],

      text: "100%",
    };

    let data2 = {
      labels: ["May", "June", "July", "Aug"],
      datasets: [
        {
          label: "FB",
          data: [30, 35, 20, 10],
        },
        {
          label: "Insta",
          data: [15, 10, 30, 10],
        },
      ],
    };

    let options = {
      responsive: true,
      legend: {
        position: "top",
        align: "left",
        fullWidth: true,
        labels: {
          fontColor: "#444444",
          boxWidth: 10,
          fontSize: 14,
          fontFamily: "Montserrat",
          padding: 14,
          usePointStyle: true,
        },
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    };

    let options2 = {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 10,
        },
        align: "center",
        fullWidth: true,
      },
    };

    let productOption = {
      responsive: true,
      legend: {
        position: "right",
        align: "center",
        fullWidth: true,
        labels: {
          fontColor: "#444444",
          boxWidth: 10,
          fontSize: 14,
          fontFamily: "Montserrat",
          padding: 10,
          usePointStyle: true,
        },
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    };

    let data = (
      <>
      <PageHeader title="Dashboard"></PageHeader>
      <MainLayout>
        <React.Fragment>
          <Card cardType="Plain">
          <FlexLayout desktopWidth="33" spacing="loose">
         
          <Card cardType="Shadowed" title={"Enable Autopayy"}>
            <FlexLayout halign="fill" valign="center">
              <TextStyles>Activity Mode</TextStyles>
              <Switcher name="Label"></Switcher>
            </FlexLayout>
          </Card>
        <Card title={"Enable Notifications"} cardType="Shadowed">
          <FlexLayout halign="fill" valign="center">
            <TextStyles>Activity Mode</TextStyles>
            <Switcher name="Label"></Switcher>
          </FlexLayout>
        </Card>
        <Card title={"Enable Sync"} cardType="Shadowed">
          <FlexLayout halign="fill" valign="center">
            <TextStyles>Activity Mode</TextStyles>
            <Switcher name="Label" textAligh="right"></Switcher>
          </FlexLayout>
        </Card>
        </FlexLayout>
          </Card>
          <Card
            title={"Order Syncing"}
            action={<Button type="Plain">View All</Button>}
          >
            <FlexLayout childWidth="fullWidth" spacing="loose">
              <Button
                icon={<RefreshCcw color="#ffffff"/>}
                type="Primary"
                halign="Equal"
                length="fullBtn"
              >
                Sync Shopify to Facebook
              </Button>
              <Button
                icon={<RefreshCcw color="#431bbc"/>}
                type="Secondary"
                halign="Equal"
                length="fullBtn"
              >
                Sync Facebook to Shopify{" "}
              </Button>
            </FlexLayout>
          </Card>
          <Card
          title={"Orders and Sales"}
            primaryAction={{ content: "Primary" }}
            secondaryAction={{ content: "Secondary" }}
            action={ <Datepicker />}
          >
            <MainLayout>
              <Card cardType="plain" title="New Orders" >
                <FlexLayout spacing="loose">
                  <Card cardType="Subdued">
                    <FlexLayout spacing="extraLoose" direction="vertical">
                      {facebook}
                      <div>
                        <TextStyles type="simpleText">Orders</TextStyles>
                        <TextStyles type="SubHeading">345</TextStyles>
                      </div>
                      <div>
                        <FlexLayout spacing="loose">
                          <TextStyles type="neutralText">3%</TextStyles>
                          {upArrow}
                        </FlexLayout>
                      </div>
                    </FlexLayout>
                  </Card>
                  <Card cardType="Subdued">
                    <FlexLayout spacing="extraLoose" direction="vertical">
                      {insta}
                      <div>
                        <TextStyles type="simpleText">Orders</TextStyles>
                        <TextStyles type="SubHeading">345</TextStyles>
                      </div>
                      <div>
                        <FlexLayout spacing="loose">
                          <TextStyles type="neutralText">7%</TextStyles>
                          {downArrow}
                        </FlexLayout>
                      </div>
                    </FlexLayout>
                  </Card>
                  <Card cardType="Bordered">
                  <Doughnut
                    data={data1}
                    options={options2}
                    width={250}
                    height={200}
                  />
                  </Card>
                </FlexLayout>
              </Card>
              <Card cardType="Bordered" title={"Earning"}>
                <BodyHeader subTitle="$ 863" />
                <Line height={300} data={data2} options={options} />
              </Card>
            </MainLayout>
          </Card>
          
          <Card
            title={"Products"}
            action={<Button type="Plain">View All</Button>}
          >
          
          </Card>
          
        </React.Fragment>
        <React.Fragment>
          <Card cardType="Bordered">
            <Card
              title={"Products"}
              action={<Button type="Plain">View All</Button>}
            >
              <FlexLayout direction="vertical" spacing="loose">
                <Doughnut data={data1} options={productOption} />
                <Button
                  icon={refresh}
                  type="Primary"
                  halign="Equal"
                  length="fullBtn"
                >
                  Bulk Product Upload
                </Button>
              </FlexLayout>
            </Card>
            <Card>
            <FlexLayout
              childWidth="fullWidth"
              spacing="loose"
              direction="vertical"
            >
              <BodyHeader
                title="Product Syncing"
                SubTitleSmall="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              />
              <FlexLayout
                childWidth="fullWidth"
                spacing="loose"
                direction="vertical"
              >
                <Button
                  icon={<RefreshCcw color="#ffffff"/>}
                  type="Primary"
                  halign="Equal"
                  length="fullBtn"
                >
                  Sync Shopify to Facebook
                </Button>
                <Button
                  icon={<RefreshCcw color="#431bbc"/>}
                  type="Secondary"
                  halign="Equal"
                  length="fullBtn"
                >
                  Sync Facebook to Shopify{" "}
                </Button>
              </FlexLayout>
            </FlexLayout>
            </Card>
          </Card>
          <Card
            title={"Notifications"}
            action={<Button type="Plain">View All</Button>}
          >
            <Notification
              type="warning"
              onClose={() => {
                alert("close");
              }}
            >
              (#10) You do not have permission to perform this action. This
              action requires that you can MANAGE_PERMISSIONS on a managing
              business account. Or it requires that you can EDIT_PRODUCT_CATALOG
              on this object Note: to use do this action on behalf of a business
              account the "business" field must be set.
            </Notification>
          </Card>
        </React.Fragment>
        <LoginPage
        heading="Facebook &amp; Instagram Ads"
        subheading="Promote your products across Facebook and Instagram with Dynamic Product Ads."
        footertitle="A CedCommerce Inc Product @ 2022"
      />
      </MainLayout>
      </>
    );

    return <React.Fragment>{data}</React.Fragment>;
  };
}

export default Dashboard;
