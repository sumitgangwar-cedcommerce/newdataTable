import React from "react"
import { AnnouncementBar, Badge, Button, Card, FlexChild, FlexLayout, note, Pagination, Popover, RightArrow, Select, setting, spread, Table, Tabs, TextField, TextStyles, ToolTip } from "ounce-ui"
import { useState } from "react";
import { ChevronUp, MapPin, ShoppingBag } from "react-feather";
import { bestseller, change, column, row, Transaction } from "./data";
import Dought from "./doughnut";
function Dashboard1() {
  const [value1, setValue] = useState("1");
  function onSelectChange(val) {
    setValue(val);
  }
  const [selected, setSelected] = useState("Active");
  const tabs = [
    {
      id: "Active",
      content: "Active",
    },
    {
      id: "Inactive",
      content: "Inactive",
    }]
  function showTabs(tabs) {
    switch (tabs) {
      case "Active":
        return <Dought />;
      case "Inactive":
        return <h1>Not Uploaded</h1>;
      default:
        return "";
    }
  }
  // eslint-disable-next-line no-use-before-define
  const [open, togglePopover] = useState(open);
  const togglePop = () => togglePopover(!open);
  return (
  
    <FlexLayout direction="vertical" spacing="loose">
      <AnnouncementBar>
       
      </AnnouncementBar>
      <FlexLayout spacing="loose" >
        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="100">
          <Card cardType="plain" title={"General Report"} action={<Select
            thickness="thin"
            value={value1}
            onChange={(e) => {
              onSelectChange(e);
            }}
            options={[
              {
                label: 'Daily',
                value: '1'
              },  
              {
                label: 'Weekly',
                value: '2'
              },
              {
                label: 'Monthly',
                value: '3'
              },
              {
                label: 'Yearly',
                value: '4'
              },
              {
                label: 'Custom Date',
                value: '5'
              },
            ]}></Select>}>

            <FlexLayout desktopWidth="50" mobileWidth="50" tabWidth="50">
              <Card>

                <FlexLayout direction="vertical" spacing="extraLoose">
                  {<ShoppingBag size={40} color={"#F59E0B"} />}
                  <TextStyles type="Heading" fontweight="extraBold">$ 54.143</TextStyles>
                  <ToolTip helpText={"47% higher than last month"} position="top">
                    <Button iconRound={false} iconAlign={"right"} thickness="thin" icon={<ChevronUp />}>47%</Button>
                  </ToolTip>
                  <TextStyles textcolor="light">
                    Sales earnings this month after associated author fees, & before taxes.
                  </TextStyles>
                  <Button type="Outlined" icon={RightArrow} iconAlign={"right"} iconRound={false}>Download Reports</Button>
                </FlexLayout>
              </Card>
              <Card>
                <FlexLayout direction="vertical" spacing="extraLoose">
                <TextStyles fontweight="bold" content={  <Button type="Plain">Introducing new dashboard! Download now atthemeforest.net.</Button>}>
        
        </TextStyles>
                  {
                    Transaction.map((items) => {
                      return (
                        <FlexLayout direction="vertical" spacing="extraTight">
                          <TextStyles type="simpleText" textcolor="light">
                            {items.heading}
                          </TextStyles>
                          <FlexLayout spacing="extraTight" valign="center">
                            <TextStyles>
                              {items.rate}
                            </TextStyles>
                            <ToolTip helpText={items.helptext} position={"top"}><TextStyles>{items.tooltip} {items.icon}</TextStyles></ToolTip>

                          </FlexLayout>
                        </FlexLayout>
                      )
                    })
                  }
                </FlexLayout>
              </Card>
            </FlexLayout>
          </Card>
        </FlexChild>

        <FlexChild desktopWidth="25" tabWidth="50" mobileWidth="100">
          <Card title={"Visitors"} cardType="plain" action={<Button type="Secondary">View on Map</Button>}>
            <Card title={"Realtime active users"} action={<Popover popoverWidth={150} open={open} activator={<Button type="Plain" icon={spread} onClick={togglePop} iconRound={false} />}>
              <Button icon={setting} type={"Plain"}>Export</Button>
              <Button icon={note} type={"Plain"}>Setting</Button>
            </Popover>}>
              <Dought />

            </Card>
          </Card>
        </FlexChild>
        <FlexChild desktopWidth="25" tabWidth="50" mobileWidth="100">
          <Card title={"Users By Age"} cardType="plain" action={<Button type="Secondary">Show More</Button>}>
            <Card>
              <Tabs value={tabs} selected={selected} onChange={(e) => setSelected(e)}></Tabs>
              {showTabs(selected)}
            </Card>
          </Card>
        </FlexChild>

      </FlexLayout>
      <Card cardType="plain">
        <FlexLayout spacing="loose">
          <FlexChild desktopWidth="66">
            <Card cardType="plain" title={"Official Store"} action={<TextField thickness={"thin"} onFocus={false} placeHolder="filter by map" prefix={<MapPin />}></TextField>}>
              <Card>
                <TextStyles>250 Official stores in 21 countries, click the marker to see location details.</TextStyles>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" alt="" style={{ width: "100%", height: "400px" }} />
              </Card>
            </Card>
          </FlexChild>
          <FlexChild desktopWidth="33" mobileWidth="100" tabWidth="50">
            <Card cardType="plain" title={"Weekly Best Sellers"}>
              <FlexLayout spacing="loose">
                {
                  bestseller.map((items) => {
                    return (
                      <FlexChild desktopWidth="100" mobileWidth="100" tabWidth="100">
                        <Card>
                          <FlexLayout spacing="loose" valign="center" halign="fill">
                            <React.Fragment><img width={"50px"} alt="" src={items.src} style={{ borderRadius: "10px" }} /></React.Fragment>
                            <FlexLayout direction="vertical">
                              <TextStyles>{items.name}</TextStyles>
                              <TextStyles textcolor="light" type="simpleText">{items.date}</TextStyles>
                            </FlexLayout>
                            <Badge>{items.badge}</Badge>

                          </FlexLayout>
                        </Card>
                      </FlexChild>

                    )
                  })
                }
                <FlexChild desktopWidth="100" mobileWidth="100" tabWidth="100">
                  <Button length="fullBtn" type="Outlined">View more</Button>
                </FlexChild>

              </FlexLayout>

            </Card>
          </FlexChild>
        </FlexLayout>
      </Card>
      <Card cardType="plain">
        <FlexLayout spacing="loose" desktopWidth="50" tabWidth="100" mobileWidth="100">
          {
            change.map((items) => {
              return (
                <FlexChild>
                  <Card cardType={items.cartype}>
                    <FlexLayout spacing="loose">
                      <FlexChild desktopWidth="66">
                        <FlexLayout spacing="extraLoose" direction="vertical">
                          <TextStyles type="SubHeading" fontweight="normal">
                            {items.heading}
                          </TextStyles>
                          <TextStyles type="simpleText" textcolor="light" fontweight="normal">
                            {items.subheaading}
                          </TextStyles>
                          {items.action}
                        </FlexLayout>

                      </FlexChild>
                      <FlexChild desktopWidth="33">
                        <img width={"100%"} src={items.img} alt="" />
                      </FlexChild>

                    </FlexLayout>
                  </Card>
                </FlexChild>
              )
            })
          }

        </FlexLayout>
      </Card>
      <Card cardType="plain" title={"Weekly Top Products"} action={<Button type="Outlined" icon={note} thickness={"thin"}>Export to pdf</Button>}>
        <FlexLayout spacing="loose">
          <Card cardType="linkwater">
            <Table columns={column} rows={row} />
          </Card>
          <Pagination />
        </FlexLayout>

      </Card>
      <Card cardType="plain">
        <FlexLayout>
          <FlexChild desktopWidth="66">
            <Card cardType="plain">
              <FlexLayout spacing="loose">
                <FlexChild desktopWidth="50">
                  <FlexLayout spacing="loose">
                    <TextStyles
                      fontweight="extraBold"
                      content="Weekly Best Sellers"
                    />

                    <FlexChild desktopWidth="100">
                      <Card cardType="plain">
                        <FlexLayout desktopWidth="100" spacing="loose">
                          {bestseller.map((items) => {
                            return (
                              <>
                                <Card>
                                  <FlexLayout
                                    valign="center"
                                    halign="fill"
                                    spacing="loose"
                                  >
                                    <img
                                      src={items.src}
                                      alt=""
                                      width="40"
                                      height="35"
                                    />
                                    <FlexChild>
                                      <TextStyles
                                        fontweight="extraBold"
                                        content={items.name}
                                      />
                                      <TextStyles
                                        fontweight="normal"
                                        textcolor="light"
                                        type="simpleText"
                                        content={items.year}
                                      />
                                    </FlexChild>
                                    <TextStyles>{items.badge}</TextStyles>
                                  </FlexLayout>
                                </Card>
                              </>
                            );
                          })}
                        </FlexLayout>
                      </Card>
                    </FlexChild>
                  </FlexLayout>
                </FlexChild>

                <FlexChild desktopWidth="50">
                  <FlexLayout spacing="loose">
                    <TextStyles
                      fontweight="extraBold"
                      content="Transactions"
                    />

                    <FlexChild desktopWidth="100">
                      <Card cardType="plain">
                        <FlexLayout desktopWidth="100" spacing="loose">
                          {bestseller.map((items) => {
                            return (
                              <>
                                <Card>
                                  <FlexLayout
                                    valign="center"
                                    halign="fill"
                                    spacing="loose"
                                  ><FlexLayout spacing="loose" valign="center">
                                      <img
                                        src={items.src}
                                        alt=""
                                        width="40"
                                        height="35"
                                      />
                                      <FlexChild>
                                        <TextStyles
                                          fontweight="extraBold"
                                          content={items.name}
                                        />
                                        <TextStyles
                                          fontweight="normal"
                                          textcolor="light"
                                          type="simpleText"
                                          content={items.year}
                                        />
                                      </FlexChild>
                                    </FlexLayout>

                                    <TextStyles>{items.badge}</TextStyles>
                                  </FlexLayout>
                                </Card>
                              </>
                            );
                          })}

                          <Button
                            content="View More"
                            length="fullBtn"
                            type="Outlined"
                          />
                        </FlexLayout>
                      </Card>
                    </FlexChild>
                  </FlexLayout>
                </FlexChild>
              </FlexLayout>
            </Card>
          </FlexChild>
        </FlexLayout>
      </Card>
    </FlexLayout>


  )
}
export default Dashboard1