import * as React from "react";
const SvgFcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-2.53-6.72c-.97 0-1.52-.64-1.52-1.7v-7.78c0-1.11.56-1.73 1.65-1.73h5.3c.77 0 1.26.42 1.26 1.16 0 .72-.49 1.16-1.26 1.16h-3.92v2.29h3.68c.67 0 1.1.4 1.1 1.07 0 .66-.43 1.04-1.1 1.04h-3.65v2.79c0 1.06-.57 1.7-1.54 1.7" />
  </svg>
);
export default SvgFcirclefillBold;
