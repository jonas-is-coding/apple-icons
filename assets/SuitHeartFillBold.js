import * as React from "react";
const SvgSuitheartfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.192 22.638c.39 0 .98-.34 1.52-.69 6.44-4.21 10.68-9.22 10.68-14.25 0-4.6-3.2-7.7-7.05-7.7-2.39 0-4.12 1.31-5.15 3.24-1.02-1.91-2.76-3.24-5.15-3.24-3.84 0-7.04 3.1-7.04 7.7 0 5.03 4.23 10.04 10.67 14.25.54.35 1.13.69 1.52.69" />
  </svg>
);
export default SvgSuitheartfillBold;
