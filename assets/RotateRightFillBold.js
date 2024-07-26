import * as React from "react";
const SvgRotaterightfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.03 11.634c.57 0 1.06-.47 1.06-1.05v-2.01c0-2.43 1.6-4.17 3.98-4.17h.63v1.5c0 .93.83 1.22 1.56.66l3.28-2.47c.52-.37.51-.94 0-1.32L8.26.284c-.74-.56-1.56-.28-1.56.69v1.46h-.6c-3.55 0-6.1 2.52-6.1 6.14v2.01c0 .58.47 1.05 1.03 1.05m19.93 15.79c2.35 0 3.64-1.26 3.64-3.62v-11.54c0-2.37-1.29-3.63-3.64-3.63H9.41c-2.33 0-3.62 1.26-3.62 3.63v11.54c0 2.36 1.29 3.62 3.62 3.62Z" />
  </svg>
);
export default SvgRotaterightfillBold;
