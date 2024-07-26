import * as React from "react";
const SvgMustachefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 4.891c0 3.94 4.02 6.97 9.07 6.97 3.46 0 6.28-1.19 8.01-3.38 1.75 2.19 4.57 3.38 8.03 3.38 5.05 0 9.07-3.03 9.07-6.97 0-1.43-.44-2.41-1.42-2.41-.36 0-.72.23-.95.57-.56.8-1.52 1.26-2.73 1.26-3.42 0-4.41-4.31-8.86-4.31-1.3 0-2.37.42-3.14 1.17-.75-.75-1.82-1.17-3.13-1.17-4.44 0-5.43 4.31-8.85 4.31-1.13 0-2.08-.44-2.75-1.29-.25-.33-.59-.54-.93-.54-.98 0-1.42.98-1.42 2.41" />
  </svg>
);
export default SvgMustachefillBold;
