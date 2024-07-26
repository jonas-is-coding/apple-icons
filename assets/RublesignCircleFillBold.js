import * as React from "react";
const SvgRublesigncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.12-6.84c-.67 0-1.09-.45-1.09-1.15v-.7h-1.19c-.23 0-.38-.14-.38-.38 0-.21.15-.35.38-.35h1.19v-1.54h-1.19c-.24 0-.39-.15-.39-.38s.15-.39.39-.39h1.19v-4.89c0-.72.44-1.2 1.14-1.2h3.1c2.18 0 3.64 1.42 3.64 3.45 0 1.94-1.49 3.41-3.75 3.41h-1.93v1.54h2.63c.22 0 .36.14.36.35 0 .24-.14.38-.36.38h-2.63v.7c0 .7-.43 1.15-1.11 1.15m1.11-5.79h1.39c1.26 0 2.05-.62 2.05-1.73 0-.98-.66-1.71-2.05-1.71h-1.39Z" />
  </svg>
);
export default SvgRublesigncirclefillBold;
