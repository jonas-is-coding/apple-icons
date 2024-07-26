import * as React from "react";
const SvgPianokeysinverseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402c-2.68 0-4.14-1.45-4.14-4.11V4.112c0-2.66 1.46-4.11 4.14-4.11h19.69c2.69 0 4.14 1.45 4.14 4.11v14.18c0 2.66-1.45 4.11-4.14 4.11h-2.61v-9.14h.2c.54 0 1.04-.3 1.04-1.11V.002h-3.69v12.15c0 .81.52 1.11 1.04 1.11h.22v9.14h-5.45v-9.14h.21c.54 0 1.04-.3 1.04-1.11V.002h-3.69v12.15c0 .81.57 1.11 1.04 1.11h.21v9.14h-5.45v-9.14h.21c.53 0 1.05-.3 1.05-1.11V.002h-3.69v12.15c0 .81.51 1.11 1.04 1.11h.21v9.14Z" />
  </svg>
);
export default SvgPianokeysinverseBold;
