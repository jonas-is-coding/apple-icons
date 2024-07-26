import * as React from "react";
const SvgLine3HorizontalcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-4.95-12.06h9.93c.68 0 1.18-.44 1.18-1.09 0-.64-.5-1.09-1.18-1.09h-9.93c-.7 0-1.18.45-1.18 1.09 0 .65.48 1.09 1.18 1.09m0 3.85h9.93c.68 0 1.18-.44 1.18-1.08 0-.66-.5-1.1-1.18-1.1h-9.93c-.7 0-1.18.44-1.18 1.1 0 .64.48 1.08 1.18 1.08m0 3.85h9.93c.68 0 1.18-.43 1.18-1.08s-.5-1.1-1.18-1.1h-9.93c-.7 0-1.18.45-1.18 1.1s.48 1.08 1.18 1.08" />
  </svg>
);
export default SvgLine3HorizontalcircleBold;
