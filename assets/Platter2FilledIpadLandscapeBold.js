import * as React from "react";
const SvgPlatter2FilledipadlandscapeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.152 22.402h20.26c2.68 0 4.14-1.46 4.14-4.11V4.112c0-2.66-1.46-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.47 4.11 4.15 4.11m.32-3.02c-.94 0-1.44-.46-1.44-1.45V4.492c0-1 .5-1.47 1.43-1.47h19.62c.94 0 1.44.47 1.44 1.47v13.44c0 .99-.5 1.45-1.44 1.45Zm1.93-5.41h5.81c.62 0 1.04-.43 1.04-1.07v-3.4c0-.64-.42-1.05-1.04-1.05h-5.81c-.62 0-1.05.41-1.05 1.05v3.4c0 .64.43 1.07 1.05 1.07m9.85 0h5.83c.62 0 1.03-.43 1.03-1.07v-3.4c0-.64-.41-1.05-1.03-1.05h-5.83c-.62 0-1.03.41-1.03 1.05v3.4c0 .64.41 1.07 1.03 1.07" />
  </svg>
);
export default SvgPlatter2FilledipadlandscapeBold;
