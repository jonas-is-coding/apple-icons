import * as React from "react";
const SvgPoweroutlettypebfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h14.94c2.67 0 4.13-1.45 4.13-4.11V4.112c0-2.66-1.46-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m3.17-11.07c-.74 0-1.31-.57-1.31-1.32v-3.65c0-.74.57-1.34 1.31-1.34.75 0 1.34.6 1.34 1.34v3.65c0 .73-.59 1.32-1.34 1.32m8.56 0c-.73 0-1.31-.57-1.31-1.32v-3.65c0-.74.58-1.34 1.31-1.34.75 0 1.33.6 1.33 1.34v3.65c0 .73-.58 1.32-1.33 1.32m-5.76 6.57c-.42 0-.64-.22-.64-.63v-1.24c0-1.21.91-2.16 2.13-2.16 1.21 0 2.14.95 2.14 2.16v1.24c0 .41-.23.63-.64.63Z" />
  </svg>
);
export default SvgPoweroutlettypebfillBold;
