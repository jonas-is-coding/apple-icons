import * as React from "react";
const SvgAppfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20.762 1.536c-1.21-1.22-2.87-1.54-5.22-1.54h-8.8c-2.35 0-4 .32-5.22 1.54s-1.52 2.85-1.52 5.2v8.8c0 2.37.29 4.01 1.52 5.22 1.22 1.22 2.87 1.53 5.23 1.53h8.79c2.35 0 4.01-.31 5.22-1.53 1.23-1.22 1.53-2.85 1.53-5.22v-8.79c0-2.37-.3-4-1.53-5.21" />
  </svg>
);
export default SvgAppfillBold;
