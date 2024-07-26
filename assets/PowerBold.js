import * as React from "react";
const SvgPowerBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 13.426c.99 0 1.64-.7 1.64-1.74v-9.94c0-1.05-.65-1.75-1.64-1.75-.98 0-1.64.7-1.64 1.75v9.94c0 1.04.66 1.74 1.64 1.74m0 12.09c6.83 0 12.38-5.56 12.38-12.39 0-3.5-1.46-6.55-3.55-8.63-1.51-1.57-3.82.38-2.23 2.1a9.23 9.23 0 0 1 2.7 6.53c0 5.14-4.15 9.3-9.3 9.3-5.13 0-9.29-4.16-9.29-9.3a9.2 9.2 0 0 1 2.7-6.54c1.6-1.72-.7-3.63-2.22-2.09-2.11 2.05-3.56 5.18-3.56 8.63 0 6.83 5.54 12.39 12.37 12.39" />
  </svg>
);
export default SvgPowerBold;
