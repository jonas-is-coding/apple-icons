import * as React from "react";
const SvgCursorarrowsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m3.52-8.06.14-9.49c.01-.6.65-.85 1.07-.42l6.61 6.7c.44.46.13 1.1-.49 1.1h-2.31l1.97 4.54c.13.28.13.73-.32.91l-1.23.46c-.45.16-.77-.09-.91-.44l-1.83-4.56-1.56 1.63c-.43.46-1.15.23-1.14-.43" />
  </svg>
);
export default SvgCursorarrowsquarefillBold;
