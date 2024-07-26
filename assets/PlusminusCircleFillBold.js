import * as React from "react";
const SvgPlusminuscirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-3.35-13.53c-.66 0-1.14-.48-1.14-1.13 0-.66.48-1.14 1.14-1.14h2.23v-2.16c0-.67.48-1.13 1.13-1.13.67 0 1.14.46 1.14 1.13v2.16h2.22c.65 0 1.13.48 1.13 1.14 0 .65-.48 1.13-1.13 1.13h-2.22v2.17c0 .63-.47 1.11-1.14 1.11-.65.02-1.13-.48-1.13-1.13v-2.15Zm.07 7.15c-.68 0-1.21-.5-1.21-1.14s.53-1.14 1.21-1.14h6.58c.69 0 1.2.5 1.2 1.14s-.51 1.14-1.2 1.14Z" />
  </svg>
);
export default SvgPlusminuscirclefillBold;
