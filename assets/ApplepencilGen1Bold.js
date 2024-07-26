import * as React from "react";
const SvgApplepencilgen1Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20.41.543c-.73-.72-1.89-.72-2.6-.01l-1.8 1.78 2.63 2.62 1.78-1.8c.71-.71.71-1.88-.01-2.59m-5.66 3.05L2.24 16.053l-.47.85 2.22 2.22.86-.46 12.5-12.47ZM.06 20.043c-.25.5.33.99.74.77l1.99-1.06-1.65-1.66Z" />
  </svg>
);
export default SvgApplepencilgen1Bold;
