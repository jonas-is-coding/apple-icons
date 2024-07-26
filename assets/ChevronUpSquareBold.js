import * as React from "react";
const SvgChevronupsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm1.03-5.4c.48.48 1.22.48 1.67 0l4.05-4.33 4.06 4.33c.44.48 1.19.48 1.67 0 .43-.41.41-1.15-.03-1.64l-4.31-4.6c-.8-.85-1.97-.84-2.77 0l-4.3 4.61c-.46.48-.46 1.22-.04 1.63" />
  </svg>
);
export default SvgChevronupsquareBold;
