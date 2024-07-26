import * as React from "react";
const SvgStarcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-3.1-3.47 3.09-2.27 3.11 2.27c.71.53 1.5.04 1.2-.88l-1.22-3.65 3.12-2.23c.62-.46.52-1.45-.44-1.44l-3.86.04-1.17-3.67c-.27-.86-1.21-.86-1.48 0l-1.17 3.67-3.84-.04c-.94-.01-1.09.97-.46 1.44l3.13 2.24-1.22 3.64c-.29.88.49 1.41 1.21.88" />
  </svg>
);
export default SvgStarcircleBold;
