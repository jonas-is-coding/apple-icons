import * as React from "react";
const SvgCheckmarkrectangleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.472c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v13.46c0 .99-.51 1.45-1.44 1.45Zm8.31-2.6c.48 0 .9-.25 1.19-.67l5.03-7.77c.19-.28.31-.58.31-.87 0-.68-.61-1.16-1.27-1.16-.43 0-.79.23-1.09.71l-4.2 6.76-1.95-2.4c-.3-.36-.61-.51-1.01-.51-.68 0-1.23.54-1.23 1.22 0 .33.12.6.37.9l2.61 3.13c.35.44.74.66 1.24.66" />
  </svg>
);
export default SvgCheckmarkrectangleBold;
