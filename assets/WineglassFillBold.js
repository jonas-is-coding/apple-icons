import * as React from "react";
const SvgWineglassfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.152 29.451c4.64 0 7.38-1.21 7.38-3.32 0-1.91-2.26-3.08-6.13-3.28v-4.49c4.8-.47 7.91-3.63 7.91-8.2 0-2.56-1.06-5.9-2.61-8.27-.8-1.22-3.15-1.89-6.55-1.89-3.41 0-5.76.67-6.55 1.89-1.56 2.36-2.6 5.71-2.6 8.27 0 4.58 3.12 7.73 7.9 8.2v4.49c-3.86.2-6.12 1.37-6.12 3.28 0 2.11 2.73 3.32 7.37 3.32m0-26.04c-2.45 0-4.24-.33-4.24-.75 0-.41 1.79-.74 4.24-.74s4.24.33 4.24.74c0 .42-1.78.75-4.24.75" />
  </svg>
);
export default SvgWineglassfillBold;
