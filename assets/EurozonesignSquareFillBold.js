import * as React from "react";
const SvgEurozonesignsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.17-6.7c-.6 0-.92-.36-.92-.97v-7.06c0-.6.33-.97.92-.97h3.36c.5 0 .82.26.82.75s-.32.77-.82.77h-2.42v2.23h2.33c.43 0 .73.25.73.7s-.29.71-.73.71h-2.33v2.32h2.42c.5 0 .82.29.82.77 0 .49-.32.75-.82.75Zm6.32 0c-.51 0-.92-.28-.92-.84 0-.26.08-.53.19-.74l3.41-5.84v-.06h-2.8c-.48 0-.82-.28-.82-.77 0-.48.34-.75.82-.75h3.94c.6 0 .93.34.93.88 0 .31-.11.54-.23.72l-3.35 5.82v.06h2.99c.47 0 .73.3.73.77 0 .46-.26.75-.73.75Z" />
  </svg>
);
export default SvgEurozonesignsquarefillBold;
