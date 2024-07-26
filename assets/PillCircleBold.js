import * as React from "react";
const SvgPillcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m4.67-13.94c-1.3-1.29-3.07-1.29-4.41.07l-2.06 2.07 4.32 4.33 2.08-2.09c1.34-1.34 1.36-3.12.07-4.38m-9.33 9.34c1.28 1.26 3.05 1.25 4.4-.1l2.07-2.07-4.33-4.33-2.07 2.09c-1.33 1.36-1.36 3.12-.07 4.41" />
  </svg>
);
export default SvgPillcircleBold;
