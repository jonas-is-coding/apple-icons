import * as React from "react";
const SvgCrossvialfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.292 29.398h8.6c2.57 0 4.28-1.73 4.28-4.33v-13.08c0-2.58-1.69-4.32-4.22-4.35v-1.18c1.47 0 2.35-.9 2.35-2.44v-1.59c0-1.51-.88-2.43-2.38-2.43h-8.67c-1.5 0-2.39.92-2.39 2.43v1.59c0 1.52.88 2.43 2.37 2.44v1.18c-2.51 0-4.23 1.75-4.23 4.35v13.08c0 2.6 1.72 4.33 4.29 4.33m-.19-10.2v-1.34c0-.62.42-1.03 1.04-1.03h1.74v-1.73c0-.64.41-1.05 1.04-1.05h1.32c.64 0 1.05.41 1.05 1.05v1.73h1.73c.62 0 1.04.41 1.04 1.03v1.34c0 .62-.42 1.04-1.04 1.04h-1.73v1.72c0 .64-.41 1.05-1.05 1.05h-1.32c-.63 0-1.04-.41-1.04-1.05v-1.72h-1.74c-.62 0-1.04-.42-1.04-1.04" />
  </svg>
);
export default SvgCrossvialfillBold;
