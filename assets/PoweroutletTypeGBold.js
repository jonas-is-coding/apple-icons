import * as React from "react";
const SvgPoweroutlettypegBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h14.94c2.67 0 4.13-1.45 4.13-4.11V4.112c0-2.66-1.46-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.492c0-1 .51-1.47 1.44-1.47h14.29c.94 0 1.44.47 1.44 1.47v13.44c0 .99-.5 1.45-1.44 1.45Zm6.69-9.36h.9c.53 0 .89-.37.89-.89v-3.12c0-.53-.37-.9-.89-.9h-.9c-.51 0-.87.37-.87.9v3.12c0 .52.35.89.87.89m-4.75 6.71h2.83c.54 0 .89-.36.89-.9v-.89c0-.52-.36-.88-.89-.88h-2.83c-.53 0-.91.36-.91.88v.89c0 .54.37.9.91.9m7.58 0h2.85c.52 0 .89-.37.89-.9v-.89c0-.52-.38-.88-.89-.88h-2.85c-.53 0-.9.36-.9.88v.89c0 .54.36.9.9.9" />
  </svg>
);
export default SvgPoweroutlettypegBold;
