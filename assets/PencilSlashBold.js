import * as React from "react";
const SvgPencilslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m18.967 4.552 1.41-1.4c.7-.7.72-1.48.07-2.14l-.55-.56c-.64-.64-1.45-.59-2.13.09l-1.42 1.4Zm-.43 14.45c.39.39 1.02.39 1.4 0a.97.97 0 0 0 0-1.39L3.467 1.151c-.38-.38-1.03-.4-1.4 0-.38.37-.38 1.02 0 1.4Zm-4.52-9.53 3.66-3.65-2.6-2.62-3.66 3.68Zm-10.18 10.2 6.58-6.59-2.61-2.61-6.57 6.6-1.2 3c-.18.47.31.91.74.76Z" />
  </svg>
);
export default SvgPencilslashBold;
