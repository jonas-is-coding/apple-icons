import * as React from "react";
const SvgButtonangledtopverticalleftfillBold = ({
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
    <path d="M7.552 26.203h10.35c2.56 0 4.08-1.51 4.08-4.05V4.063c0-2.48-1.57-4.06-4.05-4.06h-3.65c-1.95 0-3.64.51-5.2 1.95l-7.41 6.81c-1.12 1.02-1.67 2.48-1.67 4.22v5.67c0 4.55 2.99 7.55 7.55 7.55" />
  </svg>
);
export default SvgButtonangledtopverticalleftfillBold;
