import * as React from "react";
const SvgPaddleshifterleftfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 18.687c0 4.42.9 7.93 3.02 11.4 1.28 2.1 3.52 2.72 5.74 1.64l2.36-1.13c2.24-1.08 3.37-2.59 3.37-4.6 0-.89-.25-1.38-.25-1.84 0-.48.29-.74.83-.74h2.17c.97 0 1.74-.8 1.74-1.91v-2.71c0-1.19-.86-2.06-1.95-2.06h-2.89c-.88 0-1.3-.48-1.3-1.32 0-2.45.45-5.54 2.28-9.69 1-2.3.25-4.03-2.16-4.98l-1.15-.45c-2.05-.79-3.82.12-4.91 1.27-4.92 5.14-6.9 12.12-6.9 17.12" />
  </svg>
);
export default SvgPaddleshifterleftfillBold;
