import * as React from "react";
const SvgArrowdownforwardtopleadingrectanglefillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m7.94-16.96c.64 0 1.07.49 1.07 1.2v5.04c0 .94-.54 1.42-1.43 1.42h-5.07c-.73 0-1.21-.41-1.21-1.07 0-.67.48-1.09 1.2-1.09h1.58l1.36.19-1.54-1.38-3.19-3.19c-.25-.25-.39-.57-.39-.88 0-.74.53-1.22 1.22-1.22.35 0 .66.12.94.4l3.15 3.15 1.37 1.54-.15-1.43v-1.48c0-.72.42-1.2 1.09-1.2" />
  </svg>
);
export default SvgArrowdownforwardtopleadingrectanglefillBold;
