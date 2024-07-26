import * as React from "react";
const SvgCirclecircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m0-3.28c3.32 0 6.01-2.69 6.01-6.01 0-3.33-2.69-6.01-6.01-6.01-3.33 0-6.01 2.68-6.01 6.01 0 3.32 2.68 6.01 6.01 6.01m0-2.47a3.54 3.54 0 1 1 0-7.08 3.54 3.54 0 0 1 0 7.08" />
  </svg>
);
export default SvgCirclecircleBold;
