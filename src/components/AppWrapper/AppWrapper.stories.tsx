import React, { useState } from "react";
import { AppWrapper } from "./AppWrapper";
import { BodyLayout, LRLayout, PageHeader, Topbar, Modal } from "..";
import { FlexLayout } from "../FlexLayout";
import TextStyles from "../TextStyles/TextStyles";
import Button from "../Button/Button";
import { Bell, Box, Home, LogOut, Settings, User } from "react-feather";
import NewSidebar from "../NewSidebar/NewSidebar";
import { Card } from "../Card";
import AnnouncementBar from "../AnnouncementBar/AnnouncementBar";
import PageFooter from "../PageFooter/PageFooter";
import Demo from "../../Templates/Demo/Demo";

export default {
  title: "Components/Layout/Appwrapper",
  component: AppWrapper,
  argTypes: {
    children: {
      description: "children description",
      control: {
        type: "text",
      },
      defaultValue: "Children",
    },
  },
};

const Template = ({ ...rest }) => {
  const subMenu = [
    {
      id: "dashboard",
      content: "FAQ",
      path: "/panel/dashboard",
      icon: <Home size={20}></Home>,
    },
    {
      id: "profiling",
      content: "HELP",
      path: "/panel/profiling",
      icon: <Box size={20}></Box>,
    },
  ];
  const menu = [
    {
      id: "dashboard",
      content: "Dashboard",
      path: "/panel/dashboard",
      icon: <Box size={20}></Box>,
    },
    {
      id: "profiling",
      content: "Profile",
      path: "/panel/profiling",
      icon: <Box size={20}></Box>,
    },
    {
      id: "products",
      content: "Products",
      path: "/panel/products",
      icon: <Box size={20}></Box>,
    },
    {
      id: "order",
      content: "Orders",
      path: "/panel/order",
      icon: <Box size={20}></Box>,
    },
    {
      id: "configuration",
      content: "Configuration",
      path: "/panel/config",
      icon: <Box size={20}></Box>,
    },
    {
      id: "configuration",
      content: "Configuration",
      path: "/panel/config",
      icon: <Box size={20}></Box>,
    },
    {
      id: "configuration",
      content: "Configuration",
      path: "/panel/config",
      icon: <Box size={20}></Box>,
    },
    {
      id: "configuration",
      content: "Configuration",
      path: "/panel/config",
      icon: <Box size={20}></Box>,
    },
    {
      id: "queuedtasks",
      content: "Activities",
      path: "/panel/activities",
      icon: <Box size={20}></Box>,
    },
  ];
  // const [open, togglePopover] = useState(false);
  // const togglePop = () => togglePopover((open: any) => !open);
  // useEffect(() => {
  //   togglePopover(open);
  // }, [open]);

  const [open3, toggleModal3] = useState(true);
  const secondaryAction3 = {
    content: "Close",
    loading: false,
    onClick: () => {
      toggleModal3(!open3);
    },
  };

  return (
    <>
      {/* <AnnouncementBar
        children={"Offer Starting Sooon !!!"}
        align="center"
        type="info"
      ></AnnouncementBar> */}
      <Topbar
        // connectLeft={<TextField placeHolder="Search Your Products" innerPreIcon={<Search size={20}/>}></TextField>}
        connectRight={
          <FlexLayout spacing="tight">
            <Button
              onClick={() => {}}
              type="Outlined"
              iconAlign="left"
              icon={<Bell size={20}></Bell>}
            />
            <Button
              type="Outlined"
              iconAlign="left"
              icon={<User size={20}></User>}
            />
            {/* <Popover
                  popoverContainer={"body"}
                  open={open} 
                  onClose={togglePop}
                  activator={<Button onClick={togglePop} type="Outlined" iconAlign="left" icon={<User size={20}></User>} />}
                >
                <Button
                  halign="Start"
                  FullBtn={true}
                  type="Plain"
                  icon={<Upload size={20} />}
                  iconRound={false}
                >
                  Upload
                </Button>
                <Button
                  halign="Start"
                  FullBtn={true}
                  type="Plain"
                  icon={<RefreshCcw size={20} />}
                  iconRound={false}
                >
                  Sync
                </Button>
                <Button
                  halign="Start"
                  FullBtn={true}
                  icon={<Trash size={20} />}
                  iconRound={false}
                  type="DangerPlain"
                >
                  Delete
                </Button>
              </Popover> */}
          </FlexLayout>
        }
        // darkMode
        account={{
          name: "Jon Doe",
          url: "www.Cedcommerce.com",
          image:
            "https://rapidexeducation.com/wp-content/uploads/2016/01/tutor-8.jpg",
          userPopoverMenu: (
            <>
              <Button
                FullBtn={true}
                type="Outlined"
                halign="Start"
                icon={<User size={20} />}
              >
                Profile
              </Button>
              <Button
                FullBtn={true}
                type="TextButton"
                halign="Start"
                icon={<Settings size={20} />}
              >
                Settings
              </Button>
              <Button
                FullBtn={true}
                type="Outlined"
                halign="Start"
                icon={<LogOut size={20} />}
              >
                Logout
              </Button>
            </>
          ),
        }}
      />
      <NewSidebar
        menu={menu}
        subMenu={subMenu}
        mobileLogo={
          <img
            width={40}
            src="https://i.imgur.com/cqfQhek.png"
            alt="CedCommerce"
            title="CedCommerce"
          />
        }
        logo={
          <img
            width={150}
            src="https://d3vlhkqyz4y38a.cloudfront.net/skin/frontend/cedcomnew/default/images/header/logo/ced-logo-web.svg"
            alt="CedCommerce"
            title="CedCommerce"
          />
        }
        onChange={() => {
          return null;
        }}
      />

      <BodyLayout Layout="Boxed">
        <Demo />
        <PageHeader
          title="PageHeader"
          sticky
          primaryAction={<Button>Hello</Button>}
        ></PageHeader>
        <LRLayout title={<Card>Title</Card>}>
          <Card cardType="Subdued" title={"Subdued Card In Main App"}>
            <TextStyles>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </TextStyles>
          </Card>
        </LRLayout>
        <Card title={"Card Heading"}>
          <TextStyles textcolor="light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </TextStyles>
          <Card cardType="Subdued" title={"Subdued Card In Card"}>
            <TextStyles>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </TextStyles>
          </Card>
        </Card>

        <Card cardType="Subdued" title={"Subdued Card In Main App"}>
          <TextStyles>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </TextStyles>
        </Card>
        <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
        <Modal
          modalSize="large"
          open={!open3}
          heading={"Modal with Secondary Action"}
          secondaryAction={secondaryAction3}
          close={() => {
            toggleModal3(!open3);
          }}
        >
          Modal with Primary Action
        </Modal>
        <PageFooter>
          <TextStyles>Cedcommerce @ 2020</TextStyles>
        </PageFooter>
      </BodyLayout>
    </>
  );
};

export const Primary = Template.bind({});
