import * as React from "react";
const SvgMoonphasefirstquarterBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.04V3.116c5.15 0 9.3 4.16 9.3 9.29 0 5.15-4.15 9.3-9.3 9.3" />
  </svg>
);
export default SvgMoonphasefirstquarterBold;
