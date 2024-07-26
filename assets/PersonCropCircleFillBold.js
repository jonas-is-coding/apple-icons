import * as React from "react";
const SvgPersoncropcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-10.59c-2.35-.01-4.17-2-4.17-4.56-.01-2.41 1.84-4.47 4.17-4.47s4.17 2.06 4.17 4.47c0 2.56-1.81 4.58-4.17 4.56m0 8.24c-2.51 0-5.41-1.04-7.13-2.94 1.45-2.07 4-3.21 7.13-3.21 3.1 0 5.66 1.12 7.14 3.21-1.72 1.9-4.63 2.94-7.14 2.94" />
  </svg>
);
export default SvgPersoncropcirclefillBold;
