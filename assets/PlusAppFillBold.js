import * as React from "react";
const SvgPlusappfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20.762 1.536c-1.21-1.22-2.87-1.54-5.22-1.54h-8.8c-2.35 0-4 .32-5.22 1.54s-1.52 2.85-1.52 5.2v8.8c0 2.37.29 4.01 1.52 5.22 1.22 1.22 2.87 1.53 5.23 1.53h8.79c2.35 0 4.01-.31 5.22-1.53 1.23-1.22 1.53-2.85 1.53-5.22v-8.79c0-2.37-.3-4-1.53-5.21m-15.37 9.61c0-.81.57-1.4 1.37-1.4h3v-3c0-.78.57-1.35 1.37-1.35s1.38.57 1.38 1.35v3h3.02c.78 0 1.36.59 1.36 1.4 0 .8-.58 1.37-1.36 1.37h-3.02v3c0 .79-.58 1.37-1.38 1.37s-1.37-.58-1.37-1.37v-3h-3c-.79 0-1.37-.57-1.37-1.37" />
  </svg>
);
export default SvgPlusappfillBold;
