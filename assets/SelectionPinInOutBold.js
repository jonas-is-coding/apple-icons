import * as React from "react";
const SvgSelectionpininoutBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.832 25.103h11.28v2.71c-.64.46-1.06 1.21-1.06 2.07 0 1.37 1.14 2.54 2.54 2.54 1.37 0 2.55-1.17 2.55-2.54 0-.86-.38-1.58-1-2.04v-16.78c0-2.41-1.33-3.74-3.75-3.74H4.032v-2.73c.63-.47 1.07-1.22 1.07-2.05 0-1.44-1.11-2.54-2.56-2.54a2.55 2.55 0 0 0-2.54 2.54c0 .8.4 1.54 1.01 2.02v16.74c0 2.46 1.34 3.8 3.82 3.8m.42-2.95c-.81 0-1.22-.41-1.22-1.23v-10.63h10.86c.81 0 1.22.41 1.22 1.23v10.63Z" />
  </svg>
);
export default SvgSelectionpininoutBold;
