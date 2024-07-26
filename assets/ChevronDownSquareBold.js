import * as React from "react";
const SvgChevrondownsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm8.14-4.5 4.31-4.61c.44-.48.46-1.23.02-1.64-.48-.47-1.22-.48-1.66 0l-4.06 4.33-4.05-4.33c-.45-.48-1.2-.48-1.68 0-.41.42-.41 1.15.04 1.64l4.31 4.6c.79.85 1.97.85 2.77.01" />
  </svg>
);
export default SvgChevrondownsquareBold;
