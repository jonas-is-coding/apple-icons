import * as React from "react";
const SvgPauseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.712 21.12c.96 0 1.72-.75 1.72-1.7V1.7c0-.98-.72-1.7-1.72-1.7-.99 0-1.71.72-1.71 1.7v17.72c0 .95.76 1.7 1.71 1.7m8.59 0c.95 0 1.71-.75 1.71-1.7V1.7c0-.98-.73-1.7-1.71-1.7-.99 0-1.72.72-1.72 1.7v17.72c0 .95.76 1.7 1.72 1.7" />
  </svg>
);
export default SvgPauseBold;
