import * as React from "react";
const SvgArrowdownleftandarrowuprightsquarefillBold = ({
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
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m12.36-10.98c-.6 0-1.08-.48-1.08-1.08v-.49l.18-1.43-2.13 2.3c-.45.5-1.25.48-1.73 0s-.5-1.28 0-1.74l2.29-2.11-1.42.18h-.48c-.59 0-1.07-.47-1.07-1.07 0-.59.48-1.09 1.07-1.09h4.03c.91 0 1.42.48 1.42 1.41v4.04c0 .6-.48 1.08-1.08 1.08m-6.12 6.11h-4.03c-.91 0-1.41-.48-1.41-1.41v-4.04c0-.6.48-1.08 1.08-1.08s1.08.48 1.08 1.08v.49l-.18 1.43 2.13-2.3c.45-.5 1.25-.48 1.73 0 .47.48.49 1.28-.01 1.74l-2.28 2.11 1.41-.18h.48c.6 0 1.08.47 1.08 1.07 0 .61-.48 1.09-1.08 1.09" />
  </svg>
);
export default SvgArrowdownleftandarrowuprightsquarefillBold;
