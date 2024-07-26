import * as React from "react";
const SvgRotateleftfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M23.552 11.634c.58 0 1.05-.47 1.05-1.05v-2.01c0-3.62-2.56-6.14-6.11-6.14h-.6V.974c0-.97-.82-1.25-1.56-.69l-3.28 2.49c-.5.38-.51.95 0 1.32l3.28 2.47c.73.56 1.56.27 1.56-.66v-1.5h.62c2.38 0 4 1.74 4 4.17v2.01c0 .58.47 1.05 1.04 1.05m-19.92 15.79h11.56c2.33 0 3.62-1.26 3.62-3.62v-11.54c0-2.37-1.29-3.63-3.62-3.63H3.632c-2.34 0-3.63 1.26-3.63 3.63v11.54c0 2.36 1.29 3.62 3.63 3.62" />
  </svg>
);
export default SvgRotateleftfillBold;
