import * as React from "react";
const SvgPoweroutlettypemsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.5-5.26c-.92 0-1.57-.64-1.57-1.57v-8.74c0-.93.65-1.57 1.57-1.57h9.12c.93 0 1.57.64 1.57 1.57v8.74c0 .93-.64 1.57-1.57 1.57Zm4.57-6.84c.75 0 1.37-.62 1.37-1.39a1.374 1.374 0 1 0-2.75 0c0 .77.62 1.39 1.38 1.39m-2.61 4.56c.73 0 1.32-.59 1.32-1.32 0-.72-.59-1.32-1.32-1.32-.74 0-1.32.58-1.32 1.32 0 .73.58 1.32 1.32 1.32m5.21 0c.74 0 1.34-.59 1.34-1.32 0-.72-.6-1.32-1.34-1.32-.72 0-1.31.6-1.31 1.32 0 .73.59 1.32 1.31 1.32" />
  </svg>
);
export default SvgPoweroutlettypemsquarefillBold;
