import * as React from "react";
const SvgRectanglesplit3X3FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M23.832.002c2.69 0 4.14 1.45 4.14 4.11v1.43h-7.41V.002h-2.88v5.54h-7.39V.002h-2.89v5.54h-7.4v-1.43c0-2.66 1.46-4.11 4.14-4.11Zm-13.54 13.97v-5.55h7.39v5.55Zm7.39 2.89v5.54h-7.39v-5.54Zm2.88-8.44h7.41v5.55h-7.41Zm-13.16 5.55h-7.4v-5.55h7.4Zm16.43 8.43h-3.27v-5.54h7.41v1.43c0 2.66-1.45 4.11-4.14 4.11m-23.83-5.54h7.4v5.54h-3.26c-2.68 0-4.14-1.45-4.14-4.11Z" />
  </svg>
);
export default SvgRectanglesplit3X3FillBold;
