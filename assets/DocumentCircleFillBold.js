import * as React from "react";
const SvgDocumentcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.88-5.96c-1.38 0-2.13-.75-2.13-2.15v-8.82c0-1.38.75-2.14 2.13-2.14h2.37v4.91c0 .75.37 1.11 1.11 1.11h4.86v4.94c0 1.39-.75 2.15-2.13 2.15Zm3.8-8.15c-.25 0-.38-.12-.38-.37v-4.54c.31.03.61.27.95.61l3.29 3.33c.36.35.6.66.63.97Z" />
  </svg>
);
export default SvgDocumentcirclefillBold;
