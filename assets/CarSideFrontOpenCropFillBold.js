import * as React from "react";
const SvgCarsidefrontopencropfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.302 2.523h3.78c.54 0 .85.14 1.16.47l3.13 3.12-3.32.41c-3.78.48-5.98 2.77-5.98 6.1v2.05c0 2.91 1.5 4.32 4.21 4.32h.84c-.11-.45-.16-.93-.16-1.41 0-3.15 2.53-5.66 5.68-5.66 3.14 0 5.67 2.51 5.67 5.66 0 .48-.06.96-.17 1.41h6.67V.453c-2.48.3-4.16.97-6.24 2.28l-4.26 2.67-4.28-4.29c-.79-.77-1.57-1.11-2.99-1.11h-3.74c-.79 0-1.3.51-1.3 1.25s.51 1.27 1.3 1.27m9.34 19.17c2.27 0 4.1-1.83 4.1-4.11s-1.83-4.11-4.1-4.11c-2.29 0-4.13 1.83-4.13 4.11s1.84 4.11 4.13 4.11" />
  </svg>
);
export default SvgCarsidefrontopencropfillBold;
