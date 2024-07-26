import * as React from "react";
const SvgPencilcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m4.74-15.43-1.77-1.78.88-.89c.47-.47 1.05-.49 1.5-.04l.32.32c.44.45.44 1.05-.04 1.51Zm-8.29 8.28-1.7.64a.582.582 0 0 1-.74-.76l.67-1.65 7.53-7.55 1.79 1.79Z" />
  </svg>
);
export default SvgPencilcirclefillBold;
