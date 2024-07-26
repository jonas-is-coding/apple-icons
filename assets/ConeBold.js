import * as React from "react";
const SvgConeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M0 20.965c.01 3.01 4.91 5.29 12.46 5.29 7.53 0 12.44-2.28 12.44-5.29 0-.5-.18-1.13-.51-1.72L14.1.965c-.38-.68-1-.97-1.64-.97-.66 0-1.27.29-1.65.97L.52 19.245c-.33.59-.52 1.22-.52 1.72m3.08-.02c0-.1.08-.28.23-.54l8.91-15.96c.06-.1.14-.16.24-.16.08 0 .16.06.22.16l8.92 15.96c.14.26.22.44.22.54 0 1.22-4.07 2.48-9.36 2.48-5.31 0-9.38-1.26-9.38-2.48" />
  </svg>
);
export default SvgConeBold;
