import * as React from "react";
const SvgPesetasignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.162 21.262c1.23 0 2.03-.81 2.03-2.07v-4.52h3.76c4.25 0 7.04-2.84 7.31-6.77h1.27c.41 0 .71-.31.71-.71 0-.39-.3-.69-.71-.69h-1.28c-.32-3.72-2.98-6.5-7.09-6.5h-5.91c-1.33 0-2.14.82-2.14 2.17v4.33H.702c-.4 0-.7.3-.7.69 0 .41.3.71.7.71h1.41v11.29c0 1.26.81 2.07 2.05 2.07m2.03-18.18h2.89c2.31 0 3.75 1.3 4.03 3.42h-6.92Zm0 8.54v-3.72h6.93c-.21 2.31-1.65 3.72-4.06 3.72Z" />
  </svg>
);
export default SvgPesetasignBold;
