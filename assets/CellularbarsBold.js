import * as React from "react";
const SvgCellularbarsBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M29.592 21.562h2.41c1.17 0 1.95-.76 1.95-1.9V1.882c0-1.12-.78-1.88-1.95-1.88h-2.41c-1.16 0-1.95.76-1.95 1.88v17.78c0 1.14.79 1.9 1.95 1.9m-9.21 0h2.4c1.17 0 1.96-.76 1.96-1.9V6.772c0-1.14-.79-1.9-1.96-1.9h-2.4c-1.17 0-1.96.76-1.96 1.9v12.89c0 1.14.79 1.9 1.96 1.9m-9.21 0h2.4c1.17 0 1.96-.76 1.96-1.9v-8.44c0-1.13-.79-1.89-1.96-1.89h-2.4c-1.18 0-1.96.76-1.96 1.89v8.44c0 1.14.78 1.9 1.96 1.9m-9.21 0h2.4c1.17 0 1.95-.76 1.95-1.9v-4.79c0-1.14-.78-1.89-1.95-1.89h-2.4c-1.18 0-1.96.75-1.96 1.89v4.79c0 1.14.78 1.9 1.96 1.9" />
  </svg>
);
export default SvgCellularbarsBold;
