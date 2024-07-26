import * as React from "react";
const SvgTagsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m4.48-5.01-3.28-3.31c-.83-.83-.94-1.76-.08-2.61l5.75-5.8c.45-.45.75-.72 1.46-.72h2.28c.6 0 .93.19 1.34.59l1.15 1.14c.41.42.54.73.54 1.33v2.23c0 .72-.27 1.02-.72 1.46l-5.81 5.78c-.86.87-1.78.74-2.63-.09m4.52-7.81c.39.4 1.04.4 1.45-.01.4-.39.38-1.04 0-1.43-.4-.4-1.04-.4-1.45 0-.4.4-.4 1.06 0 1.44" />
  </svg>
);
export default SvgTagsquarefillBold;
