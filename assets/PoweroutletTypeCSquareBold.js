import * as React from "react";
const SvgPoweroutlettypecsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm6.74-2.31c3.26 0 5.87-2.61 5.87-5.87s-2.61-5.87-5.87-5.87-5.87 2.61-5.87 5.87 2.61 5.87 5.87 5.87m-2.75-4.48c-.78 0-1.41-.62-1.41-1.39s.63-1.41 1.41-1.41c.77 0 1.42.64 1.42 1.41s-.65 1.39-1.42 1.39m5.51 0c-.78 0-1.42-.62-1.42-1.39s.64-1.41 1.42-1.41c.77 0 1.39.64 1.39 1.41s-.62 1.39-1.39 1.39" />
  </svg>
);
export default SvgPoweroutlettypecsquareBold;
