import * as React from "react";
const SvgHatwidebrimfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M16.992 21.81c10.3 0 16.99-3.63 16.99-8.6 0-3.5-3.61-6.37-9.06-7.12-.96-3.86-3.65-6.09-7.93-6.09s-6.97 2.23-7.93 6.09c-5.46.75-9.06 3.62-9.06 7.12 0 4.97 6.69 8.6 16.99 8.6m-.01-6.67c-3.53 0-6.39-.88-8.04-2.3-.18-1.32-.19-3.02-.04-4.26 2.24 1.67 5.13 2.42 8.08 2.42 2.94 0 5.83-.75 8.07-2.42.16 1.24.14 2.94-.04 4.26-1.64 1.42-4.5 2.3-8.03 2.3" />
  </svg>
);
export default SvgHatwidebrimfillBold;
