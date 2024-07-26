import * as React from "react";
const SvgBahtsignsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m4.47-5.9c-.77 0-1.19-.5-1.19-1.23v-8.2c0-.75.41-1.23 1.19-1.23h2.15v-1.04c0-.22.14-.36.36-.36s.36.14.36.36v1.04h.41c1.69 0 3.28.8 3.28 2.65 0 1.16-.86 2.17-2.03 2.32v.07c1.45.12 2.54 1.13 2.54 2.58 0 2.02-1.62 3.04-3.71 3.04h-.49v.95c0 .22-.14.37-.36.37s-.36-.15-.36-.37v-.95Zm.95-6.22h1.2v-2.82h-1.2Zm1.92-.02c.91-.07 1.6-.5 1.6-1.43 0-.9-.67-1.32-1.6-1.37Zm-1.92 4.62h1.2v-3.15h-1.2Zm1.92 0h.07c1.12 0 1.9-.47 1.9-1.6 0-1.11-.82-1.54-1.91-1.54h-.06Z" />
  </svg>
);
export default SvgBahtsignsquarefillBold;
