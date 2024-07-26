import * as React from "react";
const SvgArrowdowntolinecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m0-8.95c-.33 0-.62-.12-.83-.34l-3.9-3.82c-.22-.22-.35-.52-.35-.79 0-.65.45-1.1 1.06-1.1.35 0 .6.14.81.36l.74.76 1.49 1.71-.14-1.84v-4.17c0-.69.44-1.17 1.12-1.17.66 0 1.12.48 1.12 1.17v4.17l-.14 1.83 1.47-1.69.78-.77c.21-.22.48-.36.82-.36.59 0 1.04.46 1.04 1.1 0 .28-.1.57-.35.79l-3.92 3.82c-.21.2-.5.34-.82.34m-4.3 2.9c-.6 0-1.06-.48-1.06-1.09 0-.6.46-1.08 1.06-1.08h8.6c.61 0 1.08.48 1.08 1.08 0 .61-.47 1.09-1.08 1.09Z" />
  </svg>
);
export default SvgArrowdowntolinecirclefillBold;
