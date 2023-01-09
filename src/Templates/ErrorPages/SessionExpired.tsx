import React from "react";
import Button from "../../components/Button/Button";
import { Card } from "../../components/Card";
import { FlexLayout } from "../../components/FlexLayout";
import TextStyles from "../../components/TextStyles/TextStyles";
const SessionExpired = ({
  title,
  buttonText,
  onClick,
  description,
  icon,
  image,
}: SessionExpiredI): JSX.Element => {
  const svg = (
    <svg
      style={{ maxWidth: "500px" }}
      width="100%"
      height="400"
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3744_25119)">
        <path
          d="M115.713 332.284V340.403H176.497V332.284H115.713Z"
          fill="#8C9098"
        />
        <path
          d="M124.004 332.608C124.21 332.608 124.382 334.314 124.382 336.419C124.382 338.524 124.21 340.219 124.004 340.219C123.799 340.219 123.616 338.513 123.616 336.419C123.616 334.324 123.788 332.608 124.004 332.608Z"
          fill="#FAFAFA"
        />
        <path
          d="M122.677 332.446C122.893 332.446 123.055 334.152 123.055 336.246C123.055 338.341 122.893 340.057 122.677 340.057C122.461 340.057 122.299 338.352 122.299 336.246C122.299 334.141 122.461 332.446 122.677 332.446Z"
          fill="#FAFAFA"
        />
        <path
          d="M171.8 332.608C172.016 332.608 172.189 334.314 172.189 336.419C172.189 338.524 172.016 340.219 171.8 340.219C171.584 340.219 171.422 338.513 171.422 336.419C171.422 334.324 171.595 332.608 171.8 332.608Z"
          fill="#FAFAFA"
        />
        <path
          d="M170.484 332.446C170.689 332.446 170.862 334.152 170.862 336.246C170.862 338.341 170.689 340.057 170.484 340.057C170.279 340.057 170.095 338.352 170.095 336.246C170.095 334.141 170.268 332.446 170.484 332.446Z"
          fill="#FAFAFA"
        />
        <path
          d="M162.537 336.581C162.537 336.797 155.574 336.959 146.99 336.959C138.407 336.959 131.443 336.797 131.443 336.581C131.443 336.365 138.407 336.203 146.99 336.203C155.574 336.203 162.537 336.365 162.537 336.581Z"
          fill="#FAFAFA"
        />
        <path
          d="M115.454 368.841V385.079H176.238V368.841H115.454Z"
          fill="#70747E"
        />
        <path
          d="M120.884 340.63V368.808H176.238V340.63H120.884Z"
          fill="#B2B4B8"
        />
        <path
          d="M130.083 341.601C130.289 341.601 130.461 347.701 130.461 355.237C130.461 362.773 130.289 368.873 130.083 368.873C129.878 368.873 129.695 362.773 129.695 355.237C129.695 347.701 129.868 341.601 130.083 341.601Z"
          fill="#E0E0E0"
        />
        <path
          d="M134.282 341.245C134.487 341.245 134.66 347.28 134.66 354.708C134.66 362.136 134.487 368.171 134.282 368.171C134.077 368.171 133.894 362.147 133.894 354.708C133.894 347.269 134.066 341.245 134.282 341.245Z"
          fill="#E0E0E0"
        />
        <path
          d="M169.987 340.381C170.192 340.381 170.365 346.73 170.365 354.568C170.365 362.406 170.192 368.744 169.987 368.744C169.782 368.744 169.599 362.395 169.599 354.568C169.599 346.74 169.771 340.381 169.987 340.381Z"
          fill="#E0E0E0"
        />
        <path
          d="M165.053 340.727C165.258 340.727 165.431 346.902 165.431 354.535C165.431 362.169 165.258 368.344 165.053 368.344C164.848 368.344 164.664 362.169 164.664 354.535C164.664 346.902 164.837 340.727 165.053 340.727Z"
          fill="#E0E0E0"
        />
        <path
          d="M463.025 279.122C468.769 276.153 475.517 275.775 481.897 276.822C485.32 277.395 488.883 278.409 491.215 280.99C493.547 283.57 493.979 288.083 491.312 290.286C489.714 291.603 487.501 291.808 485.428 291.776C480.44 291.722 474.912 290.847 470.928 293.848C468.65 295.554 467.139 298.405 464.45 299.247C461.762 300.089 458.793 298.502 457.389 296.105C456.092 293.605 455.806 290.702 456.59 287.997C456.908 286.122 457.654 284.346 458.77 282.807C459.886 281.268 461.342 280.007 463.025 279.122Z"
          fill="#E3E3E3"
        />
        <path
          d="M449.876 253.739C453.384 258.749 460.208 257.086 463.371 254.031C466.535 250.975 467.873 246.538 469.082 242.306C471.868 232.654 474.664 222.516 472.602 212.68C472.108 209.697 470.796 206.909 468.813 204.626C467.81 203.501 466.529 202.657 465.099 202.18C463.669 201.703 462.139 201.608 460.661 201.905C457.228 202.823 455.09 206.224 453.546 209.387C448.997 218.849 446.611 229.205 446.561 239.704C446.561 244.584 447.122 249.701 449.876 253.739Z"
          fill="#E3E3E3"
        />
        <path
          d="M440.277 260.93C444.088 256.406 444.812 249.809 443.117 244.152C441.422 238.495 437.589 233.658 433.173 229.728C427.978 225.103 421.931 221.534 415.37 219.223C412.831 218.201 410.103 217.737 407.37 217.863C406.003 217.942 404.677 218.354 403.506 219.063C402.336 219.773 401.357 220.758 400.654 221.933C398.776 225.507 400.579 229.836 402.522 233.377C405.947 239.603 409.853 245.552 414.204 251.17C417.713 255.694 421.761 260.152 427.062 262.193C432.363 264.234 437.956 263.985 440.785 260.282"
          fill="#E3E3E3"
        />
        <path
          d="M449.637 329.336C449.823 328.59 449.931 327.827 449.961 327.058C450.123 325.406 450.318 323.323 450.566 320.85C450.875 317.788 451.34 314.743 451.959 311.727C452.771 308.045 453.879 304.434 455.273 300.931C456.641 297.451 458.491 294.18 460.769 291.214C462.625 288.797 464.996 286.824 467.711 285.438C469.556 284.532 471.53 283.916 473.562 283.613C474.328 283.59 475.088 283.481 475.83 283.289C475.062 283.205 474.287 283.205 473.519 283.289C471.408 283.45 469.342 283.987 467.419 284.876C464.564 286.227 462.059 288.218 460.099 290.696C457.718 293.706 455.797 297.054 454.399 300.628C453.004 304.173 451.92 307.833 451.16 311.565C450.572 314.616 450.164 317.698 449.94 320.796C449.745 323.431 449.67 325.568 449.637 327.047C449.557 327.808 449.557 328.575 449.637 329.336Z"
          fill="#E0E0E0"
        />
        <path
          d="M450.069 324.554C450.134 324.198 450.156 323.835 450.134 323.474C450.134 322.686 450.134 321.682 450.134 320.451C450.134 317.838 450.134 314.038 450.264 309.352C450.501 299.981 451.343 289.918 452.866 275.667C454.345 262.301 456.321 246.733 458.415 236.616C458.858 234.317 459.311 232.244 459.743 230.43C460.175 228.616 460.488 227.051 460.823 225.787C461.157 224.524 461.341 223.628 461.525 222.851C461.622 222.497 461.687 222.136 461.719 221.771C461.554 222.085 461.431 222.419 461.352 222.764C461.114 223.52 460.823 224.481 460.466 225.658C460.11 226.835 459.678 228.465 459.225 230.279C458.771 232.092 458.253 234.155 457.767 236.454C455.174 248.419 453.224 260.514 451.926 272.687C450.372 286.939 449.67 299.916 449.605 309.309C449.551 314.005 449.605 317.806 449.767 320.429C449.843 321.66 449.907 322.664 449.951 323.452C449.944 323.823 449.984 324.193 450.069 324.554Z"
          fill="#E0E0E0"
        />
        <path
          d="M450.135 299.527C450.217 298.478 450.217 297.424 450.135 296.375C450.016 294.345 449.735 291.408 449.163 287.824C448.475 283.622 447.548 279.462 446.389 275.365C445.027 270.324 443.284 265.393 441.174 260.617C437.561 251.812 432.377 243.738 425.875 236.789C424.741 235.602 423.537 234.484 422.269 233.442C421.719 232.978 421.19 232.513 420.736 232.146L419.343 231.185C418.503 230.544 417.611 229.974 416.677 229.48C416.525 229.685 420.445 231.984 425.389 237.253C431.679 244.263 436.725 252.296 440.31 261.005C442.373 265.749 444.115 270.626 445.525 275.602C446.896 280.18 447.803 284.391 448.494 287.932C449.185 291.473 449.519 294.41 449.746 296.407C449.792 297.456 449.922 298.499 450.135 299.527Z"
          fill="#E0E0E0"
        />
        <path
          d="M424.266 339.874L426.782 374.228H470.907L473.423 339.874H424.266Z"
          fill="#B2B4B8"
        />
        <path
          d="M478.681 326.335H420.002V339.874H478.681V326.335Z"
          fill="#8C9098"
        />
        <path
          d="M420.002 372.911V376.668H422.766H477.72V372.911H420.002Z"
          fill="#E0E0E0"
        />
        <path
          d="M425.465 382.855L422.766 376.258H475.614L472.462 382.855H425.465Z"
          fill="#70747E"
        />
        <path
          d="M474.039 339.647C474.039 339.798 462.972 339.917 449.336 339.917C435.7 339.917 424.634 339.798 424.634 339.647C424.634 339.496 435.689 339.377 449.336 339.377C462.983 339.377 474.039 339.496 474.039 339.647Z"
          fill="#F5F5F5"
        />
        <path
          d="M519.966 384.647C519.966 384.798 415.683 384.927 287.075 384.927C158.467 384.927 54.1621 384.82 54.1621 384.647C54.1621 384.474 158.424 384.366 287.075 384.366C415.726 384.366 519.966 384.517 519.966 384.647Z"
          fill="#263238"
        />
        <path
          d="M179.292 13.4393C161.964 40.6896 163.098 78.4773 182.035 104.637C194.656 122.084 213.582 133.788 228.611 149.184C243.64 164.579 255.062 187.306 247.127 207.323C239.051 227.696 215.396 235.977 197.69 248.889C178.154 263.118 164.892 284.363 160.688 308.163C156.485 331.963 161.667 356.465 175.147 376.525H359.14C359.14 376.525 391.465 314.931 349.909 267.977C308.354 221.023 286.037 220.268 287.57 189.476C289.104 158.684 310.653 148.698 322.972 137.145C335.291 125.593 395.309 98.6776 359.907 13.4285L179.292 13.4393Z"
          fill="#FBEAE9"
        />
        <path
          d="M272.436 232.816C276.085 213.987 270.481 192.955 278.039 174.234C282.275 167.357 296.318 159.026 297.764 153.602C299.923 145.504 286.406 143.972 267.253 153.602C248.1 163.231 243.242 143.885 231.366 143.885C241.892 153.537 245.779 161.624 255.658 171.956C267.718 184.599 262.19 178.11 265.094 195.384C267.102 207.552 267.426 219.903 267.253 232.265C267.232 232.925 267.461 233.568 267.894 234.066C268.327 234.563 268.932 234.879 269.589 234.948C270.245 235.018 270.903 234.837 271.431 234.441C271.959 234.046 272.318 233.465 272.436 232.816Z"
          fill="#FE7163"
        />
        <path
          d="M355.956 320.386C355.276 313.606 353.462 305.94 347.449 302.745C343.81 300.801 339.373 301.017 335.378 302.065C331.383 303.112 327.637 304.936 323.686 306.113C315.83 308.423 307.441 308.154 299.75 305.347C292.397 302.648 286.092 297.789 279.236 293.924C272.381 290.059 264.424 287.23 256.823 289.12C243.716 292.358 236.893 308.165 223.937 311.976C218.172 313.66 211.985 312.71 206.133 311.393C200.282 310.076 194.398 308.359 188.406 308.586C183.698 308.758 178.808 310.389 175.515 313.606L175.428 313.703C174.88 314.24 174.381 314.826 173.938 315.452C169.922 320.85 169.274 328.008 170.516 334.551C171.898 341.882 175.32 348.651 178.991 355.14C183.31 362.784 188.233 370.385 195.38 375.481C204.212 381.775 215.3 377.435 226.107 378.288C251.295 380.274 278.394 381.624 303.593 379.68C316.905 378.601 329.375 380.091 339.934 371.918C347.362 366.174 352.199 357.515 354.531 348.425C356.863 339.334 356.896 329.725 355.956 320.386Z"
          fill="#FE7163"
        />
        <path
          d="M162.624 384.949C162.624 384.949 162.117 376.506 173.129 371.799H366.656C366.656 371.799 376.751 376.917 377.993 384.755L162.624 384.949Z"
          fill="#3B424F"
        />
        <path
          d="M362.543 14.5324L362.23 14.6727L180.255 13.5067C180.255 13.5067 179.607 13.0964 178.646 12.3299C177.512 11.4412 176.684 10.2196 176.28 8.83654C175.875 7.45348 175.913 5.9784 176.39 4.61835C176.866 3.25831 177.756 2.08158 178.936 1.25333C180.115 0.425081 181.524 -0.0130949 182.965 0.000298118L359.596 1.42543C366.862 1.49021 369.151 11.423 362.543 14.5324Z"
          fill="#3B424F"
        />
        <path
          d="M267.382 255.37C268.147 255.065 269.001 255.075 269.76 255.395C270.518 255.716 271.119 256.323 271.433 257.083C271.748 257.844 271.75 258.698 271.439 259.461C271.128 260.223 270.53 260.832 269.773 261.157C269.016 261.481 268.162 261.494 267.396 261.194C266.63 260.893 266.012 260.302 265.678 259.55C265.344 258.798 265.32 257.944 265.61 257.174C265.901 256.403 266.483 255.779 267.231 255.434"
          fill="#FE7163"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M134.079 146.943C131.148 142.972 129.308 138.228 130.029 133.106C132.107 118.35 152.521 123.055 156.013 130.821C159.506 138.586 157.701 157.538 152.418 158.513C150.311 158.901 145.993 157.286 141.695 154.268L143.118 174.391L126.488 173.228L134.079 146.943Z"
          fill="#B28B67"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M123.124 127.663C122.624 127.093 122.384 126.313 122.181 125.573C121.971 124.806 121.768 124.031 121.648 123.238C121.407 121.655 121.529 119.863 122.726 118.73C123.686 117.822 125.054 117.48 126.295 117.472C127.122 117.467 127.959 117.641 128.73 117.955C129.494 118.267 130.133 118.827 130.869 119.198C131.016 117.52 131.426 115.783 132.379 114.409C133.295 113.086 134.657 112.403 136.16 112.302C137.702 112.199 139.186 112.662 140.503 113.498C140.832 113.707 141.158 113.925 141.467 114.167C141.726 114.37 141.994 114.611 142.307 114.708C142.657 114.817 142.848 114.624 143.097 114.38C143.389 114.095 143.713 113.849 144.053 113.634C145.555 112.683 147.46 112.383 149.071 113.128C149.813 113.471 150.521 114.016 150.99 114.73C151.409 115.368 151.671 116.35 152.278 116.816C152.536 117.014 152.743 116.791 153.001 116.632C153.389 116.395 153.762 116.129 154.154 115.899C154.704 115.576 155.291 115.347 155.91 115.249C156.816 115.105 158.044 115.239 158.218 116.424C158.283 116.87 158.176 117.334 158.115 117.773C158.03 118.377 157.943 118.98 157.848 119.582C157.776 120.04 157.694 120.48 157.576 120.926C157.513 121.164 157.336 121.602 157.423 121.851C157.531 122.161 158.138 122.031 158.392 122.06C158.893 122.116 159.392 122.239 159.841 122.486C160.19 122.678 160.551 122.949 160.674 123.372C160.75 123.632 160.707 123.891 160.645 124.149C160.57 124.458 160.619 124.629 160.636 124.947C161.334 124.662 163.725 124.087 163.935 125.317C164.004 125.727 163.749 126.166 163.555 126.494C163.215 127.069 162.786 127.586 162.349 128.077C161.439 129.102 160.377 129.967 159.249 130.691C160.466 131.337 160.679 133.008 159.523 133.913C159.012 134.313 158.36 134.364 157.756 134.294C157.535 134.268 157.221 134.161 157.044 134.187C156.949 134.201 156.843 134.274 156.712 134.274C155.853 134.272 154.903 133.999 154.08 133.751C152.615 133.309 151.254 132.505 150.178 131.35C149.902 131.053 149.67 130.878 149.272 130.854C148.923 130.833 148.575 130.905 148.226 130.889C147.304 130.848 146.505 130.34 145.671 129.981C145.538 131.132 145.12 132.381 144.575 133.387C144.13 134.208 143.317 134.275 142.521 134.294C139.977 134.355 137.458 133.912 134.926 133.738C137.338 134.464 139.854 134.869 142.237 135.691C143.315 136.062 142.425 136.743 141.919 137.223C141.087 138.014 140.439 139.02 139.964 140.095C138.874 138.449 136.827 137.271 134.917 137.62C132.805 138.005 131.149 140.708 132.334 142.817C133.022 144.041 134.381 144.591 135.503 145.174C134.535 146.05 134.22 147.42 133.595 148.55C133.287 149.107 132.865 149.732 132.252 149.89C132.025 149.949 131.764 149.937 131.577 150.106C131.345 150.314 131.275 150.561 130.985 150.734C129.828 151.424 128.107 151.244 127.199 150.174C126.377 149.207 126.708 147.789 127.511 146.922C126.369 146.35 124.269 145.569 124.865 143.769C122.328 143.422 116.427 138.854 120.06 136.072C118.256 134.88 116.713 132.166 118.079 129.964C119.131 128.268 121.346 127.632 123.124 127.663Z"
          fill="#191847"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M112.837 233.754L164.453 320.046L203.15 392.999H211.485L146.647 233.754L112.837 233.754Z"
          fill="#784931"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M198.053 389.631C197.276 391.705 196.888 393.258 196.888 394.288C196.888 395.54 197.096 397.368 197.514 399.771C198.967 399.771 212.026 399.771 236.692 399.771C237.711 396.405 237.123 394.588 234.929 394.32C232.736 394.051 230.913 393.809 229.463 393.593L211.253 385.475C210.902 385.319 210.492 385.476 210.335 385.826C210.333 385.832 210.33 385.838 210.328 385.845L209.157 388.684C207.127 389.631 205.476 390.105 204.207 390.105C203.175 390.105 201.751 389.688 199.933 388.855L199.933 388.855C199.236 388.536 198.411 388.842 198.091 389.539C198.078 389.569 198.065 389.6 198.053 389.631Z"
          fill="#E4E4E4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M192.402 381.317L208.476 376.454C201.434 355.401 192.802 332.233 182.582 306.95C172.361 281.667 161.385 257.268 149.652 233.754H104.254C117.298 263.499 131.126 290.526 145.739 314.835C160.352 339.144 175.906 361.305 192.402 381.317Z"
          fill="#2B44FF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M109.445 233.754C104.573 264.077 95.1774 302.819 94.2906 304.015C93.6995 304.812 72.418 311.943 30.4463 325.408L32.2467 332.758C82.298 325.537 108.671 319.934 111.365 315.95C115.406 309.974 135.585 262.764 143.401 233.754H109.445Z"
          fill="#B28B67"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.1997 319.055L48.371 330.893C85.8064 334.176 108.744 331.804 117.183 323.775C125.623 315.747 135.242 285.74 146.039 233.754H102.749C95.9081 276.323 92.0834 298.502 91.2753 300.289C90.4671 302.076 75.1086 308.331 45.1997 319.055Z"
          fill="#1F28CF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.5017 322.346C30.3238 321.941 28.7277 321.828 27.7134 322.007C26.4798 322.225 24.7159 322.747 22.4218 323.576C22.6741 325.007 24.9419 337.868 29.2251 362.159C32.7166 362.577 34.404 361.683 34.2874 359.476C34.1708 357.269 34.093 355.433 34.0541 353.966L38.8867 334.624C38.9797 334.251 38.7533 333.874 38.3811 333.781C38.3748 333.78 38.3684 333.778 38.362 333.777L35.3625 333.117C34.0768 331.282 33.3237 329.739 33.1033 328.489C32.9241 327.473 33.087 325.998 33.5919 324.063L33.592 324.063C33.7857 323.321 33.341 322.562 32.5985 322.368C32.5665 322.36 32.5343 322.352 32.5017 322.346Z"
          fill="#E4E4E4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M174.833 226.908L193.828 246.779C199.465 249.42 204.059 252.279 207.611 255.356C208.398 256.376 209.227 258.307 205.389 257.322C201.552 256.337 197.471 255.473 196.701 256.705C195.93 257.937 198.004 259.939 196.604 261.538C195.67 262.604 192.78 259.009 187.935 250.753L167.906 237.982L174.833 226.908ZM77.262 202.822L88.9248 207.128C70.0496 232.409 59.9737 245.76 58.6968 247.179C55.824 250.372 56.9453 257.237 57.1971 260.798C52.0204 261.169 55.1798 253.965 48.6131 254.533C42.6194 255.052 37.1475 257.954 32.5554 252.145C31.9908 251.43 31.8086 249.448 34.2175 248.828C40.2188 247.283 49.2376 244.039 50.8632 242.482C53.0801 240.359 61.8797 227.139 77.262 202.822Z"
          fill="#B28B67"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M179.609 229.546C182.452 229.84 185.424 230.843 188.504 232.524C190.019 233.351 190.577 235.25 189.75 236.765C189.27 237.645 188.428 238.203 187.51 238.353C188.056 238.921 188.608 239.487 189.166 240.051L181.679 250.318C160.551 234.684 140.313 222.136 133.754 201.319C131.553 194.332 136.513 172.792 137.59 164.827L145.435 163.117C151.916 185.996 162.152 208.655 179.609 229.546Z"
          fill="#2026A2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M98.9248 233.822C120.015 239.977 136.942 242.962 149.708 242.777C151.29 242.754 152.386 236.146 151.994 234.22C145.891 204.221 142.243 182.404 145.679 162.921C143.465 163.622 139.888 163.155 134.95 161.52C117.787 179.196 107.463 201.13 98.9248 233.822Z"
          fill="#191847"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M94.3434 236.434C93.7342 235.618 93.5351 234.521 93.9094 233.492L94.6222 231.534C95.1052 230.207 96.3934 229.406 97.7342 229.481C98.1448 228.496 98.5225 227.511 98.8644 226.528C101.753 218.223 100.871 209.425 102.433 201.214C89.7784 208.659 77.0529 223.125 64.257 244.611L52.0072 238.531C52.8231 236.786 53.6527 235.067 54.496 233.374C53.1542 232.264 52.0963 228.074 53.465 227.645C54.8785 227.202 56.3339 226.972 57.8279 226.949C75.9659 193.356 99.9399 170.677 129.75 158.911L132.129 159.331L137.53 160.283C129.898 190.171 149.875 261.883 128.931 316.425C107.826 317.38 81.3247 298.16 51.1194 304.456C56.18 281.896 81.9239 258.884 94.3434 236.434L94.3434 236.434Z"
          fill="#1F28CF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M132.455 160.094L127.012 170.325L132.684 179.714L125.134 184.975L135.982 214.322L121.661 184.418L129.106 179.083L124.065 170.781L132.455 160.094Z"
          fill="black"
          fillOpacity="0.1"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M129.615 223.78C128.103 223.513 127.094 222.072 127.361 220.561C127.627 219.05 129.068 218.04 130.58 218.307C132.091 218.573 133.1 220.015 132.833 221.526C132.567 223.037 131.126 224.046 129.615 223.78ZM130.261 240.117C128.749 239.85 127.74 238.409 128.007 236.898C128.273 235.387 129.714 234.377 131.226 234.644C132.737 234.91 133.746 236.352 133.48 237.863C133.213 239.374 131.772 240.383 130.261 240.117ZM128.17 255.971C126.659 255.705 125.65 254.264 125.917 252.752C126.183 251.241 127.624 250.232 129.135 250.498C130.647 250.765 131.656 252.206 131.389 253.717C131.123 255.228 129.682 256.238 128.17 255.971Z"
          fill="black"
          fillOpacity="0.4"
        />
      </g>
      <defs>
        <clipPath id="clip0_3744_25119">
          <rect width="500" height="400" fill="white" />
        </clipPath>
      </defs>
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
              </TextStyles>
            </FlexLayout>

            <FlexLayout>
              <Button
                icon={icon}
                iconAlign="left"
                thickness="thin"
                type="Primary"
                onClick={onClick}
              >
                {buttonText}
              </Button>
            </FlexLayout>
          </FlexLayout>
        </FlexLayout>
      </Card>
    </div>
  );
};
export interface SessionExpiredI {
  title?: string;
  buttonText?: string;
  description?: string | React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  image?: any;
}
export default SessionExpired;
