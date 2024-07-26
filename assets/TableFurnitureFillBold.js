import * as React from "react";
const SvgTablefurniturefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 1.348v17.04c0 .81.54 1.35 1.35 1.35h4.52c.81 0 1.36-.53 1.36-1.35V7.228h16.05v11.16c0 .82.55 1.35 1.36 1.35h4.53c.8 0 1.34-.54 1.34-1.35V1.348c0-.8-.54-1.35-1.33-1.35H1.352c-.81 0-1.35.55-1.35 1.35" />
  </svg>
);
export default SvgTablefurniturefillBold;
