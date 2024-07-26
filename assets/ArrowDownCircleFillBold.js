import * as React from "react";
const SvgArrowdowncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m.01-6.15c-.37 0-.73-.13-1.11-.48l-3.95-3.8c-.23-.24-.37-.5-.37-.86 0-.68.57-1.15 1.2-1.15.34 0 .68.14.92.4l1.46 1.54.58.88-.13-1.78v-5.82c0-.74.63-1.37 1.4-1.37.79 0 1.4.63 1.4 1.37v5.82l-.12 1.78.58-.88 1.46-1.54c.24-.26.55-.4.9-.4.64 0 1.22.47 1.22 1.15 0 .36-.14.62-.38.86l-3.95 3.8c-.37.35-.73.48-1.11.48" />
  </svg>
);
export default SvgArrowdowncirclefillBold;
