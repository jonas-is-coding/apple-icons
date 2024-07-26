import * as React from "react";
const Svg4SquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m8.76-5.58c-.78 0-1.28-.48-1.28-1.37v-.67h-3.75c-1.1 0-1.79-.64-1.79-1.65 0-.45.09-.91.39-1.49.71-1.28 1.83-3.04 2.82-4.6.7-1.17 1.43-1.61 2.73-1.61 1.24 0 2.17.8 2.17 1.9v5.13h.54c.78 0 1.26.46 1.26 1.16 0 .71-.49 1.16-1.27 1.16h-.53v.67c0 .91-.5 1.37-1.29 1.37m-1.28-4.36v-4.88h-.1c-.96 1.59-2.12 3.53-2.81 4.81v.07Z" />
  </svg>
);
export default Svg4SquarefillBold;
