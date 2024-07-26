import * as React from "react";
const SvgCapslockfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.95 17.105h9.66c1.45 0 2.21-.75 2.21-2.18v-2.12h3.75c1.11 0 1.99-.69 1.99-1.7 0-.58-.29-1.16-.88-1.65L14.72.915c-.76-.65-1.29-.91-1.95-.91-.64 0-1.17.26-1.93.91L.88 9.465c-.6.51-.88 1.06-.88 1.64 0 1.01.87 1.7 1.99 1.7h3.75v2.12c0 1.43.76 2.18 2.21 2.18m-.07 8.34h9.79c1.35 0 2.15-.79 2.15-2.11v-2.24c0-1.33-.8-2.11-2.15-2.11H7.88c-1.34 0-2.14.78-2.14 2.11v2.24c0 1.32.8 2.11 2.14 2.11" />
  </svg>
);
export default SvgCapslockfillBold;
