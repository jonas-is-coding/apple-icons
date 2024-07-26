import * as React from "react";
const SvgNoteBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h16.32c2.68 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.46-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.22-3.02c-.88 0-1.34-.42-1.34-1.35V7.612c0-.92.46-1.34 1.34-1.34h15.88c.86 0 1.33.42 1.33 1.34v10.42c0 .93-.47 1.35-1.33 1.35Z" />
  </svg>
);
export default SvgNoteBold;
