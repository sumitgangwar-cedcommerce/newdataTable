import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  FlexLayout,
  Button,
  FlexChild,
  Card,
  Dots,
  Tabs,
  Select,
  TextStyles,
  ToolTip,
  TextField,
  Badge,
  Table,
  Pagination,
} from "ounce-ui";
import {
  AlertCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileText,
  MapPin,
  Plus,
  RefreshCw,
  X,
} from "react-feather";
import { spread, refresh } from "ounce-ui";
import { useState } from "react";
import {
  sellerArr,
  summary,
  column,
  row,
  doughnutArr,
  options,
  labelData,
} from "./dashboardData";
import { Bar } from "react-chartjs-2";

const Dashboard3 = () => {
  const [selected1, setSelected1] = useState("all-customers");
  const [selected2, setSelected2] = useState("all-customers");

  const [value1, setValue] = useState("");
  function onSelectChange(val) {
    setValue(val);
  }
  const tabs = [
    {
      id: 1,
      content: "Active",
    },
    {
      id: 2,
      content: "Inactive",
    },
  ];
  const month = [
    {
      id: 1,
      content: "Weekly",
    },
    {
      id: 2,
      content: "Monthly",
    },
  ];

  return (
    <>
      <Card cardType="plain">
        <FlexLayout spacing="loose">
          <FlexChild desktopWidth="75">
            <Card cardType="plain">
              <FlexLayout spacing="loose" direction="vertical">
                <Card cardType="blue">
                  <FlexLayout halign="fill" valign="center">
                    <TextStyles content="Announcement Bar" />
                    <TextStyles content={<X size="18" />} />
                  </FlexLayout>
                </Card>
                <FlexLayout>
                  <FlexChild desktopWidth="33">
                    <Card>
                      <FlexLayout spacing="extraLoose">
                        <FlexLayout halign="fill" spacing="extraLoose">
                          <TextStyles
                            type="simpleText"
                            fontweight="bold"
                            textcolor="dark"
                            content="Hi Angelina,welcome back!"
                          />
                          <Button
                            icon={spread}
                            iconAlign="right"
                            type="Plain"
                            iconRound={false}
                          />
                        </FlexLayout>
                        <FlexLayout direction="vertical" spacing="loose">
                          <FlexLayout spacing="loose" valign="center">
                            <TextStyles
                              type="smallTextS"
                              fontweight="normal"
                              textcolor="light"
                              content="My Total Assets"
                            />
                            <ToolTip
                              position="top"
                              helpText="Total value of your sales: $158.409.416"
                            >
                              <AlertCircle height="18" width="18" />
                            </ToolTip>
                          </FlexLayout>
                          <FlexLayout
                            valign="center"
                            halign="fill"
                            spacing="extraLoose"
                          >
                            <TextStyles
                              type="SubHeading"
                              fontweight="bold"
                              textcolor="dark"
                              content="$142,402,210"
                            />
                            <Button
                              icon={refresh}
                              iconAlign="right"
                              type="Plain"
                              iconRound={false}
                            />
                          </FlexLayout>
                          <FlexLayout valign="center" spacing="loose">
                            <ToolTip
                              position="top"
                              helpText="40% Higher than last month"
                            >
                              <Button
                                iconAlign="right"
                                icon={
                                  <ChevronUp
                                    height="18"
                                    width="18"
                                    color="white"
                                  />
                                }
                                content="49%"
                                iconRound={false}
                                thickness="thin"
                              />
                            </ToolTip>
                          </FlexLayout>
                          <TextStyles content="Last updated 1 hour ago"></TextStyles>
                          <FlexLayout
                            direction="vertical"
                            valign="center"
                            halign="center"
                            spacing="extraLoose"
                          >
                            <TextStyles content="Total net margin$12,921,050"></TextStyles>

                            <Button
                              iconAlign="right"
                              content="Download Reports"
                              icon={
                                <ChevronDown
                                  height="18"
                                  width="18"
                                  color="white"
                                />
                              }
                              iconRound={false}
                            />
                          </FlexLayout>
                        </FlexLayout>
                      </FlexLayout>
                    </Card>
                  </FlexChild>
                  <FlexChild desktopWidth="33">
                    <Card>
                      <FlexLayout direction="vertical" spacing="loose">
                        <FlexLayout spacing="loose" direction="vertical">
                          <FlexLayout spacing="loose">
                            <Dots size="1" />
                            <FlexLayout direction="vertical" spacing="loose">
                              <TextStyles
                                type="HeadingMedium"
                                fontweight="normal"
                                textcolor="dark"
                                content="$47,578.77"
                              />
                              <TextStyles
                                type="simpleText"
                                fontweight="normal"
                                textcolor="light"
                                content="Yearly budget"
                              />
                            </FlexLayout>
                          </FlexLayout>
                        </FlexLayout>
                        <FlexLayout spacing="extraLoose" direction="vertical">
                          <Select
                            dropDownWidth="10"
                            value={value1}
                            onChange={(e) => {
                              onSelectChange(e);
                            }}
                            options={[
                              {
                                label: "label 1",
                                value: "value",
                              },
                              {
                                label: "label 2",
                                value: "value 3",
                              },
                              {
                                label: "label 4",
                                value: "value",
                              },
                              {
                                label: "label 5",
                                value: "value",
                              },
                            ]}
                          ></Select>
                          <TextStyles content="You have spent about 35% of your annual budget." />
                        </FlexLayout>
                        <Bar data={labelData} height={250} />
                      </FlexLayout>
                    </Card>
                  </FlexChild>
                  <FlexChild desktopWidth="33">
                    <Card>
                      <FlexLayout direction="vertical" spacing="extraLoose">
                        <FlexLayout halign="center">
                          <Card cardType="selego">
                            <Tabs
                              value={tabs}
                              selected={selected1}
                              onChange={(e) => setSelected1(e)}
                            />
                          </Card>
                        </FlexLayout>
                        <Doughnut
                          data={doughnutArr}
                          width={250}
                          height={200}
                          options={options}
                        />
                      </FlexLayout>
                    </Card>
                  </FlexChild>
                </FlexLayout>
              </FlexLayout>
            </Card>
          </FlexChild>
          <FlexChild desktopWidth="25">
            <Card cardType="plain">
              <FlexLayout direction="vertical" spacing="loose">
                <Card cardType="purple">
                  <FlexLayout halign="fill" valign="center">
                    <FlexChild>
                      <FlexLayout spacing="loose">
                        <TextStyles
                          type="smallTextS"
                          fontweight="light"
                          textcolor="dark"
                          content="AVAILABLE FUNDS"
                        />
                        <ToolTip
                          position="top"
                          helpText="Total value of your sales: $158.409.416"
                        >
                          <AlertCircle height="18" width="18" />
                        </ToolTip>
                      </FlexLayout>

                      <TextStyles
                        type="SubHeading"
                        fontweight="extraBold"
                        textcolor="dark"
                        content="$479,578.77"
                      />
                    </FlexChild>

                    <FlexChild>
                      <Button
                        type="Plain"
                        icon={<Plus />}
                        thickness="thin"
                      ></Button>
                    </FlexChild>
                  </FlexLayout>
                </Card>
                <Card>
                  <FlexLayout direction="vertical" spacing="loose">
                    <FlexLayout halign="fill">
                      <TextStyles
                        type="normal"
                        fontweight="bold"
                        textcolor="dark"
                        content="Summary Report"
                      />
                      <Button
                        type="Plain"
                        iconRound={false}
                        icon={<RefreshCw height="18" width="18" />}
                        content="Refresh"
                      />
                    </FlexLayout>
                    <FlexLayout halign="center">
                      <Tabs
                        value={month}
                        selected={selected2}
                        onChange={(e) => setSelected2(e)}
                      />
                    </FlexLayout>
                    <FlexLayout spacing="loose">
                      {summary.map((items) => {
                        return (
                          <>
                            <TextStyles
                              textcolor="light"
                              fontweight="normal"
                              type="simpleText"
                              content={items.title}
                            />

                            <FlexLayout spacing="loose" valign="center">
                              <TextStyles
                                type="SubHeading"
                                fontweight="normal"
                                content={items.rate}
                              />
                              <FlexChild>
                                <FlexLayout valign="center">
                                  <TextStyles content={items.per} />
                                  <Button
                                    icon={items.btn}
                                    type="Plain"
                                    iconRound={false}
                                  />
                                </FlexLayout>
                              </FlexChild>
                            </FlexLayout>
                          </>
                        );
                      })}
                    </FlexLayout>

                    <FlexLayout>
                      <Button
                        type="Outlined"
                        thickness="thin"
                        content="My Portfolio Details"
                        iconAlign="right"
                        iconRound={false}
                        icon={<ArrowRight size="18" />}
                      />
                    </FlexLayout>
                  </FlexLayout>
                </Card>
              </FlexLayout>
            </Card>
          </FlexChild>
        </FlexLayout>
      </Card>

      <Card cardType="plain">
        <FlexLayout spacing="loose">
          <FlexChild desktopWidth="66">
            <Card
              cardType="plain"
              title="Official Store"
              action={
                <TextField
                  thickness={"thin"}
                  onFocus={false}
                  placeHolder="filter by map"
                  prefix={<MapPin size="18" />}
                />
              }
            >
              <Card title="250 Official stores in 21 countries, click the marker to see location details.">
                <Card>
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg"
                    alt=""
                    style={{ width: "100%", height: "285px" }}
                  />
                </Card>
              </Card>
            </Card>
          </FlexChild>

          <FlexChild desktopWidth="33">
            <Card
              cardType="plain"
              title="Weekly Best Sellers"
              action={<Button content="View More" cardType="Outlined" />}
            >
              <FlexLayout desktopWidth="100" spacing="loose">
                {sellerArr.map((items) => {
                  return (
                    <>
                      <Card>
                        <FlexLayout
                          valign="center"
                          halign="fill"
                          spacing="loose"
                        >
                          <FlexLayout valign="center" spacing="loose">
                            <img
                              src={items.img}
                              alt=""
                              width="40"
                              height="30"
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
                          <Badge>{items.sale}</Badge>
                        </FlexLayout>
                      </Card>
                    </>
                  );
                })}
                <Button content="View More" length="fullBtn" type="Outlined" />
              </FlexLayout>
            </Card>
          </FlexChild>
        </FlexLayout>
      </Card>

      <Card
        title="Weekly Top Products"
        cardType="plain"
        action={
          <Button
            type="Secondary"
            iconRound={false}
            thickness="thin"
            content="Export to Excel"
            icon={<FileText size="18" />}
          />
        }
      >
        <FlexLayout spacing="loose">
          <Table columns={column} rows={row} />
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
                          {sellerArr.map((items) => {
                            return (
                              <>
                                <Card>
                                  <FlexLayout
                                    valign="center"
                                    halign="fill"
                                    spacing="loose"
                                  >
                                    <FlexLayout valign="center" spacing="loose">
                                      <img
                                        src={items.img}
                                        alt=""
                                        width="40"
                                        height="30"
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
                                    <Badge>{items.sale}</Badge>
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

                <FlexChild desktopWidth="50">
                  <FlexLayout spacing="loose">
                    <TextStyles
                      fontweight="extraBold"
                      content="Weekly Best Sellers"
                    />

                    <FlexChild desktopWidth="100">
                      <Card cardType="plain">
                        <FlexLayout desktopWidth="100" spacing="loose">
                          {sellerArr.map((items) => {
                            return (
                              <>
                                <Card>
                                  <FlexLayout
                                    valign="center"
                                    halign="fill"
                                    spacing="loose"
                                  >
                                    <FlexLayout valign="center" spacing="loose">
                                      <img
                                        src={items.img}
                                        alt=""
                                        width="40"
                                        height="30"
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
                                    <Badge>{items.sale}</Badge>
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
    </>
  );
};
export default Dashboard3;
