import * as React from "react";
const SvgCarseatrightfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M27.601 20.669c1.06-3.82-1.67-5.58-8.45-5.58-2.91 0-5.82.24-8.23.67.56-4.38-.73-7.99-3.63-10.04.34-3.26-1.75-5.72-4.28-5.72-2.12 0-3.54 1.71-2.82 4.59l4.55 18.44c.48 1.94 1.76 3 3.68 3h14.29c2.61 0 3.76-1.26 4.89-5.36" />
  </svg>
);
export default SvgCarseatrightfillBold;
