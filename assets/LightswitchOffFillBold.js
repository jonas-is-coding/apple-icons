import * as React from "react";
const SvgLightswitchofffillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.112.003c-2.66 0-4.11 1.46-4.11 4.13v17.96c0 2.67 1.45 4.13 4.11 4.13h10.23c2.66 0 4.12-1.46 4.12-4.13V4.133c0-2.67-1.46-4.13-4.12-4.13Zm.67 14.34h8.87c.6 0 .84.25.84.84v6.18c0 .6-.24.84-.84.84h-8.87c-.6 0-.84-.24-.84-.84v-6.18c0-.59.24-.84.84-.84" />
  </svg>
);
export default SvgLightswitchofffillBold;
