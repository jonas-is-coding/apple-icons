import * as React from "react";
const SvgPuzzlepieceextensionfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 19.497c0 2.63 1.39 4.01 4.02 4.01h14.33c2.65 0 4.04-1.37 4.04-3.98v-4.26c0-.27.2-.31.4-.2.56.36 1.21.61 1.98.61 2.26 0 3.88-1.64 3.88-3.9s-1.62-3.89-3.88-3.89c-.77 0-1.42.25-1.98.6-.2.13-.4.07-.4-.19v-4.31c0-2.62-1.39-3.99-4.04-3.99H4.022c-2.63 0-4.02 1.39-4.02 4.01v5.12c0 .95.7 1.49 1.49 1.49.48 0 1-.22 1.38-.67.46-.5 1.23-1.32 2.66-1.32 1.77 0 3.18 1.43 3.21 3.22.04 1.79-1.43 3.24-3.21 3.24-1.43 0-2.2-.82-2.66-1.33-.38-.44-.9-.67-1.38-.67-.79 0-1.49.54-1.49 1.49Z" />
  </svg>
);
export default SvgPuzzlepieceextensionfillBold;
