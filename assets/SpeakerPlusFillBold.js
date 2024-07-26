import * as React from "react";
const SvgSpeakerplusfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.162 21.495c1.04 0 1.84-.8 1.84-1.84V1.875c0-1.04-.8-1.88-1.85-1.88-.68 0-1.21.27-1.93.95l-4.74 4.42c-.06.06-.14.1-.22.1h-3.27c-1.94 0-2.99 1.1-2.99 3.12v4.34c0 2.03 1.05 3.12 2.99 3.12h3.25c.1 0 .17.02.24.08l4.74 4.45c.68.64 1.24.92 1.94.92m5.38-10.76c0 .75.54 1.29 1.29 1.29h2.8v2.81c0 .74.54 1.28 1.29 1.28s1.3-.54 1.3-1.28v-2.81h2.81c.74 0 1.28-.54 1.28-1.29 0-.76-.54-1.31-1.28-1.31h-2.81v-2.8c0-.75-.55-1.28-1.3-1.28s-1.29.53-1.29 1.28v2.8h-2.8c-.75 0-1.29.55-1.29 1.31" />
  </svg>
);
export default SvgSpeakerplusfillBold;
