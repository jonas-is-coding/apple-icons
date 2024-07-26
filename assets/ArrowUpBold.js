import * as React from "react";
const SvgArrowupBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.402 22.446c1.02 0 1.7-.71 1.7-1.76V7.676l-.11-2.54 2.36 2.72 2.63 2.62c.32.32.72.53 1.22.53.92 0 1.61-.68 1.61-1.64 0-.45-.18-.86-.53-1.22l-7.63-7.63c-.32-.33-.78-.52-1.25-.52-.46 0-.94.19-1.26.52l-7.61 7.63c-.36.36-.53.77-.53 1.22 0 .96.69 1.64 1.6 1.64.52 0 .92-.21 1.22-.53l2.64-2.62 2.35-2.72-.11 2.54v13.01c0 1.05.69 1.76 1.7 1.76" />
  </svg>
);
export default SvgArrowupBold;
