import * as React from "react";
const SvgDropcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-6.39c-2.58 0-4.3-1.68-4.3-4.2 0-1.08.45-2.16.89-3.11.65-1.39 1.64-3.02 2.56-4.41.26-.38.54-.59.85-.59.32 0 .61.21.87.59.9 1.39 1.9 3.01 2.55 4.4.45.95.88 2.04.88 3.12 0 2.52-1.71 4.2-4.3 4.2" />
  </svg>
);
export default SvgDropcirclefillBold;
