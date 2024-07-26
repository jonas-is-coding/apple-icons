import * as React from "react";
const SvgOctagonlefthalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.752 23.742h7.28c1.56 0 2.57-.55 3.44-1.55l4.2-4.8c.88-1.02 1.11-1.65 1.11-3.01v-5.02c0-1.36-.23-1.99-1.11-3.01l-4.2-4.79c-.87-1.01-1.88-1.56-3.44-1.56h-7.28c-1.56 0-2.58.55-3.44 1.56l-4.2 4.79c-.88 1.02-1.11 1.65-1.11 3.01v5.02c0 1.36.23 1.99 1.11 3.01l4.2 4.8c.86 1 1.88 1.55 3.44 1.55m3.64-20.79h3.18c1.02 0 1.42.27 1.97.89l3.51 3.95c.45.52.56.88.56 1.75v4.66c0 .87-.11 1.23-.56 1.75l-3.51 3.96c-.55.62-.95.88-1.97.88h-3.18Z" />
  </svg>
);
export default SvgOctagonlefthalffilledBold;
