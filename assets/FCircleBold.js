import * as React from "react";
const SvgFcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-2.41-3.92c.91 0 1.44-.61 1.44-1.6v-2.68h3.48c.65 0 1.04-.36 1.04-.99 0-.62-.39-.99-1.04-.99h-3.5v-2.2h3.73c.74 0 1.19-.41 1.19-1.09 0-.7-.45-1.11-1.19-1.11h-5.03c-1.02 0-1.55.6-1.55 1.63v7.43c0 .99.51 1.6 1.43 1.6" />
  </svg>
);
export default SvgFcircleBold;
