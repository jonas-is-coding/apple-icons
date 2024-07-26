import * as React from "react";
const SvgArrowshapeupcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m0-19.72c.3 0 .59.11.85.38l4.71 5.1c.37.4.52.68.52 1.05 0 .6-.46 1.05-1.05 1.05h-2.16v4.79c0 1.1-.64 1.72-1.71 1.72h-2.34c-1.08 0-1.7-.62-1.7-1.72v-4.79h-2.16c-.59 0-1.04-.45-1.04-1.04 0-.38.16-.7.5-1.06l4.75-5.1c.24-.26.56-.38.83-.38" />
  </svg>
);
export default SvgArrowshapeupcirclefillBold;
