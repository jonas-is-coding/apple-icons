import * as React from "react";
const SvgBookmarkslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20.128 17.128V3.878c0-2.5-1.38-3.88-3.85-3.88h-9.6c-1.19 0-2.1.34-2.67 1.01l2.5 2.5c.1-.33.37-.48.79-.48h8.64c.81 0 1.17.35 1.17 1.17v9.92Zm1.95 6.91c.39.38 1.02.38 1.39 0a.993.993 0 0 0 0-1.4L1.688.858a.996.996 0 0 0-1.41 0 1.01 1.01 0 0 0 0 1.39Zm-17.29 2.58c.74 0 1.25-.33 2.17-1.25l4.42-4.41c.06-.05.14-.05.2 0l4.43 4.42c.93.91 1.41 1.24 2.16 1.24 1.12 0 1.86-.74 1.93-1.74v-.3l-3.26-3.26v.35c-.02.02-.06.01-.09-.02l-4.24-4.12c-.7-.66-1.36-.66-2.06 0l-4.28 4.15c-.14.15-.32.1-.32-.12v-11.43l-3.02-3.03v17.39c0 1.29.77 2.13 1.96 2.13" />
  </svg>
);
export default SvgBookmarkslashBold;
