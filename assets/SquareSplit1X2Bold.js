import * as React from "react";
const SvgSquaresplit1X2Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 4.132v14.14c0 2.67 1.45 4.13 4.11 4.13h14.18c2.66 0 4.11-1.46 4.11-4.13V4.132c0-2.67-1.45-4.13-4.11-4.13H4.112c-2.66 0-4.11 1.46-4.11 4.13m3.02.33c0-.94.46-1.44 1.45-1.44h13.46c.99 0 1.45.5 1.45 1.44v5.3H3.022Zm1.45 14.92c-.99 0-1.45-.5-1.45-1.44v-5.3h16.36v5.3c0 .94-.46 1.44-1.45 1.44Z" />
  </svg>
);
export default SvgSquaresplit1X2Bold;
