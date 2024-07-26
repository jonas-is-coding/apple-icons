import * as React from "react";
const SvgTablecellsBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m-1.12-17.93c0-.99.51-1.45 1.44-1.45h8.08v3.6h-9.52Zm20.49-1.45c.93 0 1.44.46 1.44 1.45v2.15h-9.52v-3.6Zm-20.49 10.01v-3.67h9.52v3.67Zm12.41 0v-3.67h9.52v3.67Zm-10.97 6.35c-.93 0-1.44-.46-1.44-1.45v-2.15h9.52v3.6Zm20.49-1.45c0 .99-.51 1.45-1.44 1.45h-8.08v-3.6h9.52Z" />
  </svg>
);
export default SvgTablecellsBold;
