import * as React from "react";
const SvgChartlineuptrendxyaxisBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 22.023c0 .68.44 1.12 1.12 1.12h23.77c.85 0 1.53-.62 1.53-1.5 0-.89-.68-1.51-1.53-1.51H3.342c-.21 0-.32-.11-.32-.33v-4.58l4.65-4.85c.1-.1.22-.15.3-.15.09 0 .21.04.3.15l3.96 4.16c.59.63 1.21.9 1.87.9.64 0 1.24-.28 1.85-.89l4.86-4.9 1.69 1.69c.64.64 1.58.27 1.83-.62l1.8-6.95c.22-.84-.54-1.58-1.37-1.36l-6.94 1.79c-.9.25-1.27 1.17-.63 1.82l1.64 1.64-4.44 4.57c-.08.09-.2.15-.29.15a.4.4 0 0 1-.3-.15l-3.96-4.17c-.6-.63-1.2-.9-1.86-.9-.65 0-1.23.25-1.86.9l-3.1 3.15v-9.67c0-.85-.62-1.53-1.51-1.53-.88 0-1.51.68-1.51 1.53Z" />
  </svg>
);
export default SvgChartlineuptrendxyaxisBold;
