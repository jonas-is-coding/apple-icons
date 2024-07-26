import * as React from "react";
const SvgSmallcirclefilledcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-8.39a3.99 3.99 0 0 1-3.98-3.98c0-2.2 1.79-3.99 3.98-3.99a3.986 3.986 0 1 1 0 7.97" />
  </svg>
);
export default SvgSmallcirclefilledcirclefillBold;
