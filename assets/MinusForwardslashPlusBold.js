import * as React from "react";
const SvgMinusforwardslashplusBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.762 22.199c.55 0 .86-.2 1.26-.8l6.68-9.95 6.34-9.39c.2-.3.32-.58.32-.9 0-.67-.56-1.16-1.24-1.16-.63 0-.94.21-1.36.82l-6.47 9.67-6.53 9.63c-.2.3-.32.55-.32.93 0 .71.62 1.15 1.32 1.15m-3.59-15.13h6.45c.64 0 1.17-.52 1.17-1.17s-.53-1.18-1.17-1.18h-6.45c-.64 0-1.17.53-1.17 1.18s.53 1.17 1.17 1.17m12.87 9.94c0 .64.52 1.17 1.17 1.17h2.05v2.05c0 .65.53 1.17 1.17 1.17.65 0 1.17-.52 1.17-1.17v-2.05h2.05c.65 0 1.18-.53 1.18-1.17 0-.66-.53-1.18-1.18-1.18h-2.05v-2.04c0-.65-.52-1.18-1.17-1.18s-1.17.53-1.17 1.18v2.04h-2.05c-.65 0-1.17.52-1.17 1.18" />
  </svg>
);
export default SvgMinusforwardslashplusBold;
