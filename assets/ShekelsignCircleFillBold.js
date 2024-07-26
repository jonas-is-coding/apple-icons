import * as React from "react";
const SvgShekelsigncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-1.1-7.07c-.74 0-1.25-.38-1.25-1.2v-5.34c0-.57.29-.94.84-.94s.84.37.84.94v4.75h2.66c1.43 0 1.72-.39 1.72-1.82v-6.11c0-.58.34-.96.87-.96.54 0 .88.38.88.96v6.45c0 2.16-.92 3.27-3.09 3.27Zm-3.48.08c-.56 0-.88-.34-.88-.95v-8.3c0-.98.51-1.43 1.49-1.43h3.22c2.15 0 3.11.89 3.11 3.13v3.47c0 .55-.33.9-.83.9-.53 0-.86-.35-.86-.9v-3.06c0-1.44-.51-1.76-1.85-1.76h-2.52v7.95c0 .6-.32.95-.88.95" />
  </svg>
);
export default SvgShekelsigncirclefillBold;
