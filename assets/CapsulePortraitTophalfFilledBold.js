import * as React from "react";
const SvgCapsuleportraittophalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.152.003c-6.72 0-11.15 4.38-11.15 11.15v6.2c0 6.78 4.43 11.17 11.15 11.17 6.73 0 11.17-4.39 11.17-11.17v-6.2c0-6.77-4.44-11.15-11.17-11.15m-8.12 14.26h16.25v3.29c0 4.9-3.17 7.94-8.13 7.94-4.94 0-8.12-3.04-8.12-7.94Z" />
  </svg>
);
export default SvgCapsuleportraittophalffilledBold;
