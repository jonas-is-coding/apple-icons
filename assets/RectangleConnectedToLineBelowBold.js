import * as React from "react";
const SvgRectangleconnectedtolinebelowBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.292 25.56h7.86a3.08 3.08 0 0 0 2.78 1.78c1.23 0 2.29-.73 2.78-1.78h7.87c.72 0 1.29-.58 1.29-1.28 0-.71-.57-1.3-1.29-1.3h-7.87c-.31-.64-.84-1.17-1.48-1.48V19h6.28c2.68 0 4.15-1.46 4.15-4.12V4.11c0-2.66-1.47-4.11-4.15-4.11H4.362C1.692 0 .222 1.45.222 4.11v10.77c0 2.66 1.47 4.12 4.14 4.12h6.29v2.5c-.66.31-1.18.84-1.49 1.48h-7.87c-.72 0-1.29.59-1.29 1.3 0 .7.57 1.28 1.29 1.28m3.41-9.59c-.94 0-1.46-.45-1.46-1.45V4.48c0-1 .52-1.46 1.46-1.46h14.48c.94 0 1.44.46 1.44 1.46v10.04c0 1-.5 1.45-1.44 1.45Z" />
  </svg>
);
export default SvgRectangleconnectedtolinebelowBold;
