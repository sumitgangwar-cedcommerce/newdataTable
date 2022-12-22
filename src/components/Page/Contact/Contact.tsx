/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from "react";
import Button from "../../Button/Button";
import { FormElement, TextArea, TextField } from "../../FormElement";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
   <div className="inte-Contat__Page">
      <FormElement>
        <TextField
          type="text"
          label="Name"
          value={name}
          placeHolder="Enter Name"
          onChange={(e) => setName(e)}
        />

        <TextField
          type="text"
          label="Email"
          value={email}
          placeHolder="Enter Email"
          onChange={(e) => setEmail(e)}
        />
        <TextArea
          label="Message"
          placeHolder="Enter message"
          value={message}
          onChange={(e) => setMessage(e)}
        />
        <Button content="Send" FullBtn={true} thickness="thin" halign="Equal" />
    </FormElement>
   </div>
  );
};

export default Contact;
