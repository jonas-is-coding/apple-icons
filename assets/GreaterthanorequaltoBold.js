import * as React from "react";
const SvgGreaterthanorequaltoBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.112 15.01c.53 0 .99-.13 1.44-.34l9.75-4.65c1.22-.59 1.96-1.3 1.96-2.52 0-1.21-.74-1.91-1.96-2.5L3.552.33c-.41-.2-.84-.33-1.34-.33-1.05 0-1.8.81-1.8 1.86 0 .91.48 1.46 1.42 1.83l8.5 3.68v.12l-8.52 3.73c-.99.41-1.4.96-1.4 1.89 0 1.07.67 1.9 1.7 1.9m13.15 4.87c0-1.04-.75-1.79-1.79-1.79H1.782c-1.03 0-1.78.75-1.78 1.79 0 1.03.75 1.77 1.78 1.77h11.69c1.04 0 1.79-.74 1.79-1.77" />
  </svg>
);
export default SvgGreaterthanorequaltoBold;
