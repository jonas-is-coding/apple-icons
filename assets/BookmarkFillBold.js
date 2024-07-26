import * as React from "react";
const SvgBookmarkfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.964 26.618c.74 0 1.25-.33 2.17-1.25l4.42-4.41c.06-.05.14-.05.2 0l4.43 4.42c.93.91 1.41 1.24 2.16 1.24 1.18 0 1.96-.84 1.96-2.13V3.878c0-2.5-1.38-3.88-3.85-3.88h-9.6c-2.47 0-3.85 1.38-3.85 3.88v20.61c0 1.29.77 2.13 1.96 2.13" />
  </svg>
);
export default SvgBookmarkfillBold;
