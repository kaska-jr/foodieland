import React from "react";

const Loved = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="white" />
      <g filter="url(#filter0_d_101_791)">
        <path
          d="M28.5022 15C27.6291 14.9985 26.7677 15.2008 25.9865 15.5907C25.2052 15.9807 24.5258 16.5475 24.0022 17.2462C23.293 16.3027 22.3051 15.606 21.1782 15.2548C20.0513 14.9036 18.8426 14.9157 17.7229 15.2894C16.6033 15.663 15.6295 16.3793 14.9393 17.3368C14.2492 18.2943 13.8776 19.4447 13.8772 20.625C13.8772 27.3621 23.2373 32.6813 23.6357 32.9044C23.7477 32.9671 23.8739 33 24.0022 33C24.1305 33 24.2567 32.9671 24.3687 32.9044C26.0902 31.8961 27.7059 30.7173 29.1914 29.3856C32.4665 26.438 34.1272 23.4905 34.1272 20.625C34.1255 19.1337 33.5323 17.7039 32.4778 16.6494C31.4233 15.5949 29.9935 15.0017 28.5022 15Z"
          fill="#FF6363"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_101_791"
          x="3.8772"
          y="10"
          width="40.25"
          height="38"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_101_791"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_101_791"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Loved;
