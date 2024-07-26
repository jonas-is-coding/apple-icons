import * as React from "react";
const SvgChartlineflattrendxyaxiscirclefillBold = ({
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
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-5.28-6.87c-.71 0-1.17-.47-1.17-1.19v-9.24c0-.49.38-.89.87-.89.5 0 .87.4.87.89v3.19h6.94v-.99c0-.53.55-.81 1.05-.51l2.95 1.72c.44.26.44.91-.02 1.17l-2.93 1.74c-.49.29-1.05.01-1.05-.53v-.97h-6.94v3.71c0 .09.06.14.14.14h10.1c.5 0 .89.39.89.88s-.39.88-.89.88Z" />
  </svg>
);
export default SvgChartlineflattrendxyaxiscirclefillBold;
