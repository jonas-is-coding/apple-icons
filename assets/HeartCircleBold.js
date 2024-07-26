import * as React from "react";
const SvgHeartcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-2.69-14.24c-1.84 0-3.27 1.43-3.27 3.5 0 3.38 3.79 6.05 5.31 6.99.2.12.48.27.66.27.2 0 .46-.15.66-.27 1.5-.95 5.31-3.61 5.31-6.99 0-2.07-1.43-3.5-3.28-3.5-1.26 0-2.18.74-2.7 1.63-.5-.89-1.43-1.63-2.69-1.63" />
  </svg>
);
export default SvgHeartcircleBold;
