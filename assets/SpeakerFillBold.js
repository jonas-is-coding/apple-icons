import * as React from "react";
const SvgSpeakerfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.163 21.495c1.04 0 1.83-.8 1.83-1.84V1.875c0-1.04-.79-1.88-1.86-1.88-.66 0-1.19.27-1.91.95l-4.74 4.42c-.06.06-.14.1-.23.1h-3.26c-1.94 0-2.99 1.1-2.99 3.12v4.34c0 2.03 1.05 3.12 2.99 3.12h3.25c.1 0 .17.02.24.08l4.74 4.45c.67.64 1.22.92 1.94.92" />
  </svg>
);
export default SvgSpeakerfillBold;
