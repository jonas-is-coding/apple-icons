import * as React from "react";
const SvgBoltbatteryblockfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h19.69c2.69 0 4.14-1.45 4.14-4.11V7.314c0-2.66-1.45-4.11-4.14-4.11h-1.28v-1.32c0-1.18-.68-1.88-1.87-1.88h-2.96c-1.19 0-1.87.7-1.87 1.88v1.32h-3.73v-1.32c0-1.18-.68-1.88-1.87-1.88h-2.96c-1.19 0-1.87.7-1.87 1.88v1.32h-1.28c-2.68 0-4.14 1.45-4.14 4.11v10.98c0 2.66 1.46 4.11 4.14 4.11m6.14-8.9c0-.14.05-.29.16-.4l4.72-5.79c.44-.53 1.16-.15.9.5l-1.48 3.94h2.8c.27 0 .49.2.49.47 0 .14-.06.28-.16.4l-4.72 5.79c-.44.52-1.16.14-.91-.51l1.5-3.94h-2.81c-.27 0-.49-.19-.49-.46" />
  </svg>
);
export default SvgBoltbatteryblockfillBold;
