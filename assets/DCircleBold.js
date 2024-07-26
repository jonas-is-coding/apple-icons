import * as React from "react";
const SvgDcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-2.87-4.1h2.92c3.25 0 5.07-1.89 5.07-5.25 0-3.35-1.81-5.23-5.07-5.23h-2.92c-1.02 0-1.55.6-1.55 1.63v7.21c0 1.05.52 1.64 1.55 1.64m1.2-2.14v-6.19h1.27c1.75 0 2.63 1.02 2.63 3.09 0 2.12-.87 3.1-2.63 3.1Z" />
  </svg>
);
export default SvgDcircleBold;
