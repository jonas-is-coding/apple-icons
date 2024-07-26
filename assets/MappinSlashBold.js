import * as React from "react";
const SvgMappinslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.907 5.072c0 2.28 1.5 4.2 3.58 4.83v1.32l2.93 2.93v-4.25c2.07-.61 3.58-2.55 3.58-4.83 0-2.79-2.24-5.07-5.05-5.07-2.79 0-5.04 2.28-5.04 5.07m3.62.3c-.91 0-1.72-.81-1.72-1.74 0-.94.81-1.72 1.72-1.72.95 0 1.73.78 1.73 1.72 0 .93-.78 1.74-1.73 1.74m8.48 19.4c.37.39 1 .39 1.38 0 .39-.39.39-1.02 0-1.39l-16.7-16.71c-.37-.38-1.02-.39-1.41 0a1.01 1.01 0 0 0 0 1.39Zm-8.52-3.58c0 2.71.96 4.82 1.46 4.82.42 0 1.27-1.61 1.35-3.73l.02-.95-2.83-2.84Z" />
  </svg>
);
export default SvgMappinslashBold;
