import * as React from "react";
const SvgLine3HorizontalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.352 2.75h21.86c.75 0 1.35-.63 1.35-1.37 0-.76-.6-1.38-1.35-1.38H1.352C.602 0 .002.64.002 1.38c0 .73.6 1.37 1.35 1.37m0 5.58h21.86c.75 0 1.35-.63 1.35-1.37 0-.76-.6-1.38-1.35-1.38H1.352c-.75 0-1.35.63-1.35 1.38 0 .73.6 1.37 1.35 1.37m0 5.59h21.86c.75 0 1.35-.64 1.35-1.38 0-.76-.6-1.37-1.35-1.37H1.352c-.75 0-1.35.63-1.35 1.37 0 .73.6 1.38 1.35 1.38" />
  </svg>
);
export default SvgLine3HorizontalBold;
