import * as React from "react";
const SvgPlattertopapplewatchcaseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.922 24.05h9.23c3.59 0 5.92-2.38 5.92-6.04v-7.07h.21c.86 0 1.42-.59 1.42-1.53V7.45c0-.94-.56-1.54-1.42-1.54h-.21c-.05-3.6-2.37-5.91-5.92-5.91h-9.23C2.342 0 .002 2.37.002 6.01v12c0 3.66 2.34 6.04 5.92 6.04m-.05-2.79c-1.93 0-3.07-1.19-3.07-3.2V6c0-2 1.14-3.19 3.07-3.19h9.33c1.93 0 3.08 1.19 3.08 3.19v12.06c0 2.01-1.15 3.2-3.08 3.2ZM4.242 8.12c0 1 .56 1.59 1.48 1.59h9.63c.91 0 1.48-.59 1.48-1.59V5.81c0-.98-.57-1.58-1.48-1.58h-9.63c-.92 0-1.48.6-1.48 1.58Zm1.66-.35V6.16c0-.16.1-.27.26-.27h8.73c.18 0 .27.11.27.27v1.61c0 .16-.09.27-.27.27h-8.73c-.16 0-.26-.11-.26-.27" />
  </svg>
);
export default SvgPlattertopapplewatchcaseBold;
