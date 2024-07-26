import * as React from "react";
const SvgHazardsignfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.55 22.886h18.04c2.14 0 3.55-1.62 3.55-3.55 0-.6-.15-1.22-.48-1.79l-9.03-15.77c-.69-1.18-1.86-1.78-3.06-1.78s-2.39.61-3.07 1.78L.48 17.556a3.53 3.53 0 0 0-.48 1.78c0 1.93 1.41 3.55 3.55 3.55m2.23-3.91c-.54 0-.86-.54-.6-1.02l6.8-11.94c.27-.49.9-.49 1.17 0l6.8 11.94c.25.47-.06 1.02-.59 1.02Zm3.02-2.31h7.54c.11 0 .17-.1.1-.21l-3.76-6.59c-.05-.1-.16-.1-.22 0l-3.76 6.57c-.07.13 0 .23.1.23" />
  </svg>
);
export default SvgHazardsignfillBold;
