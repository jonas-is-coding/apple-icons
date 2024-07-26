import * as React from "react";
const SvgMagnifyingglasscircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-1.13-5.6c.84 0 1.62-.21 2.32-.59l2.53 2.51q.42.42.99.42c.73 0 1.28-.56 1.28-1.31 0-.34-.14-.67-.4-.92l-2.52-2.54c.44-.71.67-1.55.67-2.44 0-2.68-2.19-4.88-4.87-4.88s-4.88 2.2-4.88 4.88c0 2.67 2.2 4.87 4.88 4.87m0-1.97c-1.6 0-2.91-1.3-2.91-2.9s1.31-2.9 2.91-2.9 2.9 1.29 2.9 2.9c0 1.6-1.3 2.9-2.9 2.9" />
  </svg>
);
export default SvgMagnifyingglasscircleBold;
