import * as React from "react";
const SvgArrowshapedowncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m0-5.32c-.27 0-.59-.11-.83-.37l-4.75-5.1c-.34-.37-.5-.68-.5-1.06 0-.6.45-1.04 1.04-1.04h2.16v-4.8c0-1.09.62-1.72 1.7-1.72h2.34c1.07 0 1.71.63 1.71 1.72v4.8h2.16c.59 0 1.05.44 1.05 1.05 0 .36-.15.64-.52 1.05l-4.71 5.1c-.26.26-.55.37-.85.37" />
  </svg>
);
export default SvgArrowshapedowncirclefillBold;
