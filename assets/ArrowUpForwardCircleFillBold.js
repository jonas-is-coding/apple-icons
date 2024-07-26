import * as React from "react";
const SvgArrowupforwardcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m3.83-8.86c-.75 0-1.21-.52-1.21-1.35v-1.67l.16-1.52-1.46 1.65-3.9 3.89c-.31.31-.66.45-1.06.45-.78 0-1.38-.55-1.38-1.39 0-.36.16-.74.43-1.02l3.92-3.91 1.67-1.47-1.45.19h-1.77c-.84 0-1.37-.47-1.37-1.2 0-.75.53-1.22 1.37-1.22h5.62c1.02 0 1.63.55 1.63 1.61v5.61c0 .82-.47 1.35-1.2 1.35" />
  </svg>
);
export default SvgArrowupforwardcirclefillBold;
