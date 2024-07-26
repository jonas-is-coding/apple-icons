import * as React from "react";
const SvgUsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.13-5.47c-2.95 0-4.98-1.65-4.98-4.15v-5.69c0-1.06.54-1.64 1.5-1.64s1.5.59 1.5 1.64v5.4c0 1.19.8 1.99 1.98 1.99 1.2 0 1.99-.8 1.99-1.99v-5.4c0-1.05.54-1.64 1.49-1.64.97 0 1.51.58 1.51 1.64v5.69c0 2.5-2.02 4.15-4.99 4.15" />
  </svg>
);
export default SvgUsquarefillBold;
