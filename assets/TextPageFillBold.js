import * as React from "react";
const SvgTextpagefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 21.652c0 2.69 1.45 4.14 4.11 4.14h12.55c2.66 0 4.12-1.45 4.12-4.14V4.142c0-2.68-1.46-4.14-4.12-4.14H4.112c-2.66 0-4.11 1.46-4.11 4.14Zm6.17-14.2a.82.82 0 0 1-.84-.84c0-.46.35-.81.84-.81h8.45c.47 0 .82.35.82.81 0 .47-.35.84-.82.84Zm0 4.07c-.49 0-.84-.38-.84-.85 0-.45.35-.8.84-.8h8.45c.47 0 .82.35.82.8 0 .47-.35.85-.82.85Zm0 4.05c-.49 0-.84-.35-.84-.81s.35-.83.84-.83h4.26c.47 0 .82.37.82.83s-.35.81-.82.81Z" />
  </svg>
);
export default SvgTextpagefillBold;
