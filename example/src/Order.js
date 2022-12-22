import React, { Component } from "react";
import {
  Badge,
  Button,
  Card,
  downArrow,
  facebook,
  FlexLayout,
  insta,
  MainLayout,
  PageHeader,
  spread,
  TextStyles,
  upArrow,
  Popover,
  FlexChild,
  Grid,
} from "ounce-ui";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: {
        order_id: {
          title: "Ref. No",
          type: "string",
          show: true,
          filter: true,
          width: "300",
          alignment: "left", // default
        },
        date: {
          title: "Date",
          type: "node",
          show: true,
          filter: true,
          width: "200",
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
          width: "250",
          alignment: "center",
        },
        total: {
          title: "Total",
          type: "node",
          show: true,
          filter: true,
          width: "200",
          alignment: "center",
        },
        action: {
          title: "",
          type: "node",
          show: true,
          filter: true,
          width: "200",
          alignment: "center",
        },
      },
      rows: [],
    };
  }

  getRows = () => {
    const { openPopover = {} } = this.state;
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
    };
    let rows = [];
    rows = Array(5)
      .fill(row)
      .map((rw, index) => {
        rw["action"] = (
          <Popover
            open={openPopover[index]}
            activator={
              <Button
                type="Plain"
                icon={spread}
                onClick={() => {
                  let newOpenPopover = this.state.openPopover;
                  if (!newOpenPopover) newOpenPopover = {};
                  newOpenPopover[index] = !newOpenPopover[index];
                  this.setState({
                    openPopover: newOpenPopover,
                  });
                }}
              ></Button>
            }
          >
            <Card primaryAction={{ content: "Submit" }}>
              <FlexLayout>
                <TextStyles>Hello From Popover</TextStyles>
              </FlexLayout>
            </Card>
          </Popover>
        );
        return { ...rw };
      });

    // console.log(rows);
    return rows;
  };

  onChange = (menu) => {
    // console.log(menu);
  };

  render() {
    let { columns } = this.state;

    let data = (
      <>
        <PageHeader sticky title="Orders" description="Orders Description will be placed here"></PageHeader>
        <MainLayout>
          <>
            <Card cardType="Plain">
              <FlexLayout spacing="loose">
                <FlexChild desktopWidth="33">
                  <Card
                    title={"New Orders"}
                    action={<TextStyles type="HeadingMedium">465</TextStyles>}
                  >
                    <FlexLayout spacing="loose">
                      <Card cardType="selego" extraClass="pr-40">
                        <FlexLayout spacing="extraLoose" direction="vertical">
                          {facebook}
                          <div>
                            <TextStyles type="simpleText">Orders</TextStyles>
                            <TextStyles type="SubHeading">45</TextStyles>
                          </div>
                          <div>
                            <FlexLayout spacing="loose">
                              <TextStyles type="neutralText">3%</TextStyles>
                              {upArrow}
                            </FlexLayout>
                          </div>
                        </FlexLayout>
                      </Card>
                      <Card cardType="bridesmaid" extraClass="pr-40">
                        <FlexLayout spacing="extraLoose" direction="vertical">
                          {insta}
                          <div>
                            <TextStyles type="simpleText">Orders</TextStyles>
                            <TextStyles type="SubHeading">45</TextStyles>
                          </div>
                          <div>
                            <FlexLayout spacing="loose">
                              <TextStyles type="neutralText">3%</TextStyles>
                              {downArrow}
                            </FlexLayout>
                          </div>
                        </FlexLayout>
                      </Card>
                    </FlexLayout>
                  </Card>
                </FlexChild>
                <FlexChild desktopWidth="66">
                  <FlexLayout spacing="loose" desktopWidth="50">
                    <Card cardType="green">
                      <TextStyles type="mediumText">
                        Completed Orders
                      </TextStyles>
                      <TextStyles
                        type="Heading"
                        alignment="right"
                        utility="mt-60"
                      >
                        345
                      </TextStyles>
                    </Card>
                    <Card cardType="blue">
                      <TextStyles type="mediumText">Refunded Orders</TextStyles>
                      <TextStyles
                        type="Heading"
                        alignment="right"
                        utility="mt-60"
                      >
                        345
                      </TextStyles>
                    </Card>
                    <Card cardType="yellow">
                      <TextStyles type="mediumText">
                        In Process Orders
                      </TextStyles>
                      <TextStyles
                        type="Heading"
                        alignment="right"
                        utility="mt-60"
                      >
                        345
                      </TextStyles>
                    </Card>
                    <Card cardType="red">
                      <TextStyles type="mediumText">
                        Cancelled Orders
                      </TextStyles>
                      <TextStyles
                        type="Heading"
                        alignment="right"
                        utility="mt-60"
                      >
                        345
                      </TextStyles>
                    </Card>
                  </FlexLayout>
                </FlexChild>
              </FlexLayout>
            </Card>
          </>
          <>
            <Card
              title={"New Orders"}
              action={<TextStyles type="HeadingMedium">465</TextStyles>}
            >
              <FlexLayout spacing="loose" desktopWidth="50">
                <Card cardType="selego" extraClass="pr-40">
                  <FlexLayout spacing="extraLoose" direction="vertical">
                    {facebook}
                    <div>
                      <TextStyles type="simpleText">Orders</TextStyles>
                      <TextStyles type="SubHeading">45</TextStyles>
                    </div>
                    <div>
                      <FlexLayout spacing="loose">
                        <TextStyles type="neutralText">3%</TextStyles>
                        {upArrow}
                      </FlexLayout>
                    </div>
                  </FlexLayout>
                </Card>
                <Card cardType="bridesmaid" extraClass="pr-40">
                  <FlexLayout spacing="extraLoose" direction="vertical">
                    {insta}
                    <div>
                      <TextStyles type="simpleText">Orders</TextStyles>
                      <TextStyles type="SubHeading">45</TextStyles>
                    </div>
                    <div>
                      <FlexLayout spacing="loose">
                        <TextStyles type="neutralText">3%</TextStyles>
                        {downArrow}
                      </FlexLayout>
                    </div>
                  </FlexLayout>
                </Card>
              </FlexLayout>
            </Card>
          </>
        </MainLayout>
        <div className="inte-Layout inte-Layout--full">
          <Card title={"Order History"}>
            <Grid></Grid>
          </Card>
        </div>
      </>
    );

    return <>{data}</>;
  }
}

export default Orders;
