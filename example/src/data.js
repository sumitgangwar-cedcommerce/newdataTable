import { CheckSquare, ChevronDown, ChevronUp, Trash2 } from "react-feather";
import React from "react";
import { Button, FlexLayout } from "ounce-ui";
export const Transaction=[
    {
        heading:"TOTAL TRANSACTION",
        rate:"4.501",
        helptext:"2% lower ",
        tooltip:"2%",
        icon:<ChevronDown size={"15px"}/>
    },
    {
        heading:"CANCELATION CASE",
        rate:"4.501",
        helptext:"2% lower ",
        tooltip:"2%",
        icon:<ChevronDown  size={"15px"}/>
    },
    {
        heading:"GROSS RENTAL VALUE",
        rate:"$72.000",
        helptext:"49% high ",
        tooltip:"49%",
        icon:<ChevronUp  size={"15px"}/>
    },
    {
        heading:"GROSS RENTAL VALUE",
        rate:"$72.000",
        helptext:"49% high ",
        tooltip:"49%",
        icon:<ChevronUp  size={"15px"}/>
    },
    {
        heading:"TOTAL TRANSACTION",
        rate:"4.501",
        helptext:"2% higer ",
        tooltip:"2%",
        icon:<ChevronUp  size={"15px"}/>
    },
];

export const bestseller=[
    {
        src:"https://wri-india.org/sites/default/files/styles/profile/public/avtar-b-2020.jpg?itok=7xj_Xrur",
        name:"Angelina Jolie",
        date:"19 September 2021",
        badge:"137 Sales"
    },
    {
        src:"https://wri-india.org/sites/default/files/styles/profile/public/avtar-b-2020.jpg?itok=7xj_Xrur",
        name:"Angelina Jolie",
        date:"19 September 2021",
        badge:"137 Sales"
    },
    {
        src:"https://wri-india.org/sites/default/files/styles/profile/public/avtar-b-2020.jpg?itok=7xj_Xrurhttps://wri-india.org/sites/default/files/styles/profile/public/avtar-b-2020.jpg?itok=7xj_Xrur",
        name:"Angelina Jolie",
        date:"19 September 2021",
        badge:"137 Sales"
    },
    {
        src:"https://wri-india.org/sites/default/files/styles/profile/public/avtar-b-2020.jpg?itok=7xj_Xrur",
        name:"Angelina Jolie",
        date:"19 September 2021",
        badge:"137 Sales"
    },
];
export const change=[
    {
        cartype:"bridesmaid",
        heading:"Transact safely with Lender’s Fund Account (RDL)",
        subheaading:"Apply now, quick registration.",
        action:<Button>Shop Now</Button>,
        img:"http://enigma-react.left4code.com/assets/woman-illustration.9128886e.svg"
    },
    {
        cartype:"",
        heading:"Invite friends to get FREE bonuses!",
        subheaading:"Get a IDR 100,000 voucher by inviting your friends to fund #BecomeMember",
        action:<Button>Shop less</Button>,
        img:"http://enigma-react.left4code.com/assets/phone-illustration.f9183c90.svg"
    }
];
export const column = {
    user: {
      title: "IMAGES",
    },
    name: {
      title: "PRODUCT NAME",
    },
    address: {
      title: "STOCK",
    },
    status: {
      title: "STATUS",
    },
    email: {
      title: "ACTIONS",
    },
  };
  
  export const row = [
    {
      user: (
        <img
          src="http://enigma-react.left4code.com/assets/preview-2.a983be43.jpg"
          alt=""
          height="25"
          width="30"
        />
      ),
      name: "Smith",
      address: "USA",
      status: (
        <Button
          content="Active"
          iconRound={false}
          icon={<CheckSquare size="18" />}
          type="Plain"
        />
      ),
      email: (
        <FlexLayout valign="center" spacing="loose">
          <Button
            content="Edit"
            iconRound={false}
            icon={<CheckSquare size="18" />}
            type="Plain"
          />
          <Button
            content="Delete"
            iconRound={false}
            icon={<Trash2 size="18" />}
            type="DangerPlain"
          />
        </FlexLayout>
      ),
    },
    {
      user: (
        <img
          src="http://enigma-react.left4code.com/assets/preview-2.a983be43.jpg"
          alt=""
          height="25"
          width="30"
        />
      ),
      name: "Wilson",
      address: "Canada",
      status: (
        <Button
          content="Active"
          iconRound={false}
          icon={<CheckSquare size="18" />}
          type="Plain"
        />
      ),
      email: (
        <FlexLayout valign="center" spacing="loose">
          <Button
            content="Edit"
            iconRound={false}
            icon={<CheckSquare size="18" />}
            type="Plain"
          />
          <Button
            content="Delete"
            iconRound={false}
            icon={<Trash2 size="18" />}
            type="DangerPlain"
          />
        </FlexLayout>
      ),
    },
    {
      user: (
        <img
          src="http://enigma-react.left4code.com/assets/preview-2.a983be43.jpg"
          alt=""
          height="25"
          width="30"
        />
      ),
      name: "David",
      address: "Australia",
      status: (
        <Button
          content="Active"
          iconRound={false}
          icon={<CheckSquare size="18" />}
          type="Plain"
        />
      ),
      email: (
        <FlexLayout valign="center" spacing="loose">
          <Button
            content="Edit"
            iconRound={false}
            icon={<CheckSquare size="18" />}
            type="Plain"
          />
          <Button
            content="Delete"
            iconRound={false}
            icon={<Trash2 size="18" />}
            type="DangerPlain"
          />
        </FlexLayout>
      ),
    },
    {
      user: (
        <img
          src="http://enigma-react.left4code.com/assets/preview-2.a983be43.jpg"
          alt=""
          height="25"
          width="30"
        />
      ),
      name: "Shashish",
      address: "India",
      status: (
        <Button
          content="Inactive"
          iconRound={false}
          icon={<CheckSquare size="18" />}
          type="Plain"
        />
      ),
      email: (
        <FlexLayout valign="center" spacing="loose">
          <Button
            content="Edit"
            iconRound={false}
            icon={<CheckSquare size="18" />}
            type="Plain"
          />
          <Button
            content="Delete"
            iconRound={false}
            icon={<Trash2 size="18" />}
            type="DangerPlain"
          />
        </FlexLayout>
      ),
    },
  ];
  
  export const data = {

    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  export const unpaid=[
    {
      name:"Unpaid Loan",
      price:"4.501",
      rate:"2%"
    },
    {
      name:"Disbursement",
      price:"$54.000",
    },
    {
      name:"Posted Campaign",
      price:"4.501",
    },
  ];
  export const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };
  
  
