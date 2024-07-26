import * as React from "react";
const SvgLinediagonalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.448 16.605c-.6.6-.6 1.56 0 2.14.59.59 1.55.6 2.13 0l16.18-16.17c.59-.58.58-1.55 0-2.13-.59-.59-1.55-.6-2.14 0Z" />
  </svg>
);
export default SvgLinediagonalBold;
