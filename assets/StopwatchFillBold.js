import * as React from "react";
const SvgStopwatchfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 27.45c6.8 0 12.38-5.59 12.38-12.39 0-2.6-.82-5.04-2.23-7.04l.97-.96c.36-.34.52-.73.52-1.13 0-.82-.63-1.46-1.47-1.46-.48 0-.82.14-1.17.46l-.86.84c-1.82-1.6-4.11-2.68-6.61-2.99V1.52c0-.85-.68-1.52-1.53-1.52-.82 0-1.52.67-1.52 1.52v1.26C4.772 3.54.002 8.79.002 15.06c0 6.8 5.59 12.39 12.37 12.39m0-10.14c-1.24 0-2.22-1-2.22-2.24 0-.78.41-1.45 1.12-1.9V7.82c0-.61.48-1.09 1.1-1.09.61 0 1.09.48 1.09 1.09v5.36c.73.43 1.14 1.09 1.14 1.89 0 1.24-.99 2.24-2.23 2.24" />
  </svg>
);
export default SvgStopwatchfillBold;
