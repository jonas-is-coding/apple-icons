import * as React from "react";
const SvgManatsignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.042 22.232c1.23 0 2.01-.73 2.01-2.04v-6.43c0-3.23.99-6.03 3.79-6.59v13.89c0 .68.43 1.11 1.08 1.11.59 0 1.03-.43 1.03-1.11v-13.9c2.83.51 3.88 3.28 3.88 6.6v6.43c0 1.34.82 2.04 2.02 2.04 1.21 0 2.01-.72 2.01-2.04v-6.4c0-5.59-2.65-9.71-7.91-10.17v-2.52c0-.69-.44-1.1-1.03-1.1-.61 0-1.08.38-1.08 1.1v2.52c-5.13.5-7.84 4.58-7.84 10.17v6.4c0 1.32.83 2.04 2.04 2.04" />
  </svg>
);
export default SvgManatsignBold;
