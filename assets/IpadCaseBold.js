import * as React from "react";
const SvgIpadcaseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 24.056c0 2.36 1.5 3.82 3.9 3.82h13.32c2.4 0 3.91-1.46 3.91-3.82V3.816c0-2.35-1.51-3.82-3.91-3.82H3.902c-2.4 0-3.9 1.47-3.9 3.82Zm8.79-.26c-.57 0-1.06-.46-1.06-1.04V5.116c0-.57.49-1.04 1.06-1.04.58 0 1.05.47 1.05 1.04v17.64c0 .58-.47 1.04-1.05 1.04m6.52 0c-.58 0-1.04-.46-1.04-1.04V5.116c0-.57.46-1.04 1.04-1.04s1.06.47 1.06 1.04v17.64c0 .58-.48 1.04-1.06 1.04" />
  </svg>
);
export default SvgIpadcaseBold;
