import * as React from "react";
const SvgTrianglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.55 22.886h18.04c2.14 0 3.55-1.62 3.55-3.55 0-.6-.15-1.22-.48-1.79l-9.03-15.77c-.69-1.18-1.86-1.78-3.06-1.78s-2.39.61-3.07 1.78L.48 17.556a3.53 3.53 0 0 0-.48 1.78c0 1.93 1.41 3.55 3.55 3.55" />
  </svg>
);
export default SvgTrianglefillBold;
