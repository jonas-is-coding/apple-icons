import * as React from "react";
const SvgCapsuleonrectanglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 15.399c0 2.48 1.26 3.91 3.65 4.07l.3.01a12.9 12.9 0 0 1-.58-3.9c0-6.87 4.85-11.54 11.86-11.54h5.9c1.09 0 2.13.11 3.11.33v-.28c0-2.65-1.47-4.09-4.13-4.09H4.142c-2.68 0-4.14 1.45-4.14 4.11Zm15.23 9.94h5.9c6.04 0 10.09-3.88 10.09-9.76s-4.05-9.77-10.09-9.77h-5.9c-6.06 0-10.09 3.89-10.09 9.77s4.03 9.76 10.09 9.76" />
  </svg>
);
export default SvgCapsuleonrectanglefillBold;
