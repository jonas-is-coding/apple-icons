import * as React from "react";
const SvgNosignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-21.66c5.15 0 9.3 4.14 9.3 9.29 0 2.07-.68 4-1.83 5.54L6.832 4.906a9.33 9.33 0 0 1 5.54-1.82m0 18.58a9.29 9.29 0 0 1-7.47-14.81l12.99 13.01a9.28 9.28 0 0 1-5.52 1.8" />
  </svg>
);
export default SvgNosignBold;
