import * as React from "react";
const SvgCursorarrowslashsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m10.35-10.2-6.55-6.54v-.6c.02-.58.61-.8 1.01-.4l6.39 6.47c.41.43.15 1.04-.42 1.05Zm1.77 4.96L5.312 6.224a.726.726 0 0 1 0-.99c.28-.25.71-.25.99 0l10.94 10.95c.27.28.27.7 0 .98-.26.26-.71.25-.98 0m-3.23.7c-.41.15-.72-.08-.86-.43l-1.75-4.37-1.52 1.58c-.41.44-1.11.22-1.1-.41l.07-4.21 6.33 6.32.27.65c.05.16-.05.33-.25.42Z" />
  </svg>
);
export default SvgCursorarrowslashsquarefillBold;
