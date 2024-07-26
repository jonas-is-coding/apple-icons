import * as React from "react";
const SvgLessthanorequaltosquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m9.85-9.01c-.18 0-.35-.05-.62-.16l-5.94-2.7c-.63-.29-.9-.68-.9-1.26s.27-1.02.9-1.32l5.94-2.69c.27-.12.44-.15.62-.15.72 0 1.17.63 1.17 1.19 0 .43-.26.84-.71 1.06l-4.27 1.87v.04l4.27 1.86c.45.2.71.61.71 1.07 0 .53-.45 1.19-1.17 1.19m-7.55 2.7c0-.67.53-1.19 1.23-1.19h6.72c.7 0 1.23.52 1.23 1.19 0 .63-.53 1.14-1.23 1.14h-6.72c-.7 0-1.23-.51-1.23-1.14" />
  </svg>
);
export default SvgLessthanorequaltosquarefillBold;
