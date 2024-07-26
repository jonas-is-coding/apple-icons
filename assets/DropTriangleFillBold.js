import * as React from "react";
const SvgDroptrianglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.55 22.886h18.04c2.14 0 3.55-1.62 3.55-3.55 0-.6-.15-1.22-.48-1.79l-9.03-15.77c-.69-1.18-1.86-1.78-3.06-1.78s-2.39.61-3.07 1.78L.48 17.556a3.53 3.53 0 0 0-.48 1.78c0 1.93 1.41 3.55 3.55 3.55m9.02-4.92c-2 0-3.33-1.3-3.33-3.25 0-.89.37-1.77.75-2.54.49-1.07 1.26-2.27 1.94-3.33.19-.28.4-.44.64-.44.25 0 .47.16.66.44.67 1.06 1.44 2.26 1.93 3.32.39.77.75 1.66.75 2.55 0 1.95-1.33 3.25-3.34 3.25" />
  </svg>
);
export default SvgDroptrianglefillBold;
