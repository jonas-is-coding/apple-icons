import * as React from "react";
const SvgLessthanBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.782 16.954c1.03 0 1.7-.83 1.7-1.9 0-.93-.38-1.51-1.4-1.91l-11.16-4.65v-.14l11.16-4.65c.95-.39 1.4-.94 1.4-1.84 0-1.06-.74-1.86-1.79-1.86-.49 0-.91.13-1.34.32l-12.39 5.66c-1.24.56-1.96 1.31-1.96 2.51 0 1.23.72 1.99 1.96 2.55l12.39 5.55c.46.21.91.36 1.43.36" />
  </svg>
);
export default SvgLessthanBold;
