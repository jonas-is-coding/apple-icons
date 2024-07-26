import * as React from "react";
const SvgPyramidBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.407 19.245c-.74 1.24-.47 2.52.76 3.06l10.36 4.58c.8.36 1.77.36 2.58 0l10.35-4.58c1.23-.54 1.5-1.82.77-3.06L14.457.965c-.4-.67-1.02-.97-1.64-.97-.63 0-1.25.3-1.65.97Zm2.72.51 8.38-13.95v18.34l-8.25-3.86c-.21-.09-.26-.3-.13-.53m19.37 0c.13.23.08.44-.13.53l-8.25 3.86V5.805Z" />
  </svg>
);
export default SvgPyramidBold;
