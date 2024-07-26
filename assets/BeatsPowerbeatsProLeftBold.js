import * as React from "react";
const SvgBeatspowerbeatsproleftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.802 0c-3.84 0-5.8 2.77-5.8 7.14v2.88c0 3.18.8 4.68 3.05 5.92l5.15 2.82c1.34.74 1.95.96 2.87.96 1.94 0 3.52-1.6 3.52-3.56 0-1.29-.69-2.52-2.18-3.29l-10-5.23c0-3.46 1.09-5.23 3.52-5.23 4.02 0 7.54 4.62 8.11 10.01 1.18.95 1.86 2.26 1.86 3.74 0 2.32-1.65 4.29-3.82 4.76.18 1.11 1.02 2.38 2.04 2.38 1.42 0 2.47-4.34 2.47-8.28C16.592 6.81 11.712 0 5.802 0m5.33 18.38c-1.21 0-2.2-1-2.2-2.22 0-1.21.99-2.2 2.2-2.2 1.22 0 2.2.99 2.2 2.2 0 1.22-.98 2.22-2.2 2.22m0-1.01c.67 0 1.22-.54 1.22-1.21a1.214 1.214 0 0 0-2.43 0c0 .67.54 1.21 1.21 1.21" />
  </svg>
);
export default SvgBeatspowerbeatsproleftBold;
