import * as React from "react";
const SvgClockBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-5.56-7.5h5.56c.64 0 1.13-.5 1.13-1.13v-7.29c0-.64-.49-1.13-1.13-1.13-.63 0-1.13.49-1.13 1.13v6.16h-4.43c-.64 0-1.13.49-1.13 1.13 0 .63.49 1.13 1.13 1.13" />
  </svg>
);
export default SvgClockBold;
