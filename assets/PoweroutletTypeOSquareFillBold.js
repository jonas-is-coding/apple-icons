import * as React from "react";
const SvgPoweroutlettypeosquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.5-5.26c-.92 0-1.57-.64-1.57-1.57v-8.74c0-.93.65-1.57 1.57-1.57h9.12c.93 0 1.57.64 1.57 1.57v8.74c0 .93-.64 1.57-1.57 1.57Zm4.57-6.64c.72 0 1.32-.59 1.32-1.33 0-.72-.6-1.31-1.32-1.31a1.319 1.319 0 1 0 0 2.64m-2.61 4.04c.73 0 1.32-.6 1.32-1.33 0-.72-.59-1.31-1.32-1.31-.74 0-1.32.59-1.32 1.31 0 .73.58 1.33 1.32 1.33m5.21 0c.74 0 1.34-.6 1.34-1.33 0-.72-.6-1.31-1.34-1.31-.72 0-1.31.59-1.31 1.31 0 .73.59 1.33 1.31 1.33" />
  </svg>
);
export default SvgPoweroutlettypeosquarefillBold;
