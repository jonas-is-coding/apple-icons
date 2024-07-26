import * as React from "react";
const SvgManatsignsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m3.6-5.85c-.68 0-1.09-.42-1.09-1.1v-3.2c0-2.88 1.4-4.99 4.06-5.25v-1.26c0-.37.22-.6.57-.6.33 0 .54.23.54.6v1.26c2.7.25 4.1 2.35 4.1 5.25v3.2c0 .72-.44 1.1-1.09 1.1-.68 0-1.1-.42-1.1-1.1v-3.22c0-1.66-.48-3.06-1.91-3.32v7.02c0 .37-.21.59-.54.59-.35 0-.57-.22-.57-.59v-7c-1.37.28-1.88 1.64-1.88 3.3v3.22c0 .74-.45 1.1-1.09 1.1" />
  </svg>
);
export default SvgManatsignsquarefillBold;
