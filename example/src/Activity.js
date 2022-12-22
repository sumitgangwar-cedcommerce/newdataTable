
import React, { Component, useState } from "react";
import {
  Button,
  Card,
  FlexLayout,
  PageHeader,
  Select,
  TextStyles,
  Pagination,
  Popover,
  Filter,
  TextField,
  Accordion,
  Progressbar,
  ProgressCircle,
  ChoiceList,
} from "ounce-ui";

const Template = ({ ...rest }) => {
  const [open, togglePopover] = useState(false);
  const [open1, togglePopover1] = useState(false);
  const [textIn, updateText] = useState(rest.open);
  const togglePop = () => togglePopover((open) => !open);
  const togglePop1 = () => togglePopover1((open1) => !open1);

  // return <Card>
  return (
    <div id="eeee22" style={{ height: "100px", overflow: "auto" }}>
      <p>fsdfdssdfdsfsdffdsf</p>
      <p>fsdfdssdfdsfsdffdsf</p>
      <p>fsdfdssdfdsfsdffdsf</p>
      <p>fsdfdssdfdsfsdffdsf</p>
      <p>fsdfdssdfdsfsdffdsf</p>
      <div id="eeee" style={{ height: "100px", overflow: "auto" }}>
        <Card>
          <FlexLayout halign="center">
            <Popover
              open={open}
              onClose={togglePop}
              activator={<Button onClick={togglePop}>Click</Button>}
            >
              <TextField onChange={(e) => updateText(e)} value={textIn} />
            </Popover>
            <Popover
              open={open1}
              onClose={togglePop1}
              activator={<Button onClick={togglePop1}>Click</Button>}
            >
              <TextField onChange={(e) => updateText(e)} value={textIn} />
            </Popover>
            <Select
              thickness="thin"
              type="Secondary"
              value={"d"}
              onChange={(e) => {
                this.setState({ product_type: e });
              }}
              options={[
                {
                  label: "Simple",
                  value: "simple",
                },
                {
                  label: "Variant",
                  value: "variant",
                },
              ]}
            />
            <ChoiceList
              thickness="thin"
              type="Secondary"
              value={"d"}
              onChange={(e) => {
                this.setState({ product_type: e });
              }}
              options={[
                {
                  label: "Simple",
                  value: "simple",
                },
                {
                  label: "Variant",
                  value: "variant",
                },
              ]}
            />
          </FlexLayout>
          <p>fsdfdssdfdsfsdffdsf</p>
          <p>fsdfdssdfdsfsdffdsf</p>
          <p>fsdfdssdfdsfsdffdsf</p>
          <p>fsdfdssdfdsfsdffdsf</p>
          <p>fsdfdssdfdsfsdffdsf</p>
        </Card>
      </div>
    </div>
  );
};

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    let arr = [];
    for (let i = 0; i <= this.state.count; i++) {
      arr[i] = (
        <FlexLayout halign="start" spacing="loose" valign="center">
          <Select
            thickness="Thin"
            type="Secondary"
            options={[
              { label: "Option 1", value: "value" },
              { label: "Option 2", value: "value" },
            ]}
          />
          <Select
            thickness="Thin"
            type="Secondary"
            options={[
              { label: "Option 1", value: "value" },
              { label: "Option 2", value: "value" },
            ]}
          />
          <Button loading="true" thickness="thin">
            hello
          </Button>
          {/* <Spinner /> */}
        </FlexLayout>
      );
    }
    let {product_type,source_id_filter,
    } = this.state;

    const accordionData = [
      {
        title: "Section 1",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`,
      },
      {
        title: "Section 2",
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
        reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
        quaerat iure quos dolorum accusantium ducimus in illum vero commodi
        pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
        quidem maiores doloremque est numquam praesentium eos voluptatem amet!
        Repudiandae, mollitia id reprehenderit a ab odit!`,
      },
      {
        title: "Section 3",
        content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
        quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
        dolor ut sequi minus iste? Quas?`,
      },
    ];

    let data = (
      <div>
        {/* <PageLoader></PageLoader> */}
        {/* <PageNotFound sub_message="Page You are Looking for does not exist check url or go to home" message="Page not found"  action={{content:"Go to Home", type: "Plain"}} /> */}
        {/* <SessionExpire message="Your Session has Expired" sub_message="To Contine as Jon Doe please Login again" actionSecondary={{content:"Login", type:"Primary"}}></SessionExpire> */}
        {/* <Card cardType="selego">
          <NoDataFound  actionSecondary={{content:"Know How to Increase sales", type: "Plain"}} sub_message="Add Your First Order" message="No Orders Found"></NoDataFound>
        </Card> */}

        <Filter
          filters={[
            {
              name: "Product Type",
              children: (
                <Select
                  thickness="thin"
                  type="Secondary"
                  value={product_type}
                  onChange={(e) => {
                    this.setState({ product_type: e });
                  }}
                  options={[
                    {
                      label: "Simple",
                      value: "simple",
                    },
                    {
                      label: "Variant",
                      value: "variant",
                    },
                  ]}
                />
              ),
            },
            {
              name: "Quantity",
              children: (
                <TextField
                  type={"Number"}
                  value={quantity_filter}
                  showHelp={
                    "Enter the quantity of products, only numeric values are accepted"
                  }
                  onChange={(e) => {
                    if (Number.isInteger(parseInt(e))) {
                      this.setState({ quantity_filter: e });
                    } else {
                      alert("Enter only numeric value");
                    }
                  }}
                  onEnter={() => {
                    console.log(quantity_filter);
                  }}
                />
              ),
            },
            {
              name: "Source ID",
              children: (
                <TextField
                  type={"Number"}
                  showHelp={
                    "Enter the Source ID of products, only numeric values are accepted"
                  }
                  onChange={(e) => {
                    if (Number.isInteger(parseInt(e))) {
                      this.setState({ source_id_filter: e });
                    } else {
                      alert("Enter only numeric value");
                    }
                  }}
                  value={source_id_filter}
                  onEnter={() => {
                    console.log(source_id_filter);
                  }}
                />
              ),
            },
            // {
            //     name : "Checkbox Filter",
            //     children :  <FlexLayout spacing="loose">
            //         <CheckBox labelVal="Finished"/>
            //         <CheckBox labelVal="Warning"/>
            //         <CheckBox labelVal="Error"/>
            //         <CheckBox labelVal="Pending"/>
            //     </FlexLayout>
            // },
          ]}
          label={"More Filters"}
          heading={"Filters"}
          onApply={() => {
            // console.log(source_id_filter,quantity_filter,product_type);
            // this.state.more_filters['source_id_filter']=source_id_filter!==''?source_id_filter:'';
            // this.state.more_filters['quantity_filter']=quantity_filter!==''?quantity_filter:'';
            // this.state.more_filters['product_type']=product_type!=='Choose'?product_type:'';
            this.setState({ more_filters: this.state.more_filters });
          }}
        />
        {accordionData.map(({ title, content }) => (
          <Accordion
            title={title}
            active={this.state.activeB}
            onClick={() => {
              this.setState({ activeB: !this.state.activeB });
            }}
          >
            {content}
          </Accordion>
        ))}
        <TextStyles fontWeight={"bold"}>vikas</TextStyles>
        <ProgressCircle
          message="OnGoing"
          percentage="90100"
          size="200"
          enablePercent={false}
          fontsize="3"
        />
        <Card cardType={"green"}>ff</Card>
        <Progressbar
          percentage={50}
          progessThickness=""
          message="50% Completed"
        />
        {/* <AnnouncementBar>ss</AnnouncementBar> */}
        <PageHeader sticky="sticky">Activity dd</PageHeader>
        {/* <StepWizard alignment={"vertical"} steppercolor={"complete"} StepHeading="Title" StepSubHeading="Subtitle"></StepWizard> */}
        <TextField
          thickness={"thin"}
          error={true}
          inneric={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c3c3c3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          }
          showHelp="ff"
        >
          dd
        </TextField>
        <Card>
          <Button
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-alert-octagon"
              >
                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            }
            iconAlign={"right"}
            type={"Plain"}
            // iconAlign="left"
            iconRound={false}
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Button
          </Button>
          <Accordion
            active={this.state.activeA}
            onClick={() => {
              this.setState({ activeA: !this.state.activeA });
            }}
            title="Accordion"
          >
            <Card cardType="linkwater">
              <Pagination countPerPage="10"></Pagination>
              {arr}
            </Card>
          </Accordion>
          <Accordion
            active={this.state.activeA}
            onClick={() => {
              this.setState({ activeA: !this.state.activeA });
            }}
            title="Accordion"
          >
            <Card cardType="linkwater">
              <Pagination countPerPage="10"></Pagination>
              {arr}
            </Card>
          </Accordion>
        </Card>
        <Card>
          <Template />
        </Card>
        <Card extraClass="inte-card--plain">
          <FlexLayout
            childWidth="fullWidth"
            spacing="loose"
            direction="vertical"
          >
            <Card cardType="hover">
              <FlexLayout spacing="loose" halign="fill" valign="center">
                <FlexLayout spacing="loose" valign="center">
                  <img width="50" src="https://i.imgur.com/XG125Fj.png" />
                  <TextStyles textcolor="light" type="neutralText">
                    Error Fetching data from Shopify. Kindly contact Support for
                    Help
                  </TextStyles>
                </FlexLayout>
                <FlexLayout spacing="loose" valign="center">
                  <TextStyles textcolor="light" type="neutralText">
                    26/08/2020
                  </TextStyles>
                  <TextStyles textcolor="light" type="neutralText">
                    10:05 am
                  </TextStyles>
                </FlexLayout>
              </FlexLayout>
            </Card>
            <Card cardType="hover">
              <FlexLayout spacing="loose" halign="fill" valign="center">
                <FlexLayout spacing="loose" valign="center">
                  <img width="50" src="https://i.imgur.com/XG125Fj.png" />
                  <TextStyles textcolor="light" type="neutralText">
                    Error Fetching data from Shopify. Kindly contact Support for
                    Help
                  </TextStyles>
                </FlexLayout>
                <FlexLayout spacing="loose" valign="center">
                  <TextStyles textcolor="light" type="neutralText">
                    26/08/2020
                  </TextStyles>
                  <TextStyles textcolor="light" type="neutralText">
                    10:05 am
                  </TextStyles>
                </FlexLayout>
              </FlexLayout>
            </Card>
            <Card cardType="linkwater">
              <Pagination></Pagination>
            </Card>
            {/* <Card cardType="linkwater">
                        <Filter></Filter>
                    </Card> */}
          </FlexLayout>
        </Card>
        
      </div>
    );
    return <>{data}</>;
  }
}
export default Activity;
