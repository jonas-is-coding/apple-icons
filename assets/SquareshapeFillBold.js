import * as React from "react";
const SvgSquareshapefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 21.282c0 .68.44 1.12 1.12 1.12h20.16c.68 0 1.12-.44 1.12-1.12V1.122c0-.67-.44-1.12-1.12-1.12H1.122c-.68 0-1.12.45-1.12 1.12Z" />
  </svg>
);
export default SvgSquareshapefillBold;
