import * as React from "react";
const SvgCharactersuttonBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.522 26.042c4.76 0 8.51-3.75 8.51-8.51V5.152c.8-.48 1.33-1.36 1.33-2.37 0-1.55-1.22-2.78-2.76-2.78-1.56 0-2.78 1.23-2.78 2.78 0 1.01.53 1.89 1.33 2.37v5.95c-1.48-1.32-3.46-2.11-5.66-2.11-4.75 0-8.49 3.76-8.49 8.54 0 4.76 3.75 8.51 8.52 8.51m0-2.87c-3.18 0-5.66-2.47-5.66-5.64 0-3.19 2.47-5.67 5.63-5.67 3.18 0 5.66 2.48 5.66 5.67 0 3.17-2.47 5.64-5.63 5.64" />
  </svg>
);
export default SvgCharactersuttonBold;
