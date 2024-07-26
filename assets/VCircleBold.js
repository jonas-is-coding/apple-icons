import * as React from "react";
const SvgVcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-.02-3.87c1.24 0 1.9-.55 2.3-1.74l2.5-7.02c.1-.31.13-.5.13-.76 0-.81-.59-1.35-1.47-1.35-.82 0-1.23.37-1.46 1.3l-1.94 6.72h-.11l-1.94-6.72c-.23-.93-.65-1.3-1.46-1.3-.86 0-1.46.55-1.46 1.37 0 .26.03.45.13.74l2.52 7.08c.38 1.18 1.01 1.68 2.26 1.68" />
  </svg>
);
export default SvgVcircleBold;
