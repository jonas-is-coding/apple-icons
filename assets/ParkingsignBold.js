import * as React from "react";
const SvgParkingsignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.442 23.465c1.53 0 2.45-.95 2.45-2.55v-5.09h4.18c4.92 0 8.3-3.18 8.3-7.9 0-4.77-3.27-7.92-8.07-7.92h-6.86c-1.53 0-2.44.93-2.44 2.54v18.37c0 1.6.91 2.55 2.44 2.55m2.45-11.55v-7.97h3.23c2.71 0 4.29 1.41 4.29 3.98 0 2.58-1.58 3.99-4.3 3.99Z" />
  </svg>
);
export default SvgParkingsignBold;
