import * as React from "react";
const SvgClockfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-5.56-10.58c-.64 0-1.13-.5-1.13-1.13 0-.64.49-1.13 1.13-1.13h4.43v-6.16c0-.64.5-1.13 1.13-1.13.64 0 1.13.49 1.13 1.13v7.29c0 .63-.49 1.13-1.13 1.13Z" />
  </svg>
);
export default SvgClockfillBold;
