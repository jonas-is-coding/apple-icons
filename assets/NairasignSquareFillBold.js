import * as React from "react";
const SvgNairasignsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m4.11-5.7c-.62 0-1-.38-1-1.02v-4.15h-.7a.36.36 0 0 1-.36-.37c0-.2.16-.36.36-.36h.7v-3.84c0-.82.61-1.29 1.39-1.29.73 0 1.19.4 1.45 1.02l1.8 4.11h1.23v-4.12c0-.65.37-1.01 1-1.01.62 0 .98.37.98 1.01v4.12h.78c.2 0 .37.16.37.36 0 .21-.17.37-.37.37h-.78v3.86c0 .77-.52 1.31-1.38 1.31-.73 0-1.18-.38-1.44-1.02l-1.82-4.15h-1.23v4.15c0 .64-.36 1.02-.98 1.02m.98-5.9h.91l-.85-1.76h-.06Zm2.98.73.85 1.81h.06v-1.81Z" />
  </svg>
);
export default SvgNairasignsquarefillBold;
