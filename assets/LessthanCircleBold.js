import * as React from "react";
const SvgLessthancircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m2.93-4.47c.76 0 1.33-.56 1.33-1.33 0-.64-.3-1.02-1.08-1.33l-4.68-2.11v-.11l4.68-2.14c.77-.32 1.08-.72 1.08-1.35 0-.78-.55-1.31-1.32-1.31-.3 0-.53.04-.79.17l-6.68 3.41c-.61.31-.9.72-.9 1.31 0 .6.3.97.9 1.27l6.68 3.34c.24.12.49.18.78.18" />
  </svg>
);
export default SvgLessthancircleBold;
