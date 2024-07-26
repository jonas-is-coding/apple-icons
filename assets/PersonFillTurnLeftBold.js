import * as React from "react";
const SvgPersonfillturnleftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M21.392 2.762c0-2.07-.68-2.76-1.84-2.76-3 0-7.11 3.89-7.11 9.97 0 6.07 4.11 9.97 7.11 9.97 1.16 0 1.84-.69 1.84-2.76Zm-11 7.21c0-2.64-2.31-4.78-5.24-4.79-2.84-.01-5.15 2.18-5.15 4.79 0 2.63 2.28 4.79 5.14 4.79 2.94 0 5.25-2.15 5.25-4.79" />
  </svg>
);
export default SvgPersonfillturnleftBold;
