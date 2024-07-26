import * as React from "react";
const SvgPersoncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m0-12.85c-1.68-.01-3.06-1.44-3.06-3.35 0-1.79 1.38-3.27 3.06-3.27 1.7 0 3.07 1.48 3.07 3.27 0 1.91-1.37 3.35-3.07 3.35m-5.13 6.53c-.63 0-.94-.45-.94-1 0-1.3 1.87-4.63 6.07-4.63 4.21 0 6.08 3.33 6.08 4.63 0 .55-.31 1-.93 1Z" />
  </svg>
);
export default SvgPersoncirclefillBold;
