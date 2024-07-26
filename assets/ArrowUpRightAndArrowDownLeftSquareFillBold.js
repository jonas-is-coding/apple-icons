import * as React from "react";
const SvgArrowuprightandarrowdownleftsquarefillBold = ({
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
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m12.41-11.2h-3.88c-.91 0-1.4-.48-1.4-1.4v-3.89c0-.59.48-1.06 1.07-1.06.58 0 1.05.47 1.05 1.06v.41l-.17 1.41 2.46-2.61c.44-.5 1.22-.48 1.7-.01.47.48.48 1.25-.01 1.71l-2.61 2.42 1.39-.17h.4c.58 0 1.06.46 1.06 1.05 0 .6-.48 1.08-1.06 1.08m-6.34 6.34c-.59 0-1.06-.47-1.06-1.07v-.41l.18-1.4-2.45 2.62c-.46.49-1.23.47-1.71 0-.47-.47-.48-1.25.01-1.7l2.6-2.44-1.38.18h-.4c-.59 0-1.07-.47-1.07-1.05 0-.6.48-1.07 1.07-1.07h3.88c.9 0 1.39.47 1.39 1.38v3.89c0 .6-.48 1.07-1.06 1.07" />
  </svg>
);
export default SvgArrowuprightandarrowdownleftsquarefillBold;
