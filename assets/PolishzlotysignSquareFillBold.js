import * as React from "react";
const SvgPolishzlotysignsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m8.09-10.95c0-.22.12-.43.38-.57l.71-.37v-3.59c0-.62.38-.99.98-.99.57 0 .96.37.96 1v2.58l.34-.17c.41-.17.76.18.76.53 0 .2-.11.41-.39.56l-.71.37v4.34c0 .62-.39 1-.96 1-.6 0-.98-.38-.98-1v-3.34l-.26.13c-.46.21-.83-.12-.83-.48m-5.05 4.53c-.48 0-.77-.32-.77-.74 0-.24.08-.41.24-.65l2.78-4.19v-.16h-2.26c-.46 0-.76-.28-.76-.72 0-.43.3-.71.76-.71h3.68c.56 0 .86.34.86.83 0 .29-.1.47-.27.76l-2.5 4.01v.15h2.1c.45 0 .76.28.76.71s-.31.71-.76.71Z" />
  </svg>
);
export default SvgPolishzlotysignsquarefillBold;
