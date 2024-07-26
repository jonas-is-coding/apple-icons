import * as React from "react";
const SvgArrowupleftandarrowdownrightsquarefillBold = ({
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
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m1.88-10.98c-.6 0-1.08-.48-1.08-1.08v-4.04c0-.93.5-1.41 1.41-1.41h4.03c.6 0 1.08.5 1.08 1.09 0 .6-.48 1.07-1.08 1.07h-.48l-1.41-.18 2.28 2.11c.5.46.48 1.26.01 1.74-.48.48-1.28.5-1.73 0l-2.13-2.3.18 1.43v.49c0 .6-.48 1.08-1.08 1.08m6.11 6.11c-.59 0-1.07-.48-1.07-1.09 0-.6.48-1.07 1.07-1.07h.48l1.42.18-2.29-2.11c-.5-.46-.48-1.26 0-1.74s1.28-.5 1.73 0l2.13 2.3-.18-1.43v-.49c0-.6.48-1.08 1.08-1.08s1.08.48 1.08 1.08v4.04c0 .93-.51 1.41-1.42 1.41Z" />
  </svg>
);
export default SvgArrowupleftandarrowdownrightsquarefillBold;
