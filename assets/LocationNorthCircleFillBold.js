import * as React from "react";
const SvgLocationnorthcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-5.38-7.67 4.26-10.81c.42-1.06 1.83-1.07 2.24-.02l4.26 10.83c.48 1.2-.76 1.9-1.63 1.03l-3.43-3.43c-.19-.19-.45-.19-.63 0l-3.44 3.43c-.86.87-2.11.17-1.63-1.03" />
  </svg>
);
export default SvgLocationnorthcirclefillBold;
