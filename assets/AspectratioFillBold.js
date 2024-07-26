import * as React from "react";
const SvgAspectratiofillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M21.462 10.022c0-1.98-1.12-3.11-3.13-3.11l-18.33.01v-2.81c0-2.66 1.46-4.11 4.14-4.11h19.69c2.69 0 4.14 1.45 4.14 4.11v14.18c0 2.66-1.45 4.11-4.14 4.11h-2.37Zm-2.36.34v12.04h-4.97V9.282h3.9c.68 0 1.07.36 1.07 1.08m-14.96 12.04c-2.68 0-4.14-1.45-4.14-4.11v-9.01h11.78v13.12Z" />
  </svg>
);
export default SvgAspectratiofillBold;
