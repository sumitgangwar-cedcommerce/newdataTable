import React from "react";
import { box, home, note, bag, setting } from "../../Icon/Icon";
import NewSidebar from "./NewSidebar";

export default {
  title: "Components/Navigation/NewSidebar",
  component: NewSidebar,
  argTypes: {
    menu: {
      description: "set menue",
      control: {
        type: "array",
      },
      defaultValue: [
        {
          id: "dashboard",
          content: "Dashboard",
          path: "/panel/dashboard",
          icon: home,
        },
        {
          id: "profiling",
          content: "Profile",
          path: "/panel/profiling",
          icon: box,
        },
        {
          id: "products",
          content: "Products",
          path: "/panel/products",
          icon: note,
        },
        {
          id: "order",
          content: "Orders",
          path: "/panel/order",
          icon: bag,
        },
        {
          id: "configuration",
          content: "Configuration",
          path: "/panel/config",
          icon: setting,
        },
        {
          id: "queuedtasks",
          content: "Activities",
          path: "/panel/queuedtasks",
          icon: box,
        },
      ],
    },
    subMenu: {
      description: "set submenue",
      control: {
        type: "array",
      },
      defaultValue: [
        {
          id: "dashboard",
          content: "FAQ",
          path: "/panel/dashboard",
          icon: home,
        },
        {
          id: "profiling",
          content: "HELP",
          path: "/panel/profiling",
          icon: box,
        },
      ],
    },
    logo: {
      control: {
        disable: true,
      },
    },
    path: {
      description:
        "Route is the conditionally shown component that renders some UI when its path matches the current URL",
      control: {
        disable: true,
      },
    },
    mobileLogo: {
      description: "Side bar in header show mobile logo , ReactNode",
      control: {
        disable: true,
      },
    },
    onChange: {
      description:
        "The onchange event occurs when the value of an element has been changed.",
      control: {
        disable: true,
      },
    },
  },
};

