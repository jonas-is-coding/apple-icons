import * as React from "react";
const SvgBaseballdiamondbasesBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m11.442 6.955 5.41 3.77c.77.53 1.84.52 2.67-.05l5.33-3.72c1.06-.73 1.08-2.04 0-2.79l-5.4-3.76c-.78-.54-1.83-.55-2.6 0l-5.41 3.76c-1.08.75-1.07 2.06 0 2.79m10.64 8.04 5.34 3.73c.82.56 1.89.57 2.67.02l5.39-3.75c1.08-.74 1.08-2.04 0-2.79l-5.39-3.76c-.78-.54-1.83-.55-2.61 0l-5.4 3.76c-1.08.75-1.07 2.05 0 2.79m-21.27 0 5.4 3.76c.77.54 1.85.53 2.68-.04l5.32-3.72c1.07-.74 1.08-2.04 0-2.79l-5.39-3.76c-.78-.54-1.84-.55-2.61 0l-5.4 3.76c-1.08.75-1.08 2.05 0 2.79" />
  </svg>
);
export default SvgBaseballdiamondbasesBold;
