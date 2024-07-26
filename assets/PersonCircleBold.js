import * as React from "react";
const SvgPersoncircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m0-9.77c1.61.01 2.91-1.36 2.91-3.18 0-1.7-1.3-3.1-2.91-3.1s-2.92 1.4-2.92 3.1c0 1.82 1.31 3.18 2.92 3.18m-4.9 6.2h9.79c.59 0 .88-.41.88-.94 0-1.24-1.78-4.39-5.77-4.39s-5.77 3.15-5.77 4.39c0 .53.29.94.87.94" />
  </svg>
);
export default SvgPersoncircleBold;
