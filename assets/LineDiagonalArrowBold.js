import * as React from "react";
const SvgLinediagonalarrowBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.448 19.232c.59.6 1.55.6 2.13.01l10.81-10.79 1.96 1.95c.75.77 1.86.33 2.14-.72l2.16-8.04c.25-.99-.64-1.85-1.61-1.6l-8.02 2.16c-1.06.28-1.5 1.38-.73 2.13l1.98 1.98-10.82 10.79c-.6.59-.6 1.55 0 2.13" />
  </svg>
);
export default SvgLinediagonalarrowBold;
