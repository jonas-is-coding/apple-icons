import * as React from "react";
const SvgTcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-.02-3.9c.97 0 1.53-.64 1.53-1.7v-6.71h2.06c.77 0 1.25-.44 1.25-1.18 0-.72-.48-1.16-1.25-1.16h-7.14c-.77 0-1.26.44-1.26 1.16 0 .74.49 1.18 1.26 1.18h2.03v6.71c0 1.06.55 1.7 1.52 1.7" />
  </svg>
);
export default SvgTcircleBold;
