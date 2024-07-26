import * as React from "react";
const SvgTent2CirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-2.77-7.21c-.75 0-1.05-.7-.73-1.34l.24-.48h-4.12c-.66 0-.94-.62-.66-1.18l3.45-6.88c.14-.29.4-.48.71-.48.3 0 .57.19.73.48l1.96 3.93 2.41-4.81a.87.87 0 0 1 .79-.54c.35 0 .64.21.82.55l4.71 9.41c.31.64.01 1.34-.75 1.34Zm-2.93-2.98h1.27l.55-2.34.54 2.34h.66l.33-.65-1.21-2.62a.36.36 0 0 0-.32-.22c-.13 0-.24.08-.3.22Zm5.02 1.84h1.84l.85-3.67.85 3.67h1.83l-2.23-4.86a.46.46 0 0 0-.45-.29c-.18 0-.34.09-.43.29Z" />
  </svg>
);
export default SvgTent2CirclefillBold;
