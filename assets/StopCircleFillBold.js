import * as React from "react";
const SvgStopcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.11-7.89c-.84 0-1.36-.5-1.36-1.28v-6.4c0-.79.52-1.28 1.36-1.28h6.23c.83 0 1.36.49 1.36 1.28v6.4c0 .78-.53 1.28-1.36 1.28Z" />
  </svg>
);
export default SvgStopcirclefillBold;
