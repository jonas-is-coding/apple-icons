import * as React from "react";
const SvgBoldBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.302 17.298h6.36c3.74 0 6.14-1.98 6.14-4.99 0-2.32-1.84-4.05-4.28-4.15v-.1c2.03-.26 3.48-1.78 3.48-3.72 0-2.7-2.1-4.34-5.58-4.34h-6.12c-1.42 0-2.3.83-2.3 2.29v12.72c0 1.46.88 2.29 2.3 2.29m2.55-10.23v-3.93h1.98c1.51 0 2.41.72 2.41 1.92 0 1.25-.98 2.01-2.62 2.01Zm0 7.11v-4.42h2.09c1.86 0 2.93.78 2.93 2.18 0 1.46-.91 2.24-2.77 2.24Z" />
  </svg>
);
export default SvgBoldBold;
