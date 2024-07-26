import * as React from "react";
const SvgVisionprocirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-9.65c-.84 0-1.92 1.73-4.12 1.73-2.17 0-3.79-1.97-3.79-4.49 0-4.13 3.68-4.59 7.91-4.59 4.24 0 7.91.46 7.91 4.59 0 2.52-1.6 4.49-3.77 4.49-2.22 0-3.28-1.73-4.14-1.73m0-1.74c1.85 0 2.59 1.74 4.14 1.74 1.28 0 2.06-1.01 2.06-2.76 0-2.61-2.13-2.87-6.2-2.87-4.05 0-6.18.26-6.18 2.87 0 1.75.78 2.76 2.06 2.76 1.53 0 2.27-1.74 4.12-1.74" />
  </svg>
);
export default SvgVisionprocirclefillBold;
