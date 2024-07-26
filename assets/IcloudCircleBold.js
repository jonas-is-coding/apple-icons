import * as React from "react";
const SvgIcloudcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-4.1-5.06h8.65c1.39 0 2.46-1.11 2.46-2.52 0-1.18-.77-2.06-1.75-2.39q0-.27-.03-.54c-.15-2.18-1.93-3.9-4.24-3.9-1.34 0-2.58.63-3.34 1.63-.27-.03-.54-.01-.78.03-1.02.13-1.84.9-2.02 1.97-1.11.45-1.86 1.48-1.86 2.84 0 1.78 1.26 2.88 2.91 2.88" />
  </svg>
);
export default SvgIcloudcircleBold;
