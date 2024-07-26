import * as React from "react";
const SvgPlaypausefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 17.526c0 1.45.89 2.18 1.96 2.18.44 0 .91-.12 1.37-.38l12.76-7.44c.99-.58 1.53-1.15 1.53-2.03 0-.89-.54-1.47-1.53-2.04L3.332.386c-.46-.27-.93-.39-1.37-.39-1.07 0-1.96.73-1.96 2.18Zm23.1 2.15h2.88c1.25 0 1.89-.63 1.89-1.89V1.906c0-1.24-.64-1.88-1.89-1.88h-2.88c-1.25 0-1.88.64-1.88 1.88v15.88c0 1.26.61 1.89 1.88 1.89m9.49 0h2.88c1.25 0 1.89-.63 1.89-1.89V1.906c0-1.24-.64-1.88-1.89-1.88h-2.88c-1.24 0-1.88.64-1.88 1.88v15.88c0 1.26.61 1.89 1.88 1.89" />
  </svg>
);
export default SvgPlaypausefillBold;
