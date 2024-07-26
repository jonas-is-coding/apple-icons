import * as React from "react";
const SvgArrowdownforwardcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m3.83-15.99c.74 0 1.21.54 1.21 1.36v5.6c0 1.07-.61 1.62-1.63 1.62h-5.62c-.83 0-1.37-.47-1.37-1.22 0-.74.54-1.21 1.36-1.21h1.78l1.45.19-1.68-1.47-3.91-3.91c-.28-.28-.44-.66-.44-1.02 0-.83.6-1.38 1.38-1.38.41 0 .76.14 1.08.44l3.89 3.89 1.45 1.65-.16-1.52v-1.66c0-.83.46-1.36 1.21-1.36" />
  </svg>
);
export default SvgArrowdownforwardcirclefillBold;
