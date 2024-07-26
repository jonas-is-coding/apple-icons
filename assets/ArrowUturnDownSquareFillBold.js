import * as React from "react";
const SvgArrowuturndownsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.408h14.13c2.68 0 4.13-1.45 4.13-4.1V4.118c0-2.65-1.45-4.12-4.13-4.12H4.142c-2.68 0-4.14 1.45-4.14 4.12v14.19c0 2.65 1.46 4.1 4.14 4.1m8.39-17.54c2.91 0 4.85 1.98 4.85 4.92v1.72c0 .74-.45 1.23-1.13 1.23-.64 0-1.09-.49-1.09-1.22v-1.73c0-1.6-1.05-2.67-2.63-2.67-1.54 0-2.57 1.06-2.57 2.68v3.49l-.07.97.42-.62 1.14-1.29c.19-.22.44-.34.72-.34.58 0 1.07.5 1.07 1.06 0 .28-.1.55-.3.74l-3.27 3.23c-.25.24-.53.34-.81.34s-.56-.12-.8-.34l-3.27-3.22c-.21-.21-.3-.46-.3-.74 0-.55.49-1.05 1.06-1.05.27 0 .53.11.72.32l1.08 1.16.56.77-.08-.99v-3.49c0-2.95 1.87-4.93 4.7-4.93" />
  </svg>
);
export default SvgArrowuturndownsquarefillBold;
