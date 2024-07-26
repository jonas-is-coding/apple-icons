import * as React from "react";
const SvgSmallcirclecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-7.41a4.95 4.95 0 0 1-4.95-4.96 4.95 4.95 0 0 1 4.95-4.96 4.96 4.96 0 0 1 4.96 4.96 4.96 4.96 0 0 1-4.96 4.96m0-2.59a2.37 2.37 0 0 0 2.38-2.37 2.38 2.38 0 0 0-2.38-2.38c-1.31 0-2.36 1.07-2.36 2.38a2.36 2.36 0 0 0 2.36 2.37" />
  </svg>
);
export default SvgSmallcirclecirclefillBold;
