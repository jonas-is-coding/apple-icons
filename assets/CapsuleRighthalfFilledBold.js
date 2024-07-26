import * as React from "react";
const SvgCapsulerighthalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M30.992 11.544c0-6.95-4.77-11.54-11.94-11.54h-7.11c-7.17 0-11.94 4.59-11.94 11.54s4.77 11.54 11.94 11.54h7.11c7.17 0 11.94-4.59 11.94-11.54m-15.49 8.52h-3.56c-5.38 0-8.92-3.39-8.92-8.52 0-5.15 3.54-8.52 8.92-8.52h3.56Z" />
  </svg>
);
export default SvgCapsulerighthalffilledBold;
