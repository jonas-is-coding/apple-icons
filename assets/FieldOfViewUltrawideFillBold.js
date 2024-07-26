import * as React from "react";
const SvgFieldofviewultrawidefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m1.418 12.878 13.72 7.42c1.15.62 1.96 1 2.85 1s1.7-.38 2.85-1l13.72-7.42c1.39-.76 1.87-2.48.91-3.85a21.42 21.42 0 0 0-17.48-9.03c-7.2 0-13.61 3.56-17.49 9.03-.96 1.37-.48 3.09.92 3.85" />
  </svg>
);
export default SvgFieldofviewultrawidefillBold;
