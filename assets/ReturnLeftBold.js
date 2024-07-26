import * as React from "react";
const SvgReturnleftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.192 22.895c.98 0 1.64-.69 1.64-1.61 0-.53-.21-.91-.53-1.21l-2.36-2.31-1.79-1.46 2.65.12h14.08c3.27 0 4.71-1.44 4.71-4.73v-6.98c0-3.27-1.44-4.71-4.71-4.71h-6.4c-1 0-1.72.76-1.72 1.69 0 .94.72 1.7 1.72 1.7h6.24c1.08 0 1.54.45 1.54 1.54v6.55c0 1.09-.46 1.55-1.54 1.55H7.802l-2.65.11 1.79-1.46 2.36-2.3c.32-.3.53-.68.53-1.21 0-.92-.66-1.61-1.64-1.61-.43 0-.88.19-1.22.52l-6.47 6.39c-.31.32-.5.79-.5 1.26 0 .45.19.93.5 1.25l6.47 6.39c.34.34.79.52 1.22.52" />
  </svg>
);
export default SvgReturnleftBold;
