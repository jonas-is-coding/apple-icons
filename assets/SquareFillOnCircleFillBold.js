import * as React from "react";
const SvgSquarefilloncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.162 5.24h7.55A10.56 10.56 0 0 0 10.592 0C4.742 0 .002 4.75.002 10.61c0 4.24 2.51 7.91 6.11 9.59v-8.94c0-3.71 2.31-6.02 6.05-6.02m-4.15 17.85c0 2.66 1.47 4.11 4.15 4.11h11.77c2.68 0 4.13-1.45 4.13-4.11V11.26c0-2.66-1.45-4.11-4.13-4.11h-11.77c-2.68 0-4.15 1.45-4.15 4.11Z" />
  </svg>
);
export default SvgSquarefilloncirclefillBold;
