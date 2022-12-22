import React from "react";
import { Pie } from "react-chartjs-2";
import {
  FlexLayout,
  Button,
  FlexChild,
  Card,
  TextStyles,
  TextField,
  Badge,
  Table,
  Pagination,
  ProgressCircle,
  ButtonDropdown,
} from "ounce-ui";
import { Calendar, RefreshCcw, MapPin, FileText } from "react-feather";
import {
  column,
  doughnutArr,
  lineData,
  PieData,
  reporstArr,
  reportArr,
  row,
  sellerArr,
  options,
} from "./dashboardData";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

const Dashboard4 = () => {
  return (
    <>
      <Card cardType="plain">
        <FlexLayout direction="vertical" spacing="loose">
          <Card
            cardType="plain"
            title="General Report"
            action={
              <Button
                type="Plain"
                content="Reload Data"
                iconRound={false}
                thickness="thin"
                icon={<RefreshCcw size="18" />}
              />
            }
          >
            <FlexLayout desktopWidth="25" spacing="loose">
              {reportArr.map((items) => {
                return (
                  <>
                    <Card>
                      <FlexLayout direction="vertical" spacing="extraLoose">
                        <FlexLayout halign="fill" valign="center">
                          <Button
                            icon={items.icon}
                            iconRound={false}
                            type="Plain"
                          />
                          <Badge>{items.badge}</Badge>
                        </FlexLayout>
                        <FlexLayout direction="vertical">
                          <TextStyles
                            fontweight="bold"
                            type="Heading"
                            content={items.price}
                          />
                          <TextStyles
                            fontweight="normal"
                            textcolor="light"
                            content={items.name}
                          />
                        </FlexLayout>
                      </FlexLayout>
                    </Card>
                  </>
                );
              })}
            </FlexLayout>
          </Card>

          <Card cardType="plain">
            <FlexLayout spacing="loose">
              <FlexChild desktopWidth="50">
                <Card
                  cardType="plain"
                  title="Sales Report"
                  action={<Calendar />}
                >
                  <Card>
                    <FlexLayout direction="vertical" spacing="extraLoose">
                      <FlexLayout spacing="loose" valign="center" halign="fill">
                        <FlexLayout spacing="loose">
                          {reporstArr.map((items) => {
                            return (
                              <>
                                <FlexChild>
                                  <TextStyles content={items.price} />
                                  <TextStyles content={items.month} />
                                </FlexChild>
                              </>
                            );
                          })}
                        </FlexLayout>
                        <ButtonDropdown
                          title="filter by Category"
                          list={[
                            {
                              label: "label",
                            },
                            {
                              label: "label",
                            },
                          ]}
                        />
                      </FlexLayout>

                      <Line data={lineData} />
                    </FlexLayout>
                  </Card>
                </Card>
              </FlexChild>

              <FlexChild desktopWidth="50">
                <FlexLayout spacing="loose">
                  <FlexChild desktopWidth="50">
                    <Card
                      cardType="plain"
                      title="Weekly Top Seller"
                      action={<Button content="Show More" type="Plain" />}
                    >
                      <Card>
                        <Pie
                          data={PieData}
                          width={250}
                          height={250}
                          options={options}
                        />
                      </Card>
                    </Card>
                  </FlexChild>

                  <FlexChild desktopWidth="50">
                    <Card
                      cardType="plain"
                      title="Sales Report"
                      action={<Button content="Show More" type="Plain" />}
                    >
                      <Card>
                        <Doughnut
                          options={options}
                          data={doughnutArr}
                          width={250}
                          height={250}
                        />
                      </Card>
                    </Card>
                  </FlexChild>
                </FlexLayout>
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
                    <Button
                      content="View More"
                      length="fullBtn"
                      type="Outlined"
                    />
                  </FlexLayout>
                </Card>
              </FlexChild>
            </FlexLayout>
          </Card>

          <Card cardType="plain">
            <FlexLayout spacing="loose">
              <FlexChild desktopWidth="100">
                <FlexLayout spacing="loose">
                  <FlexChild desktopWidth="50">
                    <Card>
                      <FlexLayout valign="center" halign="fill">
                        <FlexLayout direction="vertical">
                          <TextStyles
                            fontweight="extraBold"
                            type="SubHeading"
                            content="Target Sales"
                          />
                          <TextStyles textcolor="light" content="300 Sales" />
                        </FlexLayout>

                        <ProgressCircle
                          enablePercent
                          fontsize={4}
                          percentage={20}
                          size={100}
                        />
                      </FlexLayout>
                    </Card>
                  </FlexChild>
                  <FlexChild desktopWidth="50">
                    <Card
                      title="Social Media"
                      action={<Badge type="none">320 Followers</Badge>}
                    ></Card>
                  </FlexChild>
                </FlexLayout>
              </FlexChild>

              <FlexChild desktopWidth="100">
                <FlexLayout spacing="loose">
                  <FlexChild desktopWidth="50">
                    <Card>
                      <FlexLayout valign="center" halign="fill">
                        <FlexLayout direction="vertical">
                          <TextStyles
                            fontweight="extraBold"
                            type="SubHeading"
                            content="Target Sales"
                          />
                          <TextStyles textcolor="light" content="300 Sales" />
                        </FlexLayout>

                        <ProgressCircle
                          enablePercent
                          fontsize={4}
                          percentage={45}
                          size={100}
                        />
                      </FlexLayout>
                    </Card>
                  </FlexChild>
                  <FlexChild desktopWidth="50">
                    <Card
                      title="Posted Ads"
                      action={<Badge type="none">180 Campaign</Badge>}
                    >
                      2
                    </Card>
                  </FlexChild>
                </FlexLayout>
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

          <Card>Slider</Card>

          <Card cardType="plain">
            <FlexLayout spacing="loose">
              <FlexChild desktopWidth="33">
                <Card
                  title="Schedules"
                  cardType="plain"
                  action={<Button type="Plain" content="+ Add New Schedules" />}
                >
                  <Card>Calendar</Card>
                </Card>
              </FlexChild>
              <FlexChild desktopWidth="33">
                <Card cardType="plain" title="Transactions">
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
              <FlexChild desktopWidth="33">
                <Card
                  cardType="plain"
                  title="Recent Activities"
                  action={<Button type="Plain" content="View More" />}
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
                    <Button
                      content="View More"
                      length="fullBtn"
                      type="Outlined"
                    />
                  </FlexLayout>
                </Card>
              </FlexChild>
            </FlexLayout>
          </Card>
        </FlexLayout>
      </Card>
    </>
  );
};
export default Dashboard4;
