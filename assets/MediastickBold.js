import * as React from "react";
const SvgMediastickBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.522 12.835h17.3c3.39 0 4.51-1.6 4.51-6.41 0-4.83-1.12-6.42-4.51-6.42h-17.3c-3.4 0-4.52 1.59-4.52 6.42 0 4.81 1.12 6.41 4.52 6.41m23.4-2.89h2.64c1.64 0 2.6-.92 2.6-2.48v-2.11c0-1.55-.96-2.48-2.6-2.48h-2.64c.22 1 .31 2.18.31 3.55 0 1.34-.09 2.52-.31 3.52m-23.4-4.23c-.76 0-1.36-.59-1.36-1.36 0-.73.6-1.33 1.36-1.33.75 0 1.35.6 1.35 1.33 0 .77-.6 1.36-1.35 1.36" />
  </svg>
);
export default SvgMediastickBold;
