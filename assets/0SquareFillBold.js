import * as React from "react";
const Svg0SquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.11-5.63c-2.71 0-4.45-2.2-4.45-5.57 0-3.39 1.74-5.57 4.45-5.57s4.52 2.18 4.52 5.57c0 3.37-1.81 5.57-4.52 5.57m.03-2.24c1.02 0 1.71-1.14 1.71-3.33s-.69-3.33-1.71-3.33c-1.03 0-1.72 1.14-1.72 3.33s.69 3.33 1.72 3.33" />
  </svg>
);
export default Svg0SquarefillBold;
