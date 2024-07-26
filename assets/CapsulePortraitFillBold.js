import * as React from "react";
const SvgCapsuleportraitfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.152.003c-6.72 0-11.15 4.38-11.15 11.15v6.2c0 6.78 4.43 11.17 11.15 11.17 6.73 0 11.17-4.39 11.17-11.17v-6.2c0-6.77-4.44-11.15-11.17-11.15" />
  </svg>
);
export default SvgCapsuleportraitfillBold;
