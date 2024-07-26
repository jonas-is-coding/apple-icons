import * as React from "react";
const SvgLightswitchonfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.112 26.223h10.23c2.66 0 4.12-1.46 4.12-4.13V4.133c0-2.68-1.46-4.13-4.12-4.13H4.112c-2.66 0-4.11 1.45-4.11 4.13v17.96c0 2.67 1.45 4.13 4.11 4.13m.67-14.35c-.6 0-.84-.25-.84-.85v-6.16c0-.61.24-.84.84-.84h8.87c.6 0 .84.23.84.84v6.16c0 .6-.24.85-.84.85Z" />
  </svg>
);
export default SvgLightswitchonfillBold;
