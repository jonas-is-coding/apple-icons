import * as React from "react";
const SvgExternaldrivefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.122 8.95h17.91c1.3 0 2.47.3 3.48.82l-3.02-6.78c-.84-1.91-2.47-2.99-4.69-2.99h-9.44c-2.22 0-3.84 1.08-4.7 2.99l-3 6.77c1-.51 2.17-.81 3.46-.81m0 12.07h17.91c3.04 0 5.12-2.06 5.12-5.08 0-3.03-2.08-5.09-5.12-5.09H5.122c-3.05 0-5.12 2.06-5.12 5.09 0 3.02 2.07 5.08 5.12 5.08m16.34-5.06c0-.84.71-1.56 1.57-1.56.83 0 1.55.72 1.55 1.56 0 .86-.71 1.55-1.55 1.55-.87.01-1.57-.68-1.57-1.55" />
  </svg>
);
export default SvgExternaldrivefillBold;
