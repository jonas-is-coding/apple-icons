import * as React from "react";
const SvgSmallcirclecircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m0-4.6c2.58 0 4.69-2.1 4.69-4.69s-2.11-4.69-4.69-4.69c-2.59 0-4.68 2.1-4.68 4.69s2.09 4.69 4.68 4.69m0-2.43c-1.25 0-2.27-1.02-2.27-2.26 0-1.25 1.02-2.27 2.27-2.27 1.24 0 2.26 1.02 2.26 2.27a2.27 2.27 0 0 1-2.26 2.26" />
  </svg>
);
export default SvgSmallcirclecircleBold;
