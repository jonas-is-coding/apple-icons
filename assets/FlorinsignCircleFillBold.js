import * as React from "react";
const SvgFlorinsigncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.94-6.97c-.49 0-1.01-.07-1.39-.29-.3-.17-.48-.39-.48-.73 0-.37.21-.62.58-.68.34-.02.55.01 1.01.01 1.04 0 1.54-.55 1.71-1.58l.29-1.73h-1.99c-.36 0-.61-.24-.61-.58s.25-.57.61-.57h2.18l.27-1.64c.35-2.08 1.54-3 3.62-3 .42 0 .96.09 1.35.28.29.15.52.41.52.75 0 .33-.15.52-.41.61-.3.08-.66.06-1.18.06-1.04 0-1.56.51-1.73 1.52l-.24 1.42h2.17c.37 0 .64.23.64.57s-.27.58-.64.58h-2.35l-.34 1.99c-.35 2.09-1.46 3.01-3.59 3.01" />
  </svg>
);
export default SvgFlorinsigncirclefillBold;
