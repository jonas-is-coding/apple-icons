import * as React from "react";
const SvgRectanglesplit2X2Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m-1.12-17.93c0-.99.51-1.45 1.44-1.45h8.08v6.74h-9.52Zm20.49-1.45c.93 0 1.44.46 1.44 1.45v5.29h-9.52v-6.74Zm-19.05 16.36c-.93 0-1.44-.46-1.44-1.45v-5.29h9.52v6.74Zm20.49-1.45c0 .99-.51 1.45-1.44 1.45h-8.08v-6.74h9.52Z" />
  </svg>
);
export default SvgRectanglesplit2X2Bold;
