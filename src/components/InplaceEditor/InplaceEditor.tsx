/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from "react";

const InplaceEditor = (props: any): JSX.Element => {
  const [edit, setedit] = useState(false);
  return (
    <div>
      {edit ? (
        <input
          type={props.type}
          className="inte-formElement inte-formElementTextfield inte--Textfield__thin"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          onBlur={() => setedit(false)}
          autoFocus
          onFocus={() => setedit(true)}
          onKeyUp={(event) => {
            if (event.key === "Escape" || event.key === "Enter") {
              setedit(false);
            }
          }}
          maxLength={props.maxSize}
          minLength={props.minSize}
        />
      ) : (
        <span onClick={() => setedit(true)}>{props.value}</span>
      )}
    </div>
  );
};

export default InplaceEditor;
