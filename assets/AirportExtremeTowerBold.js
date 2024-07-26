import * as React from "react";
const SvgAirportextremetowerBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 24.687c0 2.35 1.36 3.7 3.74 3.7h9.58c2.37 0 3.73-1.35 3.73-3.7V6.607c0-1.29-.25-2.06-.95-2.92l-1.57-1.91c-1.04-1.26-1.98-1.78-3.4-1.78h-5.21c-1.42 0-2.35.52-3.39 1.78l-1.57 1.91c-.72.86-.96 1.63-.96 2.92Zm3.62-20.19 1.14-1.39c.39-.48.69-.74 1.27-.74h5c.57 0 .86.26 1.26.74l1.15 1.39c.18.23.11.6-.35.6h-9.13c-.45 0-.52-.37-.34-.6m-.6 19.49v-16.1c.29.13.56.16.9.16h9.22c.33 0 .6-.03.89-.16v16.1c0 .88-.5 1.37-1.36 1.37h-8.29c-.85 0-1.36-.49-1.36-1.37m8.31-.13a1.21 1.21 0 1 0 0-2.42c-.68 0-1.22.54-1.22 1.2 0 .68.54 1.22 1.22 1.22" />
  </svg>
);
export default SvgAirportextremetowerBold;
