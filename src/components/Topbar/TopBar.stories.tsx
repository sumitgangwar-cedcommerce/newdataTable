import React from "react";
import { Bell, User, Settings, LogOut, Search, Facebook } from "react-feather";
import { Button, FlexLayout, TextField, Topbar } from "..";
import * as Icon from "../../Icon/Icon";
import AnnouncementBar from "../AnnouncementBar/AnnouncementBar";
const iconMap = { ...Icon };

export default {
  title: "Components/Topbar",
  component: Topbar,
  argTypes: {
    connectLeft: {
      description: "left content",
      control: {
        type: "object",
        disable: true,
      },
    },
    connectRight: {
      description: "Right content",
      control: {
        type: "object",
        disable: true,
      },
    },
    account: {
      description: "Account ",
      control: {
        type: "object",
      },
    },
    darkMode: {
      description: "Add dark light mode",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template = ({ icon, ...rest }: any) => {
  return (
    <Topbar
      connectLeft={
        <Button type="Secondary" icon={<Facebook />} content="Connect" />
      }
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
              type="Secondary"
              halign="Start"
              icon={<User size={20} />}
            >
              Profile
            </Button>
            <Button
              FullBtn={true}
              type="Secondary"
              halign="Start"
              icon={<Settings size={20} />}
            >
              Settings
            </Button>
            <Button
              FullBtn={true}
              type="Secondary"
              halign="Start"
              icon={<LogOut size={20} />}
            >
              Logout
            </Button>
          </>
        ),
      }}
    />
  );
};

export const Primary = Template.bind({});

// Without name
export const Topbar_with_announcement_bar: any = Template.bind({});
Topbar_with_announcement_bar.decorators = [
  () => {
    return (
      <>
        <AnnouncementBar
          type="info"
          destroy
          children="I am Annoucment bar!!!"
        ></AnnouncementBar>
        <Topbar
          connectLeft={
            <Button type="Secondary" icon={<Facebook />} content="Connect" />
          }
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
                  type="Secondary"
                  halign="Start"
                  icon={<User size={20} />}
                >
                  Profile
                </Button>
                <Button
                  FullBtn={true}
                  type="Secondary"
                  halign="Start"
                  icon={<Settings size={20} />}
                >
                  Settings
                </Button>
                <Button
                  FullBtn={true}
                  type="Secondary"
                  halign="Start"
                  icon={<LogOut size={20} />}
                >
                  Logout
                </Button>
              </>
            ),
          }}
        />
      </>
    );
  },
];
