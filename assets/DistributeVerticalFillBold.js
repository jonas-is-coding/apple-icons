import * as React from "react";
const SvgDistributeverticalfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.392 2.828h27.34c.76 0 1.39-.65 1.39-1.41 0-.77-.63-1.42-1.39-1.42H1.392c-.77 0-1.39.65-1.39 1.42 0 .76.62 1.41 1.39 1.41m4.51 14.41h18.31c1.94 0 3.13-1.17 3.13-3.09v-3.39c0-1.91-1.19-3.08-3.13-3.08H5.902c-1.94 0-3.12 1.17-3.12 3.08v3.39c0 1.92 1.18 3.09 3.12 3.09m-4.51 4.85c-.77 0-1.39.65-1.39 1.41 0 .77.62 1.42 1.39 1.42h27.34c.76 0 1.39-.65 1.39-1.42 0-.76-.63-1.41-1.39-1.41Z" />
  </svg>
);
export default SvgDistributeverticalfillBold;
