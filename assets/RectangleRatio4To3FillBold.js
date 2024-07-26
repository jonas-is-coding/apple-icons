import * as React from "react";
const SvgRectangleratio4To3FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 4.137v8.74c0 2.67 1.45 4.14 4.11 4.14h14.18c2.66 0 4.11-1.47 4.11-4.14v-8.74c0-2.67-1.45-4.14-4.11-4.14H4.112c-2.66 0-4.11 1.47-4.11 4.14" />
  </svg>
);
export default SvgRectangleratio4To3FillBold;
