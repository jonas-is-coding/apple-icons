import * as React from "react";
const SvgLightcylindricalceilingfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.342 11.5c5.62 0 9.99 1.4 12.35 3.83V7.08c0-4.28-4.9-7.08-12.35-7.08C4.902 0 .002 2.8.002 7.08v8.25c2.35-2.43 6.72-3.83 12.34-3.83m0 14.54c7.26 0 12.33-2.46 12.33-6.29 0-3.82-5.07-6.29-12.33-6.29S.022 15.93.022 19.75c0 3.83 5.06 6.29 12.32 6.29m0-6.72c-2.87 0-5.19-1.39-5.58-3.31 1.56-.41 3.45-.64 5.58-.64 2.14 0 4.03.23 5.59.64-.39 1.92-2.71 3.31-5.59 3.31" />
  </svg>
);
export default SvgLightcylindricalceilingfillBold;
