import * as React from "react";
const SvgCapsuleonrectangleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 19.499h1.69c1.41 3.62 4.83 5.84 9.4 5.84h5.9c6.04 0 10.09-3.88 10.09-9.76 0-4.8-2.7-8.27-6.98-9.39v-2.08c0-2.66-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v11.29c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.46V4.489c0-1 .51-1.47 1.44-1.47h15.32c.94 0 1.44.47 1.44 1.47v1.32h-5.99c-6.06 0-10.09 3.89-10.09 9.77 0 .3.01.6.04.9Zm10.78 5.86c-4.33 0-7.1-2.63-7.1-6.76s2.77-6.78 7.1-6.78h5.9c4.32 0 7.09 2.65 7.09 6.78s-2.77 6.76-7.09 6.76Z" />
  </svg>
);
export default SvgCapsuleonrectangleBold;
