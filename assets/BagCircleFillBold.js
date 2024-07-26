import * as React from "react";
const SvgBagcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-3.45-6.34c-1.38 0-2.14-.75-2.14-2.1v-6.2c0-1.35.76-2.08 2.14-2.08h.68c.02-1.47 1.24-2.64 2.77-2.64 1.54 0 2.77 1.17 2.78 2.64h.69c1.37 0 2.12.73 2.12 2.08v6.2c0 1.35-.75 2.1-2.01 2.1Zm2.22-10.38h2.47c-.02-.75-.49-1.25-1.24-1.25s-1.22.5-1.23 1.25" />
  </svg>
);
export default SvgBagcirclefillBold;
