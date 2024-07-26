import * as React from "react";
const SvgMultiplyBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.502 15.892c.68.68 1.87.66 2.5.02l5.2-5.2 5.18 5.19c.67.66 1.82.67 2.5-.02.69-.68.68-1.83.02-2.5l-5.19-5.19 5.19-5.18c.66-.67.67-1.82-.02-2.5-.68-.69-1.83-.67-2.5-.02l-5.18 5.19-5.2-5.19c-.63-.64-1.82-.67-2.5.01s-.65 1.87-.02 2.5l5.2 5.19-5.2 5.2c-.63.64-.66 1.82.02 2.5" />
  </svg>
);
export default SvgMultiplyBold;
