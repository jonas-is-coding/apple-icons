import * as React from "react";
const SvgChartlineflattrendxyaxisBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 22.023c0 .68.44 1.12 1.12 1.12h23.77c.85 0 1.53-.62 1.53-1.5 0-.89-.68-1.51-1.53-1.51H3.342c-.22 0-.32-.11-.32-.33v-8.01h14.4v2.36c0 .92.93 1.3 1.74.84l6.17-3.65c.75-.43.75-1.49 0-1.93l-6.18-3.62c-.8-.47-1.73-.07-1.73.84v2.34h-14.4v-7.44c0-.85-.63-1.53-1.51-1.53s-1.51.68-1.51 1.53Z" />
  </svg>
);
export default SvgChartlineflattrendxyaxisBold;
