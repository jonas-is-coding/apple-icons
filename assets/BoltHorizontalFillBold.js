import * as React from "react";
const SvgBolthorizontalfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.549 11.611c-1.46 1.82.25 3.75 2.2 2.7l8.38-4.6 9.16 5.08c.57.33 1.11.48 1.61.48.79 0 1.5-.39 2.14-1.17l8.41-10.44c1.37-1.7-.19-3.79-2.21-2.71l-8.38 4.59-9.16-5.06c-.58-.33-1.12-.48-1.63-.48-.78 0-1.48.39-2.12 1.17Z" />
  </svg>
);
export default SvgBolthorizontalfillBold;
