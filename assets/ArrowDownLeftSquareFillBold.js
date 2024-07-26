import * as React from "react";
const SvgArrowdownleftsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m3.31-14.82c.75 0 1.22.53 1.22 1.36v1.66l-.16 1.52 1.46-1.65 3.88-3.89c.32-.3.67-.44 1.08-.44.77 0 1.38.55 1.38 1.38 0 .36-.16.74-.44 1.02l-3.92 3.91-1.66 1.47 1.45-.19h1.77c.83 0 1.36.47 1.36 1.21 0 .75-.53 1.22-1.37 1.22h-5.61c-1.02 0-1.65-.55-1.65-1.62v-5.6c0-.82.47-1.36 1.21-1.36" />
  </svg>
);
export default SvgArrowdownleftsquarefillBold;
