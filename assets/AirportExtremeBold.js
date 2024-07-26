import * as React from "react";
const SvgAirportextremeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 15.96h21.65c2.67 0 4.14-1.46 4.14-4.11V4.11c0-2.66-1.47-4.11-4.14-4.11H4.142C1.462 0 .002 1.45.002 4.11v7.74c0 2.66 1.46 4.11 4.14 4.11M3.022 4.48c0-1 .51-1.46 1.44-1.46h20.99c.94 0 1.45.46 1.45 1.46v.17H3.022Zm1.44 8.46c-.93 0-1.44-.47-1.44-1.47V6.39h23.88v5.08c0 1-.51 1.47-1.45 1.47Zm18.65-1.76c.94-.02 1.71-.81 1.71-1.73 0-.95-.77-1.76-1.71-1.76s-1.74.81-1.74 1.76c0 .92.8 1.74 1.74 1.73" />
  </svg>
);
export default SvgAirportextremeBold;
