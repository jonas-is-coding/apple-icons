import * as React from "react";
const SvgChairloungefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.832 10.982h8.29v-1.58c0-2.56 1.77-4.43 4.26-4.43h.14v-1.95c0-1.8-1.19-3.02-2.94-3.02H6.392c-1.76 0-2.96 1.22-2.96 3.02v1.95h.14c2.49 0 4.26 1.87 4.26 4.43Zm-7.83 5.11c0 1.77 1.18 2.97 2.92 2.97h.3v1.4c0 .67.45 1.1 1.11 1.1h.79c.66 0 1.11-.43 1.11-1.1v-1.4h11.08v1.2c0 .77.52 1.3 1.3 1.3h.77c.77 0 1.3-.53 1.3-1.3v-1.2h.35c1.74 0 2.92-1.2 2.92-2.97v-6.69c0-1.77-1.18-2.98-2.92-2.98h-.42c-1.74 0-2.92 1.21-2.92 2.98v3.15H6.272v-3.15c0-1.77-1.2-2.98-2.93-2.98h-.42c-1.74 0-2.92 1.21-2.92 2.98Z" />
  </svg>
);
export default SvgChairloungefillBold;
