import * as React from "react";
const SvgStopfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 17.247c0 1.77 1.18 2.89 3.06 2.89h14.01c1.89 0 3.07-1.12 3.07-2.89V2.897c0-1.78-1.18-2.9-3.07-2.9H3.062c-1.88 0-3.06 1.12-3.06 2.9Z" />
  </svg>
);
export default SvgStopfillBold;
