import * as React from "react";
const SvgBatteryblockstackBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 20.264h16.86c2.67 0 4.15-1.46 4.15-4.1v-9.2c0-2.66-1.48-4.12-4.15-4.12h-.78v-1.13c0-1.08-.62-1.71-1.67-1.71h-2.66c-1.08 0-1.69.63-1.69 1.71v1.13h-3.22v-1.13c0-1.08-.61-1.71-1.69-1.71h-2.66c-1.05 0-1.67.63-1.67 1.71v1.13h-.82c-2.68 0-4.14 1.46-4.14 4.12v9.2c0 2.66 1.46 4.1 4.14 4.1m.32-3.03c-.93 0-1.44-.45-1.44-1.45v-8.46c0-1 .58-1.45 1.51-1.45h16.14c.94 0 1.45.45 1.45 1.45v8.46c0 1-.51 1.45-1.45 1.45Zm-1.7 4.98c.16 1.19.8 1.9 2.17 1.9h15.28c1.37 0 2.02-.71 2.17-1.9Zm2.34 3.61c.09 1.13.8 1.75 2 1.75h10.95c1.19 0 1.91-.62 2-1.75Z" />
  </svg>
);
export default SvgBatteryblockstackBold;
