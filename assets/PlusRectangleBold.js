import * as React from "react";
const SvgPlusrectangleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.472c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v13.46c0 .99-.51 1.45-1.44 1.45Zm4.15-8.19c0 .75.54 1.3 1.28 1.3h2.8v2.8c0 .74.55 1.28 1.3 1.28s1.3-.53 1.3-1.28v-2.8h2.81c.74 0 1.28-.55 1.28-1.3s-.54-1.3-1.28-1.3h-2.81v-2.8c0-.75-.55-1.29-1.3-1.29s-1.3.54-1.3 1.29v2.8h-2.8c-.75 0-1.28.55-1.28 1.3" />
  </svg>
);
export default SvgPlusrectangleBold;
