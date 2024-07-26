import * as React from "react";
const SvgSquaresplitdiagonalfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.272.002H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 .68.1 1.28.3 1.78L20.062.302c-.5-.2-1.1-.3-1.79-.3m-15.93 22.11c.51.2 1.1.29 1.8.29h14.13c2.68 0 4.13-1.45 4.13-4.11V4.112c0-.68-.1-1.26-.3-1.77Z" />
  </svg>
);
export default SvgSquaresplitdiagonalfillBold;
