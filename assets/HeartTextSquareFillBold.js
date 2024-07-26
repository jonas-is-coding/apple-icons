import * as React from "react";
const SvgHearttextsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m1.73-18.71c.64 0 1.11.37 1.36.82.24-.45.73-.82 1.35-.82.92 0 1.63.71 1.63 1.76 0 1.68-1.9 3.05-2.65 3.48-.1.05-.23.12-.33.12-.09 0-.22-.05-.33-.12-.74-.5-2.66-1.8-2.66-3.48 0-1.05.73-1.76 1.63-1.76m-.79 10.58c-.48 0-.84-.36-.84-.83 0-.45.36-.8.84-.8h11.29c.47 0 .82.35.82.8 0 .47-.35.83-.82.83Zm0 4.04c-.48 0-.84-.36-.84-.81 0-.47.36-.83.84-.83h8.55c.47 0 .82.36.82.83 0 .45-.35.81-.82.81Z" />
  </svg>
);
export default SvgHearttextsquarefillBold;
