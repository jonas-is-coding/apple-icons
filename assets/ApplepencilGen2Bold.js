import * as React from "react";
const SvgApplepencilgen2Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m1.76 16.903 2.22 2.22.87-.46 15.56-15.53c.71-.72.71-1.88-.01-2.59-.72-.72-1.89-.72-2.59-.01L2.23 16.053Zm-1.7 3.14c-.25.5.32.99.74.77l1.99-1.06-1.66-1.66Z" />
  </svg>
);
export default SvgApplepencilgen2Bold;
