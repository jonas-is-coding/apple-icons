import * as React from "react";
const SvgEqualsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m3.02-12.22c-.88 0-1.48-.46-1.48-1.25 0-.81.58-1.28 1.48-1.28h8.24c.89 0 1.46.47 1.46 1.28 0 .79-.6 1.25-1.47 1.25Zm0 4.6c-.88 0-1.48-.45-1.48-1.25 0-.81.58-1.28 1.48-1.28h8.24c.89 0 1.46.47 1.46 1.28 0 .8-.6 1.25-1.47 1.25Z" />
  </svg>
);
export default SvgEqualsquarefillBold;
