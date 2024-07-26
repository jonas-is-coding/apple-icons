import * as React from "react";
const SvgRublesignsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m5.02-5.67c-.68 0-1.09-.45-1.09-1.15v-.7h-1.19c-.24 0-.39-.14-.39-.38 0-.21.15-.35.39-.35h1.19v-1.54h-1.19c-.24 0-.39-.15-.39-.38s.15-.39.39-.39h1.19v-4.89c0-.72.42-1.2 1.13-1.2h3.1c2.18 0 3.64 1.42 3.64 3.45 0 1.94-1.49 3.41-3.75 3.41h-1.93v1.54h2.63c.22 0 .36.14.36.35 0 .24-.14.38-.36.38h-2.63v.7c0 .7-.42 1.15-1.1 1.15m1.1-5.79h1.39c1.26 0 2.05-.62 2.05-1.73 0-.98-.65-1.71-2.05-1.71h-1.39Z" />
  </svg>
);
export default SvgRublesignsquarefillBold;
