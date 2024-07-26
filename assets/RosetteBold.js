import * as React from "react";
const SvgRosetteBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 10.115c0 3.1 1.38 5.87 3.55 7.71l.01 8.01c0 1.01.63 1.49 1.4 1.49.53 0 .92-.23 1.33-.64l3.54-3.52c.14-.14.27-.2.39-.2.13 0 .25.06.4.2l3.53 3.52c.41.4.81.64 1.34.64.76 0 1.4-.48 1.4-1.49v-8.26a10.1 10.1 0 0 0 3.28-7.46c.01-5.63-4.49-10.12-10.08-10.12-5.62 0-10.09 4.49-10.09 10.12m3.07 0c-.01-3.92 3.08-7.08 7.02-7.08 3.92 0 7.02 3.16 7.03 7.08 0 3.89-3.11 7.06-7.03 7.05-3.94 0-7.03-3.16-7.02-7.05" />
  </svg>
);
export default SvgRosetteBold;
