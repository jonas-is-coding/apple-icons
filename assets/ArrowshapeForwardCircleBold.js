import * as React from "react";
const SvgArrowshapeforwardcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m6.85-9.29c0-.26-.11-.55-.36-.79l-4.83-4.47c-.39-.37-.66-.51-1-.51-.58 0-.99.45-.99 1v2.06h-4.58c-1.02 0-1.61.6-1.61 1.62v2.23c0 1.02.59 1.6 1.61 1.6h4.58v2.06c0 .55.41.98.97.98.37 0 .66-.16 1.02-.48l4.83-4.5c.24-.24.36-.54.36-.8" />
  </svg>
);
export default SvgArrowshapeforwardcircleBold;
