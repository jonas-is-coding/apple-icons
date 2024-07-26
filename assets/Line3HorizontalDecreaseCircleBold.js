import * as React from "react";
const SvgLine3HorizontaldecreasecircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-5.7-11.39h11.42c.7 0 1.17-.43 1.17-1.08s-.47-1.09-1.17-1.09H6.672c-.7 0-1.18.44-1.18 1.09s.48 1.08 1.18 1.08m1.43 3.86h8.56c.69 0 1.17-.44 1.17-1.09s-.48-1.09-1.17-1.09h-8.56c-.7 0-1.18.44-1.18 1.09s.48 1.09 1.18 1.09m1.46 3.85h5.64c.69 0 1.17-.43 1.17-1.09 0-.64-.48-1.09-1.17-1.09h-5.64c-.69 0-1.17.45-1.17 1.09 0 .66.48 1.09 1.17 1.09" />
  </svg>
);
export default SvgLine3HorizontaldecreasecircleBold;
