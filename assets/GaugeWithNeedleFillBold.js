import * as React from "react";
const SvgGaugewithneedlefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-10.12c-.81 0-1.52-.43-1.95-1.15l-3.45-5.41c-.56-.93.27-1.78 1.2-1.2l5.42 3.61c.67.42 1.04 1.15 1.04 1.9 0 1.24-1.02 2.25-2.26 2.25" />
  </svg>
);
export default SvgGaugewithneedlefillBold;
