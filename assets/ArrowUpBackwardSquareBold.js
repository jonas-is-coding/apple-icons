import * as React from "react";
const SvgArrowupbackwardsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm3.12-4.86c.7 0 1.15-.5 1.15-1.28v-1.6l-.18-1.45 1.4 1.57 3.71 3.72c.3.28.62.41 1.01.41.73 0 1.3-.52 1.3-1.29 0-.35-.15-.71-.41-.95l-3.74-3.75-1.59-1.4 1.38.19h1.71c.78 0 1.28-.44 1.28-1.15 0-.7-.5-1.13-1.29-1.13h-5.34c-.95 0-1.54.51-1.54 1.51v5.32c0 .76.45 1.28 1.15 1.28" />
  </svg>
);
export default SvgArrowupbackwardsquareBold;
