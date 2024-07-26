import * as React from "react";
const SvgStarsquareonsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 15.937c0 2.61 1.42 4.11 4.14 4.11h.32v-9.83c0-3.71 2.31-6.01 6.05-6.01h9.54v-.11c0-2.63-1.47-4.1-4.14-4.1H4.142c-2.68 0-4.14 1.46-4.14 4.12Zm10.51 10.22h11.77c2.67 0 4.13-1.45 4.13-4.11v-11.83c0-2.66-1.46-4.11-4.13-4.11h-11.77c-2.68 0-4.15 1.45-4.15 4.11v11.83c0 2.66 1.47 4.11 4.15 4.11m3.08-4.72c-.65.49-1.37 0-1.11-.8l1.11-3.33-2.85-2.04c-.57-.42-.44-1.33.43-1.32l3.5.04 1.07-3.35c.25-.78 1.1-.78 1.34 0l1.08 3.35 3.49-.04c.9-.01 1 .9.43 1.32l-2.84 2.04 1.1 3.33c.27.82-.44 1.28-1.1.8l-2.82-2.08Z" />
  </svg>
);
export default SvgStarsquareonsquarefillBold;
