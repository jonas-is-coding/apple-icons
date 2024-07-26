import * as React from "react";
const SvgBolthorizontalcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-7.12-7.51c-.66.82.11 1.69 1.01 1.23l3.6-1.89 4.31 2.38c.24.16.5.23.73.23.34 0 .67-.19.96-.54l3.63-4.6c.63-.78-.1-1.67-1-1.22l-3.62 1.88-4.3-2.37c-.26-.14-.49-.22-.74-.22-.34 0-.67.17-.95.54Z" />
  </svg>
);
export default SvgBolthorizontalcircleBold;
