import * as React from "react";
const SvgArrowrightsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m13.3-11.21c0 .38-.13.74-.48 1.11l-3.81 3.95c-.24.23-.5.37-.86.37-.68 0-1.16-.57-1.16-1.19 0-.35.15-.69.41-.93l1.55-1.46.88-.58-1.78.13h-5.83c-.74 0-1.37-.62-1.37-1.4 0-.79.63-1.4 1.37-1.4h5.83l1.78.12-.88-.57-1.55-1.47c-.26-.23-.41-.55-.41-.9 0-.63.48-1.21 1.16-1.21.36 0 .62.13.86.38l3.81 3.95c.35.37.48.72.48 1.1" />
  </svg>
);
export default SvgArrowrightsquarefillBold;
