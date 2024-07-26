import * as React from "react";
const SvgArrowleftsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.92-11.21c0-.38.12-.73.48-1.1l3.8-3.95c.24-.25.49-.38.85-.38.68 0 1.16.58 1.16 1.21 0 .35-.14.67-.39.9l-1.56 1.47-.88.57 1.78-.12h5.82c.75 0 1.37.61 1.37 1.4 0 .78-.62 1.4-1.37 1.4h-5.82l-1.78-.13.88.58 1.56 1.46c.25.24.39.58.39.93 0 .62-.48 1.19-1.16 1.19-.36 0-.61-.14-.85-.37l-3.8-3.95c-.36-.37-.48-.73-.48-1.11" />
  </svg>
);
export default SvgArrowleftsquarefillBold;
