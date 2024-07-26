import * as React from "react";
const SvgSleepBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-9.29-12.37c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 .91-.13 1.8-.38 2.64H3.452a9.6 9.6 0 0 1-.37-2.64m9.29 9.29a9.28 9.28 0 0 1-7.76-4.18h15.53a9.28 9.28 0 0 1-7.77 4.18" />
  </svg>
);
export default SvgSleepBold;
