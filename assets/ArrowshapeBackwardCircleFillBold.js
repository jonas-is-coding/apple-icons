import * as React from "react";
const SvgArrowshapebackwardcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-7.33-12.37c0-.29.1-.6.36-.84l5.1-4.71c.41-.38.69-.53 1.05-.53.61 0 1.06.47 1.06 1.06v2.15h4.79c1.09 0 1.72.65 1.72 1.71v2.35c0 1.07-.63 1.7-1.72 1.7h-4.79v2.15c0 .6-.45 1.04-1.05 1.04-.38 0-.69-.16-1.06-.5l-5.1-4.75c-.26-.23-.36-.56-.36-.83" />
  </svg>
);
export default SvgArrowshapebackwardcirclefillBold;
