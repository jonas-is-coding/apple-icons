import * as React from "react";
const SvgLockbadgeclockfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.837 23.974h7.53a7.8 7.8 0 0 1-1.19-4.15c0-4.33 3.56-7.91 7.9-7.93v-.19c-.12-1.47-.91-2.27-2.26-2.42v-2.7c0-4.18-2.83-6.58-6.26-6.58-3.44 0-6.25 2.4-6.25 6.58v2.7c-1.53.17-2.31 1.15-2.31 2.96v8.71c0 2.05.96 3.02 2.84 3.02m2.25-17.53c0-2.38 1.55-3.76 3.47-3.76s3.48 1.38 3.48 3.76v2.8h-6.95Zm12.02 19.56c3.37 0 6.18-2.81 6.18-6.18s-2.79-6.16-6.18-6.16c-3.37 0-6.16 2.79-6.16 6.16 0 3.38 2.79 6.18 6.16 6.18m-2.8-5.04c-.55 0-.98-.43-.98-.97 0-.55.43-.99.98-.99h1.91v-2.43c0-.54.44-.96.99-.96.54 0 .97.42.97.96v3.42c0 .55-.42.97-.97.97Z" />
  </svg>
);
export default SvgLockbadgeclockfillBold;
