import * as React from "react";
const SvgLine3HorizontalcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-5.19-15.28c-.74 0-1.25-.47-1.25-1.16s.51-1.16 1.25-1.16h10.42c.73 0 1.24.47 1.24 1.16s-.51 1.16-1.24 1.16Zm0 4.06c-.74 0-1.25-.46-1.25-1.15s.51-1.17 1.25-1.17h10.42c.73 0 1.24.48 1.24 1.17s-.51 1.15-1.24 1.15Zm0 4.06c-.74 0-1.25-.46-1.25-1.16 0-.69.51-1.16 1.25-1.16h10.42c.73 0 1.24.47 1.24 1.16 0 .7-.51 1.16-1.24 1.16Z" />
  </svg>
);
export default SvgLine3HorizontalcirclefillBold;
