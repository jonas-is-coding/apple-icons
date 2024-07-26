import * as React from "react";
const SvgLessthanorequaltoBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.152 15.01c1.03 0 1.68-.83 1.68-1.9 0-.93-.39-1.48-1.39-1.89l-8.52-3.73v-.12l8.51-3.68c.94-.37 1.4-.92 1.4-1.83 0-1.05-.73-1.86-1.79-1.86-.49 0-.94.13-1.33.33L1.962 5C.742 5.59.002 6.29.002 7.5c0 1.22.72 1.93 1.96 2.52l9.75 4.65c.44.21.9.34 1.44.34M.002 19.88c0 1.03.75 1.77 1.78 1.77h11.69c1.04 0 1.79-.74 1.79-1.77 0-1.04-.75-1.79-1.79-1.79H1.782c-1.03 0-1.78.75-1.78 1.79" />
  </svg>
);
export default SvgLessthanorequaltoBold;
