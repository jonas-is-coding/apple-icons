import * as React from "react";
const SvgWakeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-21.66c3.25 0 6.11 1.65 7.77 4.17H4.612a9.27 9.27 0 0 1 7.76-4.17m0 18.58a9.29 9.29 0 0 1-9.29-9.29c0-.92.13-1.81.37-2.64h17.84c.25.83.38 1.72.38 2.64 0 5.13-4.15 9.29-9.3 9.29" />
  </svg>
);
export default SvgWakeBold;
