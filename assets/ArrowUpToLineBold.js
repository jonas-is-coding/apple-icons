import * as React from "react";
const SvgArrowuptolineBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.812 12.645c0-.45-.18-.87-.53-1.22l-7.62-7.64c-.29-.29-.72-.48-1.15-.5h7.68c.93 0 1.62-.73 1.62-1.64 0-.92-.69-1.64-1.62-1.64H1.632c-.93 0-1.63.72-1.63 1.64 0 .91.7 1.64 1.63 1.64h7.67c-.42.02-.85.21-1.15.5l-7.62 7.64c-.36.35-.53.77-.53 1.22 0 .96.69 1.64 1.6 1.64.52 0 .92-.22 1.22-.53l2.64-2.62 2.35-2.72-.1 2.54v13.01c0 1.05.69 1.76 1.7 1.76 1.02 0 1.7-.71 1.7-1.76v-13.01l-.11-2.54 2.36 2.72 2.62 2.62c.32.31.72.53 1.22.53.92 0 1.61-.68 1.61-1.64" />
  </svg>
);
export default SvgArrowuptolineBold;
