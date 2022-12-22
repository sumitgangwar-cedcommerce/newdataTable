import React from "react";
import { Plus } from "react-feather";
import Button from "../../components/Button/Button";
import { FlexLayout } from "../../components/FlexLayout";
import TextStyles from "../../components/TextStyles/TextStyles";
import BrokenPage from "./BrokenPage";
import EmptyAccount from "./EmptyAccount";
import NoProduct from "./Noproduct";
import NoNotification from "./NoNotification";
import PagenotFound from "./Pagenotfound";
import SessionExpired from "./SessionExpired";
export default {
  title: "Templates/ErrorPages",
  component: EmptyAccount,
  argTypes: {},
};

const Template = () => {
  return (
    <EmptyAccount
      title="Create an account to continue"
      description="Connect a facebook account to take actions on the app"
      buttonText="Connect Account"
      icon={<Plus color="#fff" size={16} />}
      onClick={() => {
        alert("Create and Account");
      }}
    />
  );
};
export const ConnectAccount = Template.bind({});
export const NoNotifications: any = Template.bind({});
NoNotifications.decorators = [
  () => (
    <NoNotification
      title="No Notification"
      buttonText="Go to Home"
      onClick={() => {
        alert("No Notifications");
      }}
      description={
        <FlexLayout direction="vertical" valign="center">
          <TextStyles textcolor="light">
            You haven’t notification anything yet. When you have, it'll show up
            here.
          </TextStyles>
          <TextStyles textcolor="light">
            Need Help?Read our <Button type="TextButton">Help Doc</Button> for
            further details.
          </TextStyles>
        </FlexLayout>
      }
    />
  ),
];
export const PageNotFound: any = Template.bind({});
PageNotFound.decorators = [
  () => (
    <PagenotFound
      title="Page Not Found"
      buttonText="Go to Home"
      description={
        <FlexLayout direction="vertical" valign="center">
          <TextStyles textcolor="light">
            You haven’t any search result. Please visit wot homepage
          </TextStyles>
          <TextStyles textcolor="light">
            Need Help?Read our <Button type="TextButton">Help Doc</Button> for
            further details.
          </TextStyles>
        </FlexLayout>
      }
      onClick={() => {
        alert("Page Not Found");
      }}
    />
  ),
];
export const Brokenpage: any = Template.bind({});
Brokenpage.decorators = [
  () => (
    <BrokenPage
      title="Broken Page"
      buttonText="Go to Home"
      description={
        <FlexLayout direction="vertical" valign="center">
          <TextStyles textcolor="light">
            Your file have some error. We’re trying to fix it.
          </TextStyles>
          <TextStyles textcolor="light">
            Need Help?Read our <Button type="TextButton">Help Doc</Button> for
            further details.
          </TextStyles>
        </FlexLayout>
      }
      onClick={() => {
        alert("Some thing went wrong");
      }}
    />
  ),
];
export const SessionExpire: any = Template.bind({});
SessionExpire.decorators = [
  () => (
    <SessionExpired
      title="Session Expired"
      buttonText="Login Again"
      description={
        <FlexLayout direction="vertical" valign="center">
          <TextStyles textcolor="light">
            Your file have some error. We’re trying to fix it.
          </TextStyles>
          <TextStyles textcolor="light">
            Need Help?Read our <Button type="TextButton">Help Doc</Button> for
            further details.
          </TextStyles>
        </FlexLayout>
      }
      onClick={() => {
        alert("Sesion Expired");
      }}
    />
  ),
];
export const NoProducts: any = Template.bind({});
NoProducts.decorators = [
  () => (
    <NoProduct
      title="No Product"
      buttonText="Create Campaign"
      icon={<Plus color="#fff" size={16} />}
      description={
        <FlexLayout direction="vertical" valign="center">
          <TextStyles textcolor="light">
            Your file have some error. We’re trying to fix it.
          </TextStyles>
          <TextStyles textcolor="light">
            Need Help?Read our <Button type="TextButton">Help Doc</Button> for
            further details.
          </TextStyles>
        </FlexLayout>
      }
      onClick={() => {
        alert("No products Found");
      }}
    />
  ),
];
