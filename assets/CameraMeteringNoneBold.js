import * as React from "react";
const SvgCamerameteringnoneBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M24.952 10.252h3.02v-6.14c0-2.66-1.45-4.11-4.14-4.11h-8.89v3.02h8.57c.93 0 1.44.46 1.44 1.45Zm-24.95 0h3.02v-5.78c0-.99.51-1.45 1.44-1.45h8.58V.002h-8.9c-2.68 0-4.14 1.45-4.14 4.11Zm7.74.95c0 .86.6 1.45 1.46 1.45h9.58c.86 0 1.46-.59 1.46-1.45 0-.85-.6-1.44-1.46-1.44h-9.58c-.86 0-1.46.59-1.46 1.44m-3.6 11.2h8.9v-3.02h-8.58c-.93 0-1.44-.46-1.44-1.45v-5.78H.002v6.14c0 2.66 1.46 4.11 4.14 4.11m10.8 0h8.89c2.69 0 4.14-1.45 4.14-4.11v-6.14h-3.02v5.78c0 .99-.51 1.45-1.44 1.45h-8.57Z" />
  </svg>
);
export default SvgCamerameteringnoneBold;
