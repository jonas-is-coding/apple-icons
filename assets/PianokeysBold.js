import * as React from "react";
const SvgPianokeysBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.472c0-.99.51-1.45 1.44-1.45h1.46v8.86c0 .81.51 1.11 1.04 1.11h.21v6.39Zm4.1-6.39c.54 0 1.05-.3 1.05-1.11v-8.86h2.53v8.86c0 .81.57 1.11 1.04 1.11h.21v6.39h-5.04v-6.39Zm6.23 0c.54 0 1.04-.3 1.04-1.11v-8.86h2.53v8.86c0 .81.52 1.11 1.04 1.11h.22v6.39h-5.04v-6.39Zm6.22 0c.54 0 1.04-.3 1.04-1.11v-8.86h1.46c.93 0 1.44.46 1.44 1.45v13.46c0 .99-.51 1.45-1.44 1.45h-2.71v-6.39Z" />
  </svg>
);
export default SvgPianokeysBold;
