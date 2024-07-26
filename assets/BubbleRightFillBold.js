import * as React from "react";
const SvgBubblerightfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M19.152 25.49c.78 0 1.25-.54 1.25-1.38v-3.34h1.06c3.24 0 5.54-2.18 5.54-5.73v-9.3c0-3.56-2.16-5.74-5.74-5.74H5.742C2.152 0 .002 2.18.002 5.74v9.3c0 3.55 2.15 5.73 5.74 5.73h7.41l4.39 3.91c.65.57 1.08.81 1.61.81" />
  </svg>
);
export default SvgBubblerightfillBold;
