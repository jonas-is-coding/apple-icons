import * as React from "react";
const SvgArrowdownforwardBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.292 4.79c0-.98-.75-1.74-1.66-1.74-.92 0-1.62.76-1.62 1.72v4.48l.16 3.72-1.82-2.05L2.972.56C2.602.2 2.172 0 1.722 0c-.9 0-1.72.83-1.72 1.72 0 .45.21.88.57 1.26l10.35 10.37 2.05 1.81-3.85-.14h-4.35c-.96 0-1.72.71-1.72 1.61 0 .91.73 1.66 1.73 1.66h11.74c1.07 0 1.78-.71 1.78-1.77Z" />
  </svg>
);
export default SvgArrowdownforwardBold;
