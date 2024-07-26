import * as React from "react";
const SvgArrowturnupleftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20.522 19.185c1.11 0 1.58-.88 1.71-1.62.1-.66.14-1.31.14-1.99 0-5.25-2.32-7.86-7.51-7.86h-7.01l-2.67.15 2.69-2.42 2.62-2.62c.31-.31.52-.7.52-1.22 0-.91-.68-1.61-1.67-1.61-.41 0-.83.18-1.2.54l-7.61 7.62c-.33.32-.53.8-.53 1.25 0 .46.2.94.53 1.26l7.62 7.63c.36.34.78.53 1.19.53.99 0 1.67-.71 1.67-1.62 0-.51-.22-.9-.52-1.22l-2.62-2.61-2.69-2.43 2.67.16h6.75c3.18 0 4.35 1.3 4.35 4.5 0 .81-.06 1.4-.06 1.9 0 1.01.64 1.68 1.63 1.68" />
  </svg>
);
export default SvgArrowturnupleftBold;
