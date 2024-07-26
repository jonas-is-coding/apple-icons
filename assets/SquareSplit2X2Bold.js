import * as React from "react";
const SvgSquaresplit2X2Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m-1.12-17.92c0-.99.51-1.46 1.44-1.46h5.3v6.75h-6.74Zm14.92-1.46c.94 0 1.44.47 1.44 1.46v5.29h-6.74v-6.75Zm-13.48 16.36c-.93 0-1.44-.46-1.44-1.45v-5.28h6.74v6.73Zm14.92-1.45c0 .99-.5 1.45-1.44 1.45h-5.3v-6.73h6.74Z" />
  </svg>
);
export default SvgSquaresplit2X2Bold;
