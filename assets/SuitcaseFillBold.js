import * as React from "react";
const SvgSuitcasefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.092 24.367c-2.66 0-4.09-1.42-4.09-4.06v-11.6c0-2.64 1.43-4.05 4.09-4.05h3.8v-1.33c0-2.24 1.31-3.33 3.59-3.33h5.74c2.36 0 3.63 1.09 3.63 3.33v1.33h3.79c2.65 0 4.08 1.41 4.08 4.05v11.6c0 2.64-1.43 4.06-4.08 4.06h-.48V4.657h-2.17v19.71H6.742V4.657h-2.18v19.71Zm6.46-20.8v1.09h7.62v-1.09c0-.75-.42-1.16-1.18-1.16h-5.25c-.77 0-1.19.41-1.19 1.16" />
  </svg>
);
export default SvgSuitcasefillBold;
