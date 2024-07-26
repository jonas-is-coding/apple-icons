import * as React from "react";
const SvgArchiveboxBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.762 22.402h12.85c2.6 0 4.06-1.44 4.06-4.03V7.492c1.08-.44 1.72-1.47 1.72-2.83v-1.59c0-1.84-1.15-3.07-3.02-3.07H3.012c-1.82 0-3.01 1.23-3.01 3.07v1.59c0 1.36.63 2.38 1.71 2.83v10.88c0 2.59 1.46 4.03 4.05 4.03m-2.35-17.4q-.69 0-.69-.69v-.89q0-.69.69-.69h17.56c.46 0 .68.23.68.69v.89c0 .46-.22.69-.68.69Zm2.66 14.45c-.88 0-1.34-.43-1.34-1.35V7.732h14.92v10.37c0 .92-.47 1.35-1.35 1.35Zm2.49-6.84h7.27c.66 0 1.15-.48 1.15-1.16v-.38c0-.68-.48-1.16-1.15-1.16h-7.27c-.66 0-1.14.48-1.14 1.16v.38c0 .68.49 1.16 1.14 1.16" />
  </svg>
);
export default SvgArchiveboxBold;
