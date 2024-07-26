import * as React from "react";
const Svg1SquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm7.48-2.72c.88 0 1.45-.49 1.45-1.52v-7.88c0-.92-.64-1.53-1.63-1.53-.62 0-1.11.17-1.78.61l-1.9 1.26c-.41.27-.59.56-.59 1.01 0 .56.41 1.01.96 1.01.24 0 .41-.04.75-.27l1.2-.8h.1v6.59c0 1.03.57 1.52 1.44 1.52" />
  </svg>
);
export default Svg1SquareBold;
