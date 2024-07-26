import * as React from "react";
const SvgEqualcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.12-13.39c-.88 0-1.47-.46-1.47-1.25 0-.81.58-1.28 1.47-1.28h8.25c.89 0 1.45.47 1.45 1.28 0 .79-.59 1.25-1.46 1.25Zm0 4.6c-.88 0-1.47-.45-1.47-1.25 0-.81.58-1.28 1.47-1.28h8.25c.89 0 1.45.47 1.45 1.28 0 .8-.59 1.25-1.46 1.25Z" />
  </svg>
);
export default SvgEqualcirclefillBold;
