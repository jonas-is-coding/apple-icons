import * as React from "react";
const SvgArrowdownbackwardcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.82-15.99c.75 0 1.22.53 1.22 1.36v1.66l-.16 1.52 1.45-1.65 3.89-3.89c.32-.3.67-.44 1.08-.44.77 0 1.38.55 1.38 1.38 0 .36-.16.74-.44 1.02l-3.92 3.91-1.67 1.47 1.45-.19h1.78c.82 0 1.36.47 1.36 1.21 0 .75-.54 1.22-1.37 1.22h-5.63c-1.02 0-1.62-.55-1.62-1.62v-5.6c0-.82.46-1.36 1.2-1.36" />
  </svg>
);
export default SvgArrowdownbackwardcirclefillBold;
