import * as React from "react";
const SvgBatteryblockslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M25.122 25.347c.39.38 1.02.38 1.4 0 .37-.39.38-1.01 0-1.4L2.852.287c-.39-.38-1.02-.38-1.41 0-.38.38-.38 1.02 0 1.4Zm2.22-3.08c.41-.6.63-1.39.63-2.37V8.917c0-2.66-1.45-4.11-4.14-4.11h-1.28v-1.32c0-1.18-.68-1.88-1.87-1.88h-2.96c-1.19 0-1.87.7-1.87 1.88v1.32h-3.73v-1.32c0-1.18-.68-1.88-1.87-1.88h-2.88c-.22 0-.43.03-.6.11Zm-23.2 1.74h17.15L2.412 5.157h-.17c-1.47.55-2.24 1.81-2.24 3.76v10.98c0 2.66 1.46 4.11 4.14 4.11" />
  </svg>
);
export default SvgBatteryblockslashfillBold;
