import * as React from "react";
const SvgInsetfilledovalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 11.942c0 7.07 6.47 11.95 15.88 11.95s15.88-4.88 15.88-11.95c0-7.06-6.47-11.94-15.88-11.94S.002 4.882.002 11.942m3.02 0c0-5.22 5.32-8.91 12.86-8.91 7.53 0 12.85 3.69 12.85 8.91 0 5.21-5.32 8.92-12.85 8.92-7.54 0-12.86-3.71-12.86-8.92m1.97 0c0 4.05 4.48 6.96 10.89 6.96s10.88-2.91 10.88-6.96c0-4.06-4.48-6.95-10.88-6.95-6.41 0-10.89 2.89-10.89 6.95" />
  </svg>
);
export default SvgInsetfilledovalBold;
