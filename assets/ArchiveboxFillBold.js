import * as React from "react";
const SvgArchiveboxfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.372 6.022h19.38c1.56 0 2.35-.87 2.35-2.41v-1.19c0-1.54-.79-2.42-2.35-2.42H2.372c-1.53 0-2.37.88-2.37 2.42v1.19c0 1.54.81 2.41 2.37 2.41m3.27 16.38h12.84c2.59 0 4.05-1.44 4.05-4.03V7.932H1.572v10.44c0 2.59 1.46 4.03 4.07 4.03m2.78-9.62c-.65 0-1.14-.48-1.14-1.16v-.38c0-.67.48-1.15 1.14-1.15h7.27c.67 0 1.15.48 1.15 1.15v.38c0 .68-.49 1.16-1.15 1.16Z" />
  </svg>
);
export default SvgArchiveboxfillBold;
