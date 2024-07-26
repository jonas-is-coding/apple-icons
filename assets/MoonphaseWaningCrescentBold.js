import * as React from "react";
const SvgMoonphasewaningcrescentBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-9.29-12.37c.01-5.12 4.09-9.29 9.2-9.29.21 0 .42.01.62.03-2.74 2.1-4.32 5.37-4.32 9.27 0 3.89 1.58 7.15 4.31 9.26q-.3.03-.6.03c-5.12 0-9.22-4.17-9.21-9.3" />
  </svg>
);
export default SvgMoonphasewaningcrescentBold;
