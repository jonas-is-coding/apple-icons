import * as React from "react";
const SvgArrowuturnrightsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.408h14.13c2.68 0 4.13-1.45 4.13-4.1V4.118c0-2.65-1.45-4.12-4.13-4.12H4.142c-2.68 0-4.14 1.45-4.14 4.12v14.19c0 2.65 1.46 4.1 4.14 4.1m1-9.73c0-2.81 1.97-4.69 4.94-4.69h3.49l.98.07-.76-.55-1.17-1.07c-.2-.19-.32-.46-.32-.73 0-.58.5-1.07 1.06-1.07.28 0 .53.11.72.32l3.24 3.27c.22.22.34.5.34.8 0 .28-.11.56-.34.79l-3.24 3.28c-.18.19-.45.3-.73.3-.57 0-1.06-.48-1.06-1.07 0-.27.12-.53.33-.73l1.3-1.12.62-.42-.97.07h-3.49c-1.62 0-2.69 1.03-2.69 2.55 0 1.6 1.08 2.65 2.67 2.65h1.73c.74 0 1.22.43 1.22 1.09 0 .67-.48 1.12-1.22 1.12h-1.73c-2.95 0-4.92-1.93-4.92-4.86" />
  </svg>
);
export default SvgArrowuturnrightsquarefillBold;
