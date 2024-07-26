import * as React from "react";
const SvgRectangleratio16To9Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 4.134v6.66c0 2.68 1.45 4.14 4.11 4.14h14.18c2.66 0 4.11-1.46 4.11-4.14v-6.66c0-2.67-1.45-4.13-4.11-4.13H4.112c-2.66 0-4.11 1.46-4.11 4.13m3.02.34c0-.95.46-1.45 1.45-1.45h13.46c.99 0 1.45.5 1.45 1.45v5.99c0 .94-.46 1.44-1.45 1.44H4.472c-.99 0-1.45-.5-1.45-1.44Z" />
  </svg>
);
export default SvgRectangleratio16To9Bold;
