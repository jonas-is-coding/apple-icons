import * as React from "react";
const SvgRectangleonrectangleslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M28.212 28.519c.38.39 1.01.39 1.39 0 .37-.38.39-1.01 0-1.39L2.752.289c-.37-.39-1.01-.39-1.4 0-.37.38-.37 1.02 0 1.4Zm-8.17-26.8H6.402l3.02 3.02h10.29c.94 0 1.45.47 1.45 1.47v1.35h-8.94l3.02 3.02h10.69c.94 0 1.46.46 1.46 1.45v9.12c0 .52-.06 1-.16 1.42l2.62 2.62c.37-.59.56-1.34.56-2.25v-11.27c0-2.66-1.47-4.11-4.14-4.11h-2.08v-1.73c0-2.64-1.48-4.11-4.15-4.11m-9.74 25.34h14.21l-3.02-3.03h-10.86c-.95 0-1.44-.47-1.44-1.46v-9.06c0-.59.05-1.14.18-1.61l-2.61-2.6q-.6.9-.6 2.37v6.53h-1.7c-.93 0-1.44-.46-1.44-1.46v-9.09c0-.7.1-1.31.28-1.82l-2.55-2.55c-.49.62-.75 1.48-.75 2.55v11.29c0 2.65 1.46 4.1 4.14 4.1h2.02v1.72c0 2.66 1.46 4.12 4.14 4.12" />
  </svg>
);
export default SvgRectangleonrectangleslashBold;
