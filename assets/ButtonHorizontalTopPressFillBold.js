import * as React from "react";
const SvgButtonhorizontaltoppressfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m15.532 13.238 3.49-3.96c.72-.82.29-1.95-.87-1.95h-2.06v-5.94c0-.84-.61-1.39-1.38-1.39-.78 0-1.39.55-1.39 1.39v5.94h-2.08c-1.1 0-1.57 1.12-.85 1.95l3.48 3.96c.47.54 1.18.54 1.66 0m-8.3 10.67h14.96c4.34 0 7.23-2.59 7.23-6.61 0-4.03-2.89-6.62-7.23-6.62h-2.05l-3.29 3.74c-1.18 1.32-3.14 1.32-4.3-.02l-3.28-3.72h-2.04c-4.34 0-7.23 2.59-7.23 6.62 0 4.02 2.89 6.61 7.23 6.61m0 4.93h14.96c4.18 0 6.91-2.13 7.2-6.24-1.58 1.93-4.13 3.08-7.2 3.08H7.232c-3.08 0-5.61-1.15-7.2-3.08.3 4.11 3.03 6.24 7.2 6.24" />
  </svg>
);
export default SvgButtonhorizontaltoppressfillBold;
