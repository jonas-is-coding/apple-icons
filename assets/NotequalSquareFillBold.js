import * as React from "react";
const SvgNotequalsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m11.39-10.11c.93 0 1.53.5 1.53 1.33 0 .84-.62 1.33-1.53 1.33h-5.18l-1.18 1.84c-.37.63-1.03.84-1.66.47-.6-.38-.75-1.02-.35-1.67l.43-.64h-.57c-.93 0-1.54-.49-1.54-1.33s.6-1.33 1.54-1.33h2.13l1.4-2.13h-3.53c-.93 0-1.54-.48-1.54-1.32s.6-1.33 1.54-1.33h5.07l1.29-2.06c.38-.64 1.02-.85 1.65-.46.61.37.74 1.01.36 1.65l-.54.87h.68c.93 0 1.53.49 1.53 1.33s-.62 1.32-1.53 1.32h-2.23l-1.4 2.13Z" />
  </svg>
);
export default SvgNotequalsquarefillBold;
