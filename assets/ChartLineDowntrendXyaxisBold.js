import * as React from "react";
const SvgChartlinedowntrendxyaxisBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 22.023c0 .68.44 1.12 1.12 1.12h23.77c.85 0 1.53-.62 1.53-1.5 0-.89-.68-1.51-1.53-1.51H3.342c-.21 0-.32-.11-.32-.33V7.522l3.1 3.16c.63.65 1.21.9 1.86.9.66 0 1.26-.26 1.86-.9l3.96-4.17c.1-.1.21-.15.3-.15s.21.05.29.14l4.44 4.57-1.64 1.65c-.64.65-.27 1.57.63 1.81l6.94 1.8c.83.23 1.59-.52 1.37-1.36l-1.8-6.95c-.25-.9-1.19-1.26-1.83-.63l-1.69 1.7-4.86-4.9c-.61-.62-1.21-.9-1.85-.9-.66 0-1.28.28-1.87.9l-3.96 4.17a.41.41 0 0 1-.3.16c-.08 0-.2-.06-.3-.16l-4.65-4.85v-1.98c0-.85-.62-1.53-1.51-1.53-.88 0-1.51.68-1.51 1.53Z" />
  </svg>
);
export default SvgChartlinedowntrendxyaxisBold;
