import * as React from "react";
const SvgKipsignsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m4.52-5.7c-.68 0-1.1-.45-1.1-1.13v-4.24h-.91c-.21 0-.36-.15-.36-.37 0-.21.15-.35.36-.35h.91v-3.83c0-.69.41-1.12 1.1-1.12.67 0 1.09.43 1.09 1.12v3.83h.54l3.2-4.38c.23-.35.5-.57.91-.57.48 0 1.01.36 1.01.91 0 .23-.1.47-.25.68l-2.62 3.36h2.9c.21 0 .37.14.37.35 0 .2-.16.37-.37.37h-2.94l2.66 3.54c.21.29.3.52.3.85 0 .39-.27.98-1.07.98-.47 0-.75-.23-1-.64l-3.14-4.73h-.5l.01 4.24c0 .68-.42 1.13-1.1 1.13" />
  </svg>
);
export default SvgKipsignsquarefillBold;
