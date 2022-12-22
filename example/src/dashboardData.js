import React from "react";

import { Button, FlexLayout } from "ounce-ui";
import {
  CheckSquare,
  ChevronDown,
  ChevronUp,
  CreditCard,
  ShoppingCart,
  Tablet,
  Trash2,
  User,
} from "react-feather";

// Dashboard3 Data
export const summary = [
  {
    title: "Unpain Loan",
    rate: "$155.430.000",
    per: "2%",
    btn: <ChevronDown size="18" />,
  },
  {
    title: "Active Funding Partner",
    rate: "52 Partner",
    per: "49%",
    btn: <ChevronUp size="18" />,
  },
  {
    title: "Paid Installment",
    rate: "$75.430.000",
    per: "36%",
    btn: <ChevronUp size="18" />,
  },
  {
    title: "Success Payment",
    rate: "100%",
  },
  {
    title: "Waiting For Disbursement",
    rate: "0",
  },
  {
    title: "Unpaid Loan",
    rate: "$21.430.000",
    per: "23%",
    btn: <ChevronDown size="18" />,
  },
];
export const sellerArr = [
  {
    img: "http://enigma-react.left4code.com/assets/profile-5.46711484.jpg",
    name: "Catherine Zeta-Jones",
    year: "02 December 2020",
    sale: "137 Sales",
  },
  {
    img: "http://enigma-react.left4code.com/assets/profile-9.30af9082.jpg",
    name: "Bruce Willis",
    year: "20 May 2020",
    sale: "137 Sales",
  },
  {
    img: "http://enigma-react.left4code.com/assets/profile-4.eb6bc8ad.jpg",
    name: "Christian Bale",
    year: "02 March 2021",
    sale: "137 Sales",
  },
  {
    img: "http://enigma-react.left4code.com/assets/profile-9.30af9082.jpg",
    name: "Vin Diesel",
    year: "01 Februar 2021",
    sale: "137 Sales",
  },
];
// table
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
        content="Activer"
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
        content="Activer"
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
        content="Activer"
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
        content="Inactiver"
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

export const doughnutArr = {
  labels: ["Blue", "Yellow", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [19, 3, 3],
      backgroundColor: [
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(255, 159, 64)",
      ],
      borderWidth: 0,
    },
  ],
};

// Dashboard 4 Data
export const reportArr = [
  {
    icon: <ShoppingCart />,
    badge: (
      <Button
        content="33%"
        iconRound={false}
        iconAlign="right"
        type="Plain"
        icon={<ChevronUp />}
      />
    ),
    price: "4.710",
    name: "Item Sales",
  },
  {
    icon: <CreditCard />,
    badge: (
      <Button
        iconAlign="right"
        content="2%"
        iconRound={false}
        type="Plain"
        icon={<ChevronUp />}
      />
    ),
    price: "3.721",
    name: "New Orders",
  },
  {
    icon: <Tablet />,
    badge: (
      <Button
        iconAlign="right"
        content="12%"
        iconRound={false}
        type="Plain"
        icon={<ChevronUp />}
      />
    ),
    price: "2.149",
    name: "Total Products",
  },
  {
    icon: <User />,
    badge: (
      <Button
        content="22%"
        iconAlign="right"
        iconRound={false}
        type="Plain"
        icon={<ChevronUp />}
      />
    ),
    price: "152.040",
    name: "Unique Visitor",
  },
];
// Line Label Chart  Dashboard 3
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const labelData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [
        "23",
        "50",
        "40",
        "23",
        "49",
        "35",
        "30",
        "23",
        "50",
        "40",
        "23",
        "40",
      ],
      backgroundColor: "rgba(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: [
        "10",
        "30",
        "30",
        "65",
        "24",
        "20",
        "50",
        "10",
        "30",
        "30",
        "65",
        "24",
      ],
      backgroundColor: "rgba(53, 162, 235)",
    },
  ],
};
// Line Chart  Dashboard 4

export const options = {
  legend: {
    display: true,
    position: "bottom",
    labels: {
      usePointStyle: true,
      padding: 10,
    },
    align: "center",
    fullWidth: true,
  },
};

// const labels = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
export const lineData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: ["1", "2", "3", "1", "3", "9", "10", "12", "1", "45", "30", "100"],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: ["1", "2", "3", "1", "3", "9", "10", "12", "1", "45", "30", "100"],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
// Pie Chart
export const PieData = {
  labels: ["Blue", "Yellow", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [19, 3, 3],
      backgroundColor: [
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(255, 159, 64)",
      ],
      borderColor: ["rgba(255,255,255)"],
      borderWidth: 3,
    },
  ],
};

export const reporstArr = [
  {
    month: "This Month",
    price: "$10,000",
  },
  {
    month: "Lase Month",
    price: "$15,000",
  },
];
