import * as React from "react";
const SvgPersonfillbadgeminusBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.972 10.39c2.64 0 4.79-2.3 4.79-5.23 0-2.85-2.18-5.16-4.79-5.16-2.62 0-4.79 2.28-4.79 5.14 0 2.95 2.15 5.25 4.79 5.25m0 2.06c-6.07 0-9.97 4.1-9.97 7.1 0 1.16.69 1.84 2.76 1.84h9.48c-.18-.66-.28-1.34-.28-2.04 0-2.37 1.07-4.49 2.72-5.94-1.33-.6-2.93-.96-4.71-.96m9.94 13.07c3.36 0 6.16-2.81 6.16-6.17 0-3.38-2.79-6.17-6.16-6.17-3.39 0-6.18 2.79-6.18 6.17s2.79 6.17 6.18 6.17m-3.05-5.22c-.5 0-.92-.45-.94-.94-.01-.5.44-.95.94-.95h6.1c.5 0 .93.43.93.95 0 .49-.43.94-.93.94Z" />
  </svg>
);
export default SvgPersonfillbadgeminusBold;
