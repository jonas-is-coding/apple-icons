import * as React from "react";
const SvgArrowshapedowncircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m0-2.6c.27 0 .57-.11.8-.35l4.48-4.84c.36-.39.49-.66.49-1 0-.57-.44-.98-.99-.98h-2.06v-4.57c0-1.03-.61-1.63-1.62-1.63h-2.22c-1.02 0-1.61.6-1.61 1.63v4.57h-2.06a.94.94 0 0 0-.97.97c0 .36.15.66.47 1.01l4.51 4.84c.22.24.54.35.78.35" />
  </svg>
);
export default SvgArrowshapedowncircleBold;
