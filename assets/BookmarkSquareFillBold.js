import * as React from "react";
const SvgBookmarksquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m3.79-4.76c-.56 0-.95-.41-.95-1.04v-9.89c0-1.23.68-1.93 1.91-1.93h4.77c1.23 0 1.91.7 1.91 1.93v9.89c0 .63-.38 1.04-.95 1.04-.36 0-.59-.17-1.06-.62l-2.24-2.21c-.02-.04-.06-.04-.08 0l-2.23 2.21c-.47.45-.71.62-1.08.62" />
  </svg>
);
export default SvgBookmarksquarefillBold;
