import * as React from "react";
const SvgOvalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 11.942c0 7.07 6.47 11.95 15.88 11.95s15.88-4.88 15.88-11.95c0-7.06-6.47-11.94-15.88-11.94S.002 4.882.002 11.942m3.02 0c0-5.22 5.32-8.91 12.86-8.91 7.53 0 12.85 3.69 12.85 8.91 0 5.21-5.32 8.92-12.85 8.92-7.54 0-12.86-3.71-12.86-8.92" />
  </svg>
);
export default SvgOvalBold;
