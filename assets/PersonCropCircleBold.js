import * as React from "react";
const SvgPersoncropcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-8.23c-3 0-5.33 1.04-6.64 2.35a9.23 9.23 0 0 1-2.65-6.49c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 2.53-1.01 4.82-2.64 6.49-1.33-1.31-3.66-2.35-6.66-2.35m0-1.82c2.3.01 4.07-1.95 4.07-4.45 0-2.36-1.79-4.36-4.07-4.36-2.27 0-4.08 2-4.05 4.36 0 2.5 1.77 4.44 4.05 4.45" />
  </svg>
);
export default SvgPersoncropcircleBold;
