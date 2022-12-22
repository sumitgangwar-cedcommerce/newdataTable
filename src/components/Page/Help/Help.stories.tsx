import React, { useState } from "react";
import Help from "./Help";
import whatsap from "../../images/whatsapp.svg";
import skype from "../../images/skype.svg";
import email from "../../images/email.svg";
import { Card } from "../../Card";

export default {
  title: "Components/Page/Help",
  component: Help,
  argTypes: {},
};

const Template = () => {
 
  const whatsapp =() =>{
  
  }
  const Skype =() =>{
   
  }
  const Email =() =>{
   
  }

  const data = [
    {
      heading: "Whatsapp",
      description: "Add Us On WhatsApp!",
      btncontent: "Start Chat",
      icon: whatsap,
      onClick:whatsapp,
    },
    {
      heading: "Skype",
      description: "Connect With Us On Skype",
      btncontent: "Start Chat",
      icon: skype,
      onClick:Skype,
    },
    {
      heading: "Email",
      description: "Send your Queries, Feedback, or Suggestions via email. ",
      btncontent: "Mail Us",
      icon: email,
      onClick:Email,
    },
  ];
  const [faq, setFaq] = useState([
    {
      title: "Accordian Title",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      title: "Accordian Title",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      title: "Accordian Title",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      title: "Accordian Title",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      title: "Accordian Title",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      title: "Accordian Title",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
  ]);

  return (
    <Card>
      <Help
      data={data}
      cardtitle="Please choose your preferred mode of communication "
      cardheading="Help"
      faq="Frequently Asked Question"
      faqData={faq}
    />
    </Card>
  );
};

export const Primary = Template.bind({});
