import * as React from "react";
const SvgForwardframefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.914 17.526c0 1.45.9 2.18 1.96 2.18.44 0 .92-.12 1.37-.38l12.77-7.44c1-.58 1.54-1.15 1.54-2.03 0-.89-.54-1.47-1.54-2.04L13.244.386c-.45-.27-.93-.39-1.37-.39-1.06 0-1.96.73-1.96 2.18Zm-8.03 2.15h2.89c1.24 0 1.87-.63 1.87-1.89V1.906c0-1.24-.63-1.88-1.87-1.88h-2.89c-1.25 0-1.88.64-1.88 1.88v15.88c0 1.26.62 1.89 1.88 1.89" />
  </svg>
);
export default SvgForwardframefillBold;
