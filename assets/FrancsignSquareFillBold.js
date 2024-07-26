import * as React from "react";
const SvgFrancsignsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m5.28-5.62c-.69 0-1.15-.46-1.15-1.17v-.73h-1.16c-.19 0-.35-.17-.35-.36 0-.2.16-.37.35-.37h1.16v-7.05c0-.75.42-1.2 1.16-1.2h4.9c.61 0 1.01.38 1.01.93 0 .56-.4.94-1.01.94h-3.77v2.68h3.44c.58 0 .95.36.95.89s-.37.89-.95.89h-3.44v1.92h2.58c.19 0 .35.17.35.37 0 .19-.16.36-.35.36h-2.58v.73c0 .71-.46 1.17-1.14 1.17" />
  </svg>
);
export default SvgFrancsignsquarefillBold;
