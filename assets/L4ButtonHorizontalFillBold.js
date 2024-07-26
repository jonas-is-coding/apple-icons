import * as React from "react";
const SvgL4ButtonhorizontalfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.352 22.112h9.56c6.98 0 9.35-2.45 9.35-9.24v-3.63c0-6.79-2.37-9.24-9.35-9.24h-9.56c-6.98 0-9.35 2.45-9.35 9.24v3.63c0 6.79 2.37 9.24 9.35 9.24m-.05-6.34c-.65 0-1.02-.41-1.02-1.08v-7.46c0-.58.46-1.03 1.03-1.03s1.04.45 1.04 1.03v6.84h2.01c.47 0 .86.39.86.86 0 .45-.39.84-.86.84Zm9.09.15c-.51 0-.99-.29-.99-1v-.87h-2.24c-.75 0-1.17-.42-1.17-1.14 0-.41.08-.82.27-1.3l1.55-3.65c.37-.97.78-1.75 1.97-1.75.93 0 1.57.53 1.57 1.49v4.72h.25c.54 0 .79.33.79.81 0 .43-.2.82-.79.82h-.25v.87c0 .7-.44 1-.96 1m-.94-3.44v-4.62h-.04l-1.72 4.54v.08Z" />
  </svg>
);
export default SvgL4ButtonhorizontalfillBold;
