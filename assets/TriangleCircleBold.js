import * as React from "react";
const SvgTrianglecircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-5.79-7.39c-.86 1.5-.11 3.01 1.56 3.01h8.47c1.68 0 2.44-1.51 1.56-3.01l-4.1-7.13c-.82-1.44-2.54-1.45-3.38.01Zm2.43.4 3.19-5.55c.09-.16.25-.16.35-.01l3.2 5.56c.09.16.03.3-.15.3h-6.43c-.2 0-.25-.14-.16-.3" />
  </svg>
);
export default SvgTrianglecircleBold;
