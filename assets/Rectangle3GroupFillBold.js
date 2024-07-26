import * as React from "react";
const SvgRectangle3GroupfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.072 11.4h11c2.04 0 3.08-1.05 3.08-3.1V3.11c0-2.07-1.04-3.11-3.08-3.11h-11C1.042 0 .002 1.04.002 3.11V8.3c0 2.05 1.04 3.1 3.07 3.1m20.14 9.99h7.56c2.04 0 3.08-1.05 3.08-3.11V5.23c0-2.05-1.04-3.11-3.08-3.11h-7.56c-2.04 0-3.08 1.06-3.08 3.11v13.05c0 2.06 1.04 3.11 3.08 3.11m-17.36 1.86h9.28c2.04 0 3.08-1.04 3.08-3.1v-3.63c0-2.06-1.04-3.1-3.08-3.1h-9.28c-2.04 0-3.09 1.04-3.09 3.1v3.63c0 2.06 1.05 3.1 3.09 3.1" />
  </svg>
);
export default SvgRectangle3GroupfillBold;
