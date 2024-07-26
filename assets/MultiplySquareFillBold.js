import * as React from "react";
const SvgMultiplysquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m3.45-6.16c-.76 0-1.35-.6-1.35-1.36 0-.34.16-.68.41-.93l2.72-2.73-2.72-2.73c-.25-.26-.41-.58-.41-.92 0-.78.59-1.35 1.35-1.35.4 0 .71.13.97.39l2.72 2.7 2.73-2.7c.27-.29.58-.4.98-.4.75 0 1.33.58 1.33 1.33 0 .35-.13.68-.4.94l-2.71 2.74 2.7 2.72c.27.26.41.59.41.94 0 .76-.58 1.36-1.35 1.36-.39 0-.72-.14-.98-.4l-2.71-2.71-2.69 2.71c-.27.26-.6.4-1 .4" />
  </svg>
);
export default SvgMultiplysquarefillBold;
