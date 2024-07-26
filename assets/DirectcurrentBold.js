import * as React from "react";
const SvgDirectcurrentBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 1.546c0 .84.69 1.54 1.55 1.54h22.25c.85 0 1.55-.7 1.55-1.54 0-.85-.7-1.55-1.55-1.55H1.552c-.86 0-1.55.7-1.55 1.55m0 6.52c0 .85.69 1.54 1.55 1.54h4.03c.85 0 1.54-.69 1.54-1.54 0-.86-.69-1.55-1.54-1.55h-4.03c-.86 0-1.55.69-1.55 1.55m9.14 0c0 .85.69 1.54 1.55 1.54h4a1.545 1.545 0 1 0 0-3.09h-4c-.86 0-1.55.69-1.55 1.55m9.12 0c0 .85.69 1.54 1.54 1.54h3.95a1.545 1.545 0 1 0 0-3.09h-3.95c-.85 0-1.54.69-1.54 1.55" />
  </svg>
);
export default SvgDirectcurrentBold;
