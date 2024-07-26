import * as React from "react";
const Svg1SquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.96-5.44c-.93 0-1.53-.52-1.53-1.62v-6.91h-.11l-1.26.85c-.37.23-.53.27-.8.27-.6 0-1.02-.47-1.02-1.07 0-.48.2-.78.63-1.08l2-1.32c.71-.47 1.23-.65 1.89-.65 1.05 0 1.75.65 1.75 1.63v8.28c0 1.1-.62 1.62-1.55 1.62" />
  </svg>
);
export default Svg1SquarefillBold;
