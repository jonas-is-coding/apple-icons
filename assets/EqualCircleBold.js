import * as React from "react";
const SvgEqualcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-3.93-10.26h7.85c.82 0 1.37-.44 1.37-1.19s-.53-1.19-1.37-1.19h-7.85c-.85 0-1.38.43-1.38 1.19 0 .75.55 1.19 1.38 1.19m0 4.37h7.85c.82 0 1.37-.45 1.37-1.19 0-.76-.53-1.2-1.37-1.2h-7.85c-.85 0-1.38.43-1.38 1.2 0 .74.55 1.19 1.38 1.19" />
  </svg>
);
export default SvgEqualcircleBold;
