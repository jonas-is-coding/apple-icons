import * as React from "react";
const Svg4AltsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.19-9.1c0-.45.14-.85.39-1.37 1.01-1.94 1.99-3.74 3.04-5.66.28-.54.63-.81 1.23-.81.75 0 1.28.52 1.28 1.18 0 .31-.07.52-.25.91-.77 1.53-1.71 3.32-2.52 4.9h2.38v-1.65c0-.77.49-1.29 1.27-1.29s1.29.51 1.29 1.29v1.65h.48c.82 0 1.3.45 1.3 1.15 0 .72-.5 1.17-1.3 1.17h-.48v.67c0 .92-.5 1.38-1.29 1.38-.78 0-1.27-.48-1.27-1.38v-.67h-4.03c-.93 0-1.52-.51-1.52-1.47" />
  </svg>
);
export default Svg4AltsquarefillBold;
