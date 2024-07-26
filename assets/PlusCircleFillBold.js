import * as React from "react";
const SvgPluscirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-5.74-12.37c0-.8.57-1.38 1.36-1.38h3v-3c0-.79.59-1.37 1.38-1.37.8 0 1.39.58 1.39 1.37v3h3.01c.77 0 1.36.58 1.36 1.38s-.59 1.38-1.36 1.38h-3.01v3c0 .79-.59 1.36-1.39 1.36-.79 0-1.38-.57-1.38-1.36v-3h-3c-.79 0-1.36-.58-1.36-1.38" />
  </svg>
);
export default SvgPluscirclefillBold;
