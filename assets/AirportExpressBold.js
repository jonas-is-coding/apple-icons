import * as React from "react";
const SvgAirportexpressBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.242 26.37h12.4c2.78 0 4.25-1.44 4.25-4.2V4.19c0-2.74-1.47-4.19-4.25-4.19h-12.4C1.472 0 .002 1.45.002 4.19v17.98c0 2.76 1.47 4.2 4.24 4.2m.04-23.35h2.23v3.61c0 .71-.37 1.08-1.05 1.08h-2.44v-3.4c0-.85.45-1.29 1.26-1.29m0 20.32c-.81 0-1.26-.43-1.26-1.27V9.64h2.47c1.96 0 2.96-.98 2.96-2.9V3.02h8.17c.79 0 1.25.44 1.25 1.29v17.76c0 .84-.46 1.27-1.25 1.27Z" />
  </svg>
);
export default SvgAirportexpressBold;
