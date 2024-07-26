import * as React from "react";
const SvgGreaterthanorequaltosquarefillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m4.3-9.01c-.72 0-1.18-.66-1.18-1.19 0-.46.26-.87.73-1.07l4.25-1.86v-.04l-4.25-1.87c-.47-.22-.73-.63-.73-1.06 0-.56.46-1.19 1.18-1.19.17 0 .36.03.62.15l5.94 2.69c.63.3.91.74.91 1.32s-.28.97-.91 1.26l-5.94 2.7c-.26.11-.45.16-.62.16m7.54 2.7c0 .63-.51 1.14-1.23 1.14h-6.71c-.71 0-1.23-.51-1.23-1.14 0-.67.52-1.19 1.23-1.19h6.71c.72 0 1.23.52 1.23 1.19" />
  </svg>
);
export default SvgGreaterthanorequaltosquarefillBold;
