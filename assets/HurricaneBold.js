import * as React from "react";
const SvgHurricaneBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 25.024c0 .65.5 1.2 1.23 1.2 7.26 0 13.22-5.35 13.22-13.11 0-3.55-2.93-6.48-6.48-6.48-.99 0-1.91.26-2.7.71 1.9-3.08 5.42-4.92 9.45-4.92.72 0 1.23-.54 1.23-1.22 0-.67-.51-1.2-1.23-1.2-7.28 0-13.22 5.35-13.22 13.11 0 3.55 2.93 6.48 6.47 6.48.98 0 1.91-.26 2.7-.72-1.91 3.08-5.42 4.93-9.44 4.93-.73 0-1.23.52-1.23 1.22m6.2-11.91c0-.96.78-1.75 1.74-1.75s1.75.79 1.75 1.75c0 .95-.79 1.75-1.75 1.75s-1.74-.79-1.74-1.75" />
  </svg>
);
export default SvgHurricaneBold;
