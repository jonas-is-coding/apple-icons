import * as React from "react";
const SvgInsetfilledcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m0-2.03c4.01 0 7.27-3.25 7.27-7.26a7.27 7.27 0 0 0-7.27-7.27c-4.02 0-7.26 3.25-7.26 7.27 0 4.01 3.24 7.26 7.26 7.26" />
  </svg>
);
export default SvgInsetfilledcircleBold;
