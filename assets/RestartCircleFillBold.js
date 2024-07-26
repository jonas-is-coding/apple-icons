import * as React from "react";
const SvgRestartcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-5.56-13.91 7.12-4.22c1.15-.68 2.71-.26 2.71 1.36v8.79c0 1.61-1.56 2.03-2.71 1.35l-7.11-4.21c-1.13-.68-1.21-2.36-.01-3.07m2.95 1.38c-.13.07-.14.23.01.31l3.96 2.34c.12.08.22.03.22-.1v-4.8c0-.13-.1-.18-.22-.11Z" />
  </svg>
);
export default SvgRestartcirclefillBold;
