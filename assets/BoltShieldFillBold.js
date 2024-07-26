import * as React from "react";
const SvgBoltshieldfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.992 23.715c.24 0 .57-.09.88-.24 6.79-3.4 9.12-5.35 9.12-9.54v-8.52c0-1.64-.54-2.31-1.98-2.92-1.14-.47-5.32-1.9-6.39-2.24a6 6 0 0 0-1.63-.25c-.5 0-1.11.11-1.61.25-1.08.33-5.26 1.77-6.4 2.24-1.43.6-1.98 1.28-1.98 2.92v8.52c0 4.19 2.4 6.02 9.13 9.54.3.16.63.24.86.24m-5.21-11.71c0-.19.08-.38.22-.54l6.46-7.91c.61-.73 1.58-.21 1.24.69l-2.04 5.38h3.83c.38 0 .67.28.67.64 0 .19-.07.39-.21.55l-6.46 7.9c-.6.73-1.59.21-1.25-.68l2.05-5.39h-3.83c-.39 0-.68-.28-.68-.64" />
  </svg>
);
export default SvgBoltshieldfillBold;
