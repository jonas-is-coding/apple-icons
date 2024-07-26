import * as React from "react";
const SvgBatteryblockslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M25.122 25.347c.39.38 1.02.38 1.4 0 .37-.39.38-1.01 0-1.4L2.852.287c-.39-.38-1.02-.38-1.41 0-.38.38-.38 1.02 0 1.4Zm2.22-3.08c.41-.6.63-1.39.63-2.37V8.917c0-2.66-1.45-4.11-4.14-4.11h-1.28v-1.32c0-1.18-.68-1.88-1.87-1.88h-2.96c-1.19 0-1.87.7-1.87 1.88v1.32h-3.73v-1.32c0-1.18-.68-1.88-1.87-1.88h-2.88c-.22 0-.43.03-.6.11l6.11 6.11h10.63c.93 0 1.44.46 1.44 1.45v9.87c0 .24-.07.42-.21.53Zm-23.2 1.74h17.15l-3.03-3.02h-13.8c-.93 0-1.44-.46-1.44-1.47V9.277c0-.99.51-1.45 1.44-1.45h.61l-2.66-2.67h-.17c-1.47.55-2.24 1.81-2.24 3.76v10.98c0 2.66 1.46 4.11 4.14 4.11" />
  </svg>
);
export default SvgBatteryblockslashBold;
