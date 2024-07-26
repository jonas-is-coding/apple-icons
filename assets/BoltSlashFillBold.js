import * as React from "react";
const SvgBoltslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m16.479 16.269 2.56-3.11c.24-.29.34-.56.34-.86 0-.54-.41-.93-.98-.94l-6.8-.1 3.41-9.69c.5-1.41-.92-2.15-1.85-1.01l-5.6 6.82Zm2.54 7.62c.39.38 1.03.39 1.4 0a.99.99 0 0 0 0-1.39L1.689 3.779a.996.996 0 0 0-1.41 0c-.37.38-.37 1.02 0 1.4Zm-11.45 3.22 5.59-6.81-8.92-8.89-2.55 3.1c-.24.29-.34.56-.34.86 0 .54.41.94.98.94l6.8.1-3.41 9.69c-.48 1.42.91 2.15 1.85 1.01" />
  </svg>
);
export default SvgBoltslashfillBold;
