import * as React from "react";
const SvgChartlineuptrendxyaxiscirclefillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-6.49-8.06v-9.24c0-.49.4-.89.89-.89.48 0 .87.4.87.89v4.15l1.14-1.15c.3-.31.6-.48.98-.48.36 0 .69.16 1 .48l1.84 1.93c.05.06.1.06.15-.01l1.95-2-.67-.67c-.39-.39-.19-.97.37-1.11l3.28-.86c.52-.13.99.33.85.83l-.86 3.3c-.15.55-.75.76-1.13.37l-.7-.71-2.17 2.22c-.31.31-.65.46-1 .46-.37 0-.7-.14-1-.46l-1.83-1.93c-.06-.06-.1-.06-.16 0l-2.04 2.1v2.09c0 .09.03.12.1.12h10.13c.49 0 .88.39.88.88s-.39.88-.88.88H7.052c-.7 0-1.17-.47-1.17-1.19" />
  </svg>
);
export default SvgChartlineuptrendxyaxiscirclefillBold;
