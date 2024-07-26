import * as React from "react";
const SvgChartlinedowntrendxyaxiscirclefillBold = ({
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
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-6.45-8.06v-9.24c0-.49.39-.89.89-.89.48 0 .86.4.86.89v.87l2.04 2.11c.06.05.11.05.17 0l1.82-1.95c.31-.3.64-.46 1-.46.35 0 .69.16 1.01.46l2.17 2.23.7-.72c.37-.37.97-.17 1.12.39l.86 3.29c.14.51-.33.96-.84.82l-3.28-.84c-.57-.15-.77-.74-.38-1.12l.68-.67-1.96-2.01c-.04-.05-.09-.06-.15 0l-1.84 1.93c-.3.32-.63.47-1 .47s-.68-.16-.98-.47l-1.14-1.16v5.38c0 .09.04.12.11.12h10.12c.5 0 .88.39.88.88s-.38.88-.88.88H7.092c-.71 0-1.17-.47-1.17-1.19" />
  </svg>
);
export default SvgChartlinedowntrendxyaxiscirclefillBold;
