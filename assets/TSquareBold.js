import * as React from "react";
const SvgTsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm6.73-2.79c.97 0 1.53-.64 1.53-1.7v-6.71h2.06c.77 0 1.25-.44 1.25-1.18 0-.72-.48-1.16-1.25-1.16h-7.14c-.77 0-1.25.44-1.25 1.16 0 .74.48 1.18 1.25 1.18h2.03v6.71c0 1.06.55 1.7 1.52 1.7" />
  </svg>
);
export default SvgTsquareBold;
