import * as React from "react";
const SvgPoweroutlettypeafillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.842 21.584h13.24c1.02 0 1.98-.38 2.69-1.08 2.61-2.49 4.16-6.14 4.16-9.71 0-3.58-1.55-7.22-4.16-9.72-.69-.69-1.68-1.07-2.69-1.07H6.842c-1.03 0-2.03.39-2.75 1.12-2.56 2.5-4.09 6.12-4.09 9.67 0 3.57 1.56 7.22 4.16 9.71.7.7 1.67 1.08 2.68 1.08m1.3-5.79c-.77 0-1.37-.58-1.37-1.36v-7.22c0-.75.61-1.38 1.37-1.38.78 0 1.39.63 1.39 1.38v7.22c0 .78-.61 1.36-1.39 1.36m10.63 0c-.76 0-1.37-.62-1.37-1.38v-7.17c0-.78.61-1.41 1.37-1.41.78 0 1.38.63 1.38 1.41v7.17c0 .77-.6 1.38-1.38 1.38" />
  </svg>
);
export default SvgPoweroutlettypeafillBold;
