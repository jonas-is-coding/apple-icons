import * as React from "react";
const SvgArrowshapeforwardcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m7.33-12.37c0 .27-.12.61-.38.85l-5.18 4.82c-.37.36-.7.52-1.1.52-.59 0-1.04-.45-1.04-1.05v-2.21h-4.89c-1.11 0-1.75-.62-1.75-1.72v-2.39c0-1.09.64-1.74 1.75-1.74h4.89v-2.2c0-.6.45-1.07 1.06-1.07.37 0 .66.16 1.08.54l5.18 4.8c.27.24.38.56.38.85" />
  </svg>
);
export default SvgArrowshapeforwardcirclefillBold;
