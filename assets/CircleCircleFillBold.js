import * as React from "react";
const SvgCirclecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-6.04c-3.49 0-6.33-2.84-6.33-6.33s2.84-6.34 6.33-6.34c3.51 0 6.34 2.85 6.34 6.34s-2.83 6.33-6.34 6.33m0-2.63a3.7 3.7 0 1 0 0-7.4c-2.05 0-3.7 1.65-3.7 3.7s1.65 3.7 3.7 3.7" />
  </svg>
);
export default SvgCirclecirclefillBold;
