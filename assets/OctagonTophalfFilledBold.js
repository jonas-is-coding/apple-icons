import * as React from "react";
const SvgOctagontophalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.752 23.742h7.28c1.56 0 2.57-.55 3.44-1.55l4.2-4.8c.88-1.02 1.11-1.65 1.11-3.01v-5.02c0-1.36-.23-1.99-1.11-3.01l-4.2-4.79c-.87-1.01-1.88-1.56-3.44-1.56h-7.28c-1.56 0-2.58.55-3.44 1.56l-4.2 4.79c-.88 1.02-1.11 1.65-1.11 3.01v5.02c0 1.36.23 1.99 1.11 3.01l4.2 4.8c.86 1 1.88 1.55 3.44 1.55m12.86-11.87v2.33c0 .87-.11 1.23-.56 1.75l-3.51 3.96c-.55.62-.95.88-1.97.88h-6.36c-1.02 0-1.42-.26-1.97-.88l-3.5-3.96c-.46-.52-.57-.88-.57-1.75v-2.33Z" />
  </svg>
);
export default SvgOctagontophalffilledBold;
