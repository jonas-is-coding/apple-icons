import * as React from "react";
const SvgPencilBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m18.967 4.552 1.41-1.4c.7-.7.73-1.48.09-2.14l-.57-.56c-.64-.64-1.45-.59-2.13.09l-1.42 1.4Zm-15.13 15.12 13.84-13.85-2.6-2.62-13.84 13.87-1.2 3c-.18.47.31.92.74.76Z" />
  </svg>
);
export default SvgPencilBold;
