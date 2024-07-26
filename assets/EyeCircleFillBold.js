import * as React from "react";
const SvgEyecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m0-7.42c-4.66 0-7.8-3.8-7.8-4.95 0-1.16 3.13-4.94 7.8-4.94 4.71 0 7.81 3.78 7.81 4.94 0 1.15-3.1 4.95-7.81 4.95m0-1.81c1.75 0 3.17-1.44 3.17-3.14 0-1.74-1.42-3.15-3.17-3.15-1.73 0-3.16 1.41-3.16 3.15 0 1.7 1.43 3.14 3.16 3.14m.01-1.77c-.77 0-1.38-.62-1.38-1.37s.61-1.37 1.38-1.37c.75 0 1.38.62 1.38 1.37s-.63 1.37-1.38 1.37" />
  </svg>
);
export default SvgEyecirclefillBold;
