import * as React from "react";
const SvgSuitspadefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 14.638c0 3.09 2.19 5.34 5.24 5.34 1.88 0 3.58-.78 4.16-2.27h.21c-.06 1.87-2.12 3-2.89 3.66-1.1.93-.7 2.91.94 2.91h8.05c1.64 0 2.04-1.98.93-2.91-.75-.66-2.83-1.79-2.88-3.66h.21c.57 1.49 2.28 2.27 4.17 2.27 3.03 0 5.24-2.25 5.24-5.34 0-5.49-6.91-7.68-9.95-13.43-.4-.75-.9-1.21-1.75-1.21-.83 0-1.33.46-1.73 1.21-3.06 5.75-9.95 7.94-9.95 13.43" />
  </svg>
);
export default SvgSuitspadefillBold;
