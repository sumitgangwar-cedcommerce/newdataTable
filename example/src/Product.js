import React, { Component } from "react";
import {
  Badge,
  BodyHeader,
  Button,
  Card,
  CheckBox,
  FlexLayout,
  MainLayout,
  PageHeader,
  refresh,
  Select,
  spread,
  Tabs,
  Radio,
  TextStyles,
  Modal,
  Toast,
  ToastWrapper,
  FormElement,
  FormChild,
} from "ounce-ui";
import { Crosshair } from "react-feather";

// import pluscircle from './components/images/pluscircle.png';

const tabs = [
  {
    id: "all-customers",
    content: "All",
    icon: <Crosshair></Crosshair>,
  },
  {
    id: "Error",
    content: "Error",
  },
  {
    id: "Pending",
    content: "Pending",
  },
  {
    id: "Warning",
    content: "Warning",
  },
  {
    id: "Finished",
    content: "Finished",
  },
  {
    id: "Not Uploaded",
    content: "Not Uploaded",
  },
];

const options = [
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "Last 7 days", value: "lastWeek" },
];

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "all-customers",
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
      action: (
        <>
          <Button type="Plain">{spread}</Button>
          {/*<Popover popOverOpen={true}/>*/}
        </>
      ),
    };
    let rows = [row, row, row, row];
    return rows;
  };

  onChange = (menu) => {
    console.log(menu);
  };

  render() {
    let { columns, showToast } = this.state;

    let data = (
      <>
        <ToastWrapper>
          {showToast ? (
            <Toast
              type=""
              timeout={"3000000"}
              message={"Message"}
              onDismiss={() => this.setState({ showToast: !showToast })}
            ></Toast>
          ) : null}
        </ToastWrapper>
        <PageHeader title="Products" />

        <MainLayout>
          <>
            <Card extraClass="inte-card--plain">
              {/* <RangeSlider type="rangeSlider" /> */}

              <FlexLayout spacing="loose" childWidth="fullWidth">
                <div>
                  <Card>
                    <TextStyles type="mediumText">
                      Your <br /> Products
                    </TextStyles>
                    <TextStyles
                      type="Heading"
                      alignment="right"
                      utility="mt-25"
                    >
                      345
                    </TextStyles>
                  </Card>
                  <Card>
                    <TextStyles type="mediumText">
                      Bulk <br /> Product <br /> Upload
                    </TextStyles>
                    <TextStyles
                      type="Heading"
                      alignment="right"
                      utility="mt-25"
                    >
                      345
                    </TextStyles>
                  </Card>
                </div>
                <FlexLayout
                  spacing="loose"
                  direction="vertical"
                  childWidth="fullWidth"
                  halign="fill"
                >
                  <Card cardType="green">
                    <FlexLayout halign="fill" spacing="loose" valign="center">
                      <TextStyles type="mediumText">
                        Completed Orders
                      </TextStyles>
                      <TextStyles type="Heading" alignment="right">
                        345
                      </TextStyles>
                    </FlexLayout>
                  </Card>
                  <Card cardType="yellow">
                    <FlexLayout halign="fill" spacing="loose" valign="center">
                      <TextStyles type="mediumText">
                        Completed Orders
                      </TextStyles>
                      <TextStyles type="Heading" alignment="right">
                        345
                      </TextStyles>
                    </FlexLayout>
                  </Card>
                  <Card cardType="purple">
                    <FlexLayout halign="fill" spacing="loose" valign="center">
                      <TextStyles type="mediumText">
                        Completed Orders
                      </TextStyles>
                      <TextStyles type="Heading" alignment="right">
                        345
                      </TextStyles>
                    </FlexLayout>
                  </Card>
                  <Card cardType="red">
                    <FlexLayout halign="fill" spacing="loose" valign="center">
                      <TextStyles type="mediumText">
                        Completed Orders
                      </TextStyles>
                      <TextStyles type="Heading" alignment="right">
                        345
                      </TextStyles>
                    </FlexLayout>
                  </Card>
                </FlexLayout>
              </FlexLayout>
            </Card>
          </>
          <>
            <Card cardType="plain" title={"Product Syncing"}>
              <BodyHeader SubTitleSmall="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor." />
              <FlexLayout
                childWidth="fullWidth"
                spacing="loose"
                direction="vertical"
              >
                <Button
                  icon={refresh}
                  type="Primary"
                  loading={showToast}
                  halign="Start"
                  length="fullBtn"
                >
                  Sync Shopify to Facebook
                </Button>
                <Button
                  icon={refresh}
                  type="Secondary"
                  halign="Start"
                  length="fullBtn"
                >
                  Sync Facebook to Shopify{" "}
                </Button>
                <Button
                  onClick={() => {
                    this.setState({ showToast: true });
                  }}
                  loading={showToast}
                  icon={refresh}
                  type="Secondary"
                  halign="Start"
                  length="fullBtn"
                >
                  Show Toast
                </Button>
              </FlexLayout>
            </Card>
          </>
        </MainLayout>
        <div className="inte-Layout inte-Layout--full">
          <Card cardType="plain" title="Product History">
            <Tabs
              value={tabs}
              alignment="vertical"
              selected={this.state.selectedTab}
              onChange={(selectedTab) => {
                this.setState({ selectedTab: selectedTab });
              }}
            >
              {this.state.selectedTab}
            </Tabs>
            <Card cardType="linkwater">
              <FlexLayout spacing="extraLoose" direction="vertical">
                <FormElement horizontal={true} condensed={true}>
                  <FormChild>
                    <Button
                      type="Primary"
                      thickness={"large"}
                      loading={showToast}
                      disable={this.state.loading}
                      onClick={() => {
                        this.setState({ modalOpen: !this.state.modalOpen });
                      }}
                    >
                      MOdal Open Test
                    </Button>
                  </FormChild>
                  <FormChild>
                    <Select
                      options={options}
                      value={this.state.selectOption}
                      onChange={(selected) => {
                        this.setState({ selectOption: selected });
                      }}
                      thickness="thin"
                    />
                  </FormChild>
                  <FormChild>
                    <Select
                      options={options}
                      value={this.state.selectOption2}
                      onChange={(selected) => {
                        this.setState({ selectOption2: selected });
                      }}
                      thickness="thin"
                    />
                  </FormChild>
                </FormElement>

                <FlexLayout spacing="extraLoose">
                  <CheckBox
                    labelVal="Order ID"
                    checked={this.state.checked1}
                    onClick={(checked1) => {
                      this.setState({ checked1: !this.state.checked1 });
                    }}
                  />
                  <CheckBox labelVal="Type" />
                  <CheckBox labelVal="Last Updated" />
                  {/* <Radio labelVal="hh" name="dd" onClick={()=>{console.log('ss')}}/> */}
                  <Radio
                    name="fghgfhh"
                    labelVal="fhnbfhbnf"
                    onClick={() => {}}
                  />
                  <Radio
                    name="fghgfhh"
                    labelVal="fhnbfhbnf"
                    onClick={() => {}}
                  />
                </FlexLayout>
              </FlexLayout>
            </Card>
          </Card>
          <Modal
            primaryAction={{
              label: "test",
              onClick: () => {
                alert("work");
              },
            }}
            heading="Test"
            open={this.state.modalOpen}
            close={() => {
              console.log("claeed");
              this.setState({
                modalOpen: !this.state.modalOpen,
              });
            }}
          >
            <Card>
              <Select
                disabled={false}
                thickness="thin"
                error
                loading={this.state.selectValue2 === "value1"}
                type="Secondary"
                searchEable
                // labelInLine
                name="Label"
                placeholder="Multi Select Options"
                onChange={(e) => {
                  console.log(e);
                  this.setState({ selectValue2: e });
                }}
                value={this.state.selectValue2}
                options={[
                  {
                    label: "Option 1",
                    value: "value1",
                    group: [
                      { label: "Child 1", value: "value46" },
                      { label: "Child 2", value: "value57" },
                    ],
                  },
                  { label: "Option 2", value: "value2" },
                  { label: "Option 3", value: "value3" },
                  { label: "Option 4", value: "value4" },
                ]}
              ></Select>
            </Card>
          </Modal>
        </div>
      </>
    );

    return <>{data}</>;
  }
}

export default Product;
