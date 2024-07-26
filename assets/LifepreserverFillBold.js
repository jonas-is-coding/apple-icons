import * as React from "react";
const SvgLifepreserverfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-8.24-17.89c.7-1.1 1.62-2.04 2.71-2.74l2.39 2.4c-1.13.61-2.1 1.57-2.7 2.72Zm16.49 0-2.4 2.39a6.6 6.6 0 0 0-2.71-2.73l2.39-2.4c1.09.72 2.02 1.65 2.72 2.74m-8.24 9.48c-2.21 0-3.98-1.78-3.98-3.98 0-2.23 1.77-4 3.98-4 2.22 0 4 1.77 4 4 0 2.2-1.77 3.98-4 3.98m8.24 1.49c-.7 1.09-1.61 2.04-2.7 2.74l-2.41-2.4a6.57 6.57 0 0 0 2.72-2.73Zm-16.49 0 2.4-2.38c.6 1.15 1.57 2.11 2.7 2.73l-2.39 2.41c-1.09-.72-2-1.66-2.71-2.76" />
  </svg>
);
export default SvgLifepreserverfillBold;
