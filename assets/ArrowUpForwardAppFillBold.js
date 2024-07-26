import * as React from "react";
const SvgArrowupforwardappfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20.762 1.536c-1.21-1.22-2.87-1.54-5.22-1.54h-8.8c-2.35 0-4 .32-5.22 1.54s-1.52 2.85-1.52 5.2v8.8c0 2.37.29 4.01 1.52 5.22 1.22 1.22 2.87 1.53 5.23 1.53h8.79c2.35 0 4.01-.31 5.22-1.53 1.23-1.22 1.53-2.85 1.53-5.22v-8.79c0-2.37-.3-4-1.53-5.21m-5.8 13.12c-.75 0-1.22-.53-1.22-1.37v-1.66l.17-1.52-1.47 1.65-3.88 3.89c-.31.3-.66.44-1.07.44-.78 0-1.39-.55-1.39-1.37 0-.36.17-.75.44-1.02l3.92-3.91 1.67-1.48-1.46.2h-1.77c-.83 0-1.35-.47-1.35-1.22s.52-1.2 1.37-1.2h5.61c1.02 0 1.64.55 1.64 1.6v5.6c0 .82-.47 1.37-1.21 1.37" />
  </svg>
);
export default SvgArrowupforwardappfillBold;
