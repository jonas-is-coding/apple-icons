import * as React from "react";
const SvgChevronrightsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm4.19-2.45c.4.39 1.22.37 1.64-.02l4.59-4.32c.79-.72.79-2.02 0-2.76l-4.59-4.3a1.19 1.19 0 0 0-1.62-.04c-.48.46-.49 1.23-.02 1.67l4.33 4.05-4.33 4.06c-.46.43-.5 1.18 0 1.66" />
  </svg>
);
export default SvgChevronrightsquareBold;
