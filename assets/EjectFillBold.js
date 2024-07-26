import * as React from "react";
const SvgEjectfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.025 13.04h18.83c1.21 0 2.03-.78 2.03-1.86 0-.53-.29-1.14-.77-1.57l-8.53-8.46c-.86-.77-1.4-1.15-2.15-1.15-.72 0-1.29.4-2.13 1.15L.775 9.61c-.48.43-.77 1.04-.77 1.57.01 1.08.82 1.86 2.02 1.86m.18 9.74h18.5c1.35 0 2.16-.81 2.16-2.14V17.6c0-1.33-.81-2.14-2.16-2.14h-18.5c-1.36 0-2.17.81-2.17 2.14v3.04c0 1.33.81 2.14 2.17 2.14" />
  </svg>
);
export default SvgEjectfillBold;
