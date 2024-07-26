import * as React from "react";
const SvgArrowuturnbackwardsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m13.31-9.72c0 2.93-1.97 4.86-4.92 4.86h-1.72c-.73 0-1.23-.46-1.23-1.13 0-.65.5-1.09 1.22-1.09h1.73c1.6 0 2.67-1.05 2.67-2.64 0-1.53-1.07-2.56-2.67-2.56h-3.5l-.98-.07.62.42 1.3 1.13c.22.2.34.45.34.72 0 .59-.49 1.08-1.05 1.08-.29 0-.55-.1-.74-.3l-3.25-3.28c-.22-.24-.33-.52-.33-.8 0-.29.12-.57.33-.8l3.24-3.27c.2-.21.45-.31.72-.31.57 0 1.06.49 1.06 1.06 0 .27-.11.54-.32.73l-1.16 1.08-.76.55.98-.07h3.5c2.95 0 4.92 1.87 4.92 4.69" />
  </svg>
);
export default SvgArrowuturnbackwardsquarefillBold;
