import * as React from "react";
const SvgRecordcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m0-4.7c2.55 0 4.61-2.06 4.61-4.6 0-2.55-2.06-4.62-4.61-4.62a4.62 4.62 0 0 0-4.61 4.62c0 2.54 2.07 4.6 4.61 4.6" />
  </svg>
);
export default SvgRecordcircleBold;
