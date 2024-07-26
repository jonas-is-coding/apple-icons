import * as React from "react";
const SvgMirrorsiderightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M34.292 10.476c0-5.54-3.28-9.19-8.82-9.84-4.08-.46-11.1-.62-14.77-.64-3.62 0-5.58 2.04-5.23 5.29l.33 3.06c.09.86-.33 1.24-1.1 1.24h-2.62c-1.2 0-2.08.88-2.08 2.09v5.49c0 1.82 1.23 2.39 2.94 1.95 1.39-.37 2.81-.49 4.64-.49h18.18c5.3 0 8.53-3.01 8.53-8.15m-2.93 0c0 3.33-2.12 5.24-5.58 5.24h-13.65c-1.95 0-2.59-.55-2.79-2.29l-.95-8.48c-.17-1.44.46-2.02 2.31-2.02 3.64 0 10.49.2 14.47.65 3.9.44 6.19 3.01 6.19 6.9" />
  </svg>
);
export default SvgMirrorsiderightBold;
