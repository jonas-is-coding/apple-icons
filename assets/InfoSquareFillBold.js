import * as React from "react";
const SvgInfosquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.12-14.94c-1.01 0-1.83-.83-1.83-1.83 0-1.03.82-1.84 1.83-1.84s1.82.81 1.82 1.84c0 1-.81 1.83-1.82 1.83m-2.2 10.42c-.65 0-1.15-.45-1.15-1.11 0-.63.5-1.12 1.15-1.12h1.36v-4.28h-1.13c-.64 0-1.15-.46-1.15-1.12 0-.61.51-1.1 1.15-1.1h2.39c.82 0 1.26.56 1.26 1.44v5.06h1.1c.64 0 1.15.49 1.15 1.12 0 .66-.51 1.11-1.15 1.11Z" />
  </svg>
);
export default SvgInfosquarefillBold;
