import * as React from "react";
const SvgWakecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m.01-19.42c3.88 0 7.04 3.15 7.04 7.04 0 3.88-3.16 7.03-7.04 7.03-3.87 0-7.03-3.15-7.03-7.03 0-3.89 3.16-7.04 7.03-7.04m-3.56 3.9h7.13c-.86-1-2.15-1.63-3.57-1.63-1.41 0-2.69.63-3.56 1.63m-1.19 3.14c0 2.63 2.13 4.76 4.75 4.76 2.64 0 4.76-2.13 4.76-4.76 0-.41-.06-.8-.17-1.17h-9.16c-.11.37-.18.76-.18 1.17" />
  </svg>
);
export default SvgWakecirclefillBold;
