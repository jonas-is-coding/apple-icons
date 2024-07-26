import * as React from "react";
const SvgEcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.61-6.9c-1.09 0-1.65-.62-1.65-1.74v-7.55c0-1.11.56-1.75 1.65-1.75h5.24c.78 0 1.28.42 1.28 1.16 0 .73-.5 1.16-1.28 1.16h-3.96v2.12h3.81c.68 0 1.11.37 1.11 1.02s-.43 1.01-1.11 1.01h-3.81v2.25h3.96c.78 0 1.28.42 1.28 1.16 0 .73-.5 1.16-1.28 1.16Z" />
  </svg>
);
export default SvgEcirclefillBold;
