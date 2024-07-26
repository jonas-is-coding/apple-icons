import * as React from "react";
const SvgArrowrighttolineBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.082 18.807c.44 0 .86-.17 1.22-.53l7.64-7.61c.29-.3.48-.73.5-1.16v7.68c0 .92.73 1.62 1.64 1.62s1.64-.7 1.64-1.62V1.627c0-.92-.73-1.63-1.64-1.63s-1.64.71-1.64 1.63v7.68c-.02-.44-.21-.86-.5-1.15l-7.64-7.63c-.36-.35-.78-.53-1.22-.53-.96 0-1.64.69-1.64 1.61 0 .5.22.91.53 1.22l2.63 2.63 2.71 2.36-2.55-.11h-13c-1.06 0-1.76.68-1.76 1.7 0 1.01.7 1.7 1.76 1.7h13l2.56-.11-2.72 2.35-2.63 2.64c-.31.3-.53.7-.53 1.22 0 .91.68 1.6 1.64 1.6" />
  </svg>
);
export default SvgArrowrighttolineBold;
