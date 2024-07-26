import * as React from "react";
const SvgBoltsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m1.92-10.42c0-.18.08-.38.21-.55l6.45-7.9c.63-.72 1.6-.21 1.26.68l-2.05 5.4h3.84c.38 0 .67.26.67.64 0 .19-.08.37-.22.54l-6.46 7.91c-.61.73-1.58.21-1.24-.69l2.04-5.38h-3.84c-.37 0-.66-.28-.66-.65" />
  </svg>
);
export default SvgBoltsquarefillBold;
