import * as React from "react";
const SvgBarcodeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 18.502h1.96V.002H.002Zm3.87 0h1.12V.002h-1.12Zm2.98 0h3.23V.002h-3.23Zm4.4 0h2.04V.002h-2.04Zm3.26 0h3.17V.002h-3.17Zm4.14 0h2.5V.002h-2.5Zm3.12 0h1.62V.002h-1.62Z" />
  </svg>
);
export default SvgBarcodeBold;
