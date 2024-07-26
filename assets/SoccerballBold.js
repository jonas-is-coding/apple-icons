import * as React from "react";
const SvgSoccerballBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m.85-16.41v-3.21l2.62-2.13c1.7.64 3.19 1.71 4.31 3.11l-.98 3.25-3.04 1.23Zm-7.63 1.02-1-3.25c1.13-1.4 2.6-2.47 4.3-3.11l2.65 2.15v3.19l-2.92 2.25Zm-3.21 3.02v-.01l2.59-1.46 3.2 1.3 1.07 3.32-1.72 2.22-3.54.04a9.85 9.85 0 0 1-1.6-5.41m19.99 0c0 2.01-.6 3.9-1.63 5.47l-3.53-.06-1.72-2.21 1.09-3.37 3.2-1.3 2.59 1.46Zm-10 10c-.97 0-1.92-.15-2.81-.41l-.74-3.18 1.57-2.02h3.9l1.62 2.07-.72 3.13c-.9.26-1.83.41-2.82.41" />
  </svg>
);
export default SvgSoccerballBold;
