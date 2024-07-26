import * as React from "react";
const SvgOcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-6.64c-3.15 0-5.45-2.24-5.45-5.78 0-3.55 2.3-5.78 5.45-5.78 3.16 0 5.45 2.23 5.45 5.78 0 3.54-2.29 5.78-5.45 5.78m0-2.41c1.43 0 2.43-1.24 2.43-3.37s-1-3.36-2.43-3.36-2.42 1.23-2.42 3.36.99 3.37 2.42 3.37" />
  </svg>
);
export default SvgOcirclefillBold;
