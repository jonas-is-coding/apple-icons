import * as React from "react";
const SvgPersoncroprectangleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.472c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v13.46c0 .99-.51 1.45-1.44 1.45h-2.34c-1.1-2.45-3.89-4.1-7.18-4.1s-6.08 1.65-7.18 4.1Zm9.53-5.87c2.25.01 3.97-1.9 3.97-4.35 0-2.3-1.74-4.26-3.97-4.26s-3.98 1.96-3.97 4.26c.01 2.45 1.72 4.34 3.97 4.35" />
  </svg>
);
export default SvgPersoncroprectangleBold;
