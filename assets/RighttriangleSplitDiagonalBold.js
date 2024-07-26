import * as React from "react";
const SvgRighttrianglesplitdiagonalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.51 23.336h18.03c1.91 0 2.8-.89 2.8-2.8V2.505c0-1.59-.98-2.51-2.27-2.51-.88 0-1.56.38-2.27 1.09l-17.7 17.7c-.71.71-1.1 1.41-1.1 2.27 0 1.29.91 2.28 2.51 2.28m17.51-19.09c.05-.07.11-.1.17-.1.08 0 .14.08.14.19v14l-7.2-7.2ZM4.35 20.316c-.11 0-.19-.04-.19-.14 0-.05.02-.1.09-.17l6.86-6.87 7.2 7.18Z" />
  </svg>
);
export default SvgRighttrianglesplitdiagonalBold;
