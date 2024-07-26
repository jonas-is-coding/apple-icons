import * as React from "react";
const SvgPoweroutlettypedsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.5-5.26c-.92 0-1.57-.64-1.57-1.57v-8.74c0-.93.65-1.57 1.57-1.57h9.12c.93 0 1.57.64 1.57 1.57v8.74c0 .93-.64 1.57-1.57 1.57Zm4.57-6.55c.87 0 1.57-.72 1.57-1.58 0-.87-.7-1.57-1.57-1.57-.88 0-1.58.7-1.58 1.57 0 .86.7 1.58 1.58 1.58m-2.61 4.36c.73 0 1.32-.59 1.32-1.31 0-.73-.59-1.33-1.32-1.33-.74 0-1.32.59-1.32 1.33 0 .72.58 1.31 1.32 1.31m5.21 0c.74 0 1.34-.59 1.34-1.31 0-.73-.6-1.33-1.34-1.33-.72 0-1.31.6-1.31 1.33 0 .72.59 1.31 1.31 1.31" />
  </svg>
);
export default SvgPoweroutlettypedsquarefillBold;
