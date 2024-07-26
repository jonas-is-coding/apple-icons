import * as React from "react";
const SvgMappinBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M-.003 5.072c0 2.28 1.5 4.2 3.58 4.83v11.29c0 2.71.96 4.82 1.46 4.82.52 0 1.47-2.09 1.47-4.82V9.902c2.07-.61 3.58-2.55 3.58-4.83 0-2.79-2.24-5.07-5.05-5.07-2.79 0-5.04 2.28-5.04 5.07m3.62.3c-.91 0-1.72-.81-1.72-1.74 0-.94.81-1.72 1.72-1.72.95 0 1.73.78 1.73 1.72 0 .93-.78 1.74-1.73 1.74" />
  </svg>
);
export default SvgMappinBold;
