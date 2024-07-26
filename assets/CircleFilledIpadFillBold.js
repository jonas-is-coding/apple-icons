import * as React from "react";
const SvgCirclefilledipadfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.902 27.876h13.32c2.4 0 3.91-1.46 3.91-3.82V3.816c0-2.35-1.51-3.82-3.91-3.82H3.902c-2.4 0-3.9 1.47-3.9 3.82v20.24c0 2.36 1.5 3.82 3.9 3.82m6.66-7.83a6.11 6.11 0 0 1-6.11-6.11 6.11 6.11 0 1 1 6.11 6.11" />
  </svg>
);
export default SvgCirclefilledipadfillBold;
