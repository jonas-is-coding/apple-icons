import * as React from "react";
const SvgBookmarkslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20.128 17.128V3.878c0-2.5-1.38-3.88-3.85-3.88h-9.6c-1.19 0-2.1.34-2.68 1.01Zm1.95 6.91c.39.38 1.02.38 1.39 0a.993.993 0 0 0 0-1.4L1.688.858a.996.996 0 0 0-1.41 0 1.01 1.01 0 0 0 0 1.39ZM2.828 7.058v17.43c0 1.29.77 2.13 1.96 2.13.74 0 1.25-.33 2.17-1.25l4.42-4.41c.06-.05.14-.05.2 0l4.43 4.42c.93.91 1.41 1.24 2.16 1.24 1.11 0 1.86-.73 1.95-1.9v-.35Z" />
  </svg>
);
export default SvgBookmarkslashfillBold;
