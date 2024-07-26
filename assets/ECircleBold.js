import * as React from "react";
const SvgEcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-2.48-4.1h4.98c.74 0 1.18-.41 1.18-1.1 0-.68-.44-1.09-1.18-1.09h-3.79v-2.16h3.64c.63 0 1.04-.34 1.04-.95s-.41-.96-1.04-.96h-3.64v-2.02h3.79c.74 0 1.18-.41 1.18-1.09 0-.7-.44-1.11-1.18-1.11h-4.98c-1.03 0-1.55.6-1.55 1.63v7.21c0 1.05.52 1.64 1.55 1.64" />
  </svg>
);
export default SvgEcircleBold;
