import * as React from "react";
const SvgLeftcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.17-6.9c-1.04 0-1.61-.69-1.61-1.81v-7.6c0-1.12.57-1.81 1.61-1.81 1.05 0 1.65.69 1.65 1.81v6.86h3.52c.83 0 1.37.47 1.37 1.26 0 .82-.54 1.29-1.37 1.29Z" />
  </svg>
);
export default SvgLeftcirclefillBold;