const Template = () => {
  const menu = [
    {
      id: "dashboard",
      content: "Dashboard",
      path: "/dashboard",
      icon: home,
    },
    {
      id: "Profile",
      content: "Profile",
      path: "/panel/profiling",
      icon: box,
    },
    {
      id: "products",
      content: "Products",
      path: "/panel/products",
      icon: note,
    },
    {
      id: "order",
      content: "Orders",
      path: "/panel/order",
      icon: bag,
    },
    {
      id: "configuration",
      content: "Configuration",
      path: "/panel/config",
      icon: setting,
      extraClass : "Helloclass"
    },
    {
      id: "queuedtasks",
      content: "Activities",
      path: "/panel/queuedtasks",
      icon: box,
    },
  ];
  const subMenu = [
    {
      id: "FAQ",
      content: "FAQ",
      path: "/panel/faq",
      icon: home,
    },
    {
      id: "HELP",
      content: "HELP",
      path: "/panel/help",
      icon: box,
    },
    {
      id: "QRY",
      content: "QRY",
      path: "/panel/QRY",
      icon: home,
    },
  ];
  const onChange = (e: any) => {
  };

  const mlogo = (
    <svg
      width="50"
      height="50"
      viewBox="0 0 275 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M176.6 145.8L238.4 84L161.3 7L68 100.1L16.9 150.9L160 294.1L242.4 211.7L176.6 145.8ZM48.1 151L161.2 38.2L207 84L160.9 130.1L142.9 112.1L127.3 127.7L145.3 145.7L105.6 185.4L121.2 201L160.9 161.3L211.1 211.5L160 262.9L48.1 151Z"
        fill="url(#paint0_linear_1_16)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_16"
          x1="16.8509"
          y1="150.55"
          x2="242.426"
          y2="150.55"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#413BBC" />
          <stop offset="0.47" stopColor="#383365" />
          <stop offset="1" stopColor="#0A0A0A" />
        </linearGradient>
      </defs>
    </svg>
  );
  const logos = (
    <svg
      width="160"
      height="70"
      viewBox="0 0 998 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M567.4 149.2V38.8H286.1V147.5V266.1L927.3 266.2V149.1H567.4V149.2ZM292.9 45.7H560.5V149.2H292.9V45.7ZM920.5 259.4H292.9V156.1H560.6V184.1V229H568.6V199.6L583.3 223.8H587L601.8 199.2L601.9 229H609.8L609.7 184.1H602.8L585.3 213.9L567.5 184.1V156.1H920.6V259.4H920.5Z"
        fill="#0A0A0A"
      />
      <path
        d="M333.2 81.2C335.6 79.9 338.4 79.2 341.5 79.2C346.2 79.2 350.2 81 353.5 84.5L358.9 79.4C356.8 77 354.2 75.1 351.2 73.8C348.2 72.5 344.8 71.9 341.1 71.9C336.6 71.9 332.5 72.9 328.8 74.9C325.1 76.9 322.3 79.6 320.2 83.1C318.1 86.6 317.1 90.6 317.1 95C317.1 99.4 318.1 103.4 320.2 106.9C322.3 110.4 325.1 113.2 328.8 115.1C332.5 117.1 336.6 118.1 341.1 118.1C344.8 118.1 348.1 117.5 351.2 116.2C354.3 114.9 356.8 113.1 358.9 110.6L353.5 105.5C350.2 109 346.3 110.8 341.5 110.8C338.4 110.8 335.7 110.1 333.2 108.8C330.8 107.5 328.9 105.6 327.5 103.2C326.1 100.8 325.4 98.1 325.4 95.1C325.4 92.1 326.1 89.4 327.5 87C328.8 84.4 330.7 82.5 333.2 81.2Z"
        fill="#0A0A0A"
      />
      <path
        d="M409.9 98H431.6V91.1H409.9V79.5H434.3V72.5H401.6V117.4H435.2V110.4H409.9V98Z"
        fill="#0A0A0A"
      />
      <path
        d="M510.4 75.3C506.7 73.4 502.4 72.5 497.6 72.5H478V117.4H497.6C502.4 117.4 506.6 116.5 510.4 114.6C514.1 112.7 517 110.1 519.1 106.7C521.2 103.3 522.2 99.4 522.2 94.9C522.2 90.5 521.2 86.5 519.1 83.1C517 79.7 514.1 77.1 510.4 75.3ZM511.7 103C510.4 105.3 508.4 107.1 505.9 108.4C503.4 109.7 500.5 110.3 497.2 110.3H486.3V79.5H497.2C500.5 79.5 503.4 80.1 505.9 81.4C508.4 82.7 510.3 84.5 511.7 86.8C513 89.1 513.7 91.8 513.7 94.9C513.7 98 513.1 100.7 511.7 103Z"
        fill="#0A0A0A"
      />
      <path
        d="M333.2 192.8C335.6 191.5 338.4 190.8 341.5 190.8C346.2 190.8 350.2 192.6 353.5 196.1L358.9 191C356.8 188.6 354.2 186.7 351.2 185.4C348.2 184.1 344.8 183.5 341.1 183.5C336.6 183.5 332.5 184.5 328.8 186.5C325.1 188.5 322.3 191.2 320.2 194.7C318.1 198.2 317.1 202.2 317.1 206.6C317.1 211 318.1 215 320.2 218.5C322.3 222 325.1 224.8 328.8 226.7C332.5 228.7 336.6 229.7 341.1 229.7C344.8 229.7 348.1 229.1 351.2 227.8C354.3 226.5 356.8 224.7 358.9 222.2L353.5 217.1C350.2 220.6 346.3 222.4 341.5 222.4C338.4 222.4 335.7 221.7 333.2 220.4C330.8 219.1 328.9 217.2 327.5 214.8C326.1 212.4 325.4 209.7 325.4 206.7C325.4 203.7 326.1 201 327.5 198.6C328.8 196 330.7 194.1 333.2 192.8Z"
        fill="#0A0A0A"
      />
      <path
        d="M430.1 186.4C426.4 184.4 422.3 183.4 417.7 183.4C413.1 183.4 409 184.4 405.3 186.4C401.6 188.4 398.7 191.1 396.6 194.7C394.5 198.2 393.5 202.2 393.5 206.5C393.5 210.9 394.5 214.8 396.6 218.3C398.7 221.8 401.6 224.6 405.3 226.6C409 228.6 413.1 229.6 417.7 229.6C422.3 229.6 426.4 228.6 430.1 226.6C433.8 224.6 436.7 221.9 438.8 218.4C440.9 214.9 441.9 210.9 441.9 206.5C441.9 202.1 440.9 198.1 438.8 194.6C436.7 191.2 433.8 188.4 430.1 186.4ZM431.5 214.6C430.1 217 428.2 218.9 425.9 220.2C423.5 221.5 420.8 222.2 417.8 222.2C414.8 222.2 412.1 221.5 409.7 220.2C407.3 218.9 405.4 217 404.1 214.6C402.7 212.2 402 209.5 402 206.5C402 203.5 402.7 200.8 404.1 198.4C405.5 196 407.3 194.1 409.7 192.8C412.1 191.5 414.8 190.8 417.8 190.8C420.8 190.8 423.5 191.5 425.9 192.8C428.3 194.1 430.2 196 431.5 198.4C432.9 200.8 433.6 203.5 433.6 206.5C433.5 209.5 432.8 212.2 431.5 214.6Z"
        fill="#0A0A0A"
      />
      <path
        d="M518.9 184.1L501.3 213.8L483.5 184.1H476.7V229H484.6V199.6L499.4 223.9H503.1L517.8 199.2L517.9 229H525.8L525.7 184.1H518.9Z"
        fill="#0A0A0A"
      />
      <path
        d="M678.1 222H652.7V209.6H674.4V202.8H652.7V191.1H677.2V184.1H644.4V229H678.1V222Z"
        fill="#0A0A0A"
      />
      <path
        d="M721.1 215.9H731.2C732 215.9 732.5 215.9 732.9 215.8L742.1 228.9H751.1L740.8 214.2C743.9 213 746.2 211.2 747.9 208.7C749.5 206.3 750.4 203.4 750.4 200C750.4 196.7 749.6 193.9 748.1 191.5C746.6 189.1 744.3 187.3 741.5 186C738.6 184.7 735.2 184.1 731.3 184.1H712.8V229H721.1V215.9V215.9ZM721.1 191.1H730.8C734.4 191.1 737.2 191.9 739.1 193.4C741 194.9 741.9 197.1 741.9 200C741.9 202.9 741 205.1 739.1 206.6C737.2 208.2 734.5 208.9 730.8 208.9H721.1V191.1Z"
        fill="#0A0A0A"
      />
      <path
        d="M797.6 226.6C801.3 228.6 805.4 229.6 809.9 229.6C813.6 229.6 816.9 229 820 227.7C823.1 226.4 825.6 224.6 827.7 222.1L822.3 217C819 220.5 815.1 222.3 810.3 222.3C807.2 222.3 804.5 221.6 802 220.3C799.6 219 797.7 217.1 796.3 214.7C794.9 212.3 794.2 209.6 794.2 206.6C794.2 203.6 794.9 200.9 796.3 198.5C797.7 196.1 799.6 194.2 802 192.9C804.4 191.6 807.2 190.9 810.3 190.9C815 190.9 819 192.7 822.3 196.2L827.7 191.1C825.6 188.7 823 186.8 820 185.5C817 184.2 813.6 183.6 809.9 183.6C805.4 183.6 801.3 184.6 797.6 186.6C793.9 188.6 791.1 191.3 789 194.8C786.9 198.3 785.9 202.3 785.9 206.7C785.9 211.1 786.9 215.1 789 218.6C791.1 221.9 793.9 224.7 797.6 226.6Z"
        fill="#0A0A0A"
      />
      <path
        d="M896.1 222H870.8V209.6H892.5V202.8H870.8V191.1H895.2V184.1H862.4V229H896.1V222Z"
        fill="#0A0A0A"
      />
      <path
        d="M177.8 148.8L226.7 99.9L165.7 38.9L91.9 112.5L51.5 152.7L164.8 266L230 200.8L177.8 148.8ZM76.2 152.9L165.7 63.7L202 100L165.5 136.5L151.2 122.2L138.8 134.6L153.1 148.9L121.7 180.3L134.1 192.7L165.5 161.3L205.2 201L164.7 241.5L76.2 152.9Z"
        fill="url(#paint0_linear_1_2)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_2"
          x1="51.4145"
          y1="152.55"
          x2="229.863"
          y2="152.55"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#413BBC" />
          <stop offset="0.47" stopColor="#383365" />
          <stop offset="1" stopColor="#0A0A0A" />
        </linearGradient>
      </defs>
    </svg>
  );
  return (
    <>
      <NewSidebar
        // logo={logos}
        // mobileLogo={mlogo}
        menu={menu}
        subMenu={subMenu}
        onChange={onChange}
      />
    </>
  );
};

export const Primary: any = Template.bind({});
