import * as React from "react";
const SvgArrowdownbackwardcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-3.63-12.71c-.69 0-1.14.51-1.14 1.27v5.32c0 1 .58 1.52 1.54 1.52h5.34c.78 0 1.28-.44 1.28-1.14s-.5-1.15-1.28-1.15h-1.7l-1.38.19 1.58-1.4 3.75-3.75c.25-.24.41-.59.41-.94 0-.78-.57-1.29-1.31-1.29-.38 0-.7.12-1 .42l-3.71 3.7-1.4 1.57.17-1.45v-1.6c0-.77-.45-1.27-1.15-1.27" />
  </svg>
);
export default SvgArrowdownbackwardcircleBold;
