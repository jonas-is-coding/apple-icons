import * as React from "react";
const SvgMosaicBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m-1.12-17.92c0-.99.51-1.46 1.44-1.46h8.5v9.96h-9.94Zm14.92-1.46c.94 0 1.44.47 1.44 1.46v2.07h-3.53v-3.53Zm-2.09 9.96v-3.54h3.53v3.54Zm-11.39 6.4c-.93 0-1.44-.46-1.44-1.45v-2.07h3.53v3.52Zm4.97 0v-3.52h3.53v3.52Zm9.95-1.45c0 .99-.5 1.45-1.44 1.45h-2.09v-3.52h3.53Z" />
  </svg>
);
export default SvgMosaicBold;
