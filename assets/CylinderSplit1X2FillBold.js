import * as React from "react";
const SvgCylindersplit1X2FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.832 5.531c0 1.63 3.2 2.84 7.75 2.84s7.75-1.21 7.75-2.84c0-1.71-3.17-2.96-7.75-2.96s-7.75 1.25-7.75 2.96m7.75 10.12c-4.3 0-7.97-1.12-10.58-3.28v-6.84c0-3.32 4.22-5.53 10.58-5.53s10.58 2.21 10.58 5.53v6.84c-2.61 2.16-6.27 3.28-10.58 3.28m-10.58 3.83v-4.29c2.59 1.99 6.24 3.03 10.58 3.03s7.99-1.04 10.58-3.03v4.29c0 3.64-4.2 6.14-10.58 6.14-6.37 0-10.58-2.5-10.58-6.14" />
  </svg>
);
export default SvgCylindersplit1X2FillBold;
