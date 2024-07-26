import * as React from "react";
const SvgArrowleftcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-6.21-12.38c0-.38.12-.73.47-1.1l3.81-3.95c.23-.25.49-.38.85-.38.68 0 1.16.58 1.16 1.21 0 .35-.15.67-.39.9l-1.56 1.47-.88.57 1.78-.12h5.82c.74 0 1.38.61 1.38 1.4 0 .78-.64 1.4-1.38 1.4h-5.82l-1.78-.13.88.58 1.56 1.46c.24.24.39.58.39.93 0 .62-.48 1.19-1.16 1.19-.36 0-.62-.14-.85-.37l-3.81-3.95c-.35-.37-.47-.73-.47-1.11" />
  </svg>
);
export default SvgArrowleftcirclefillBold;
