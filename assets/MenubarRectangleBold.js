import * as React from "react";
const SvgMenubarrectangleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m-1.12-17.93c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v.46H3.022Zm1.44 14.91c-.93 0-1.44-.46-1.44-1.45v-10.8h21.93v10.8c0 .99-.51 1.45-1.44 1.45Z" />
  </svg>
);
export default SvgMenubarrectangleBold;
