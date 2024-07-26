import * as React from "react";
const SvgBatteryblockBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h19.69c2.69 0 4.14-1.45 4.14-4.11V7.314c0-2.66-1.45-4.11-4.14-4.11h-1.28v-1.32c0-1.18-.68-1.88-1.87-1.88h-2.96c-1.19 0-1.87.7-1.87 1.88v1.32h-3.73v-1.32c0-1.18-.68-1.88-1.87-1.88h-2.96c-1.19 0-1.87.7-1.87 1.88v1.32h-1.28c-2.68 0-4.14 1.45-4.14 4.11v10.98c0 2.66 1.46 4.11 4.14 4.11m-1.12-4.49V7.674c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v10.24c0 1.01-.51 1.47-1.44 1.47H4.462c-.93 0-1.44-.46-1.44-1.47" />
  </svg>
);
export default SvgBatteryblockBold;
