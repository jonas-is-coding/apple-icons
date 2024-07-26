import * as React from "react";
const SvgSignpostrightfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.902 15.833h6.73v7.04h-3.2a1.38 1.38 0 0 0 0 2.76h9.17c.73 0 1.37-.63 1.37-1.38s-.62-1.38-1.37-1.38h-3.23v-7.04l5.57-.01c1.09 0 1.7-.31 2.43-1.01l3.02-2.91c1.45-1.4 1.48-2.83 0-4.26l-3.02-2.9c-.73-.71-1.34-1.03-2.42-1.03h-5.58v-2.33c0-.75-.61-1.38-1.37-1.38-.75 0-1.37.62-1.37 1.38v2.33h-6.73c-1.82 0-2.9 1.06-2.9 2.87v6.38c0 1.81 1.08 2.87 2.9 2.87" />
  </svg>
);
export default SvgSignpostrightfillBold;
