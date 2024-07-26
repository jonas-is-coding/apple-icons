import * as React from "react";
const SvgCharactersquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m3.49-5.58c-.87 0-1.37-.5-1.37-1.32 0-.23.04-.53.17-.94l2.6-7.33c.39-1.19 1.11-1.75 2.22-1.75 1.14 0 1.89.56 2.27 1.75l2.59 7.33c.14.41.19.71.19.94 0 .82-.5 1.32-1.37 1.32-.73 0-1.19-.38-1.41-1.25l-.49-1.54h-3.5l-.5 1.54c-.22.87-.68 1.25-1.4 1.25m2.41-4.81h2.47l-1.17-3.95h-.13Z" />
  </svg>
);
export default SvgCharactersquarefillBold;
