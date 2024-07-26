import * as React from "react";
const SvgOcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-.01-3.85c3 0 5.17-2.14 5.17-5.49 0-3.36-2.17-5.48-5.17-5.48-2.99 0-5.16 2.12-5.16 5.48 0 3.35 2.17 5.49 5.16 5.49m0-2.29c-1.37 0-2.32-1.16-2.32-3.2s.95-3.21 2.32-3.21c1.38 0 2.33 1.17 2.33 3.21s-.95 3.2-2.33 3.2" />
  </svg>
);
export default SvgOcircleBold;
