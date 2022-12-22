import React from "react";
import Button from "../../components/Button/Button";
import { Card } from "../../components/Card";
import { FlexLayout } from "../../components/FlexLayout";
import TextStyles from "../../components/TextStyles/TextStyles";
const EmptyAccount = ({
  title,
  description,
  buttonText,
  icon,
  image,
  ...props
}: EmptyAccountI): JSX.Element => {
  const svg = (
    <svg
      style={{ maxWidth: "500px" }}
      width="100%"
      height="400"
      viewBox="0 0 454 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="37.1763"
        y="13.5781"
        width="254.617"
        height="165.137"
        rx="10"
        fill="#D3D4DF"
      />
      <rect
        x="39.3588"
        y="15.7606"
        width="250.274"
        height="160.773"
        rx="8"
        fill="#3B424F"
      />
      <circle cx="165.04" cy="165.856" r="4.5062" fill="#8C9098" />
      <path
        d="M131.819 178.716H196.423L210.316 203.672H117.926L131.819 178.716Z"
        fill="#3B424F"
      />
      <path
        d="M118.273 203.672H209.969L216.863 206.384H111.379L118.273 203.672Z"
        fill="#1C2433"
      />
      <rect
        x="111.379"
        y="206.384"
        width="105.484"
        height="4.34021"
        fill="#27292D"
      />
      <path
        d="M131.748 178.716H196.494L198.676 183.056H129.566L131.748 178.716Z"
        fill="#1C2433"
      />
      <rect
        x="45.062"
        y="22.5906"
        width="238.829"
        height="134.06"
        fill="white"
      />
      <rect x="45" y="23" width="238.829" height="134.06" fill="#FBEAE9" />
      <rect x="114" y="40" width="100" height="100" rx="26" fill="#EC5B51" />
      <rect
        x="120.306"
        y="46.3063"
        width="87.3874"
        height="87.3874"
        rx="20"
        fill="#FE7163"
      />
      <circle
        cx="164"
        cy="80.0901"
        r="23.1712"
        fill="#FFF4F4"
        stroke="#FEDF97"
        strokeWidth="4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M164.071 77.8006C167.377 77.8006 170.058 75.1202 170.058 71.8137C170.058 68.5072 167.377 65.8268 164.071 65.8268C160.764 65.8268 158.084 68.5072 158.084 71.8137C158.084 75.1202 160.764 77.8006 164.071 77.8006ZM174.874 85.1923C175.476 86.6451 175.786 88.2021 175.786 89.7745H163.812L151.838 89.7745C151.838 88.2021 152.148 86.6451 152.749 85.1923C153.351 83.7396 154.233 82.4196 155.345 81.3077C156.457 80.1959 157.777 79.3139 159.23 78.7121C160.682 78.1104 162.239 77.8007 163.812 77.8007C165.384 77.8007 166.941 78.1104 168.394 78.7121C169.847 79.3139 171.167 80.1959 172.279 81.3077C173.39 82.4196 174.272 83.7396 174.874 85.1923Z"
        fill="#FE7163"
      />
      <rect
        x="139.225"
        y="111.171"
        width="49.5495"
        height="11.7117"
        rx="5.85586"
        fill="#FFF4F4"
      />
      <circle cx="204.25" cy="48.9144" r="18.9144" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M209.564 66.9699C191.86 66.0486 186.719 53.227 187.132 40.1813C185.77 42.7936 185 45.7636 185 48.9135C185 59.3596 193.468 67.8279 203.915 67.8279C205.882 67.8279 207.78 67.5274 209.564 66.9699Z"
        fill="#FBEAE9"
      />
      <path
        d="M200.612 35.8199H207.16L205.414 54.0068H202.358L200.612 35.8199Z"
        fill="#FE7163"
      />
      <ellipse
        cx="203.886"
        cy="59.8266"
        rx="3.27365"
        ry="2.90991"
        fill="#FE7163"
      />
      <rect y="209.345" width="330.079" height="9.01241" fill="#C3C5C9" />
      <rect
        x="94.6304"
        y="218.494"
        width="12.1545"
        height="9.01744"
        fill="#70747E"
      />
      <path
        d="M94.6304 227.511H106.785L104.962 243.141H96.4536L94.6304 227.511Z"
        fill="#8C9098"
      />
      <rect
        x="222.819"
        y="218.494"
        width="12.1545"
        height="9.01744"
        fill="#70747E"
      />
      <path
        d="M222.82 227.511H234.974L233.151 243.141H224.643L222.82 227.511Z"
        fill="#8C9098"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M381.615 46.1096C385.823 41.1701 388.671 35.1167 388.195 28.3337C386.824 8.78993 359.618 13.0893 354.326 22.9533C349.034 32.8173 349.663 57.8382 356.502 59.6012C359.23 60.3043 365.041 58.582 370.954 55.0175L367.242 81.2783H389.16L381.615 46.1096Z"
        fill="#B28B67"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M397.751 21.828C398.459 21.1264 398.845 20.1251 399.179 19.1743C399.526 18.1866 399.863 17.1888 400.093 16.1607C400.553 14.1066 400.558 11.7444 399.092 10.1494C397.917 8.87038 396.154 8.2967 394.526 8.17202C393.442 8.08887 392.328 8.24072 391.289 8.5824C390.258 8.92136 389.369 9.5969 388.369 10.0162C388.331 7.80263 387.952 5.48647 386.829 3.59641C385.748 1.77787 384.025 0.75737 382.063 0.487388C380.049 0.210317 378.061 0.681582 376.258 1.65655C375.806 1.90073 375.359 2.15653 374.931 2.44605C374.573 2.6885 374.2 2.98047 373.78 3.07907C373.311 3.18912 373.079 2.91841 372.774 2.57646C372.417 2.17553 372.015 1.8224 371.589 1.50934C369.706 0.125351 367.236 -0.443692 365.054 0.385883C364.049 0.768093 363.072 1.4172 362.39 2.31165C361.782 3.10897 361.349 4.37373 360.51 4.92924C360.154 5.16505 359.902 4.85263 359.578 4.62172C359.091 4.27477 358.627 3.89193 358.134 3.55443C357.442 3.08025 356.693 2.72558 355.89 2.53993C354.716 2.26813 353.092 2.33183 352.756 3.87048C352.63 4.44843 352.727 5.06654 352.768 5.64886C352.824 6.44844 352.882 7.24776 352.951 8.04616C353.004 8.65237 353.071 9.23787 353.185 9.83317C353.246 10.1505 353.437 10.7421 353.301 11.0599C353.131 11.4571 352.346 11.2312 352.011 11.2451C351.349 11.2724 350.683 11.3885 350.071 11.6715C349.597 11.8909 349.098 12.2135 348.897 12.7575C348.774 13.0916 348.807 13.4348 348.865 13.7786C348.935 14.1911 348.855 14.41 348.803 14.8263C347.913 14.3882 344.831 13.4151 344.443 15.0092C344.314 15.54 344.608 16.1397 344.832 16.5874C345.226 17.3725 345.742 18.0901 346.269 18.7745C347.369 20.2022 348.682 21.4336 350.095 22.4867C348.44 23.2227 348.008 25.3935 349.441 26.6869C350.074 27.258 350.925 27.3851 351.723 27.3486C352.015 27.3352 352.436 27.2229 352.666 27.2738C352.79 27.3011 352.922 27.406 353.094 27.4177C354.22 27.4949 355.492 27.2234 356.594 26.9735C358.556 26.528 360.414 25.5983 361.931 24.1823C362.32 23.8191 362.642 23.61 363.165 23.6154C363.624 23.62 364.075 23.7458 364.533 23.7575C365.747 23.7885 366.841 23.1952 367.968 22.8004C368.037 24.3226 368.47 25.9991 369.093 27.3686C369.601 28.4853 370.661 28.6476 371.703 28.7456C375.035 29.0591 378.379 28.7092 381.715 28.7138C378.485 29.4438 375.148 29.7447 371.947 30.6037C370.501 30.9919 371.605 31.9671 372.224 32.6431C373.243 33.7563 374 35.1355 374.525 36.5886C376.105 34.5292 378.898 33.1723 381.372 33.805C384.105 34.5039 386.03 38.2005 384.282 40.858C383.267 42.4008 381.435 42.9964 379.91 43.6592C381.099 44.896 381.387 46.7226 382.103 48.2612C382.456 49.02 382.952 49.878 383.742 50.1424C384.034 50.2403 384.376 50.2486 384.607 50.4868C384.892 50.7817 384.96 51.1114 385.325 51.3648C386.78 52.3764 389.053 52.2984 390.343 50.9783C391.509 49.7845 391.205 47.8952 390.231 46.6848C391.782 46.0385 394.607 45.2073 393.99 42.7917C397.35 42.5686 405.508 37.1197 400.998 33.1381C403.473 31.7394 405.746 28.3214 404.157 25.3083C402.933 22.9881 400.086 21.951 397.751 21.828Z"
        fill="#191847"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M428.774 195.433H358.222L348.978 308.675H454L428.774 195.433Z"
        fill="#70747E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M428.774 195.433H407.075L394.088 308.675H454L428.774 195.433Z"
        fill="#8C9098"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M277.787 176.033C270.265 171.516 257.645 177.319 257.654 183.779C257.679 203.107 275.319 294.201 276.24 299.96C277.161 305.718 287.026 307.239 287.601 299.979C288.515 288.426 290.213 248.431 288.514 229.92C287.813 222.278 287.057 215.001 286.314 208.509C295.569 225.224 309.884 249.155 329.258 280.304L339.775 275.499C331.516 248.288 324.744 229.078 319.458 217.868C310.408 198.675 301.923 182.238 298.351 176.449C292.733 167.342 282.954 170.519 277.787 176.033Z"
        fill="#B28B67"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M339.024 260.388L302.925 174.874C294.278 160.963 270.032 177.705 272.981 185.773C279.676 204.09 313.727 263.391 315.722 268.849L339.024 260.388Z"
        fill="#2F3676"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M341.028 270.106C343.277 271.958 344.739 273.469 345.416 274.642C346.24 276.068 347.204 278.287 348.308 281.297C346.654 282.252 331.785 290.837 303.701 307.051C300.329 303.888 299.804 301.433 302.125 299.686C304.446 297.938 306.361 296.464 307.871 295.264L323.268 274.051C323.564 273.643 324.135 273.552 324.543 273.848C324.55 273.854 324.557 273.859 324.564 273.864L327.763 276.327C330.698 276.071 332.888 275.526 334.334 274.691C335.508 274.013 336.856 272.603 338.378 270.459L338.378 270.459C338.962 269.637 340.102 269.443 340.924 270.027C340.96 270.052 340.994 270.079 341.028 270.106Z"
        fill="#E4E4E4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M289.911 295.343C290.933 298.071 291.443 300.112 291.443 301.466C291.443 303.112 291.169 305.516 290.62 308.675C288.71 308.675 271.541 308.675 239.112 308.675C237.774 304.25 238.546 301.861 241.43 301.508C244.314 301.155 246.71 300.837 248.617 300.552L272.558 289.879C273.018 289.674 273.558 289.881 273.764 290.342C273.767 290.35 273.771 290.358 273.774 290.366L275.313 294.098C277.982 295.344 280.152 295.967 281.821 295.967C283.177 295.967 285.05 295.419 287.439 294.324L287.439 294.324C288.356 293.903 289.441 294.306 289.861 295.223C289.879 295.263 289.896 295.303 289.911 295.343Z"
        fill="#E4E4E4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M255.123 190.349C255.123 214.611 266.646 271.205 266.653 276.547L291.443 276.566C287.815 226.068 286.528 200.547 287.583 200.003C289.166 199.187 352.47 206.324 371.456 206.324C398.833 206.324 410.159 189.059 411.078 157.077H356.844C345.801 158.259 288.202 169.876 266.811 173.87C257.653 175.58 255.123 183.666 255.123 190.349Z"
        fill="#5C63AB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M348.395 100.183L316.697 82.8215C311.425 76.5619 306.232 71.7004 301.116 68.2371C299.552 67.5845 296.819 67.1894 299.375 71.7272C301.932 76.265 304.417 81.153 303.114 82.551C301.812 83.949 298.564 81.9961 297.01 84.3188C295.974 85.8673 301.523 88.3136 313.657 91.6575L336.689 112.746L348.395 100.183ZM298.749 114.831L284.826 107.182C282.872 99.7476 280.537 96.0073 277.819 95.9607C275.732 94.9895 279.367 104.383 275.41 103.568C271.453 102.754 261.796 95.5711 260.132 97.0295C257.67 99.1871 259.865 105.812 262.451 109.108C267.285 115.267 271.288 117.373 281.18 120.131C286.352 121.574 291.945 124.464 297.957 128.803L298.749 114.831Z"
        fill="#997659"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M363.832 96.3151C352.729 96.1979 337.924 93.8529 322.126 83.8251L315.922 97.6606C326.819 108.475 342.141 117.36 355.538 116.984C366.096 116.687 371.492 103.917 363.832 96.3151Z"
        fill="#1F28CF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M348.882 118.503C337.095 121.443 317.329 117.976 289.584 108.103C282.702 122.341 279.521 132.491 280.04 138.554C303.841 150.987 324.241 156.53 341.048 156.896C340.514 166.868 341.727 176.357 345.805 185.028C354.188 202.853 403.274 186.345 419.778 189.594C430.114 156.028 410.13 142.387 410.114 120.91C410.096 97.3898 391.211 61.187 388.432 61.187H363.093C361.695 79.1495 354.658 98.9458 348.882 118.503Z"
        fill="#1F28CF"
      />
      <ellipse cx="227" cy="311.811" rx="227" ry="2.98684" fill="#C3C5C9" />
    </svg>
  );

  return (
    <div className="mt-30">
      <Card>
        <FlexLayout direction="vertical" halign="center" spacing="extraLoose">
          <FlexLayout halign="center" spacing="loose">
            {image ? image : svg}
          </FlexLayout>
          <FlexLayout
            direction="vertical"
            valign="center"
            spacing="mediumTight"
          >
            <TextStyles
              fontweight="extraBold"
              textcolor="dark"
              type="neutralText"
            >
              {title}
            </TextStyles>
            <FlexLayout direction="vertical" valign="center" wrap="noWrap">
              <TextStyles textcolor="light" type="simpleText">
                {description}
                {/* Connect a facebook account to take actions on the app */}
              </TextStyles>
            </FlexLayout>

            <FlexLayout>
              <Button
                icon={icon}
                iconAlign="left"
                iconRound={false}
                thickness="thin"
                type="Primary"
                onClick={props.onClick}
              >
                {buttonText}
                {/* Connect Account */}
              </Button>
            </FlexLayout>
          </FlexLayout>
        </FlexLayout>
      </Card>
    </div>
  );
};
export interface EmptyAccountI {
  title?: string;
  buttonText?: string;
  description?: string | React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  image?: any;
}

export default EmptyAccount;
