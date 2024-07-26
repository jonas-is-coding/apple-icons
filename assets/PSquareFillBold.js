import * as React from "react";
const SvgPsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m4.42-5.54c-.97 0-1.51-.65-1.51-1.7v-7.79c0-1.1.55-1.74 1.64-1.74h3.28c2.54 0 4.17 1.58 4.17 4 0 2.44-1.66 4.01-4.2 4.01h-1.84v1.52c0 1.05-.56 1.7-1.54 1.7m1.54-5.44h1.44c1.1 0 1.72-.64 1.72-1.78 0-1.15-.62-1.78-1.72-1.78h-1.44Z" />
  </svg>
);
export default SvgPsquarefillBold;
