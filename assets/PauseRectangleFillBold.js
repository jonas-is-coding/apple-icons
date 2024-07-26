import * as React from "react";
const SvgPauserectanglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m6.26-6.27c-.65 0-1-.38-1-.96v-7.94c0-.58.35-.96 1-.96h1.42c.66 0 1.01.38 1.01.96v7.94c0 .58-.35.96-1.01.96Zm5.78 0c-.67 0-1.02-.38-1.02-.96v-7.94c0-.58.35-.96 1.02-.96h1.41c.65 0 1.01.38 1.01.96v7.94c0 .58-.36.96-1.01.96Z" />
  </svg>
);
export default SvgPauserectanglefillBold;
