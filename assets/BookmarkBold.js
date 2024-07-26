import * as React from "react";
const SvgBookmarkBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.964 26.618c.74 0 1.25-.33 2.17-1.25l4.42-4.41c.06-.05.14-.05.2 0l4.43 4.42c.93.91 1.41 1.24 2.16 1.24 1.18 0 1.96-.84 1.96-2.13V3.878c0-2.5-1.38-3.88-3.85-3.88h-9.6c-2.47 0-3.85 1.38-3.85 3.88v20.61c0 1.29.77 2.13 1.96 2.13m1.38-4.94c-.14.15-.32.1-.32-.12V4.198c0-.82.36-1.17 1.17-1.17h8.92c.81 0 1.17.35 1.17 1.17v17.36c0 .22-.16.27-.32.12l-4.28-4.15c-.7-.66-1.36-.66-2.06 0Z" />
  </svg>
);
export default SvgBookmarkBold;
