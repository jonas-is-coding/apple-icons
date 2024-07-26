import * as React from "react";
const SvgAppbadgefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M19.912 8.036c2.19 0 4.01-1.81 4.01-4.02 0-2.2-1.82-4.02-4.01-4.02-2.2 0-4.02 1.82-4.02 4.02 0 2.21 1.82 4.02 4.02 4.02m-13.16 15.89h8.79c2.35 0 4.01-.31 5.22-1.53 1.23-1.22 1.53-2.85 1.53-5.22v-7.92c-.73.34-1.55.54-2.39.54-3.18 0-5.79-2.61-5.79-5.79 0-.84.2-1.65.53-2.37h-7.9c-2.35 0-4 .32-5.22 1.54s-1.52 2.85-1.52 5.2v8.8c0 2.37.29 4.01 1.52 5.22 1.22 1.22 2.87 1.53 5.23 1.53" />
  </svg>
);
export default SvgAppbadgefillBold;
