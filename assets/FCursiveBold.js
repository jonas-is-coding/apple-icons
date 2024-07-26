import * as React from "react";
const SvgFcursiveBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.392 20.799c2.98 0 4.95-1.72 5.43-5.08l.66-4.57h4.71c.9 0 1.57-.66 1.57-1.54 0-.89-.69-1.55-1.58-1.55h-4.27l.35-2.43c.27-1.89.95-2.55 2.23-2.55 1.04 0 1.58.14 2.07.14.86 0 1.47-.58 1.47-1.46 0-1.31-1.55-1.76-3.4-1.76-2.98 0-4.96 1.72-5.44 5.1l-.42 2.96h-4.01c-.9 0-1.57.66-1.57 1.55 0 .88.68 1.54 1.59 1.54h3.56l-.58 4.04c-.27 1.87-.95 2.54-2.22 2.54-1.05 0-1.57-.15-2.08-.15-.85 0-1.46.59-1.46 1.48 0 1.31 1.55 1.74 3.39 1.74" />
  </svg>
);
export default SvgFcursiveBold;
