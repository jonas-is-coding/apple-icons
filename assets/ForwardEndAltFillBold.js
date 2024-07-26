import * as React from "react";
const SvgForwardendaltfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 17.526c0 1.45.89 2.18 1.96 2.18.44 0 .91-.12 1.37-.38l12.76-7.44c.81-.46 1.31-.93 1.47-1.55v7.19c0 1.45.91 2.18 1.96 2.18.45 0 .92-.12 1.37-.38l12.78-7.44c.76-.44 1.25-.88 1.44-1.46v7.36c0 1.26.61 1.89 1.87 1.89h2.9c1.24 0 1.87-.63 1.87-1.89V1.906c0-1.24-.63-1.88-1.87-1.88h-2.9c-1.24 0-1.87.64-1.87 1.88v7.37c-.19-.57-.68-1.01-1.44-1.46L20.892.386a2.65 2.65 0 0 0-1.37-.39c-1.05 0-1.96.73-1.96 2.18v7.2c-.16-.63-.66-1.09-1.47-1.56L3.332.386c-.46-.27-.93-.39-1.37-.39-1.07 0-1.96.73-1.96 2.18Z" />
  </svg>
);
export default SvgForwardendaltfillBold;
