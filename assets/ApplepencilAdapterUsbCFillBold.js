import * as React from "react";
const SvgApplepenciladapterusbcfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.602 20.063h9.43c.99 0 1.88.33 2.61.87V3.483c0-2.09-1.47-3.48-3.65-3.48h-7.35c-2.18 0-3.64 1.39-3.64 3.48v17.45c.71-.54 1.62-.87 2.6-.87m4.72-13.71a1.6 1.6 0 0 1 0-3.2c.88 0 1.6.73 1.6 1.59 0 .89-.72 1.61-1.6 1.61m-4.72 20.61h9.43c1.48 0 2.61-1.13 2.61-2.6 0-1.46-1.13-2.6-2.61-2.6h-9.43c-1.48 0-2.6 1.14-2.6 2.6 0 1.47 1.12 2.6 2.6 2.6" />
  </svg>
);
export default SvgApplepenciladapterusbcfillBold;
