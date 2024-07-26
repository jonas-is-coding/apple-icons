import * as React from "react";
const SvgForwardfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 17.526c0 1.45.9 2.18 1.96 2.18.44 0 .91-.12 1.37-.38l12.77-7.44c.76-.44 1.25-.88 1.44-1.46v7.1c0 1.45.89 2.18 1.96 2.18.44 0 .91-.12 1.37-.38l12.76-7.44c1-.58 1.54-1.15 1.54-2.03 0-.89-.54-1.47-1.54-2.04L20.872.386c-.46-.27-.93-.39-1.37-.39-1.07 0-1.96.73-1.96 2.18v7.1c-.19-.57-.68-1.01-1.44-1.46L3.332.386c-.46-.27-.93-.39-1.37-.39-1.06 0-1.96.73-1.96 2.18Z" />
  </svg>
);
export default SvgForwardfillBold;
