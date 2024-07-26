import * as React from "react";
const SvgArrowupforwardcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m3.62-5.97c.71 0 1.14-.52 1.14-1.28v-5.32c0-1-.57-1.51-1.53-1.51h-5.35c-.77 0-1.28.43-1.28 1.13 0 .71.51 1.15 1.28 1.15h1.71l1.37-.19-1.58 1.4-3.74 3.75c-.25.24-.42.6-.42.95 0 .77.59 1.29 1.31 1.29.39 0 .71-.13 1.01-.41l3.7-3.72 1.4-1.57-.16 1.45v1.6c0 .78.44 1.28 1.14 1.28" />
  </svg>
);
export default SvgArrowupforwardcircleBold;
