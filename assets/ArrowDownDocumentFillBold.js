import * as React from "react";
const SvgArrowdowndocumentfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.112 25.792h12.55c2.66 0 4.12-1.46 4.12-4.14v-10.23h-9.25c-1.42 0-2.12-.7-2.12-2.11V.002h-5.3c-2.66 0-4.11 1.46-4.11 4.14v17.51c0 2.69 1.45 4.14 4.11 4.14m7.92-16.26h8.64c-.05-.61-.53-1.19-1.21-1.88l-6.3-6.36c-.65-.66-1.24-1.13-1.85-1.19v8.71q0 .72.72.72m-1.64 4.21c.65 0 1.19.45 1.19 1.11v3.42l-.12 1.59.71-.75.86-.89c.19-.2.48-.36.76-.36.59 0 1.04.42 1.04.99 0 .32-.11.57-.36.79l-3.14 2.87c-.3.27-.57.42-.94.42s-.64-.15-.95-.42l-3.13-2.87c-.25-.22-.37-.47-.37-.79 0-.57.45-.99 1.04-.99.28 0 .57.16.76.36l.86.89.71.75-.11-1.59v-3.42c0-.66.54-1.11 1.19-1.11" />
  </svg>
);
export default SvgArrowdowndocumentfillBold;
