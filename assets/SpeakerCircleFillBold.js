import * as React from "react";
const SvgSpeakercirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m2.12-6.79c-.37 0-.65-.14-.99-.47l-2.47-2.33a.4.4 0 0 0-.13-.04h-1.7c-1 0-1.54-.56-1.54-1.6v-2.26c0-1.05.54-1.6 1.54-1.6h1.7c.03 0 .09-.01.13-.04l2.47-2.32c.37-.36.63-.48.98-.48.54 0 .94.42.94.95v9.25c0 .54-.4.94-.93.94" />
  </svg>
);
export default SvgSpeakercirclefillBold;
