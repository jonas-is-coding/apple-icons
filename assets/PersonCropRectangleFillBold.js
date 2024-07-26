import * as React from "react";
const SvgPersoncroprectanglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m9.85-8.98c-2.23-.02-3.93-1.88-3.94-4.29-.01-2.29 1.74-4.23 3.94-4.23 2.22 0 3.94 1.94 3.94 4.23 0 2.41-1.71 4.31-3.94 4.29m-7.15 6.04c1.03-2.49 3.83-4.22 7.15-4.22 3.33 0 6.13 1.73 7.15 4.22Z" />
  </svg>
);
export default SvgPersoncroprectanglefillBold;
