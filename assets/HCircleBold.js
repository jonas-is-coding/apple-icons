import * as React from "react";
const SvgHcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-3.42-3.92c.94 0 1.49-.61 1.49-1.64v-2.73h3.85v2.73c0 1.03.54 1.64 1.47 1.64.94 0 1.49-.61 1.49-1.64v-7.55c0-1.03-.55-1.64-1.49-1.64-.93 0-1.47.61-1.47 1.64v2.59h-3.85v-2.59c0-1.03-.55-1.64-1.49-1.64-.92 0-1.48.61-1.48 1.64v7.55c0 1.03.56 1.64 1.48 1.64" />
  </svg>
);
export default SvgHcircleBold;
