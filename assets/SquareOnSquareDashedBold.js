import * as React from "react";
const SvgSquareonsquaredashedBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.022 5.617v-1.13c0-1 .51-1.45 1.44-1.45h1.25v-3.04h-1.57c-2.68 0-4.14 1.46-4.14 4.12v1.5Zm9.76-5.62h-5.23v3.04h5.23ZM.002 14.727v1.49c0 2.66 1.46 4.11 4.14 4.11h1.95v1.72c0 2.66 1.47 4.11 4.14 4.11h12.05c2.67 0 4.13-1.45 4.13-4.11v-12.1c0-2.66-1.46-4.11-4.13-4.11h-1.96v-1.72c0-2.65-1.47-4.12-4.14-4.12h-1.57v3.04h1.24c.94 0 1.45.45 1.45 1.45v1.35h-7.07c-2.67 0-4.14 1.45-4.14 4.11v7.36h-1.63c-.93 0-1.44-.47-1.44-1.46v-1.12Zm3.02-1.91v-5.31H.002v5.31Zm7.54 10.32c-.94 0-1.44-.46-1.44-1.46v-11.36c0-1 .5-1.46 1.44-1.46h11.39c.94 0 1.44.46 1.44 1.46v11.36c0 1-.5 1.46-1.44 1.46Z" />
  </svg>
);
export default SvgSquareonsquaredashedBold;
