import * as React from "react";
const SvgPoweroutlettypehsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.06-4.54c-3.68 0-6.65-2.97-6.65-6.66a6.64 6.64 0 0 1 6.65-6.65 6.65 6.65 0 0 1 6.66 6.65c0 3.69-2.98 6.66-6.66 6.66m-2.89-5.43c.77 0 1.43-.66 1.43-1.43s-.66-1.42-1.43-1.42c-.79 0-1.43.65-1.43 1.42s.64 1.43 1.43 1.43m5.69 0c.78 0 1.42-.66 1.42-1.43s-.64-1.42-1.42-1.42-1.43.65-1.43 1.42c0 .78.65 1.43 1.43 1.43m-2.8 3.29c.79 0 1.43-.65 1.43-1.43s-.64-1.42-1.43-1.42c-.77 0-1.42.65-1.42 1.42 0 .78.65 1.43 1.42 1.43" />
  </svg>
);
export default SvgPoweroutlettypehsquarefillBold;
