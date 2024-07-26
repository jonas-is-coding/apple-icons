import * as React from "react";
const SvgXmarkBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.502 18.878c.69.68 1.87.67 2.5.02l6.69-6.69 6.69 6.69c.66.66 1.82.66 2.49-.02.68-.69.69-1.83.02-2.5l-6.68-6.69 6.68-6.68c.67-.67.67-1.82-.02-2.5-.68-.67-1.83-.67-2.49-.02l-6.69 6.69-6.69-6.69c-.63-.64-1.82-.67-2.5.02-.68.68-.65 1.86-.02 2.5l6.7 6.68-6.7 6.7c-.63.64-.66 1.82.02 2.49" />
  </svg>
);
export default SvgXmarkBold;
