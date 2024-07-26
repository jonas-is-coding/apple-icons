import * as React from "react";
const SvgCrownfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.672 17.74h22.52l1.48-6.12a3.22 3.22 0 0 0 3.13-3.23c0-1.77-1.45-3.22-3.23-3.22s-3.22 1.45-3.22 3.22q0 .63.21 1.17l-3.28 2.32c-.29.2-.48.13-.64-.09l-4.04-5.8c.93-.56 1.55-1.6 1.55-2.77 0-1.77-1.44-3.22-3.23-3.22a3.226 3.226 0 0 0-1.67 5.99l-4.01 5.75c-.15.21-.33.27-.61.08l-3.35-2.36a3.233 3.233 0 0 0-3.05-4.29c-1.78 0-3.23 1.45-3.23 3.22s1.42 3.21 3.17 3.23Zm.55 2.26.45 1.8c.5 2.08 1.7 3.14 3.83 3.14h12.85c2.13 0 3.31-1.05 3.83-3.14l.44-1.8Z" />
  </svg>
);
export default SvgCrownfillBold;
