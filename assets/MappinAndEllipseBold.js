import * as React from "react";
const SvgMappinandellipseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.072 5.072c0 2.28 1.5 4.2 3.58 4.83v7.32c0 2.72.9 4.83 1.47 4.83.58 0 1.46-2.11 1.46-4.83v-7.32c2.08-.61 3.58-2.55 3.58-4.83 0-2.79-2.24-5.07-5.04-5.07s-5.05 2.28-5.05 5.07m3.62.3c-.91 0-1.72-.81-1.72-1.74 0-.94.81-1.72 1.72-1.72.96 0 1.74.78 1.74 1.72 0 .93-.78 1.74-1.74 1.74m1.41 21.79c8.05 0 13.11-2.61 13.11-5.95 0-3.26-4.72-5.5-9.51-5.85v2.66c3.14.25 6.36 1.43 6.36 3.02 0 2.02-4.16 3.38-9.96 3.38s-9.95-1.35-9.95-3.38c0-1.59 3.22-2.77 6.36-3.02v-2.66c-4.79.35-9.51 2.59-9.51 5.85 0 3.34 5.05 5.95 13.1 5.95" />
  </svg>
);
export default SvgMappinandellipseBold;
