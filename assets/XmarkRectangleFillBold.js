import * as React from "react";
const SvgXmarkrectanglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m6.16-6.16a1.338 1.338 0 0 1-.94-2.29l2.73-2.73-2.73-2.73c-.26-.25-.4-.58-.4-.92 0-.78.59-1.35 1.34-1.35.41 0 .71.13.98.39l2.71 2.7 2.73-2.7c.28-.27.59-.4.99-.4.75 0 1.33.58 1.33 1.35 0 .34-.13.66-.4.92l-2.73 2.74 2.72 2.72c.27.26.4.6.4.94 0 .76-.59 1.36-1.34 1.36-.41 0-.73-.13-.99-.4l-2.71-2.71-2.69 2.71c-.26.27-.59.4-1 .4" />
  </svg>
);
export default SvgXmarkrectanglefillBold;
