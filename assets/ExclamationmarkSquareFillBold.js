import * as React from "react";
const SvgExclamationmarksquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.14-9.44c-.82 0-1.3-.46-1.34-1.29l-.19-5.06c-.04-.9.58-1.49 1.52-1.49.93 0 1.57.61 1.53 1.49l-.19 5.05c-.05.84-.52 1.3-1.33 1.3m0 4.23c-.92 0-1.66-.59-1.66-1.49 0-.88.73-1.48 1.66-1.48.94 0 1.66.6 1.66 1.48 0 .9-.72 1.49-1.66 1.49" />
  </svg>
);
export default SvgExclamationmarksquarefillBold;
