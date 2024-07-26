import * as React from "react";
const SvgCircleandlinehorizontalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 12.386c0 .8.64 1.54 1.52 1.54h3.31c.76 6.1 5.97 10.82 12.28 10.82s11.52-4.72 12.28-10.82h3.32c.87 0 1.51-.74 1.51-1.54 0-.81-.64-1.55-1.51-1.55h-3.32c-.75-6.1-5.97-10.84-12.28-10.84-6.32 0-11.53 4.74-12.28 10.84h-3.31c-.88 0-1.52.74-1.52 1.55m17.11-9.3c4.61 0 8.44 3.35 9.17 7.75H7.942c.73-4.4 4.55-7.75 9.17-7.75m0 18.58c-4.61 0-8.43-3.34-9.17-7.74h18.33a9.28 9.28 0 0 1-9.16 7.74" />
  </svg>
);
export default SvgCircleandlinehorizontalBold;
