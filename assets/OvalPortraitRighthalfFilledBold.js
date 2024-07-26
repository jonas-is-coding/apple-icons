import * as React from "react";
const SvgOvalportraitrighthalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.312-.005c-6.68 0-11.31 6-11.31 14.49 0 8.48 4.63 14.48 11.31 14.48 6.66 0 11.32-6 11.32-14.48 0-8.49-4.66-14.49-11.32-14.49m0 3.25v22.48c-4.76 0-8.07-4.62-8.07-11.24 0-6.63 3.31-11.24 8.07-11.24" />
  </svg>
);
export default SvgOvalportraitrighthalffilledBold;
