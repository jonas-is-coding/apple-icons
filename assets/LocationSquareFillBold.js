import * as React from "react";
const SvgLocationsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m1.18-10.24c-1.16 0-1.54-1.38-.36-1.92l10.34-4.81c1.12-.5 2.14.51 1.63 1.63l-4.78 10.35c-.53 1.17-1.92.81-1.92-.36v-4.46c0-.25-.18-.43-.42-.43Z" />
  </svg>
);
export default SvgLocationsquarefillBold;
