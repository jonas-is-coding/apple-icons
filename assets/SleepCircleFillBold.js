import * as React from "react";
const SvgSleepcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m.01-5.34c-3.87 0-7.03-3.15-7.03-7.03 0-3.89 3.16-7.03 7.03-7.03 3.88 0 7.04 3.14 7.04 7.03 0 3.88-3.16 7.03-7.04 7.03m-4.75-7.03c0 .41.07.8.18 1.16h9.16c.11-.36.17-.75.17-1.16 0-2.62-2.12-4.76-4.76-4.76-2.62 0-4.75 2.14-4.75 4.76m1.19 3.13c.87 1 2.15 1.63 3.56 1.63 1.42 0 2.71-.63 3.57-1.63Z" />
  </svg>
);
export default SvgSleepcirclefillBold;
