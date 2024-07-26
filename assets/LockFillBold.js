import * as React from "react";
const SvgLockfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.847 23.974h11.43c1.87 0 2.83-.97 2.83-3.02v-8.71c0-1.81-.77-2.79-2.29-2.96v-2.7c0-4.18-2.83-6.58-6.26-6.58-3.44 0-6.25 2.4-6.25 6.58v2.7c-1.52.17-2.31 1.15-2.31 2.96v8.71c0 2.05.96 3.02 2.85 3.02m2.25-17.53c0-2.38 1.54-3.76 3.46-3.76s3.48 1.38 3.48 3.76v2.8h-6.94Z" />
  </svg>
);
export default SvgLockfillBold;
