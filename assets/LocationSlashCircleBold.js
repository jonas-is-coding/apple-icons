import * as React from "react";
const SvgLocationslashcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m3.06-8.58 2.15-4.64c.48-1.04-.5-2-1.54-1.52l-4.64 2.14Zm1.14 4.45c.26.25.69.25.96 0a.7.7 0 0 0 0-.97l-9.35-9.34a.67.67 0 0 0-.96 0c-.27.26-.27.7 0 .95Zm-10.03-4.22h4.44l-2.77-2.77-2.01.95c-1.12.52-.76 1.82.34 1.82m6.49 4.99.94-2.02-2.76-2.74v4.41c0 1.11 1.32 1.45 1.82.35" />
  </svg>
);
export default SvgLocationslashcircleBold;
