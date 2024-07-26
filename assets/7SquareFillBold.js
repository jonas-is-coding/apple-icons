import * as React from "react";
const Svg7SquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m5.81-5.45c-.86 0-1.46-.51-1.46-1.3 0-.35.09-.63.26-.91l3.88-6.53v-.12h-4.41c-.78 0-1.27-.45-1.27-1.18 0-.71.49-1.18 1.27-1.18h5.78c1.16 0 1.89.66 1.89 1.66 0 .49-.12.91-.47 1.5l-4.01 7.06c-.44.75-.82 1-1.46 1" />
  </svg>
);
export default Svg7SquarefillBold;
