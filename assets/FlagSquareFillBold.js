import * as React from "react";
const SvgFlagsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.71-4.78c-.41 0-.77-.35-.77-.76v-9.89c0-.61.29-1.07.87-1.31.47-.21.89-.32 1.79-.32 2.17 0 3.53 1.04 5.45 1.04.93 0 1.43-.24 1.83-.24.57 0 .88.31.88.81v5.81c0 .64-.27 1.05-.86 1.33-.48.23-.91.31-1.8.31-2.08 0-3.4-1.03-5.45-1.03-.54 0-.95.1-1.19.18v3.31c0 .43-.31.76-.75.76" />
  </svg>
);
export default SvgFlagsquarefillBold;
