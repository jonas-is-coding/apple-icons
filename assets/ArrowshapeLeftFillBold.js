import * as React from "react";
const SvgArrowshapeleftfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.004 11.169c0 .5.22 1.1.69 1.55l9.33 8.69c.7.65 1.27.94 2 .94 1.1 0 1.92-.83 1.92-1.92v-3.93h8.76c2.01 0 3.17-1.15 3.17-3.14v-4.31c0-1.98-1.16-3.14-3.17-3.14h-8.76v-3.95c0-1.09-.82-1.96-1.93-1.96-.71 0-1.22.28-1.99.99l-9.33 8.64c-.48.45-.69 1.02-.69 1.54" />
  </svg>
);
export default SvgArrowshapeleftfillBold;
