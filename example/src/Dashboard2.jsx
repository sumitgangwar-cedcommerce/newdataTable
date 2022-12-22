import React from "react"
import { Badge, Button, Card, FlexChild, FlexLayout, note, Pagination, RightArrow, Table, Tabs, TextField, TextStyles, Topbar } from "ounce-ui"
import { AlertCircle, MapPin, PieChart, RefreshCcw } from "react-feather"
import { bestseller, column,  row, unpaid } from "./data"
import { useState } from "react";
import Dought from "./doughnut";
function Dashboard2() {
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
    // function showTabs(tabs) {
    //     switch (tabs) {
    //         case "Active":
    //             return "";
    //         case "Inactive":
    //             return "";
    //         default:
    //             return "";
    //     }
    // }
    return (
        <>
            <FlexLayout spacing="loose">
                <Topbar/>
                <FlexChild desktopWidth="80">
                    <Card cardType="plain" title={"General Report"} action={<Button type="Plain">Show More</Button>}>
                        <FlexLayout>
                            <FlexChild desktopWidth="33">
                                <Card>
                                    <FlexLayout direction="vertical" spacing="extraLoose">
                                        {<PieChart size={50} />}
                                        <FlexChild>
                                            <FlexLayout direction="vertical" spacing="loose">
                                                <Button type="Plain" icon={<AlertCircle />} iconAlign={"right"}><TextStyles type="simpleText">My Total Assets</TextStyles></Button>
                                                <Button type="Plain" icon={<RefreshCcw />} iconAlign={"right"} iconRound={false}><TextStyles type="HeadingMedium">$ 1,413,102.02</TextStyles></Button>
                                                <TextStyles type="simpleText">Last updated 1 hour ago</TextStyles>
                                            </FlexLayout>

                                        </FlexChild>
                                        <Button type="Outlined" icon={RightArrow} iconAlign={"right"} iconRound={false}>Download Reports</Button>
                                    </FlexLayout>
                                </Card>
                            </FlexChild>
                            <FlexChild desktopWidth="66" >
                                <Card>
                                    <Tabs value={tabs} selected={selected} onChange={(e) => setSelected(e)}></Tabs>
                                    <FlexLayout spacing="loose" desktopWidth="33">
                                        <Card cardType="plain">
                                            <FlexLayout spacing="extraLoose" direction="vertical">
                                                {
                                                    unpaid.map((items) => {
                                                        return (
                                                            <>
                                                                <TextStyles textcolor="light">{items.name}</TextStyles>
                                                                <FlexLayout spacing="extraTight">
                                                                    <TextStyles>{items.price}</TextStyles>
                                                                    <TextStyles>{items.rate}</TextStyles>
                                                                </FlexLayout>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </FlexLayout>
                                        </Card>
                                        <Card cardType="plain">
                                            <FlexLayout spacing="extraLoose" direction="vertical">
                                                {
                                                    unpaid.map((items) => {
                                                        return (
                                                            <>
                                                                <TextStyles textcolor="light">{items.name}</TextStyles>
                                                                <FlexLayout spacing="extraTight">
                                                                    <TextStyles>{items.price}</TextStyles>
                                                                    <TextStyles>{items.rate}</TextStyles>
                                                                </FlexLayout>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </FlexLayout>
                                        </Card>
                                        <Card cardType="plain">
                                            <FlexLayout spacing="extraLoose" direction="vertical">
                                                {
                                                    unpaid.map((items) => {
                                                        return (
                                                            <>
                                                                <TextStyles textcolor="light">{items.name}</TextStyles>
                                                                <FlexLayout spacing="extraTight">
                                                                    <TextStyles>{items.price}</TextStyles>
                                                                    <TextStyles>{items.rate}</TextStyles>
                                                                </FlexLayout>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </FlexLayout>
                                        </Card>
                                    </FlexLayout>
                                </Card>
                            </FlexChild>
                        </FlexLayout>
                    </Card>
                </FlexChild>

                <FlexChild desktopWidth="20">
                    <Card cardType="plain" title={"Sales Report"} action={<Button type="Plain">Show more</Button>}>
                        <Card>
                            <Dought/>
                        </Card>
                    </Card>
                </FlexChild>
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
                            <Card cardType="plain" title={"Weekly Best Sellers"} action={<Button type="Outlined">Show more</Button>}>
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
                <Card cardType="plain" title={"Weekly Top Products"} action={<Button type="Outlined" icon={note} thickness={"thin"}>Export to pdf</Button>}>
                <FlexLayout spacing="loose">
                    <Card cardType="linkwater">
                        <Table columns={column} rows={row} />
                    </Card>
                    <Pagination />
                </FlexLayout>

            </Card>
            </FlexLayout>
        </>

    )
}
export default Dashboard2