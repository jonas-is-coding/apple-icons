import * as React from "react";
const SvgPlusrectanglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m4.11-11.19c0-.81.57-1.39 1.36-1.39h3v-3c0-.79.58-1.37 1.38-1.37s1.38.58 1.38 1.37v3h3.02c.77 0 1.35.58 1.35 1.39 0 .79-.58 1.37-1.35 1.37h-3.02v3c0 .79-.58 1.36-1.38 1.36s-1.38-.57-1.38-1.36v-3h-3c-.79 0-1.36-.58-1.36-1.37" />
  </svg>
);
export default SvgPlusrectanglefillBold;
