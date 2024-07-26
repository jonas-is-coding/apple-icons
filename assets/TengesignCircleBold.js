import * as React from "react";
const SvgTengesigncircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-4.15-14.04c0 .2.16.34.36.34h7.57c.2 0 .34-.15.34-.34 0-.18-.14-.34-.34-.34h-7.57c-.2 0-.36.16-.36.34m4.15 10.1c.62 0 1.03-.42 1.03-1.05v-6.12h2.41c.41 0 .68-.28.68-.68s-.27-.67-.68-.67h-6.87c-.42 0-.69.27-.69.67s.27.68.69.68h2.4v6.12c0 .63.42 1.05 1.03 1.05" />
  </svg>
);
export default SvgTengesigncircleBold;
