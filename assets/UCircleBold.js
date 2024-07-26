import * as React from "react";
const SvgUcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m0-3.85c2.8 0 4.71-1.59 4.71-3.94v-5.42c0-.98-.5-1.54-1.41-1.54-.88 0-1.4.56-1.4 1.54v5.15c0 1.14-.76 1.9-1.9 1.9-1.15 0-1.91-.76-1.91-1.9v-5.15c0-.98-.5-1.54-1.4-1.54-.89 0-1.41.56-1.41 1.54v5.42c0 2.35 1.91 3.94 4.72 3.94" />
  </svg>
);
export default SvgUcircleBold;
