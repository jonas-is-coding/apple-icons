import * as React from "react";
const SvgBahtsigncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.66-7.07c-.77 0-1.2-.5-1.2-1.23v-8.2c0-.75.42-1.23 1.2-1.23h2.15v-1.04c0-.22.13-.36.36-.36.22 0 .36.14.36.36v1.04h.4c1.7 0 3.3.8 3.3 2.65 0 1.16-.87 2.17-2.04 2.32v.07c1.45.12 2.54 1.13 2.54 2.58 0 2.02-1.62 3.04-3.7 3.04h-.5v.95c0 .22-.14.37-.36.37-.23 0-.36-.15-.36-.37v-.95Zm.95-6.22h1.2v-2.82h-1.2Zm1.92-.02c.89-.07 1.6-.5 1.6-1.43 0-.9-.68-1.32-1.6-1.37Zm-1.92 4.62h1.2v-3.15h-1.2Zm1.92 0h.07c1.12 0 1.89-.47 1.89-1.6 0-1.11-.81-1.54-1.91-1.54h-.05Z" />
  </svg>
);
export default SvgBahtsigncirclefillBold;
