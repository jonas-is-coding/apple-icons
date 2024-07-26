import * as React from "react";
const SvgCloudcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-4.22-7.89c-1.87 0-3.15-1.21-3.15-2.92 0-1.3.81-2.35 2.06-2.78.3-2.4 2.28-4.16 4.69-4.16 1.86 0 3.33.89 4.14 2.5 2.22-.01 3.87 1.58 3.87 3.69 0 2.08-1.65 3.67-3.75 3.67Z" />
  </svg>
);
export default SvgCloudcirclefillBold;
