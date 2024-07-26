import * as React from "react";
const SvgArrowtriangleupfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M19 17.6c0-.54-.21-1-.53-1.65L11.59 1.64C11.05.53 10.38 0 9.5 0c-.89 0-1.55.53-2.09 1.64L.54 15.95C.21 16.6 0 17.06 0 17.6c0 1.07.82 1.95 2.19 1.95l14.63-.02c1.36 0 2.18-.86 2.18-1.93" />
  </svg>
);
export default SvgArrowtriangleupfillBold;
