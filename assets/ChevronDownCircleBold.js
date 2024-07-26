import * as React from "react";
const SvgChevrondowncircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m1.39-5.61 4.31-4.61c.44-.48.46-1.23.02-1.64-.48-.47-1.22-.48-1.66 0l-4.06 4.33-4.05-4.33c-.45-.48-1.2-.48-1.68 0-.41.42-.41 1.15.04 1.64l4.31 4.6c.79.85 1.97.85 2.77.01" />
  </svg>
);
export default SvgChevrondowncircleBold;
