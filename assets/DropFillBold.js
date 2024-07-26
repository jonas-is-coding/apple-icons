import * as React from "react";
const SvgDropfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.692 24.866c5.22-.01 8.69-3.4 8.69-8.5 0-2.44-1.01-5.1-2.14-7.37-1.2-2.55-3.02-5.27-4.68-7.8-.53-.81-1.15-1.2-1.87-1.2s-1.33.39-1.86 1.2c-1.72 2.6-3.6 5.42-4.82 8.05-1.05 2.18-2.01 4.75-2.01 7.12 0 5.1 3.47 8.49 8.69 8.5" />
  </svg>
);
export default SvgDropfillBold;
