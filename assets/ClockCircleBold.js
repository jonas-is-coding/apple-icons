import * as React from "react";
const SvgClockcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m0-3.2c3.34 0 6.1-2.74 6.1-6.09 0-3.34-2.76-6.09-6.1-6.09s-6.09 2.75-6.09 6.09c0 3.35 2.75 6.09 6.09 6.09m-2.75-5.12c-.38 0-.66-.28-.66-.65 0-.38.28-.66.66-.66h2.08v-2.94c0-.38.3-.67.67-.67.38 0 .67.29.67.67v3.6c0 .37-.3.65-.67.65Z" />
  </svg>
);
export default SvgClockcircleBold;
