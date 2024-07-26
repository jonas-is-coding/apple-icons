import * as React from "react";
const SvgLockdocumentfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.112 25.792h12.55c2.66 0 4.12-1.46 4.12-4.14v-10.23h-9.25c-1.42 0-2.12-.7-2.12-2.11V.002h-5.3c-2.66 0-4.11 1.46-4.11 4.14v17.51c0 2.69 1.45 4.14 4.11 4.14m7.92-16.26h8.64c-.05-.61-.53-1.19-1.21-1.88l-6.3-6.36c-.65-.66-1.24-1.13-1.85-1.19v8.71q0 .72.72.72m-3.97 13.5c-.71 0-1.05-.36-1.05-1.12v-3.57c0-.65.25-1 .77-1.07v-1.02c0-1.76 1.07-2.92 2.62-2.92s2.63 1.16 2.63 2.92v1.02c.5.06.76.42.76 1.07v3.57c0 .76-.34 1.12-1.03 1.12Zm1.02-5.79h2.61v-1.07c0-.95-.5-1.56-1.3-1.56-.79 0-1.31.61-1.31 1.56Z" />
  </svg>
);
export default SvgLockdocumentfillBold;
