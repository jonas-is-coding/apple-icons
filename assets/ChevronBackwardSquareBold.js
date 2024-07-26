import * as React from "react";
const SvgChevronbackwardsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm9.12-2.45c.48-.48.46-1.23 0-1.66l-4.34-4.06 4.34-4.05c.47-.44.46-1.21-.03-1.67-.44-.4-1.14-.41-1.61.04l-4.59 4.3c-.8.74-.79 2.04 0 2.76l4.59 4.32c.42.39 1.24.41 1.64.02" />
  </svg>
);
export default SvgChevronbackwardsquareBold;
