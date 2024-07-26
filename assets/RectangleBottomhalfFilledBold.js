import * as React from "react";
const SvgRectanglebottomhalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 18.292c0 2.66 1.46 4.11 4.14 4.11h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11Zm3.02-7.1v-6.72c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v6.72Z" />
  </svg>
);
export default SvgRectanglebottomhalffilledBold;
