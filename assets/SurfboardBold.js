import * as React from "react";
const SvgSurfboardBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.505 29.71c1.64 1.64 3.8 1.93 6.52.89 4.32-1.66 9.27-5.23 13.87-9.83 8.59-8.6 11.43-15.48 7.73-19.18s-10.58-.86-19.18 7.73c-4.6 4.6-8.17 9.55-9.84 13.87-1.04 2.7-.75 4.88.9 6.52m1.78-6c1.91-4.11 5.19-8.53 9.09-12.44 7.06-7.04 12.26-9.83 14.85-8.11L3.075 27.31c-.57-.88-.51-2.04.21-3.6m16.66-4.87c-3.91 3.9-8.33 7.18-12.46 9.08-1.54.73-2.7.79-3.59.22l24.16-24.16c1.72 2.6-1.07 7.82-8.11 14.86" />
  </svg>
);
export default SvgSurfboardBold;
