import * as React from "react";
const SvgBolthorizontalcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-7.49-10.52 3.81-4.82c.32-.38.66-.57 1.01-.57.27 0 .52.09.8.25l4.5 2.48 3.82-1.98c.96-.48 1.72.46 1.06 1.3l-3.83 4.83c-.3.38-.65.58-1.01.58-.25 0-.51-.09-.78-.25l-4.51-2.5-3.8 1.98c-.96.49-1.76-.43-1.07-1.3" />
  </svg>
);
export default SvgBolthorizontalcirclefillBold;
