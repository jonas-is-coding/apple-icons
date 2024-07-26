import * as React from "react";
const SvgHearingdeviceearfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 20.071c0 3.67 2.19 5.83 5.76 5.83 2.68 0 4.63-1.29 5.88-3.62l1.01-1.89c2.03-3.77 6.27-4.98 6.27-10.83 0-5.73-3.76-9.56-9.39-9.56-5.71 0-9.53 3.87-9.53 9.65Zm3.91-3.15c0-2.16 2.26-1.97 2.26-3.21 0-1.1-2.26-1.93-2.26-4.65 0-3.06 2.25-5.28 5.6-5.28 3.44 0 5.72 2.28 5.72 5.68 0 .6-.49 1.1-1.1 1.1s-1.11-.5-1.11-1.1c0-2.09-1.38-3.46-3.51-3.46-2.02 0-3.37 1.26-3.37 3.06 0 2.58 3.46 3.17 3.46 6.55 0 1.98-1.3 3.44-3.25 3.44-1.45 0-2.44-.88-2.44-2.13" />
  </svg>
);
export default SvgHearingdeviceearfillBold;
