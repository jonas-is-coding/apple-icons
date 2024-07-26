import * as React from "react";
const SvgHeartrectanglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m7-16.43c1.34 0 2.31.78 2.85 1.73.53-.95 1.5-1.73 2.84-1.73 1.94 0 3.44 1.5 3.44 3.68 0 3.58-4.03 6.39-5.59 7.36-.21.12-.48.3-.68.3s-.5-.18-.71-.3c-1.56-.97-5.59-3.78-5.59-7.36 0-2.18 1.5-3.68 3.44-3.68" />
  </svg>
);
export default SvgHeartrectanglefillBold;
