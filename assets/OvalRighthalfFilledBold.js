import * as React from "react";
const SvgOvalrighthalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M31.762 11.942c0-7.06-6.47-11.94-15.88-11.94S.002 4.882.002 11.942c0 7.07 6.47 11.95 15.88 11.95s15.88-4.88 15.88-11.95m-15.88 8.69c-7.47 0-12.62-3.57-12.62-8.69s5.15-8.68 12.62-8.68Z" />
  </svg>
);
export default SvgOvalrighthalffilledBold;
