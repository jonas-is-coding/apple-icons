import * as React from "react";
const SvgAltBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.712 21.529h5.44c1.24 0 2.24-.66 2.79-1.82l7.47-15.97q.21-.42.72-.42h4.72c.96 0 1.71-.73 1.71-1.67 0-.92-.76-1.65-1.71-1.65h-5.48c-1.34 0-2.17.54-2.78 1.81l-7.5 15.98c-.13.28-.37.42-.68.42h-4.7c-.97 0-1.71.73-1.71 1.67 0 .92.75 1.65 1.71 1.65m14.07 0h7.07c.97 0 1.7-.72 1.7-1.65 0-.94-.73-1.66-1.7-1.66h-7.07c-.97 0-1.7.72-1.7 1.66 0 .93.74 1.65 1.7 1.65" />
  </svg>
);
export default SvgAltBold;
