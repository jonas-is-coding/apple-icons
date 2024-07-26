import * as React from "react";
const SvgMappincircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-2.94-13.21c0 1.26.77 2.33 1.88 2.75v5.41c0 1.36.47 2.9 1.06 2.9s1.05-1.52 1.05-2.9v-5.41a2.92 2.92 0 0 0 1.89-2.75c0-1.62-1.32-2.95-2.94-2.94-1.63.02-2.94 1.33-2.94 2.94m1.33-.79c0-.52.43-.95.93-.95.52 0 .95.43.94.95 0 .5-.42.94-.94.94-.5 0-.93-.44-.93-.94" />
  </svg>
);
export default SvgMappincircleBold;
