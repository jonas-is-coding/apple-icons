import * as React from "react";
const SvgLinesmeasurementverticalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.792 1.713c0 1.17.54 1.71 1.71 1.71h10.27c1.16 0 1.7-.54 1.7-1.71s-.54-1.71-1.7-1.71H6.502c-1.17 0-1.71.54-1.71 1.71m3.05 5.94c0 1.16.54 1.7 1.71 1.7h4.17c1.17 0 1.71-.54 1.71-1.7 0-1.17-.54-1.71-1.71-1.71h-4.17c-1.17 0-1.71.54-1.71 1.71m-7.84 5.93c0 1.17.54 1.7 1.71 1.7h19.85c1.17 0 1.71-.53 1.71-1.7s-.54-1.71-1.71-1.71H1.712c-1.17 0-1.71.54-1.71 1.71m7.84 5.93c0 1.16.54 1.7 1.71 1.7h4.17c1.17 0 1.71-.54 1.71-1.7s-.54-1.7-1.71-1.7h-4.17c-1.17 0-1.71.54-1.71 1.7m-3.05 5.94c0 1.16.54 1.7 1.71 1.7h10.27c1.16 0 1.7-.54 1.7-1.7 0-1.18-.54-1.72-1.7-1.72H6.502c-1.17 0-1.71.54-1.71 1.72" />
  </svg>
);
export default SvgLinesmeasurementverticalBold;
