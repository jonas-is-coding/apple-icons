import * as React from "react";
const SvgBeatspowerbeatsprorightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.782 0C4.872 0 .002 6.81.002 15.02c0 3.94 1.05 8.28 2.46 8.28 1.02 0 1.86-1.27 2.05-2.38-2.24-.48-3.82-2.44-3.82-4.76 0-1.48.67-2.79 1.85-3.74.58-5.39 4.1-10.01 8.12-10.01 2.43 0 3.52 1.77 3.52 5.23l-10.01 5.23c-1.48.77-2.18 2-2.18 3.29 0 1.96 1.51 3.56 3.52 3.56.93 0 1.54-.22 2.88-.96l5.14-2.82c2.27-1.24 3.06-2.74 3.06-5.92V7.14c0-4.37-1.95-7.14-5.81-7.14m-5.32 18.38c-1.23 0-2.22-1-2.22-2.22a2.21 2.21 0 0 1 4.42 0c0 1.22-.99 2.22-2.2 2.22m0-1.01c.66 0 1.19-.54 1.19-1.21 0-.66-.53-1.21-1.19-1.21-.68 0-1.22.55-1.22 1.21 0 .67.54 1.21 1.22 1.21" />
  </svg>
);
export default SvgBeatspowerbeatsprorightBold;
