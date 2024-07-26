import * as React from "react";
const SvgDoorrighthandclosedBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.282 25.663c.83 0 1.51-.68 1.51-1.51V3.313c0-2.04-1.28-3.31-3.34-3.31h-13.1c-2.07 0-3.35 1.27-3.35 3.31v20.84c0 .83.68 1.51 1.51 1.51s1.51-.68 1.51-1.51V3.693c0-.4.26-.66.66-.66h12.43c.4 0 .66.26.66.66v20.46c0 .83.68 1.51 1.51 1.51m-3.29-.66c.18 0 .35-.15.35-.35V4.813c0-.2-.17-.35-.35-.35H4.812c-.19 0-.36.15-.36.35v19.84c0 .2.17.35.36.35Zm-7.7-9.51a.95.95 0 0 1-.95-.95c0-.53.42-.95.95-.95a.95.95 0 1 1 0 1.9" />
  </svg>
);
export default SvgDoorrighthandclosedBold;
