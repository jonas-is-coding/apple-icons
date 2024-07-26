import * as React from "react";
const SvgConefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M0 20.965c.01 3.01 4.91 5.29 12.46 5.29 7.53 0 12.44-2.28 12.44-5.29 0-.5-.18-1.13-.51-1.72L14.1.965c-.39-.68-1-.97-1.64-.97-.65 0-1.27.29-1.65.97L.52 19.245c-.33.59-.52 1.22-.52 1.72" />
  </svg>
);
export default SvgConefillBold;
