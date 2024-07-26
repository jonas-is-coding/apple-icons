import * as React from "react";
const SvgExclamationmarkshieldfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.992 23.715c.24 0 .57-.09.88-.24 6.79-3.4 9.12-5.35 9.12-9.54v-8.52c0-1.64-.54-2.31-1.98-2.92-1.14-.47-5.32-1.9-6.39-2.24a6 6 0 0 0-1.63-.25c-.5 0-1.11.11-1.61.25-1.08.33-5.26 1.77-6.4 2.24-1.43.6-1.98 1.28-1.98 2.92v8.52c0 4.19 2.4 6.02 9.13 9.54.3.16.63.24.86.24m.02-10.74c-.82 0-1.3-.46-1.35-1.28l-.19-5.07c-.03-.88.59-1.49 1.52-1.49.94 0 1.57.61 1.54 1.5l-.2 5.04c-.03.85-.52 1.3-1.32 1.3m0 4.24c-.93 0-1.66-.6-1.66-1.49s.72-1.49 1.66-1.49c.93 0 1.65.6 1.65 1.49 0 .9-.72 1.49-1.65 1.49" />
  </svg>
);
export default SvgExclamationmarkshieldfillBold;
