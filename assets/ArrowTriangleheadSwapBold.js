import * as React from "react";
const SvgArrowtriangleheadswapBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.992 15.241c-1 0-1.28.84-.66 1.69l3.1 4.28c.51.68 1.3.69 1.79 0l3.11-4.29c.62-.86.32-1.68-.68-1.68h-1.87v-8.35c0-1.83 1.11-3.01 2.69-3.01 1.59 0 2.72 1.17 2.72 3.01v8.01c0 3.61 2.34 6.14 5.61 6.14 3.41 0 5.6-2.49 5.6-6.14v-8.42h1.89c1 0 1.29-.82.67-1.68l-3.09-4.29c-.51-.69-1.31-.68-1.81 0l-3.09 4.28c-.64.86-.35 1.69.67 1.69h1.87v8.62c0 1.84-1.11 3.03-2.71 3.03-1.58 0-2.7-1.18-2.7-3.03v-8.01c0-3.61-2.35-6.14-5.63-6.14-3.4 0-5.6 2.49-5.6 6.14v8.15Z" />
  </svg>
);
export default SvgArrowtriangleheadswapBold;
