import * as React from "react";
const SvgDivideBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.022 4.49c1.28 0 2.29-.93 2.29-2.23 0-1.28-1.01-2.26-2.29-2.26s-2.28.98-2.28 2.26c0 1.3 1 2.23 2.28 2.23m-8.28 6.43h16.56c.94 0 1.76-.81 1.76-1.78 0-.96-.82-1.77-1.76-1.77H1.742c-.89 0-1.74.81-1.74 1.77 0 .97.85 1.78 1.74 1.78m8.28 7.54c1.28 0 2.29-.94 2.29-2.23 0-1.28-1.01-2.26-2.29-2.26s-2.28.98-2.28 2.26c0 1.29 1 2.23 2.28 2.23" />
  </svg>
);
export default SvgDivideBold;
