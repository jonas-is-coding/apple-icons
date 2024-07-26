import * as React from "react";
const SvgAppleterminalfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m1.35-12.76 2.44-1.47-2.44-1.48c-1.25-.75-.17-2.67 1.18-1.81l3.38 2.11c.84.53.86 1.81 0 2.34l-3.38 2.13c-1.36.85-2.43-1.06-1.18-1.82m5.16 1.62c0-.59.47-1.04 1.04-1.04h4.52c.58 0 1.04.45 1.04 1.04s-.46 1.05-1.04 1.05h-4.52c-.58 0-1.04-.46-1.04-1.05" />
  </svg>
);
export default SvgAppleterminalfillBold;
