import * as React from "react";
const SvgAspectratioBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m16.91-12.37c0-1.99-1.12-3.11-3.13-3.11h-14.9v-2.45c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v13.46c0 .99-.51 1.45-1.44 1.45h-2.46Zm-16.59 9.35c-.93 0-1.44-.46-1.44-1.45v-8.65h8.94v10.1Zm13.16-10.1c.69 0 1.08.36 1.08 1.08v9.02h-4.38v-10.1Z" />
  </svg>
);
export default SvgAspectratioBold;
