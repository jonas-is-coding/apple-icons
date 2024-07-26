import * as React from "react";
const SvgPoweroutlettypeasquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m3.19-5.41c-.48 0-.91-.15-1.21-.44-1.32-1.25-2.27-3.25-2.27-5.34 0-2.1.96-4.11 2.3-5.37.29-.27.72-.41 1.18-.41h7.74c.48 0 .91.16 1.22.45 1.31 1.25 2.27 3.24 2.27 5.33s-.96 4.09-2.27 5.34c-.31.29-.74.44-1.22.44Zm.79-2.79c.47 0 .84-.38.84-.86v-4.27c0-.48-.37-.86-.84-.86-.48 0-.86.38-.86.86v4.27c0 .48.38.86.86.86m6.16 0c.48 0 .86-.38.86-.86v-4.27c0-.48-.38-.86-.86-.86-.47 0-.84.38-.84.86v4.27c0 .48.37.86.84.86" />
  </svg>
);
export default SvgPoweroutlettypeasquarefillBold;
