import * as React from "react";
const SvgMessagefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.812 26.04c1.47 0 4.77-1.43 7.09-3.06.27-.18.47-.23.71-.23.14.01.25.01.34.01 8.48-.01 15.17-4.35 15.17-11.38 0-6.31-6.26-11.38-14.06-11.38S.002 5.07.002 11.38c0 3.8 2.2 7.29 6.19 9.47.28.15.34.33.19.59-.72 1.22-1.82 2.48-2.3 3.1-.63.77-.26 1.5.73 1.5" />
  </svg>
);
export default SvgMessagefillBold;
